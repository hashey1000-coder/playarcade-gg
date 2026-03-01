/**
 * Generate a vivid neon-arcade hero background for PlayArcade.gg (v2)
 *
 * Design concept:
 *   Deep dark space with a luminous retro-futuristic grid floor receding to
 *   the horizon, scattered with recognisable arcade silhouettes (Pac-Man,
 *   ghosts, invaders, tetrominos, joystick, etc.) rendered as neon outlines
 *   that glow against the dark. A large radial "sun" or portal sits on the
 *   horizon emanating cyan/teal light. The overall feel: 80s synthwave +
 *   arcade nostalgia.
 *
 * Pipeline:  SVG string → sharp (librsvg) → WebP / JPEG
 */

import { writeFileSync, statSync } from 'fs';
import { createRequire } from 'module';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire('/tmp/node_modules/');
const sharp = require('sharp');

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'client', 'public');

/* ── helpers ─────────────────────────────────────────────────── */
const f = (n) => Number(n).toFixed(1);

function seededRng(seed) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
}

/* ── SVG builder ─────────────────────────────────────────────── */
function generateSVG(W, H) {
  const rand = seededRng(77);

  /* ── palette ──────────────────────────────── */
  const cyan    = '#06b6d4';
  const cyanLt  = '#22d3ee';
  const cyanXLt = '#67e8f9';
  const teal    = '#14b8a6';
  const yellow  = '#fbbf24';
  const pink    = '#f472b6';
  const red     = '#f87171';
  const purple  = '#a78bfa';
  const green   = '#34d399';
  const blue    = '#60a5fa';

  /* ── constants ────────────────────────────── */
  const horizonY = H * 0.52;
  const cx = W * 0.50;

  /* ── stars ─────────────────────────────────── */
  const stars = Array.from({ length: 160 }, () => ({
    x: rand() * W,
    y: rand() * horizonY,
    r: 0.3 + rand() * 2,
    o: 0.12 + rand() * 0.55,
  }));

  /* ── grid floor ────────────────────────────── */
  const hLines = [];
  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    // Exponential spacing — closer at horizon, wider at bottom
    const tt = t * t;
    const y = horizonY + (H - horizonY) * tt;
    const sw = 0.3 + tt * 2;
    const op = 0.03 + tt * 0.22;
    hLines.push(`<line x1="0" y1="${f(y)}" x2="${W}" y2="${f(y)}" stroke="${cyan}" stroke-width="${f(sw)}" opacity="${f(op)}" />`);
  }

  const vLines = [];
  for (let i = -14; i <= 14; i++) {
    const bx = cx + i * W * 0.065;
    const tx = cx + i * W * 0.004;
    const op = 0.04 + (1 - Math.abs(i) / 14) * 0.16;
    vLines.push(`<line x1="${f(tx)}" y1="${f(horizonY)}" x2="${f(bx)}" y2="${H}" stroke="${cyan}" stroke-width="0.6" opacity="${f(op)}" />`);
  }

  /* ── space invader (pixel art) ─────────────── */
  function invader(ox, oy, s, color, opacity = 0.45) {
    const map = [
      '  #     #  ',
      '   #   #   ',
      '  #######  ',
      ' ## ### ## ',
      '###########',
      '# ####### #',
      '# #     # #',
      '   ## ##   ',
    ];
    const rects = [];
    for (let ry = 0; ry < map.length; ry++) {
      for (let rx = 0; rx < map[ry].length; rx++) {
        if (map[ry][rx] === '#') {
          rects.push(`<rect x="${f(ox + (rx - 5.5) * s)}" y="${f(oy + ry * s)}" width="${f(s)}" height="${f(s)}" fill="${color}" />`);
        }
      }
    }
    return `<g opacity="${opacity}">${rects.join('')}</g>`;
  }

  /* ── crab invader variant ──────────────────── */
  function crabInvader(ox, oy, s, color, opacity = 0.4) {
    const map = [
      '  #     #  ',
      '#  #   #  #',
      '# ####### #',
      '## # # # ##',
      '###########',
      ' ######### ',
      '  #     #  ',
      ' #       # ',
    ];
    const rects = [];
    for (let ry = 0; ry < map.length; ry++) {
      for (let rx = 0; rx < map[ry].length; rx++) {
        if (map[ry][rx] === '#') {
          rects.push(`<rect x="${f(ox + (rx - 5.5) * s)}" y="${f(oy + ry * s)}" width="${f(s)}" height="${f(s)}" fill="${color}" />`);
        }
      }
    }
    return `<g opacity="${opacity}">${rects.join('')}</g>`;
  }

  /* ── pac-man ────────────────────────────────── */
  function pacman(px, py, pr, opacity = 0.5) {
    const mouth = 0.55;
    const sx = px + Math.cos(mouth) * pr;
    const sy = py + Math.sin(mouth) * pr;
    const ex = px + Math.cos(-mouth) * pr;
    const ey = py + Math.sin(-mouth) * pr;
    // Eye
    const eyeX = px + pr * 0.25;
    const eyeY = py - pr * 0.35;
    return `<g opacity="${opacity}">
      <path d="M${f(px)} ${f(py)} L${f(sx)} ${f(sy)} A${f(pr)} ${f(pr)} 0 1 0 ${f(ex)} ${f(ey)} Z" fill="${yellow}" />
      <circle cx="${f(eyeX)}" cy="${f(eyeY)}" r="${f(pr * 0.08)}" fill="#1e293b" />
    </g>`;
  }

  /* ── ghost ──────────────────────────────────── */
  function ghost(gx, gy, gr, color, opacity = 0.45) {
    const base = gy + gr;
    const waveN = 3;
    let wavePath = '';
    for (let i = 0; i <= waveN * 2; i++) {
      const wx = gx - gr + (i / (waveN * 2)) * gr * 2;
      const wy = base + (i % 2 === 0 ? 0 : -gr * 0.3);
      wavePath += `L${f(wx)} ${f(wy)} `;
    }
    return `<g opacity="${opacity}">
      <path d="M${f(gx - gr)} ${f(base)} L${f(gx - gr)} ${f(gy - gr * 0.2)}
        Q${f(gx - gr)} ${f(gy - gr * 1.15)} ${f(gx)} ${f(gy - gr * 1.15)}
        Q${f(gx + gr)} ${f(gy - gr * 1.15)} ${f(gx + gr)} ${f(gy - gr * 0.2)}
        L${f(gx + gr)} ${f(base)} ${wavePath} Z" fill="${color}" />
      <circle cx="${f(gx - gr * 0.3)}" cy="${f(gy - gr * 0.35)}" r="${f(gr * 0.24)}" fill="white" opacity="0.8" />
      <circle cx="${f(gx + gr * 0.3)}" cy="${f(gy - gr * 0.35)}" r="${f(gr * 0.24)}" fill="white" opacity="0.8" />
      <circle cx="${f(gx - gr * 0.22)}" cy="${f(gy - gr * 0.3)}" r="${f(gr * 0.11)}" fill="#1e293b" />
      <circle cx="${f(gx + gr * 0.38)}" cy="${f(gy - gr * 0.3)}" r="${f(gr * 0.11)}" fill="#1e293b" />
    </g>`;
  }

  /* ── tetromino block ────────────────────────── */
  function tetrominoL(tx, ty, s, color, opacity = 0.35) {
    return `<g opacity="${opacity}">
      <rect x="${f(tx)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" stroke="${color}" stroke-width="0.5" opacity="0.7" />
      <rect x="${f(tx)}" y="${f(ty+s)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" stroke="${color}" stroke-width="0.5" opacity="0.6" />
      <rect x="${f(tx)}" y="${f(ty+s*2)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" stroke="${color}" stroke-width="0.5" opacity="0.5" />
      <rect x="${f(tx+s)}" y="${f(ty+s*2)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" stroke="${color}" stroke-width="0.5" opacity="0.5" />
    </g>`;
  }

  function tetrominoT(tx, ty, s, color, opacity = 0.3) {
    return `<g opacity="${opacity}">
      <rect x="${f(tx)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.6" />
      <rect x="${f(tx+s)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.6" />
      <rect x="${f(tx+s*2)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.6" />
      <rect x="${f(tx+s)}" y="${f(ty+s)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.5" />
    </g>`;
  }

  function tetrominoZ(tx, ty, s, color, opacity = 0.3) {
    return `<g opacity="${opacity}">
      <rect x="${f(tx)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.6" />
      <rect x="${f(tx+s)}" y="${f(ty)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.6" />
      <rect x="${f(tx+s)}" y="${f(ty+s)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.5" />
      <rect x="${f(tx+s*2)}" y="${f(ty+s)}" width="${f(s)}" height="${f(s)}" rx="2" fill="${color}" opacity="0.5" />
    </g>`;
  }

  /* ── dots trail ─────────────────────────────── */
  function dotTrail(sx, sy, n, gap, color = yellow, baseOp = 0.45) {
    return Array.from({ length: n }, (_, i) =>
      `<circle cx="${f(sx + i * gap)}" cy="${f(sy)}" r="${f(W * 0.0028)}" fill="${color}" opacity="${f(baseOp - i * 0.06)}" />`
    ).join('');
  }

  /* ── power pellet ───────────────────────────── */
  function powerPellet(px, py, r) {
    return `<circle cx="${f(px)}" cy="${f(py)}" r="${f(r)}" fill="${yellow}" opacity="0.5" />`;
  }

  /* ── snake ──────────────────────────────────── */
  function snake(startX, startY, segSize, segs = 8) {
    return `<g opacity="0.35">
      ${Array.from({ length: segs }, (_, i) => {
        const x = startX - i * segSize * 1.15;
        const y = startY + Math.sin(i * 0.9) * segSize * 1.2;
        const fill = i === 0 ? green : '#059669';
        const op = 1 - i * 0.07;
        return `<rect x="${f(x)}" y="${f(y)}" width="${f(segSize)}" height="${f(segSize)}" rx="${f(segSize*0.2)}" fill="${fill}" opacity="${f(op)}" />`;
      }).join('')}
      <circle cx="${f(startX + segSize * 1.5)}" cy="${f(startY + segSize * 0.4)}" r="${f(segSize * 0.5)}" fill="${red}" opacity="0.65" />
    </g>`;
  }

  /* ── joystick ───────────────────────────────── */
  function joystick(jx, jy, size) {
    const baseRx = size * 0.8;
    const baseRy = size * 0.28;
    const stickEnd = jy - size * 0.9;
    const ballR = size * 0.22;
    return `<g opacity="0.35">
      <ellipse cx="${f(jx)}" cy="${f(jy)}" rx="${f(baseRx)}" ry="${f(baseRy)}" fill="${cyan}" opacity="0.25" />
      <ellipse cx="${f(jx)}" cy="${f(jy)}" rx="${f(baseRx)}" ry="${f(baseRy)}" fill="none" stroke="${cyanLt}" stroke-width="1.5" opacity="0.5" />
      <line x1="${f(jx)}" y1="${f(jy - baseRy * 0.3)}" x2="${f(jx + size*0.08)}" y2="${f(stickEnd)}" stroke="${cyanLt}" stroke-width="${f(size*0.1)}" stroke-linecap="round" opacity="0.55" />
      <circle cx="${f(jx + size*0.08)}" cy="${f(stickEnd - ballR*0.3)}" r="${f(ballR)}" fill="${cyan}" opacity="0.45" />
      <circle cx="${f(jx + size*0.08)}" cy="${f(stickEnd - ballR*0.3)}" r="${f(ballR)}" fill="none" stroke="${cyanLt}" stroke-width="1.2" opacity="0.6" />
      <circle cx="${f(jx + size*0.04)}" cy="${f(stickEnd - ballR*0.7)}" r="${f(ballR*0.25)}" fill="white" opacity="0.2" />
    </g>`;
  }

  /* ── arcade buttons ─────────────────────────── */
  function arcadeButtons(bx, by, r) {
    const colors = [green, red, blue, yellow];
    const positions = [
      [0, -r * 3],
      [r * 3, 0],
      [-r * 3, 0],
      [0, r * 3],
    ];
    return `<g opacity="0.3">
      ${positions.map(([dx, dy], i) => `
        <circle cx="${f(bx + dx)}" cy="${f(by + dy)}" r="${f(r)}" fill="${colors[i]}" opacity="0.55" />
        <circle cx="${f(bx + dx)}" cy="${f(by + dy)}" r="${f(r)}" fill="none" stroke="${colors[i]}" stroke-width="1" opacity="0.4" />
        <circle cx="${f(bx + dx - r * 0.2)}" cy="${f(by + dy - r * 0.25)}" r="${f(r * 0.2)}" fill="white" opacity="0.15" />
      `).join('')}
    </g>`;
  }

  /* ── heart lives ────────────────────────────── */
  function hearts(hx, hy, s, n = 3) {
    return Array.from({ length: n }, (_, i) => {
      const x = hx + i * s * 2.5;
      return `<path d="M${f(x)} ${f(hy+s*0.3)} C${f(x-s*0.55)} ${f(hy-s*0.6)} ${f(x-s*1.1)} ${f(hy+s*0.2)} ${f(x)} ${f(hy+s*1.1)} C${f(x+s*1.1)} ${f(hy+s*0.2)} ${f(x+s*0.55)} ${f(hy-s*0.6)} ${f(x)} ${f(hy+s*0.3)} Z" fill="${red}" opacity="0.3" />`;
    }).join('');
  }

  /* ── coin ───────────────────────────────────── */
  function coin(coinX, coinY, r) {
    return `<g opacity="0.35">
      <circle cx="${f(coinX)}" cy="${f(coinY)}" r="${f(r)}" fill="${yellow}" opacity="0.15" />
      <circle cx="${f(coinX)}" cy="${f(coinY)}" r="${f(r)}" fill="none" stroke="${yellow}" stroke-width="1.8" opacity="0.6" />
      <circle cx="${f(coinX)}" cy="${f(coinY)}" r="${f(r*0.7)}" fill="none" stroke="${yellow}" stroke-width="0.8" opacity="0.3" />
      <text x="${f(coinX)}" y="${f(coinY + r * 0.35)}" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="${f(r*1.1)}" fill="${yellow}" opacity="0.7">¢</text>
    </g>`;
  }

  /* ── D-pad ──────────────────────────────────── */
  function dpad(dx, dy, s) {
    return `<g opacity="0.22">
      <rect x="${f(dx - s)}" y="${f(dy - s * 3)}" width="${f(s * 2)}" height="${f(s * 6)}" rx="${f(s * 0.35)}" fill="none" stroke="${cyanLt}" stroke-width="1.3" />
      <rect x="${f(dx - s * 3)}" y="${f(dy - s)}" width="${f(s * 6)}" height="${f(s * 2)}" rx="${f(s * 0.35)}" fill="none" stroke="${cyanLt}" stroke-width="1.3" />
      <!-- arrows -->
      <path d="M${f(dx)} ${f(dy-s*2.2)} l${f(s*0.4)} ${f(s*0.5)} h${f(-s*0.8)} Z" fill="${cyanLt}" opacity="0.35" />
      <path d="M${f(dx)} ${f(dy+s*2.2)} l${f(s*0.4)} ${f(-s*0.5)} h${f(-s*0.8)} Z" fill="${cyanLt}" opacity="0.35" />
      <path d="M${f(dx-s*2.2)} ${f(dy)} l${f(s*0.5)} ${f(-s*0.4)} v${f(s*0.8)} Z" fill="${cyanLt}" opacity="0.35" />
      <path d="M${f(dx+s*2.2)} ${f(dy)} l${f(-s*0.5)} ${f(-s*0.4)} v${f(s*0.8)} Z" fill="${cyanLt}" opacity="0.35" />
    </g>`;
  }

  /* ── nebula blobs (soft coloured blurs) ─────── */
  function nebula(nx, ny, r, color, opacity = 0.08) {
    return `<circle cx="${f(nx)}" cy="${f(ny)}" r="${f(r)}" fill="${color}" opacity="${opacity}" filter="url(#bigBlur)" />`;
  }

  /* ══════════════════════════════════════════════
   * ASSEMBLE SVG
   * ══════════════════════════════════════════════ */
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <!-- Glow for game elements -->
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${f(W*0.003)}" result="b"/>
    <feComposite in="SourceGraphic" in2="b" operator="over"/>
  </filter>
  <!-- Big soft blur for nebulas / sun -->
  <filter id="bigBlur" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${f(W*0.04)}"/>
  </filter>
  <filter id="medBlur" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${f(W*0.015)}"/>
  </filter>
  <!-- Vignette -->
  <radialGradient id="vig" cx="50%" cy="50%" r="72%">
    <stop offset="0%" stop-color="#020617" stop-opacity="0"/>
    <stop offset="60%" stop-color="#020617" stop-opacity="0.1"/>
    <stop offset="100%" stop-color="#020617" stop-opacity="0.6"/>
  </radialGradient>
  <!-- Sky gradient -->
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="${H}">
    <stop offset="0%" stop-color="#020617"/>
    <stop offset="35%" stop-color="#0a1628"/>
    <stop offset="52%" stop-color="#082f49"/>
    <stop offset="60%" stop-color="#0c4a6e"/>
    <stop offset="100%" stop-color="#020617"/>
  </linearGradient>
  <!-- Horizon neon line -->
  <linearGradient id="neonH" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="${cyan}" stop-opacity="0"/>
    <stop offset="10%" stop-color="${cyan}" stop-opacity="0.3"/>
    <stop offset="35%" stop-color="${cyanLt}" stop-opacity="0.7"/>
    <stop offset="50%" stop-color="${cyanXLt}" stop-opacity="1"/>
    <stop offset="65%" stop-color="${cyanLt}" stop-opacity="0.7"/>
    <stop offset="90%" stop-color="${cyan}" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="${cyan}" stop-opacity="0"/>
  </linearGradient>
