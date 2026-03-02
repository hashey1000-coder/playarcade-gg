import type { GameTranslation } from '../gameTranslations';

export const FR_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Puzzle de Glissement et Fusion',
    description: `Faites glisser des tuiles numérotées sur une grille 4×4 et combinez les numéros identiques pour atteindre l’insaisissable tuile 2048. Chaque glissement fusionne les tuiles identiques et génère un nouveau 2 ou 4 — planifiez plusieurs coups à l’avance ou votre plateau se remplira vite. Facile à apprendre, diaboliquement difficile à maîtriser.

Créé par le développeur italien Gabriele Cirulli en mars 2014, 2048 est devenu un phénomène mondial du jour au lendemain, inspirant des centaines de variantes. Le jeu s’inspire de Threes! d’Asher Vollmer, mais sa publication en open source en a fait le jeu de navigateur le plus cloné de l’histoire.`,
    controls: `Utilisez les flèches directionnelles (↑ ↓ ← →) ou glissez sur mobile pour déplacer toutes les tuiles dans une direction. Les tuiles portant le même nombre fusionnent en se touchant. L’objectif est de créer une tuile portant le nombre 2048.`,
  },
  'tetris': {
    title: 'Tetris — Puzzle Classique de Blocs',
    description: `L’éternel puzzle de blocs qui tombent qui a défini une génération. Faites pivoter et positionnez les tétrominos pendant qu’ils descendent, en complétant des lignes horizontales pour les effacer. Plus votre score monte, plus les pièces tombent vite.

Inventé par l’ingénieur soviétique Alexey Pajitnov en 1985, Tetris s’est vendu à plus de 520 millions d’exemplaires sur toutes les plateformes imaginables. Le nom combine le préfixe grec « tetra » (quatre) avec tennis.`,
    controls: `Utilisez les flèches pour déplacer les pièces : ← → pour décaler, ↑ pour pivoter, ↓ pour descente douce. Appuyez sur Espace pour chute instantanée. Complétez des lignes pour les effacer et marquer des points.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Touchez pour Voler',
    description: `Guidez un petit oiseau pixelé à travers une série infinie de tuyaux verts en touchant pour battre des ailes. Un toucher fait monter l’oiseau ; la gravité le tire vers le bas. Pouvez-vous dépasser 50 ?

Flappy Bird a été créé par le développeur vietnamien Dong Nguyen et lancé en mai 2013. Il est devenu l’application gratuite la plus téléchargée début 2014, rapportant environ 50 000 $ par jour en publicité.`,
    controls: `Cliquez, touchez ou appuyez sur n’importe quelle touche pour faire battre des ailes à l’oiseau. La gravité l’attire vers le bas. Naviguez entre les tuyaux sans les toucher. Chaque tuyau rapporte un point.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Coureur T-Rex',
    description: `Courez à travers un désert pixelé en tant que le célèbre T-Rex de Chrome, sautant par-dessus les cactus et s’accroupissant sous les ptérodactyles dans ce coureur sans fin. La vitesse augmente sans cesse.

Caché dans la page « Pas d’Internet » de Google Chrome depuis 2014, le jeu Dino a été conçu par Sebastien Gabriel. Environ 270 millions de parties sont jouées chaque mois.`,
    controls: `Appuyez sur Espace ou ↑ pour sauter par-dessus les cactus. Appuyez sur ↓ pour s’accroupir sous les ptérodactyles. Sur mobile, touchez pour sauter et glissez vers le bas pour vous accroupir. Le T-Rex court automatiquement.`,
  },
  'snake': {
    title: 'Snake — Jeu Rétro Classique',
    description: `Guidez un serpent grandissant sur le plateau, mangeant de la nourriture pour grandir tout en évitant votre propre queue et les murs. Plus vous survivez longtemps, plus le serpent devient long et difficile à contrôler.

Les origines de Snake remontent au jeu d’arcade Blockade de 1976. Il est devenu un phénomène culturel quand Nokia a préinstallé une version sur ses téléphones en 1998.`,
    controls: `Utilisez les flèches directionnelles (↑ ↓ ← →) ou WASD pour changer de direction. Le serpent se déplace en continu. Mangez la nourriture pour grandir et marquer des points. Évitez les murs et votre propre queue.`,
  },
  'pac-man': {
    title: 'Pac-Man — Classique d’Arcade',
    description: `Dévorez votre chemin à travers un labyrinthe de points tout en évitant quatre fantômes colorés — Blinky, Pinky, Inky et Clyde. Attrapez un Super Pac-Gomme pour renverser la situation.

Lancé par Namco en mai 1980, Pac-Man est devenu le jeu d’arcade le plus rentable de tous les temps, générant plus de 2,5 milliards de dollars en pièces.`,
    controls: `Utilisez les flèches pour naviguer dans le labyrinthe. Mangez tous les points pour terminer le niveau. Attrapez les Super Pac-Gommes dans les coins pour rendre les fantômes bleus temporairement.`,
  },
  'minesweeper': {
    title: 'Démineur — Puzzle de Mines',
    description: `Découvrez des cases sur une grille sans faire exploser les mines cachées. Chaque nombre révélé indique combien de mines se cachent dans les huit cellules environnantes — utilisez la logique pour déduire les cases sûres.

Le Démineur a été créé par Robert Donner et Curt Johnson pour Windows 3.1 en 1990, conçu pour apprendre aux utilisateurs le clic droit.`,
    controls: `Clic gauche pour révéler une case. Les nombres indiquent combien de mines adjacentes existent. Clic droit pour marquer les mines suspectées. Utilisez la logique pour déduire les cases sûres.`,
  },
  'solitaire': {
    title: 'Solitaire — Jeu de Cartes Klondike',
    description: `Le jeu de cartes en solo par excellence. Triez un jeu mélangé en quatre piles de fondation par couleur, de l’As au Roi, en déplaçant les cartes entre sept colonnes du tableau.

Le Solitaire Klondike a gagné une renommée mondiale après que Microsoft l’a inclus dans Windows 3.0 en 1990. Conçu par le stagiaire Wes Cherry.`,
    controls: `Cliquez sur les cartes pour les sélectionner, puis cliquez sur une destination valide. Construisez des colonnes en ordre décroissant avec des couleurs alternées. Déplacez les As vers les fondations et construisez par couleur.`,
  },
  'chess': {
    title: 'Échecs — Jouez contre l’Ordinateur',
    description: `Défiez un adversaire informatique dans le jeu de stratégie le plus célèbre du monde. Commandez une armée de 16 pièces à travers un échiquier de 64 cases.

Les échecs sont nés en Inde vers le VIe siècle sous le nom de « chaturanga » et se sont répandus via la Route de la Soie jusqu’en Perse et en Europe. Aujourd’hui, plus de 600 millions de personnes jouent régulièrement.`,
    controls: `Cliquez sur une pièce pour la sélectionner, puis cliquez sur la case de destination. Les coups valides sont mis en surbrillance. Règles standard incluant le roque, la prise en passant et la promotion des pions.`,
  },
  'checkers': {
    title: 'Dames — Jeu de Plateau',
    description: `Sautez et capturez les pièces de votre adversaire sur un plateau de 8×8. Déplacez-vous en diagonale, enchaînez les sauts multiples et couronnez vos pièces en rois puissants qui peuvent reculer.

Les Dames sont l’un des plus anciens jeux de plateau, avec une version trouvée dans la cité antique d’Ur datant de 3000 av. J.-C.`,
    controls: `Cliquez sur une pièce pour la sélectionner, puis cliquez sur la case diagonale de destination. Sauter par-dessus une pièce adverse la capture. Atteignez le bord opposé pour couronner une pièce.`,
  },
  'sudoku': {
    title: 'Sudoku — Puzzle de Logique Numérique',
    description: `Remplissez une grille de 9×9 pour que chaque ligne, colonne et boîte de 3×3 contienne les chiffres de 1 à 9 sans répétition. Utilisez la pure logique pour déduire chaque nombre manquant.

Le Sudoku moderne a été créé par l’architecte américain Howard Garns en 1979 sous le nom « Number Place ». Il est devenu un engouement mondial après s’être popularisé au Japon.`,
    controls: `Cliquez sur une cellule vide et tapez un nombre de 1 à 9. Chaque ligne, colonne et boîte de 3×3 doit contenir tous les chiffres de 1 à 9 exactement une fois.`,
  },
  'wordle': {
    title: 'Wordle Illimité — Jeu de Devinette de Mots',
    description: `Devinez le mot secret de cinq lettres en six tentatives ou moins. Les tuiles colorées révèlent quelles lettres sont correctes (vert), mal placées (jaune) ou absentes (gris).

Wordle a été créé par Josh Wardle comme cadeau pour sa compagne en 2021. Il est passé de 90 joueurs à plus de 2 millions par jour en janvier 2022.`,
    controls: `Tapez un mot de cinq lettres et appuyez sur Entrée. Vert = position correcte. Jaune = lettre dans le mot mais ailleurs. Gris = lettre absente du mot. Vous avez six tentatives.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Jeu Idle de Cookies',
    description: `Cliquez sur le cookie géant pour cuire des cookies, puis dépensez-les en améliorations — grand-mères, fermes, usines et portails — qui cuisent automatiquement encore plus.

Créé par le programmeur français Julien « Orteil » Thiennot en 2013, Cookie Clicker a été pionnier du genre idle. Lancé sur Steam en 2021 avec 97% d’évaluations positives.`,
    controls: `Cliquez sur le gros cookie pour produire des cookies. Dépensez les cookies en bâtiments dans la boutique pour automatiser la production. Achetez des améliorations pour multiplier votre production.`,
  },
  'connect-four': {
    title: 'Puissance 4 — Stratégie de Jetons',
    description: `Lancez des jetons colorés dans une grille verticale, en essayant d’en aligner quatre — horizontalement, verticalement ou en diagonale — avant votre adversaire.

Puissance 4 a été vendu pour la première fois par Milton Bradley en 1974. En 1988, Victor Allis a prouvé que le premier joueur peut toujours forcer une victoire en commençant par la colonne centrale.`,
    controls: `Cliquez sur une colonne pour y lancer votre jeton. Les jetons tombent au fond par gravité. Alignez quatre de votre couleur pour gagner.`,
  },
  'tic-tac-toe': {
    title: 'Morpion — Jeu de X et O',
    description: `Jouez à tour de rôle en plaçant des X et des O sur une grille de 3×3, en essayant d’en aligner trois. Jouez contre un ami ou défiez l’IA.

Le Morpion est l’un des jeux les plus anciens connus, avec des exemples trouvés dans les ruines de l’Égypte antique datant de 1300 av. J.-C.`,
    controls: `Cliquez sur une case vide pour placer votre marque. Alignez trois marques en ligne horizontale, verticale ou diagonale pour gagner.`,
  },
  'reversi': {
    title: 'Reversi — Jeu de Stratégie Othello',
    description: `Placez des disques sur un plateau de 8×8 et retournez les pièces adverses en les prenant en tenaille. Chaque coup peut changer l’équilibre des forces.

Reversi a été inventé en 1883. La version moderne, Othello, a été popularisée par Goro Hasegawa en 1971.`,
    controls: `Cliquez sur une case vide pour placer votre disque. Les disques adverses pris en tenaille passent à votre couleur.`,
  },
  'hextris': {
    title: 'Hextris — Puzzle Hexagonal',
    description: `Un twist fascinant sur les puzzles de blocs qui tombent, situé dans un hexagone rotatif. Des blocs colorés tombent vers le centre depuis les six côtés.

Hextris a été créé en 2014 par des étudiants de l’Université du Maryland lors d’un hackathon.`,
    controls: `Utilisez ← et → (ou A et D) pour faire pivoter l’hexagone central. Alignez trois blocs ou plus de la même couleur pour les éliminer.`,
  },
  'word-search': {
    title: 'Mots Mêlés — Puzzle de Mots Cachés',
    description: `Scrutez une grille de lettres mélangées pour trouver des mots cachés horizontalement, verticalement et en diagonale. Les mots peuvent se lire dans les deux sens.

Les puzzles de mots mêlés ont été inventés par Norman E. Gibat en 1968.`,
    controls: `Cliquez et faites glisser sur les lettres pour mettre un mot en surbrillance. Les mots peuvent être cachés dans n’importe quelle direction.`,
  },
  'falling-blocks': {
    title: 'Blocs qui Tombent — Empileur de Cubes',
    description: `Des cubes colorés pleuvent et vous devez les empiler et les combiner avant qu’ils ne s’accumulent jusqu’en haut. Placez les blocs stratégiquement pour créer des combos de couleurs.

Les jeux de blocs qui tombent trouvent leur origine dans Tetris (1985) et ont évolué en dizaines de variantes.`,
    controls: `Utilisez ← et → pour déplacer la pièce. Appuyez sur ↑ ou Espace pour pivoter. Appuyez sur ↓ pour chute rapide. Combinez les couleurs et complétez les lignes pour éliminer les blocs.`,
  },
  'card-solitaire': {
    title: 'Solitaire Classique — Jeu de Cartes Patience',
    description: `Une version épurée du jeu de cartes en solo préféré du monde. Construisez des séquences décroissantes de couleurs alternées et déplacez les 52 cartes vers les quatre piles de fondation.

Les jeux de solitaire sont populaires depuis le XVIIIe siècle. Napoléon Bonaparte était un joueur assidu pendant son exil.`,
    controls: `Cliquez sur une carte pour la sélectionner, puis cliquez sur une destination valide. Construisez en alternant rouge et noir. Les As vont aux piles de fondation.`,
  },
  'slope': {
    title: 'Slope — Jeu de Boule Roulante 3D',
    description: `Contrôlez une boule roulant sur une pente illuminée au néon à vitesse croissante. Évitez les obstacles, négociez les virages serrés et évitez de tomber du bord.

Slope a été développé par Rob Kay et est devenu l’un des jeux de navigateur les plus populaires au monde. Il utilise WebGL pour un rendu 3D fluide.`,
    controls: `Utilisez ← et → ou A et D pour diriger la boule. Évitez les obstacles rouges et les trous. La boule accélère continuellement.`,
  },
  'among-us': {
    title: 'Among Us — Déduction Sociale',
    description: `Travaillez avec votre équipage pour accomplir les tâches à bord d’un vaisseau spatial — mais attention, des imposteurs se cachent parmi vous. Discutez, accusez et votez pour éjecter les suspects.

Among Us a été développé par InnerSloth et a explosé en popularité en 2020. À son pic, il comptait 500 millions de joueurs actifs mensuels.`,
    controls: `Utilisez WASD ou les flèches pour vous déplacer. Cliquez sur les tâches pour les accomplir. Signalez les corps ou convoquez des réunions d’urgence.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Platformeur Rythmique',
    description: `Sautez et volez à travers un monde pulsant rempli d’obstacles synchronisés avec de la musique électronique. Touchez pour sauter par-dessus les pics et naviguer les portails de gravité.

Geometry Dash a été créé par le développeur suédois Robert Topala en 2013. Il a été téléchargé plus de 200 millions de fois avec plus de 80 millions de niveaux créés par les utilisateurs.`,
    controls: `Cliquez, touchez ou appuyez sur Espace pour sauter. Maintenez enfoncé pour continuer à sauter en mode vaisseau. Les obstacles sont synchronisés avec la musique.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Esquive 3D en Tunnel',
    description: `Foncez à travers un tunnel 3D changeant de couleur à une vitesse vertigineuse, esquivant des barrières qui surgissent avec à peine un instant de préavis.

Tunnel Rush est devenu une sensation virale comme l’un des jeux de navigateur les plus accessibles mais exigeants.`,
    controls: `Utilisez ← et → ou A et D pour esquiver les obstacles dans le tunnel. Réagissez vite — à grande vitesse vous avez moins d’une seconde.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Visez et Combinez',
    description: `Visez et tirez des bulles colorées pour créer des groupes de trois ou plus de la même couleur, les faisant éclater du plateau. Éliminez toutes les bulles pour gagner chaque niveau.

Bubble Shooter trouve ses racines dans Puzzle Bobble de Taito (1994). La version navigateur est devenue l’un des jeux casual les plus joués d’internet.`,
    controls: `Visez avec la souris et cliquez pour tirer une bulle. Combinez trois ou plus de la même couleur pour les faire éclater.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Défi de Cartes',
    description: `Triez les cartes en séquences décroissantes de la même couleur à travers dix colonnes. Complétez une séquence Roi à As pour la retirer.

Spider Solitaire a été inclus avec Microsoft Windows depuis 1998 et est devenu l’un des jeux les plus joués de l’histoire.`,
    controls: `Cliquez sur une carte pour la sélectionner, puis cliquez sur une destination valide. Seules les séquences de même couleur se déplacent en groupe. Complétez Roi-As pour retirer.`,
  },
  'mahjong': {
    title: 'Mahjong — Classique d’Appariement de Tuiles',
    description: `Retirez des paires de tuiles identiques d’un arrangement multicouche élaboré. Seules les tuiles « libres » peuvent être sélectionnées. Éliminez toutes les tuiles pour gagner.

Le Mahjong Solitaire a été créé par Brodie Lockard en 1981 sur le système PLATO.`,
    controls: `Cliquez sur une tuile libre pour la sélectionner, puis cliquez sur une autre tuile libre identique pour retirer la paire. Utilisez le bouton d’indice si vous êtes bloqué.`,
  },
  'freecell': {
    title: 'FreeCell — Solitaire Stratégique',
    description: `Les 52 cartes sont distribuées face visible en huit colonnes — aucune information cachée, chaque partie est un pur test de stratégie. Utilisez quatre cellules libres comme stockage temporaire.

FreeCell a été popularisé par son inclusion dans Windows depuis Windows 95. Seule la distribution #11982 est impossible.`,
    controls: `Cliquez sur une carte, puis cliquez sur une colonne ou cellule libre de destination. Construisez en ordre décroissant avec des couleurs alternées. Utilisez les quatre cellules libres judicieusement.`,
  },
  'backgammon': {
    title: 'Backgammon — Jeu de Plateau Classique',
    description: `Lancez les dés et faites la course avec vos quinze pions autour du plateau. Bloquez, frappez et surpassez l’IA dans ce jeu de stratégie éternel.

Le Backgammon est l’un des plus anciens jeux de plateau, avec des origines remontant à 5 000 ans en Mésopotamie.`,
    controls: `Cliquez sur le bouton des dés pour lancer. Cliquez sur un pion, puis cliquez sur le point de destination. Vous devez utiliser les deux dés si possible.`,
  },
  'hangman': {
    title: 'Pendu — Jeu de Devinette de Mots',
    description: `Devinez le mot caché lettre par lettre avant que le dessin du pendu ne soit complet. Chaque tentative ratée ajoute une partie du corps.

Le Pendu est joué depuis au moins l’époque victorienne et est l’un des jeux de mots les plus connus au monde.`,
    controls: `Cliquez sur les lettres pour deviner. Les lettres correctes apparaissent à leurs positions. Vous avez 6 à 8 tentatives incorrectes.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Tranchez et Découpez',
    description: `Tranchez les fruits qui volent à travers l’écran avec votre doigt ou souris. Coupez-en plusieurs en un seul mouvement pour des combos, mais attention aux bombes.

Fruit Ninja a été développé par Halfbrick Studios et lancé en 2010. Il a été téléchargé plus d’un milliard de fois.`,
    controls: `Glissez sur l’écran ou cliquez et faites glisser pour couper les fruits. Coupez-en plusieurs en un mouvement pour des combos. Évitez les bombes.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Course de Motos',
    description: `Conduisez votre moto à travers 25 pistes remplies de barils explosifs, de boucles géantes et de scies mortelles. Faites des figures pour des bonus de temps.

Moto X3M a été développé par Madpuffers en 2016. La série a totalisé plus de 500 millions de parties.`,
    controls: `Appuyez sur HAUT ou W pour accélérer, BAS ou S pour freiner. GAUCHE/DROITE pour s’incliner en l’air. Faites des figures pour des bonus.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Dérapage à Un Bouton',
    description: `Maîtrisez l’art du dérapage avec un seul bouton. Touchez pour tourner à droite, relâchez pour déraper à gauche. Restez sur la route.

Drift Boss a été créé par Madpuffers, connu pour ses jeux accessibles à un seul bouton.`,
    controls: `Cliquez ou touchez pour tourner à droite. Relâchez pour déraper à gauche. Synchronisez vos touches pour rester sur la route.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basket pour 2 Joueurs',
    description: `Choisissez parmi des équipes légendaires et affrontez-vous dans des matchs rapides avec des super tirs, blocages et dunks. Jouez contre le CPU ou défiez un ami.

Basketball Legends présente des joueurs caricaturaux avec des mouvements spéciaux inspirés des superstars de la NBA.`,
    controls: `Joueur 1 : WASD pour se déplacer, B pour tirer, N pour super tir, M pour bloquer. Joueur 2 : Flèches pour se déplacer, K pour tirer, L pour super tir.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Équilibrez l’Œuf',
    description: `Conduisez une voiture en montée avec un œuf délicat posé dessus. Naviguez sur un terrain inégal sans laisser l’œuf tomber.

Eggy Car transforme la conduite en un puzzle de physique de précision. L’œuf obéit à une gravité et une inertie réalistes.`,
    controls: `Maintenez enfoncé pour accélérer. Relâchez pour avancer par inertie. Naviguez les collines avec soin. Conduisez le plus loin possible.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Briseur de Plateformes',
    description: `Écrasez des plateformes rotatives en touchant pour lâcher la balle. Éliminez les plateformes colorées mais évitez les noires. Accumulez de la vitesse pour le mode feu.

Stack Ball combine la descente en hélice avec une physique de destruction satisfaisante.`,
    controls: `Touchez et maintenez pour lâcher la balle. Relâchez pour arrêter. Évitez les plateformes noires. Détruisez-en plusieurs d’affilée pour le mode feu.`,
  },
  'vex-7': {
    title: 'Vex 7 — Platformeur Stickman',
    description: `Guidez votre stickman à travers des parcours d’obstacles brutaux avec des lames rotatives, des pics et des plateformes mobiles. Plus de 10 actes stimulants.

Vex 7 est la dernière entrée d’une des séries de plateformes les plus populaires. Plus d’un milliard de parties au total.`,
    controls: `Utilisez WASD ou les flèches pour vous déplacer et sauter. Appuyez sur S pour glisser. Sautez sur les murs. Évitez pics, lames et dangers.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Lancez et Attrapez',
    description: `Lancez votre ligne de pêche et attrapez des poissons en faisant glisser l’hameçon pendant la descente. Dépensez l’argent en améliorations de longueur, vitesse et gains hors ligne.

Tiny Fishing combine des mécaniques idle avec la pêche active. Les poissons légendaires se cachent à plus de 100 mètres.`,
    controls: `Cliquez et maintenez pour lancer. Déplacez la souris pour attraper les poissons. Attrapez le maximum par lancé. Dépensez les gains en améliorations.`,
  },
  'gunspin': {
    title: 'GunSpin — Lanceur d’Armes',
    description: `Lancez votre arme et maintenez-la en rotation en tirant au bon moment. Chaque tir propulse l’arme plus loin. Chronométrez vos clics pour maximiser la distance.

GunSpin combine la physique des projectiles avec des systèmes d’amélioration idle.`,
    controls: `Cliquez ou touchez pour tirer. Chaque tir crée un recul qui pousse l’arme. Chronométrez vos tirs pour maintenir l’altitude. Collectez des pièces pour les améliorations.`,
  },
  'vex-6': {
    title: 'Vex 6 — Platformeur Stickman',
    description: `Courez, sautez, glissez et escaladez les murs à travers des parcours d’obstacles traîtres. Vex 6 continue la série avec de nouveaux actes.

Vex 6 introduit la nage avec jauge d’air, des scies sur rails et des plateformes qui s’effritent.`,
    controls: `Utilisez WASD ou les flèches pour vous déplacer et sauter. Appuyez sur S pour glisser. Sautez sur les murs. Évitez pics, scies et puits.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Jeu de Lancement',
    description: `Frappez, rebondissez et propulsez-vous à travers des vagues d’oursons en gélatine. Lancez Burrito Bison depuis le ring de lutte.

Burrito Bison: Launcha Libre présente trois lutteurs jouables avec des capacités spéciales uniques. À l’origine un jeu Flash de Juicy Beast Studios.`,
    controls: `Cliquez pour lancer depuis le ring. Cliquez pour rebondir sur les oursons en gélatine. Utilisez les capacités spéciales. Gagnez de l’argent pour les améliorations.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Bagarreur Physique',
    description: `Décochez des coups puissants sur votre adversaire ragdoll et observez le chaos basé sur la physique. Visez, chargez et frappez pour envoyer les stickmen voler.

Ragdoll Hit utilise un moteur physique réaliste qui calcule la force d’impact et les collisions indépendamment.`,
    controls: `Cliquez et faites glisser pour viser votre coup. Relâchez pour frapper. Projetez les adversaires contre les obstacles pour des dégâts supplémentaires.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Football pour 2 Joueurs',
    description: `Un jeu de football hilarant où les règles, le terrain et les joueurs changent à chaque manche. Marquez des buts avec des joueurs ragdoll chancelants.

Soccer Random aléatorise tout à chaque manche — taille du ballon, nombre de joueurs, surface et même la gravité.`,
    controls: `Joueur 1 : Appuyez sur W pour tirer. Joueur 2 : Appuyez sur FLÈCHE HAUT. Marquez 5 buts pour gagner. Le terrain change à chaque manche.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Platformeur Classique',
    description: `Le légendaire platformeur à défilement latéral. Guidez Mario à travers le Royaume Champignon, écrasant les Goombas, cassant les briques et sauvant la Princesse Peach.

Super Mario Bros a été lancé par Nintendo en 1985 et est considéré comme le jeu vidéo le plus influent jamais créé. Conçu par Shigeru Miyamoto, il s’est vendu à plus de 40 millions d’exemplaires.`,
    controls: `Utilisez les flèches pour déplacer Mario. Appuyez sur Z ou HAUT pour sauter. Appuyez sur X pour courir/tirer. Écrasez les ennemis en atterrissant dessus. Collectez pièces et power-ups.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Baseball Multijoueur',
    description: `Prenez la batte dans ce jeu de baseball rapide avec des joueurs cartoon et de l’action arcade. Lancez, frappez et défendez pour remporter la victoire.

Baseball Bros combine des mécaniques simplifiées avec un gameplay compétitif. Matchs rapides en 3 manches.`,
    controls: `Cliquez pour lancer ou frapper. Utilisez la souris pour viser. Chronométrez votre clic pour frapper la balle. Utilisez les flèches pour contrôler les défenseurs.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Manager d’Équipe',
    description: `Gérez votre propre équipe de baseball et affrontez des ligues et tournois. Recrutez des joueurs, améliorez les compétences et menez votre équipe.

Baseball 9 combine gestion d’équipe avec action sur le terrain. Recrutez des joueurs aux statistiques uniques.`,
    controls: `Cliquez pour frapper. Visez et cliquez pour lancer. Gérez votre équipe entre les matchs.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Créateur de Musique',
    description: `Créez des mix musicaux en glissant-déposant des personnages animés sur la scène. Chaque personnage Sprunki ajoute une boucle sonore différente.

Sprunki Phase 9 est la neuvième entrée de la série de création musicale Sprunki, inspirée d’Incredibox.`,
    controls: `Glissez les personnages sur la scène pour ajouter leur son. Cliquez pour supprimer. Expérimentez les combinaisons pour découvrir des animations bonus.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Jeu Musical Idle',
    description: `Cliquez pour gagner des beats et débloquer de nouveaux personnages Sprunki. Chaque amélioration ajoute de nouveaux sons à votre composition.

Sprunki Clicker fusionne les mécaniques de clicker idle avec l’univers musical de Sprunki.`,
    controls: `Cliquez pour gagner des beats. Dépensez les beats en améliorations. Débloquez de nouveaux personnages et packs de sons.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Mixeur Musical Nocturne',
    description: `Créez des mélodies envoûtantes dans ce mixeur Sprunki à thème nocturne. Glissez des personnages inquiétants pour créer des couches de rythmes et de voix fantômatiques.

Sprunki Night Time réimagine la formule Sprunki avec une esthétique sombre et nocturne.`,
    controls: `Glissez les personnages sur la scène pour ajouter leur son. Trouvez les combinaisons spéciales pour des animations bonus.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mixeur Musical Mature',
    description: `Une version évoluée de la création musicale Sprunki avec des sons plus sophistiqués et des designs matures. Construisez des pistes complexes.

Sprunki Grown Up présente des versions adultes des personnages classiques avec des éléments sonores plus complexes.`,
    controls: `Glissez les personnages évolués sur la scène. Expérimentez avec les couches pour des compositions plus riches.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Bac à Sable Musical',
    description: `L’expérience bac à sable ultime de Sprunki avec tous les personnages et sons débloqués dès le départ. Mélangez et expérimentez librement.

Sprunki Playground élimine toutes les barrières de progression et donne accès immédiat à chaque personnage et son.`,
    controls: `Glissez n’importe quel personnage sur la scène. Créez des couches de sons librement. Utilisez le bouton d’enregistrement pour sauvegarder votre mix.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Stand de Tir',
    description: `Visez les poulets fous volant à travers des paysages 3D dans ce stand de tir arcade. Cliquez pour tirer sur les poulets.

Crazy Chicken (Moorhuhn) est né comme jeu promotionnel en 1999 et est devenu une sensation virale avec plus de 10 millions de téléchargements.`,
    controls: `Déplacez la souris pour viser. Cliquez pour tirer. Cherchez les cibles bonus cachées. Les poulets dorés valent des points supplémentaires.`,
  },
};
