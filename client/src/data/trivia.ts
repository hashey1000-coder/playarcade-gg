// Did You Know? trivia facts for each game, keyed by slug
export const GAME_TRIVIA: Record<string, string> = {
  '2048':
    'The original 2048 was built by 19-year-old Gabriele Cirulli in a single weekend using just HTML, CSS, and JavaScript. He never monetised it and released the code as open source. Within two weeks of its March 2014 launch, there were over 1,000 clones and variants — including versions with Doge memes, Pokémon, and even a 3D cube version.',

  'tetris':
    'Alexey Pajitnov created Tetris on an Elektronika 60 computer in Moscow in 1985. The Soviet government initially owned the rights, leading to one of gaming\'s most complex legal battles. The Game Boy version (1989) sold 35 million copies and is credited with making the handheld a success. In 2024, a 13-year-old named Willis Gibson became the first human to "beat" Tetris by reaching a kill screen on Level 157.',

  'flappy-bird':
    'At its peak, Flappy Bird was earning creator Dong Nguyen approximately $50,000 per day from in-game advertising. Despite this, Nguyen pulled it from app stores on February 10, 2014, citing guilt over its addictiveness. Phones with Flappy Bird installed were listed on eBay for up to $100,000. The game was built in just 2–3 days using simple sprite graphics.',

  'chrome-dino':
    'The Chrome Dino game (codenamed "Project Bolan" after T. Rex frontman Marc Bolan) was added to Chrome in 2014 but went unnoticed for months. Google revealed in 2018 that 270 million Dino games are played per month. The game has a hidden birthday mode, a Chromium Easter egg, and the maximum possible score is 99,999 — after which the game resets to zero.',

  'snake':
    'Nokia\'s Snake (programmed by Taneli Armanto) shipped on the Nokia 6110 in 1997 and went on to be pre-installed on 400 million Nokia devices. The longest recorded game lasted over 13 hours. In the original Nokia version, the snake\'s top speed was limited to the phone\'s screen refresh rate of about 5 frames per second. A perfect game (filling the entire grid) requires eating 96 pieces of food.',

  'pac-man':
    'Pac-Man was the first video game character to be more recognisable than Mickey Mouse in a 1990s poll. The game was originally called "Puck Man" (from the Japanese "paku-paku" meaning chomp-chomp), but was renamed for Western markets to prevent vandalism of the arcade cabinet. Each ghost has a distinct personality programmed into its AI: Blinky (red) speeds up as you eat more dots.',

  'minesweeper':
    'Minesweeper was originally included in Windows 3.1 to help users master left-clicking, right-clicking, and click-and-drag — fundamental mouse skills that were new to most PC users in 1990. The current world record for Expert difficulty (30×16 grid, 99 mines) is 26.77 seconds, held by an anonymous player known as "Rolf." An estimated 1 billion hours of work productivity have been lost to Minesweeper.',

  'solitaire':
    'Microsoft Solitaire was programmed by intern Wes Cherry in 1989. He received no royalties — not even a single bonus — for creating what became the most-used Windows application for years. By 2020, Microsoft Solitaire Collection had over 35 million monthly active players. The game was originally included in Windows 3.0 specifically to teach users how to drag and drop objects with a mouse.',

  'chess':
    'The number of possible unique chess games is greater than the number of atoms in the observable universe (estimated at 10^120 possible games vs 10^80 atoms). The longest chess game theoretically possible is 5,949 moves. The word "checkmate" comes from the Persian "shāh māt," meaning "the king is helpless." The youngest World Chess Champion was Garry Kasparov, who won the title at age 22.',

  'checkers':
    'In 2007, after 18 years and over 10^14 calculations, researchers at the University of Alberta proved that checkers — when played perfectly by both sides — always ends in a draw. This makes checkers the most complex game ever "solved" by computers. The 8×8 board has approximately 5×10^20 possible positions. Checkers is called "draughts" in Britain, deriving from the verb "to draw" or "to move."',

  'sudoku':
    'The minimum number of starting clues required for a valid Sudoku puzzle (one with a unique solution) is 17 — proven mathematically in 2012 by Gary McGuire. There are 6,670,903,752,021,072,936,960 possible completed Sudoku grids (about 6.7 sextillion). The name "Sudoku" is an abbreviation of the Japanese phrase "Sūji wa dokushin ni kagiru," meaning "the digits must remain single."',

  'wordle':
    'Wordle was created by Josh Wardle (whose surname inspired the name) as a private game for his partner during the COVID-19 pandemic. It grew from 90 players in November 2021 to 2 million by January 2022. The New York Times purchased it for "a price in the low seven figures." The game uses a curated list of about 2,300 common five-letter words. The word "JAZZY" is not in the answer list.',

  'cookie-clicker':
    'Cookie Clicker was created by Julien "Orteil" Thiennot in one afternoon in August 2013 and essentially invented the "idle game" genre. At its peak, players worldwide were collectively clicking over 10 billion virtual cookies per second. The game features over 600 upgrades, 500+ achievements, hidden minigames, and an elaborate lore involving eldritch grandmothers. Its Steam release in 2021 earned a 97% positive review rating.',

  'connect-four':
    'Connect Four was mathematically solved in 1988 by Victor Allis, who proved that the first player can always force a win by starting in the centre column. The game has exactly 4,531,985,219,092 possible positions. Despite being "solved," the game remains popular because memorising the optimal strategy for every position is practically impossible for humans. The game was originally called "The Captain\'s Mistress."',

  'tic-tac-toe':
    'Tic Tac Toe has 255,168 possible unique game states, but only 138 of them are terminal winning positions. The game is a "solved" game — meaning perfect play by both sides always ends in a draw. Ancient Romans played a version called "Terni Lapilli" using three pebbles each. In 1952, a computer at the University of Cambridge played Tic Tac Toe, making it one of the earliest known video games.',

  'reversi':
    'Othello (the trademarked name for Reversi) was popularised by Goro Hasegawa in 1971 with the tagline "A minute to learn, a lifetime to master." The game was named after Shakespeare\'s play because of its black-and-white theme. In competitive play, controlling the four corner squares is the most important strategy, as corner pieces can never be flipped. The World Othello Championship has been held annually since 1977.',

  'hextris':
    'Hextris was built during a 36-hour hackathon at the University of Maryland in 2014. The four creators — Logan Engstrom, Garrett Finucane, Noah Moroze, and Michael Yang — were all undergraduate computer science students. The game\'s source code on GitHub has been starred over 2,000 times and forked over 1,300 times, making it one of the most popular open-source browser games ever created.',

  'word-search':
    'The first known word search puzzle was created by Norman E. Gibat and published on March 1, 1968, in the Selenby Digest in Norman, Oklahoma. Teachers began requesting copies for classroom use, sparking a nationwide craze. Modern word search puzzles typically hide 10–20 words in a grid of 15×15 letters. Research shows they activate the brain\'s visual cortex and improve pattern recognition speed.',

  'falling-blocks':
    'The falling-block puzzle genre was born with Tetris in 1985, but it inspired countless variants including Columns (Sega, 1990), Dr. Mario (Nintendo, 1990), and Puyo Puyo (Sega, 1991). The genre proved so popular that "tile-matching" became an official game category. Research published in the journal BMC Research Notes found that playing Tetris-style games can reduce cravings and intrusive thoughts by occupying the brain\'s visual processing system.',

  'card-solitaire':
    'Napoleon Bonaparte reportedly played Patience (Solitaire) during his exile on the island of St. Helena from 1815 to 1821. Many Solitaire variations are named after him, including "Napoleon at St. Helena" and "Napoleon\'s Square." The Klondike variant — the most famous version — was named after the Klondike region of Canada during the 1890s Gold Rush, where miners played it to pass the time.',

  'slope':
    'Slope became one of the most popular browser games in schools worldwide after its release in 2014 by developer Rob Kay. The game uses procedurally generated terrain, meaning no two runs are ever identical. At high speeds, the ball can exceed 300 km/h in-game, and the neon-green aesthetic was inspired by the "digital rain" from The Matrix. The game consistently ranks among the top 10 most-searched browser games globally.',

  'among-us':
    'Among Us was released by InnerSloth in June 2018 but didn\'t gain popularity until mid-2020 during the COVID-19 pandemic, when streamers on Twitch and YouTube propelled it to 500 million monthly active players. The game was inspired by the party game Mafia (also known as Werewolf). Despite having only 3 developers at launch, it became the most downloaded mobile game of 2020 worldwide.',

  'geometry-dash':
    'Geometry Dash was created by Swedish developer Robert Topala (RobTop Games) and released in August 2013. The game has sold over 21 million copies on Steam alone. Its level editor has produced over 80 million user-created levels. The hardest verified level, "Acheron," took its creators over 2 years to build and requires approximately 300,000 precise inputs to complete.',

  'tunnel-rush':
    'Tunnel Rush was inspired by the classic "tunnel runner" genre that dates back to the 1983 Atari 2600 game of the same name. The modern browser version uses WebGL rendering to achieve smooth 60 FPS gameplay. Players travel at speeds that increase by approximately 5% every 10 seconds, with the fastest recorded survival time exceeding 15 minutes. The game\'s colour palette shifts every 30 seconds to create a psychedelic visual experience.',

  'bubble-shooter':
    'The original Bubble Shooter concept dates back to Puzzle Bobble (Bust-a-Move), released by Taito in 1994. The browser version became one of the most played casual games on the internet, with over 100 million monthly players across various platforms. Mathematically, the optimal strategy involves aiming for the walls to create bank shots — a technique that increases accuracy by approximately 40% compared to direct shots.',

  'spider-solitaire':
    'Spider Solitaire was included in Windows ME (2000) and became one of Microsoft\'s most-played games, with an estimated 100 million players worldwide. The game is named after the eight foundation piles needed to win — matching the eight legs of a spider. A four-suit game of Spider Solitaire has a win rate of approximately 1 in 3 games with perfect play, making it significantly harder than Klondike Solitaire.',

  'mahjong':
    'Mahjong originated in China during the Qing dynasty, likely in the mid-19th century. The tile-matching solitaire version (Mahjong Solitaire) was created by Brodie Lockard in 1981 on an early computer system. There are 42 billion possible tile arrangements in a standard Mahjong Solitaire layout. The four wind tiles (East, South, West, North) correspond to the four cardinal directions in Chinese cosmology.',

  'freecell':
    'FreeCell is remarkable because nearly every deal is winnable — out of the original 32,000 numbered deals in Microsoft FreeCell, only deal #11982 is known to be impossible. Jim Horne, who programmed the Windows version, received hundreds of letters from players claiming to have solved it (none had). The game was first implemented by Paul Alfille in 1978 on a PLATO educational computer system.',

  'backgammon':
    'Backgammon is one of the oldest known board games, with origins dating back approximately 5,000 years to ancient Mesopotamia. The Royal Game of Ur (c. 2600 BCE) is considered its ancestor. In 1979, Luigi Villa of Italy programmed the first computer backgammon AI. The doubling cube, introduced in 1920s New York, added a gambling element that transformed competitive play. There are over 1.5 trillion possible backgammon positions.',

  'hangman':
    'The first known mention of Hangman appeared in 1894 in Alice Bertha Gomme\'s "Traditional Games." Mathematically, the optimal first guess in English Hangman is the letter "E" (appearing in 56.9% of common English words), followed by "A" (43.3%) and "R" (38.6%). With an optimal strategy, a player can correctly guess any word in the standard dictionary in 25 or fewer wrong guesses — well under the typical 6-attempt limit.',

  'fruit-ninja':
    'Fruit Ninja was developed by Australian studio Halfbrick Studios and released on April 21, 2010. It became the fastest-selling iOS game at the time, reaching 1 million downloads in just 10 days. The game was inspired by a tech demo showcasing multitouch slicing gestures. By 2020, it had been downloaded over 1 billion times. The "Pomegranate" fruit — which splits into multiple smaller fruits — was added after players requested more satisfying visual feedback.',

  'moto-x3m':
    'Moto X3M was developed by Madpuffers and has been played over 500 million times across browser platforms. The physics engine realistically simulates motorcycle weight distribution — leaning forward on descents increases speed while leaning backward on climbs provides stability. Performing backflips and front flips mid-air actually deducts time from your run, incentivising risky trick attempts. The series has expanded to six themed sequels.',

  'drift-boss':
    'Drift Boss was created by Madpuffers as a one-button game experiment. Despite using only a single input (tap to turn right, release to turn left), the game has over 50 million plays. The procedurally generated road uses a Perlin noise algorithm to create organic-feeling curves. The game\'s difficulty curve is considered near-perfect in game design circles — most players survive 10-15 seconds on their first attempt but can reach 60+ seconds within ten tries.',

  'basketball-legends':
    'Basketball Legends features caricature-style players with exaggerated proportions inspired by NBA Jam (1993), which was the first sports game to earn over $1 billion in quarters. The two-player same-keyboard mode uses WASD + G for Player 1 and arrow keys + L for Player 2 — a control scheme that has become standard for browser sports games. Each character has unique super-shot animations.',

  'eggy-car':
    'Eggy Car\'s egg physics are based on real-world center-of-mass calculations — the egg\'s position shifts relative to the car\'s angle, speed, and acceleration. An egg\'s real-world shape is an "ovoid" — wider at one end — which is why eggs in the game tend to roll forward more easily than backward. The game has over 50 million plays, with the world record distance exceeding 5,000 metres.',

  'stack-ball':
    'Stack Ball uses a clever difficulty algorithm that ensures players fail at least once every 3-5 levels, keeping them in the "flow channel" — a game design concept coined by psychologist Mihaly Csikszentmihalyi. The "fire mode" animation renders over 200 particle fragments per platform destroyed. With over 100 million downloads, Stack Ball proved that the helix-descent mechanic has near-universal appeal.',

  'vex-7':
    'The Vex series is the most successful stickman platformer franchise in browser gaming history, with over 1 billion total plays across all installments. Each Vex game introduces new mechanics — Vex 7 added gravity-flip zones and underwater air meters. The wall-jump mechanic uses a simplified version of real-world friction physics. Hidden stars in hard-to-reach areas award bonus achievements for completionists.',

  'tiny-fishing':
    'Tiny Fishing blends idle and active gameplay — the fishing requires precision, but upgrades run passively. The deepest fish (legendary tier) requires a fully upgraded line of 100+ metres. The game\'s economy follows an exponential curve: the first 10 metres cost $100 to unlock, while the last 10 cost over $1 million. Real deep-sea anglerfish live at depths of 1,000-4,000 metres and use bioluminescent lures to attract prey.',

  'gunspin':
    'GunSpin uses realistic recoil physics — heavier weapons like shotguns produce more kickback but fire fewer rounds, while pistols offer rapid fire with less thrust per shot. The concept of using gunfire for propulsion has real-world parallels: NASA explored "Project Orion" in the 1960s, which proposed propelling spacecraft using nuclear explosions. The game has over 20 unlockable weapons, and the heaviest — the Minigun — weighs 10x more than the starting pistol.',

  'vex-6':
    'The Vex series pioneered the "stickman platformer" genre in browser gaming. Vex 6 introduced swimming mechanics with a realistic air meter — the stickman loses oxygen at a rate proportional to movement speed, encouraging slow, deliberate underwater navigation. The level designers use a grid-based system where each "tile" is exactly 32×32 pixels, allowing for pixel-perfect jump distances that can be memorised with practice.',

  'burrito-bison':
    'Burrito Bison was created by Montreal-based studio Juicy Beast. The original Flash version launched in 2011 and was played over 50 million times on Newgrounds. The sequel, Launcha Libre, added two new wrestlers — Pineapple Pug (a dog in a pineapple luchador mask) and El Pollo (a chicken). The game\'s gummy bears are based on Haribo gummy bears, and the developers confirmed they ate "an unreasonable amount" during development for reference.',

  'ragdoll-hit':
    'Ragdoll physics in games were popularised by Jurassic Park: Trespasser (1998), which was the first game to use procedural ragdoll animation for character death. Modern ragdoll games like Ragdoll Hit calculate physics for each of 15+ body segments independently, requiring hundreds of constraint calculations per frame. The term "ragdoll" comes from the way a cloth doll flops when tossed — early 3D characters exhibited this same limp behavior.',

  'soccer-random':
    'Soccer Random belongs to the "Random" series by RHM Interactive, which also includes Basketball Random, Volleyball Random, and more. The game randomises up to 12 different variables each round, producing over 1 million possible combinations. The one-button control scheme (W for Player 1, UP for Player 2) was inspired by the minimalist design philosophy of games like QWOP and Flappy Bird.',

  'super-mario-bros':
    'Super Mario Bros (1985) sold over 40 million copies and is credited with reviving the video game industry after the 1983 crash. Mario was originally named "Jumpman" and appeared in the 1981 arcade game Donkey Kong. His moustache exists because creator Shigeru Miyamoto couldn\'t animate a mouth in the limited pixel space. The game\'s World 1-1 is considered the greatest level in gaming history — it teaches players every core mechanic without a single word of text.',

  'baseball-bros':
    'Baseball has been played professionally since 1869 when the Cincinnati Red Stockings became the first all-professional team. The fastest pitch ever recorded was 105.8 mph by Aroldis Chapman in 2010. A baseball has exactly 108 stitches, and every ball used in MLB is hand-stitched in Costa Rica. The "home run" as we know it became common only after Babe Ruth popularised power hitting in the 1920s.',

  'baseball-9':
    'Baseball 9 captures the depth of baseball team management — in real MLB, teams spend an average of $165 million per year on player salaries. The game\'s stat system mirrors real baseball metrics: batting average, ERA (Earned Run Average), and OPS (On-base Plus Slugging). Japan\'s Nippon Professional Baseball league is the second-largest professional baseball league, and many NPB players have gone on to MLB stardom.',

  'sprunki-phase-9':
    'The Sprunki series is inspired by Incredibox, a music creation app created by French studio So Far So Good in 2009. Incredibox has been used in over 50,000 schools worldwide as a music education tool. Sprunki Phase 9 features a darker aesthetic inspired by horror games, with sound elements that include minor key melodies, distorted vocals, and atmospheric drones. The "phase" naming convention mirrors the evolution of electronic music genres.',

  'sprunki-clicker':
    'Idle clicker games generate over $1 billion annually, a genre essentially invented by Cookie Clicker in 2013. Sprunki Clicker combines this addictive format with music creation. The psychological hook is the "variable ratio reinforcement schedule" — the same mechanism that makes slot machines compelling. Each prestige reset in the game references the music production concept of "remixing" — taking existing elements and reimagining them.',

  'sprunki-night-time':
    'Night-themed music has its own genre — "dark ambient" — pioneered by Brian Eno\'s 1982 album "Ambient 4: On Land." Sprunki Night Time\'s sound design uses techniques from this genre: long reverb tails, low-frequency drones, and sparse melodic elements. Studies show that listening to ambient music at night can reduce cortisol levels by up to 25%, potentially explaining why night-themed music games attract players seeking relaxation.',

  'sprunki-grown-up':
    'The transition from "kid-friendly" to "grown-up" music production mirrors real-world music education. Professional music producers typically train for 5-10 years before creating commercially viable tracks. Sprunki Grown Up\'s more complex sound palette includes elements of lo-fi hip hop, jazz fusion, and electronic dance music — genres that emerged in the 1980s-2000s and remain among the most popular streaming categories.',

  'sprunki-playground':
    'Sandbox-mode games consistently outperform linear games in player retention — studies show players spend 3x longer in open-ended creative modes. Sprunki Playground\'s all-unlocked approach follows the "Minecraft Creative Mode" philosophy: remove barriers and let creativity flourish. The possible sound combinations in a 50-element mixer exceed 1.1 quadrillion (2^50), meaning no two players will likely create the same exact mix.',

  'crazy-chicken-3d':
    'Crazy Chicken (Moorhuhn) was originally created as an advertising game for Johnnie Walker whisky by German developer Phenomedia in 1999. It became a viral sensation in Germany, downloaded over 10 million times in its first year — making it one of the first "viral games" before the term existed. The franchise has spawned over 30 sequels across every platform. At its peak, German employers estimated a loss of €50 million in productivity due to employees playing Moorhuhn at work.',

  'retro-bowl':
    'Retro Bowl was developed by New Star Games and released in January 2020. It topped the US App Store charts in 2022 after going viral on TikTok, eventually surpassing 100 million downloads. The game\'s pixel-art style was directly inspired by Tecmo Bowl on the NES (1987). "Retro Bowl unblocked" became one of the most searched gaming terms in US schools. The game only lets you play offense — the defense is entirely simulated based on your team\'s defensive stats.',

  'run-3':
    'Run 3 was developed solo by Joseph Cloutier (Player 03) and published by Kongregate. The game features over 300 hand-designed levels and 9 unlockable characters, each with unique physics — the Skater slides on ice, the Lizard can jump incredibly far, and the Pastafarian has a "light bridge" ability. The tunnel-rotation mechanic was inspired by the movie Inception. Run 3 has been played over 1 billion times, and its predecessor Run 2 introduced wall-running to the genre.',

  'crossy-road':
    'Crossy Road was created by Australian developers Matt Hall and Andy Sum of Hipster Whale, earning over $10 million in its first 90 days through cosmetic-only microtransactions — proving free-to-play could work without pay-to-win. The game was directly inspired by Frogger (1981) but with procedurally generated terrain. Over 300 unlockable characters include references to pop culture, like a chicken modelled after the "Why did the chicken cross the road?" joke. One hidden character, the "Cai Shen," drops gold coins instead of regular ones.',

  'cut-the-rope':
    'Cut the Rope was created by Russian brothers Semyon and Efim Voskresenskiy of ZeptoLab and launched in October 2010. It sold 1 million copies in its first 10 days and has since surpassed 1 billion downloads across the franchise. The character Om Nom was named after the onomatopoeia for eating sounds. Each physics puzzle was hand-tuned — ZeptoLab tested over 3,000 level designs before selecting the final 275. The game won a BAFTA award and spawned an animated YouTube series with over 20 billion total views.',

  'stickman-hook':
    'Stickman Hook was developed by French studio Madbox using a custom physics engine that calculates pendulum swing momentum in real-time. The game reached 100 million downloads within its first year. The one-tap control scheme was inspired by Spider-Man\'s web-swinging — in early prototypes, the character was actually a tiny spider. The ragdoll physics use a system of 8 connected joints, and the stickman\'s limbs can stretch up to 3x their resting length during high-speed swings.',

  'drive-mad':
    'Drive Mad uses a physics engine based on realistic torque and center-of-gravity calculations — the car\'s engine produces a fixed amount of force, and the player must balance acceleration against the vehicle\'s tipping point. The game has over 150 levels, each hand-designed to introduce a new obstacle type. Speedrunners have completed the entire game in under 20 minutes. The game was inspired by Hill Climb Racing, which has been downloaded over 1.5 billion times.',

  'paper-io-2':
    'Paper.io 2 was developed by French studio Voodoo, which specialises in "hyper-casual" games and has surpassed 6 billion total downloads across its portfolio. The game\'s territory-claiming mechanic is based on the mathematical concept of "enclosure" — the same principle used in the ancient strategy game Go (c. 2500 BCE). The AI opponents use a modified A* pathfinding algorithm to hunt players. Mathematically, claiming territory in circular spirals is 23% more efficient than straight-line paths.',

  'subway-surfers':
    'Subway Surfers was co-created by Kiloo Games and SYBO Games, launched in May 2012. It became the first game to reach 1 billion downloads on Google Play (2018) and has since surpassed 4 billion total downloads — making it one of the most downloaded games in history. The game was inspired by a real event: co-creator Sylvester Rishøj ran on train tracks as a teenager in Denmark. The "World Tour" updates the setting to a new city every month, with over 100 cities featured so far.',

  'jetpack-joyride':
    'Jetpack Joyride was created by Halfbrick Studios (also behind Fruit Ninja) and released in September 2011. The game\'s protagonist, Barry Steakfries, was named through a fan poll on Facebook. The "Machine Gun Jetpack" — the default vehicle — was inspired by a real concept: recoil-powered flight. The scientists in the background have over 40 unique animations and react dynamically to Barry\'s jetpack blast. The game has been downloaded over 750 million times and was originally going to be called "Jetpack Joyride: Lab of Doom."',

  'worlds-hardest-game':
    'World\'s Hardest Game was created by Stephen Critoph and released on AddictingGames in 2008. The game has 30 levels, but most players never get past level 15. Completion rates for the final levels drop below 0.1%. The blue enemies follow perfectly predictable patterns — they use sinusoidal (wave-based) movement — meaning every level is theoretically solvable with memorisation. Speedrunners complete the entire game deathless in under 5 minutes. The sequel, World\'s Hardest Game 2, added 50 levels and moving walls.',

  'fireboy-and-watergirl':
    'Fireboy and Watergirl was created by Oslo Albet and first published in 2009 as a Flash game on coolmathgames.com. All five instalments — Forest Temple, Light Temple, Ice Temple, Crystal Temple, and Wind Temple — have since been rebuilt in HTML5 and collectively attract millions of monthly players. The cooperative design was inspired by The Lost Vikings (1993), where three characters with distinct abilities had to work in tandem. Teachers worldwide use it as a formal teamwork exercise in classrooms. The Forest Temple alone has accumulated over 500 million all-time plays.',

  'ovo':
    'OvO was created solo by Dedragames, a developer specialising in minimalist precision platformers. The game\'s signature move — pressing ↓ mid-air to dive-slam then instantly slide — took six months of iterative prototyping before it felt "just right." Speedrunners have since mapped every frame-perfect shortcut across all 40+ levels: the world record stands under 3 minutes. The name OvO was chosen for its rounded black-and-white aesthetic — the two characters resemble the letters O-v-O when standing side by side. Its lightweight design loads on virtually any device, contributing to its viral spread in school computer labs.',

  'basketball-stars':
    'Basketball Stars was developed by Madpuffers, a Romanian studio responsible for some of the most-played browser sports games ever made. The shooting mechanic uses a timing window — releasing the shoot button at the peak of your jump arc scores with highest accuracy, directly mirroring the "soft touch" technique coached in real basketball. The character roster was intentionally modelled on distinct NBA playing styles: one character shoots like Stephen Curry, another drives like LeBron James. The game has been updated continuously since 2016, adding courts, characters, and gameplay modes.',

  'monkey-mart':
    'Monkey Mart was developed solo by TinyDobbins (real name Guo Xiangrui), a Chinese indie developer who built the entire game in just three months using the Cocos Creator engine. It went viral almost immediately after its late 2022 release and crossed 100 million plays within months. Its automation philosophy was directly inspired by Factorio — the idea that a perfectly designed factory should eventually run without the player\'s intervention. The monkeys in the game are modelled after spider monkeys, chosen for their real-world reputation as curious, sociable, and unusually helpful primates.',

  'short-life':
    'Short Life was developed by RHM Interactive, the Romanian studio behind Soccer Random and Basketball Random. The physics engine calculates per-limb injury states independently — an arm or leg can be severed by a saw blade while the character continues moving toward the goal. Despite its dark premise, the game holds a 95%+ positive rating on every platform it appears on. Players regularly compete to share their cumulative death counts as a badge of honour — the community total across all sessions has surpassed 500 million deaths. Short Life 2 doubled the level count and added new environmental hazard types.',

  '1v1-lol':
    '1v1.LOL grew from zero to 30 million registered users with absolutely no marketing budget — entirely through word-of-mouth in school computer labs. At its peak, over 10 million games were played per day. The building system was directly inspired by Fortnite, which itself adapted the concept from Minecraft\'s Creative Mode. Unlike most browser games, 1v1.LOL features a fully functional ranked matchmaking system with seasonal leaderboards and skill-based brackets. The game\'s client code is written in pure JavaScript with no game engine framework, making it remarkably fast to load on slow or restricted school internet connections.',

  'smash-karts':
    'Smash Karts uses dedicated game servers rather than peer-to-peer connections, giving it unusually low and stable latency for a browser title. The five-person studio, Tall Team, has updated the game continuously since launch. The weapon system was inspired by Mario Kart but with a balance twist: the rarest and most powerful weapons (like the area-of-effect lightning strike) only appear in crates that spawn in the lowest-scoring zone of each match, naturally evening out the competition. Over 150 million games have been played since launch, and the game hosts seasonal events with exclusive unlockable cosmetics.',

  'penalty-shooters-2':
    'Penalty kicks were introduced to the FIFA rulebook in 1970 and have since decided some of the most dramatic moments in football history. Research shows that goalkeepers dive to their non-dominant side 71% of the time when genuinely unsure — making a deliberate shot to the goalkeeper\'s dominant side statistically the optimal choice. Penalty Shooters 2 models this real-world psychological bias in its AI system. Studies also show that strikers who wait more than one second before starting their run-up are 30% more likely to score, as the goalkeeper over-commits to a direction prematurely. The game features all 32 FIFA World Cup nations with accurate strip colours.',

  'getaway-shootout':
    'Getaway Shootout was inspired by Japanese game shows like "Takeshi\'s Castle," where deliberately chaotic and unfair physical obstacles created comedy rather than frustration. The studio chose the "hop left, hop right" control scheme specifically because it feels clumsy — playtesting confirmed that intentionally difficult controls made competitive sessions funnier and more replayable, not less. The project was completed by a two-person team using Phaser, an open-source HTML5 framework. Multiplayer support was added after the solo version unexpectedly went viral, and adding it overnight doubled the player count within the first week.',

  'big-tower-tiny-square':
    'Big Tower Tiny Square was created by Evil Objective, a small independent studio. The game contains exactly 110 hand-crafted rooms, each individually tuned over four months to ensure exactly one intended solution per room with no accidental shortcuts. The average player takes 3–5 hours and over 2,000 deaths to reach the summit. The pineapple at the tower\'s peak was chosen as the goal because, according to the developers, "nobody would expect a pineapple" — it became an internet meme and the game\'s unofficial mascot. The world record for lowest death count to complete the game is 47, set by a speedrunner who spent weeks memorising every optimal movement.',

};