</defs>

<!-- ── BACKGROUND ────────────────────────────────── -->
<rect width="${W}" height="${H}" fill="url(#sky)"/>

<!-- Nebula colour blobs — subtle ambient colour -->
${nebula(W * 0.65, H * 0.3, W * 0.18, '#0e7490', 0.12)}
${nebula(W * 0.25, H * 0.25, W * 0.12, '#7c3aed', 0.04)}
${nebula(W * 0.82, H * 0.2, W * 0.10, '#be185d', 0.03)}
${nebula(W * 0.50, H * 0.52, W * 0.25, '#06b6d4', 0.08)}

<!-- ── SUN / PORTAL on horizon ───────────────────── -->
<circle cx="${f(W*0.50)}" cy="${f(horizonY)}" r="${f(W*0.12)}" fill="#06b6d4" opacity="0.06" filter="url(#bigBlur)"/>
<circle cx="${f(W*0.50)}" cy="${f(horizonY)}" r="${f(W*0.06)}" fill="#22d3ee" opacity="0.1" filter="url(#bigBlur)"/>
<circle cx="${f(W*0.50)}" cy="${f(horizonY)}" r="${f(W*0.025)}" fill="#67e8f9" opacity="0.15" filter="url(#medBlur)"/>

<!-- ── STARS ──────────────────────────────────────── -->
${stars.map(s => `<circle cx="${f(s.x)}" cy="${f(s.y)}" r="${f(s.r)}" fill="#e0f2fe" opacity="${f(s.o)}"/>`).join('\n')}

