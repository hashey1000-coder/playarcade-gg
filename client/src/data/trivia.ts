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

  '8-ball-pool':
    'Eight-ball pool became the most popular billiards game in the world after World War II, when American soldiers spread the game internationally. The standard set of 15 pool balls has been unchanged since the 1920s. In competitive play, professional players can apply up to 15 different types of spin (called "English") to the cue ball. The game\'s name comes from the black 8-ball, which must be pocketed last to win.',

  'backgammon':
    'Backgammon is one of the oldest known board games, with origins dating back approximately 5,000 years to ancient Mesopotamia. The Royal Game of Ur (c. 2600 BCE) is considered its ancestor. In 1979, Luigi Villa of Italy programmed the first computer backgammon AI. The doubling cube, introduced in 1920s New York, added a gambling element that transformed competitive play. There are over 1.5 trillion possible backgammon positions.',

  'bowling':
    'The earliest known form of bowling dates back to ancient Egypt around 3200 BCE — archaeologists discovered a child\'s grave with primitive bowling pins and balls. A perfect game (12 consecutive strikes, score of 300) occurs roughly once in every 11,500 games for professional bowlers. The heaviest regulation bowling ball weighs 16 pounds (7.26 kg). In 2015, Jason Belmonte became the first player to bowl two televised 300 games in a single tournament.',

  'hangman':
    'The first known mention of Hangman appeared in 1894 in Alice Bertha Gomme\'s "Traditional Games." Mathematically, the optimal first guess in English Hangman is the letter "E" (appearing in 56.9% of common English words), followed by "A" (43.3%) and "R" (38.6%). With an optimal strategy, a player can correctly guess any word in the standard dictionary in 25 or fewer wrong guesses — well under the typical 6-attempt limit.',

  'daily-crossword':
    'The first crossword puzzle was published on December 21, 1913, in the New York World newspaper, created by journalist Arthur Wynne from Liverpool, England. The New York Times didn\'t publish crosswords until 1942, but it quickly became the gold standard. Will Shortz has been the NYT crossword editor since 1993 — the only person to hold a college degree in Enigmatology (the study of puzzles). Monday puzzles average 20 minutes to solve; Saturday puzzles average 45 minutes.',

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

};
