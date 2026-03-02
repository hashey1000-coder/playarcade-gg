import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Gzip / Brotli compression
  app.use(compression());

  // Security + performance headers — applied to EVERY response
  app.use((_req, res, next) => {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    res.setHeader(
      "Content-Security-Policy",
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "frame-src https://ubg365.github.io https://playpager.com https://sprunki.org https:",
        "connect-src 'self'",
      ].join("; ")
    );
    res.setHeader("Vary", "Accept-Encoding");
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Pre-load the 404.html content once at startup for fast error responses
  const notFoundHtmlPath = path.join(staticPath, "404.html");
  const notFoundHtml = fs.existsSync(notFoundHtmlPath)
    ? fs.readFileSync(notFoundHtmlPath, "utf8")
    : null;

  // Immutable cache for hashed assets (JS, CSS, images)
  app.use(
    "/assets",
    express.static(path.join(staticPath, "assets"), {
      maxAge: "1y",
      immutable: true,
    })
  );

  // Long cache for thumbnail images (content-addressed)
  app.use(
    "/thumbnails",
    express.static(path.join(staticPath, "thumbnails"), {
      maxAge: "30d",
      immutable: true,
    })
  );

  // Static files (JS, CSS, fonts, sitemap.xml, robots.txt, etc.)
  // CRITICAL: index: false + redirect: false prevents express.static from
  // doing 301 redirects on directories like /games → /games/ or auto-serving
  // index.html files. All HTML routing is handled explicitly below instead.
  app.use(express.static(staticPath, {
    maxAge: "1h",
    index: false,
    redirect: false,
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
      }
    }
  }));

  // ---- Explicit 301 redirects for aliased/renamed routes ----
  // These fire BEFORE the catch-all so crawlers get a proper HTTP 301
  // instead of relying on <meta http-equiv="refresh"> in the HTML.
  const REDIRECTS: Record<string, string> = {
    '/leaderboard': '/top-rated/',
    '/a-z': '/games/',
    '/az': '/games/',
    '/kids': '/',
    '/privacy-policy': '/privacy/',
  };

  for (const [from, to] of Object.entries(REDIRECTS)) {
    app.get([from, `${from}/`], (_req, res) => res.redirect(301, to));
    // Also handle locale-prefixed variants: /fr/a-z → /fr/games/
    app.get([`/:locale${from}`, `/:locale${from}/`], (req, res) => {
      res.redirect(301, `/${req.params.locale}${to}`);
    });
  }

  // HTML routing: serve pre-rendered files for all page requests.
  // This replaces express.static's built-in directory/index handling
  // to avoid the 301 redirect loops it creates (e.g. /games → /games/ → …).
  app.get("*", (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');

    // Normalise: strip trailing slashes for consistent lookup
    // /games/ → /games, /play/pac-man/ → /play/pac-man, / → (empty string)
    const clean = req.path.replace(/\/+$/, '') || '';

    // Try to find a pre-rendered HTML file: /games → dist/public/games/index.html
    const preRendered = path.join(staticPath, clean, 'index.html');
    if (fs.existsSync(preRendered)) {
      return res.sendFile(preRendered);
    }

    // No pre-rendered file found → return 404 with correct status code
    if (notFoundHtml) {
      return res.status(404).type('html').send(notFoundHtml);
    }

    // Ultimate fallback: serve root index.html as SPA shell
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