<!-- ── GRID FLOOR ─────────────────────────────────── -->
<g>
  ${hLines.join('\n  ')}
  ${vLines.join('\n  ')}
</g>

<!-- Neon horizon line -->
<line x1="0" y1="${f(horizonY)}" x2="${W}" y2="${f(horizonY)}" stroke="url(#neonH)" stroke-width="2.5"/>
<line x1="${f(W*0.05)}" y1="${f(horizonY)}" x2="${f(W*0.95)}" y2="${f(horizonY)}" stroke="${cyanLt}" stroke-width="12" opacity="0.06" filter="url(#medBlur)"/>

<!-- ══════════════════════════════════════════════════
     GAME ELEMENTS — all inside glow filter
     ══════════════════════════════════════════════════ -->
<g filter="url(#glow)">

  <!-- ── Pac-Man chase scene (right of centre, above horizon) ── -->
  ${pacman(W * 0.68, H * 0.30, W * 0.022, 0.55)}
  ${dotTrail(W * 0.72, H * 0.30, 6, W * 0.022)}
  ${powerPellet(W * 0.855, H * 0.30, W * 0.005)}
  ${ghost(W * 0.59, H * 0.31, W * 0.018, red, 0.45)}
  ${ghost(W * 0.535, H * 0.315, W * 0.015, pink, 0.38)}
  ${ghost(W * 0.485, H * 0.32, W * 0.013, cyanLt, 0.32)}

  <!-- ── Space invader formation (upper area) ──────── -->
  ${invader(W * 0.22, H * 0.14, W * 0.005, cyanLt, 0.4)}
  ${invader(W * 0.28, H * 0.14, W * 0.005, cyanLt, 0.4)}
  ${invader(W * 0.34, H * 0.14, W * 0.005, cyanLt, 0.4)}
  ${invader(W * 0.40, H * 0.14, W * 0.005, cyanLt, 0.35)}
  ${crabInvader(W * 0.25, H * 0.22, W * 0.005, cyanXLt, 0.32)}
  ${crabInvader(W * 0.31, H * 0.22, W * 0.005, cyanXLt, 0.32)}
  ${crabInvader(W * 0.37, H * 0.22, W * 0.005, cyanXLt, 0.32)}

  <!-- Invader bullet -->
  <rect x="${f(W*0.31)}" y="${f(H*0.28)}" width="${f(W*0.002)}" height="${f(H*0.04)}" fill="${cyanXLt}" opacity="0.3" rx="1"/>

  <!-- Player ship at bottom of invader scene -->
  <path d="M${f(W*0.31)} ${f(H*0.44)} l${f(W*0.008)} ${f(H*0.02)} h${f(-W*0.016)} Z" fill="${green}" opacity="0.3"/>
  <rect x="${f(W*0.305)}" y="${f(H*0.46)}" width="${f(W*0.012)}" height="${f(H*0.008)}" rx="1" fill="${green}" opacity="0.25"/>

  <!-- ── Joystick (left area, on the grid) ─────────── -->
  ${joystick(W * 0.13, H * 0.65, W * 0.05)}

  <!-- ── Arcade buttons (right area) ───────────────── -->
  ${arcadeButtons(W * 0.87, H * 0.42, W * 0.010)}

  <!-- ── Tetrominos scattered ──────────────────────── -->
  ${tetrominoL(W * 0.05, H * 0.28, W * 0.012, pink, 0.35)}
  ${tetrominoT(W * 0.92, H * 0.15, W * 0.010, purple, 0.3)}
  ${tetrominoZ(W * 0.80, H * 0.12, W * 0.009, blue, 0.28)}

  <!-- ── Snake (bottom-right on grid) ──────────────── -->
  ${snake(W * 0.78, H * 0.72, W * 0.009, 7)}

  <!-- ── D-pad (lower-right) ──────────────────────── -->
  ${dpad(W * 0.72, H * 0.62, W * 0.008)}

  <!-- ── HI-SCORE (upper-right) ────────────────────── -->
  <g opacity="0.22">
    <text x="${f(W*0.93)}" y="${f(H*0.08)}" text-anchor="end" font-family="'Courier New',monospace" font-size="${f(W*0.009)}" fill="${cyanLt}" letter-spacing="2">HI-SCORE</text>
    <text x="${f(W*0.93)}" y="${f(H*0.08 + W*0.016)}" text-anchor="end" font-family="'Courier New',monospace" font-size="${f(W*0.013)}" fill="${cyanXLt}" letter-spacing="3">0999999</text>
  </g>

  <!-- ── 1UP / score (upper-left) ──────────────────── -->
  <g opacity="0.18">
    <text x="${f(W*0.05)}" y="${f(H*0.08)}" font-family="'Courier New',monospace" font-size="${f(W*0.009)}" fill="${red}" letter-spacing="1">1UP</text>
    <text x="${f(W*0.05)}" y="${f(H*0.08 + W*0.015)}" font-family="'Courier New',monospace" font-size="${f(W*0.011)}" fill="white" letter-spacing="2">00042300</text>
  </g>

  <!-- ── Lives hearts ──────────────────────────────── -->
  ${hearts(W * 0.05, H * 0.88, W * 0.008)}

  <!-- ── Coins (scattered) ─────────────────────────── -->
  ${coin(W * 0.56, H * 0.09, W * 0.014)}
  ${coin(W * 0.18, H * 0.42, W * 0.010)}

  <!-- ── INSERT COIN text (bottom centre) ──────────── -->
  <g opacity="0.18">
    <text x="${f(W*0.50)}" y="${f(H*0.92)}" text-anchor="middle" font-family="'Courier New',monospace" font-size="${f(W*0.011)}" fill="white" letter-spacing="4">INSERT COIN</text>
  </g>

  <!-- ── LEVEL indicator ───────────────────────────── -->
  <g opacity="0.15">
    <text x="${f(W*0.93)}" y="${f(H*0.92)}" text-anchor="end" font-family="'Courier New',monospace" font-size="${f(W*0.008)}" fill="${cyanLt}" letter-spacing="2">LEVEL 99</text>
  </g>

  <!-- ── Shooting stars / laser beams ──────────────── -->
  <line x1="${f(W*0.15)}" y1="${f(H*0.05)}" x2="${f(W*0.22)}" y2="${f(H*0.12)}" stroke="${cyanXLt}" stroke-width="1" opacity="0.2" stroke-linecap="round"/>
  <line x1="${f(W*0.75)}" y1="${f(H*0.03)}" x2="${f(W*0.80)}" y2="${f(H*0.09)}" stroke="${purple}" stroke-width="0.8" opacity="0.15" stroke-linecap="round"/>

</g>

<!-- ── VIGNETTE ───────────────────────────────────── -->
<rect width="${W}" height="${H}" fill="url(#vig)"/>

</svg>`;
}

/* ══════════════════════════════════════════════════════════
 * GENERATE IMAGES
 * ══════════════════════════════════════════════════════════ */
const sizes = [
  { name: 'hero-bg',     w: 1498, h: 600 },
  { name: 'hero-bg-960', w: 960,  h: 385 },
  { name: 'hero-bg-480', w: 480,  h: 192 },
];

for (const { name, w, h } of sizes) {
  const svg = generateSVG(w, h);
  const webpPath = join(PUBLIC, `${name}.webp`);

  await sharp(Buffer.from(svg), { density: 150 })
    .resize(w, h)
    .webp({ quality: 90, effort: 6 })
    .toFile(webpPath);

  const kb = (statSync(webpPath).size / 1024).toFixed(1);
  console.log(`  ✓ ${name}.webp  (${w}×${h})  ${kb} KB`);
}

// JPG fallback
await sharp(Buffer.from(generateSVG(1498, 600)), { density: 150 })
  .resize(1498, 600)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(join(PUBLIC, 'hero-bg.jpg'));

const jpgKb = (statSync(join(PUBLIC, 'hero-bg.jpg')).size / 1024).toFixed(1);
console.log(`  ✓ hero-bg.jpg   (1498×600) ${jpgKb} KB  (fallback)`);

console.log('\n✅ Hero images generated!');
