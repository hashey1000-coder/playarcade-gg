import type { GameTranslation } from '../gameTranslations';

export const NL_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Schuifpuzzel',
    description: `Schuif genummerde tegels over een 4×4 raster en combineer gelijke waarden om de tegel 2048 te bereiken. Elke veegbeweging voegt een nieuwe tegel toe, dus plan je zetten zorgvuldig om te voorkomen dat het bord vol raakt.

2048 werd in maart 2014 gemaakt door de Italiaanse ontwikkelaar Gabriele Cirulli als een weekend-project. Het spel ging viraal en werd binnen een week meer dan vier miljoen keer gespeeld. Het is geïnspireerd op eerdere schuifpuzzelspellen zoals Threes!.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> of <strong>veeg</strong> op een touchscreen om alle tegels in één richting te schuiven. Tegels met hetzelfde getal smelten samen tot hun som. Probeer de 2048-tegel te bereiken!`,
  },
  'tetris': {
    title: 'Tetris — Blokken Stapelen',
    description: `Rangschik vallende blokken van verschillende vormen om horizontale rijen te vullen en te laten verdwijnen. Hoe meer rijen je tegelijk wegwerkt, hoe meer punten je scoort. Het tempo neemt geleidelijk toe.

Tetris werd in 1985 uitgevonden door de Russische programmeur Alexey Pajitnov. Het is een van de meest verkochte videospellen aller tijden en heeft wereldwijd miljoenen spelers gefascineerd.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> om blokken te verplaatsen en te draaien. <strong>Omlaag</strong> versnelt het vallen, <strong>Spatiebalk</strong> laat het blok direct vallen. Maak volledige rijen om ze te wissen!`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Vliegende Vogel',
    description: `Tik om een klein vogeltje door de gaten tussen groene buizen te navigeren. Eén verkeerde beweging en het is game over. De eenvoudige bediening maakt het spel makkelijk te begrijpen maar ongelooflijk moeilijk om te beheersen.

Flappy Bird werd in 2013 ontwikkeld door de Vietnamese programmeur Dong Nguyen. Het spel werd begin 2014 enorm populair, maar werd door de maker uit de app stores verwijderd vanwege de overweldigende aandacht.`,
    controls: `Tik op het scherm of druk op <strong>Spatiebalk</strong> om de vogel omhoog te laten flappen. Vermijd de buizen en de grond. Elk paar buizen waar je doorheen vliegt levert één punt op.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino — Dinosaurus Renner',
    description: `Spring en buk met een pixeldinosaurus over cactussen en onder pterodactylussen door in deze eindeloze woestijnrace. Het spel wordt sneller naarmate je verder komt en wisselt tussen dag- en nachtmodus.

Dit spel is verborgen in Google Chrome en verschijnt wanneer er geen internetverbinding is. Het werd in 2014 ontworpen door Sebastien Gabriel en het Chrome UX-team. Maandelijks wordt het naar schatting 270 miljoen keer gespeeld.`,
    controls: `Druk op <strong>Spatiebalk</strong> of tik om te springen. Druk op de <strong>pijl omlaag</strong> om te bukken. Vermijd alle obstakels om je score te verhogen!`,
  },
  'snake': {
    title: 'Snake — Slang',
    description: `Bestuur een groeiende slang over het veld om voedsel te verzamelen. Elke hap maakt de slang langer, waardoor het steeds moeilijker wordt om botsingen met je eigen staart of de muren te vermijden.

Snake werd beroemd door de Nokia-telefoons uit de jaren negentig, maar de oorspronkelijke versie dateert uit 1976 als arcadespel genaamd Blockade. Het is een van de meest herkenbare mobiele spellen ooit.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> of <strong>veeg</strong> om de slang te sturen. Eet het voedsel om te groeien en punten te scoren. Raak jezelf of de rand niet aan!`,
  },
  'pac-man': {
    title: 'Pac-Man — Doolhofveter',
    description: `Navigeer Pac-Man door een doolhof vol puntjes terwijl je vier gekleurde spoken ontwijkt. Eet een krachtpil om tijdelijk de spoken te kunnen opeten. Het doel is alle puntjes verzamelen.

Pac-Man werd in 1980 uitgebracht door Namco en is ontworpen door Toru Iwatani. Het personage is geïnspireerd op een pizza waar een punt uit ontbreekt. Pac-Man is een van de meest iconische videogames ooit gemaakt.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> om Pac-Man door het doolhof te bewegen. Eet alle puntjes en vermijd de spoken, tenzij je een krachtpil hebt gegeten!`,
  },
  'minesweeper': {
    title: 'Minesweeper — Mijnenveger',
    description: `Onthul vakjes op een raster zonder op een mijn te stappen. De cijfers geven aan hoeveel mijnen zich in de aangrenzende vakjes bevinden. Gebruik logisch denken om alle veilige vakjes te ontdekken.

Minesweeper werd populair toen het in 1990 werd meegeleverd met Microsoft Windows. Het spel was oorspronkelijk bedoeld om gebruikers vertrouwd te maken met de rechtermuisklik. Het is sindsdien een klassieker op kantoorcomputers wereldwijd.`,
    controls: `Klik met de <strong>linkermuisknop</strong> om een vakje te onthullen. <strong>Rechtsklik</strong> om een vlag te plaatsen op een vermoedelijke mijn. Onthul alle veilige vakjes om te winnen!`,
  },
  'solitaire': {
    title: 'Solitaire — Patience',
    description: `Sorteer een kaartspel door kaarten in aflopende volgorde en afwisselende kleuren op de speelvelden te stapelen. Bouw de vier stapels op van aas tot koning per kleur om het spel te winnen.

Solitaire, in Nederland ook wel Patience genoemd, is al sinds de 18e eeuw bekend. De digitale versie werd wereldberoemd toen Microsoft het in 1990 bij Windows leverde, oorspronkelijk om gebruikers te leren met de muis te slepen.`,
    controls: `Sleep kaarten tussen kolommen in aflopende volgorde met afwisselende kleuren. Bouw de basisstapels op van Aas tot Koning. Klik op de trekstapel voor nieuwe kaarten.`,
  },
  'chess': {
    title: 'Chess — Schaken',
    description: `Speel het klassieke strategiespel schaken tegen de computer of een andere speler. Beweeg je stukken strategisch om de koning van je tegenstander schaakmat te zetten.

Schaken is een van de oudste en meest gespeelde bordspellen ter wereld, met oorsprong in India rond de 6e eeuw. Het spel heeft zich over eeuwen ontwikkeld tot de huidige regels en wordt nu door miljoenen mensen gespeeld, zowel recreatief als competitief.`,
    controls: `Klik op een stuk om het te selecteren en klik vervolgens op het doelvakje. Elk stuk heeft unieke bewegingsregels. Zet de vijandelijke koning schaakmat om te winnen!`,
  },
  'checkers': {
    title: 'Checkers — Dammen',
    description: `Speel het klassieke bordspel dammen. Verplaats je schijven diagonaal en sla de stukken van je tegenstander door eroverheen te springen. Bereik de overkant om een dam te krijgen.

Dammen is een van de oudste bordspellen ter wereld, met versies die teruggaan tot het oude Egypte rond 3000 voor Christus. Het moderne spel zoals wij het kennen ontstond rond de 12e eeuw in Frankrijk.`,
    controls: `Klik op een schijf en vervolgens op het doelvakje om diagonaal te bewegen. Spring over tegenstanders om ze te slaan. Bereik de overkant om een dam te worden!`,
  },
  'sudoku': {
    title: 'Sudoku — Cijferpuzzel',
    description: `Vul een 9×9 raster zo in dat elke rij, kolom en 3×3 blok de cijfers 1 tot 9 precies één keer bevat. Gebruik logisch redeneren om de juiste cijfers te vinden.

Sudoku werd in de jaren tachtig populair in Japan, maar de oorspronkelijke puzzel werd in 1979 ontworpen door de Amerikaanse architect Howard Garns onder de naam "Number Place". In 2004 werd het een wereldwijde rage dankzij de Britse krant The Times.`,
    controls: `Klik op een leeg vakje en voer een cijfer in van 1 tot 9. Gebruik <strong>notities</strong> om mogelijke cijfers bij te houden. Elk cijfer mag slechts één keer per rij, kolom en blok voorkomen.`,
  },
  'wordle': {
    title: 'Wordle — Woordraadspel',
    description: `Raad het geheime vijfletterwoord in zes pogingen. Na elke gok veranderen de letters van kleur om aan te geven of ze op de juiste plek staan, in het woord voorkomen of er helemaal niet in zitten.

Wordle werd in 2021 gemaakt door Josh Wardle als cadeau voor zijn partner. Het spel groeide uit tot een wereldwijd fenomeen en werd begin 2022 overgenomen door The New York Times. Miljoenen spelers delen dagelijks hun resultaten op sociale media.`,
    controls: `Typ een vijfletterwoord en druk op <strong>Enter</strong>. Groene letters staan op de juiste plek, gele letters zitten in het woord maar op de verkeerde plek, grijze letters komen niet voor.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Koekjes Klikker',
    description: `Klik op een gigantisch koekje om koekjes te produceren en koop upgrades om de productie te automatiseren. Ontgrendel gebouwen en verbeteringen om steeds sneller koekjes te bakken.

Cookie Clicker werd in 2013 gemaakt door de Franse programmeur Julien Thiennot (Orteil) en was een van de eerste populaire incremental games. Het spel heeft een verrassend diepe gameplay met honderden upgrades en verborgen ontdekkingen.`,
    controls: `Klik op het <strong>grote koekje</strong> om koekjes te verdienen. Besteed koekjes aan upgrades en gebouwen in het winkel-paneel. Gouden koekjes verschijnen willekeurig — klik ze snel aan voor bonussen!`,
  },
  'connect-four': {
    title: 'Connect Four — Vier op een Rij',
    description: `Laat om beurten gekleurde schijven in een verticaal raster vallen. De eerste speler die vier schijven op een rij krijgt — horizontaal, verticaal of diagonaal — wint het spel.

Vier op een Rij werd in 1974 uitgebracht door Milton Bradley (nu Hasbro). Wiskundig is bewezen dat de eerste speler bij perfect spel altijd kan winnen. Het spel is populair bij alle leeftijden vanwege de eenvoudige regels.`,
    controls: `Klik op een kolom om je schijf erin te laten vallen. De schijf zakt naar de laagste beschikbare positie. Krijg vier op een rij om te winnen!`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — Boter, Kaas en Eieren',
    description: `Plaats om beurten een X of O op een 3×3 raster. De eerste speler die drie op een rij krijgt — horizontaal, verticaal of diagonaal — wint. Als het bord vol is zonder winnaar, is het gelijkspel.

Boter, Kaas en Eieren is een van de oudste spellen ter wereld. Varianten werden al gespeeld in het oude Egypte rond 1300 voor Christus. Het spel is wiskundig opgelost: bij perfect spel eindigt het altijd in gelijkspel.`,
    controls: `Klik op een leeg vakje om je symbool (X of O) te plaatsen. Krijg drie op een rij — horizontaal, verticaal of diagonaal — om te winnen!`,
  },
  'reversi': {
    title: 'Reversi — Omdraaispel',
    description: `Plaats schijven op het bord om de schijven van je tegenstander tussen jouw schijven in te sluiten en om te draaien naar jouw kleur. De speler met de meeste schijven aan het einde wint.

Reversi werd uitgevonden in 1883 door twee Engelsen die beide de eer opeisten. De moderne versie, Othello genaamd, werd in 1971 gepatenteerd door de Japanner Goro Hasegawa. De slogan luidt: "Een minuut om te leren, een leven om te beheersen."`,
    controls: `Klik op een geldig vakje om een schijf te plaatsen. Je moet minstens één rij tegenstander-schijven insluiten. De speler met de meeste schijven aan het einde wint!`,
  },
  'hextris': {
    title: 'Hextris — Hexagonale Puzzel',
    description: `Draai een zeshoek om vallende gekleurde blokken op te vangen en combineer drie of meer aangrenzende blokken van dezelfde kleur om ze te laten verdwijnen. Het tempo neemt snel toe.

Hextris is een moderne draai aan het klassieke Tetris-concept, maar dan met een hexagonale twist. Het spel werd ontwikkeld als open-source project en is geliefd vanwege de frisse kijk op het puzzelgenre.`,
    controls: `Gebruik de <strong>pijltjestoetsen links/rechts</strong> om de zeshoek te draaien. Vang de vallende blokken op en maak rijen van drie of meer gelijke kleuren om ze weg te werken.`,
  },
  'word-search': {
    title: 'Word Search — Woordzoeker',
    description: `Vind verborgen woorden in een raster van willekeurige letters. Woorden kunnen horizontaal, verticaal of diagonaal staan en soms zelfs achterstevoren. Markeer ze om ze af te strepen.

De moderne woordzoeker werd in 1968 uitgevonden door Norman Gibat en voor het eerst gepubliceerd in de Selenby Digest. Sindsdien is het een van de meest populaire woordpuzzels in kranten en puzzelboeken wereldwijd.`,
    controls: `Klik en sleep over letters om een woord te markeren. Gevonden woorden worden van de lijst gestreept. Vind alle woorden om het niveau te voltooien!`,
  },
  'falling-blocks': {
    title: 'Falling Blocks — Vallende Blokken',
    description: `Rangschik vallende blokken om volledige horizontale rijen te vormen en punten te scoren. Dit klassieke puzzelspel test je ruimtelijk inzicht en snelle reflexen naarmate het tempo toeneemt.

Vallende Blokken is geïnspireerd op het tijdloze concept van Tetris en biedt een frisse benadering van het stapelpuzzelgenre. Het eenvoudige maar verslavende gameplay houdt spelers van alle leeftijden geboeid.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> om blokken te verplaatsen en te draaien. Maak volledige rijen om ze weg te werken en punten te scoren. Voorkom dat de blokken de bovenkant bereiken!`,
  },
  'card-solitaire': {
    title: 'Card Solitaire — Kaart Patience',
    description: `Een klassiek kaartspel voor één speler. Sorteer kaarten in kolommen in aflopende volgorde met afwisselende kleuren. Bouw de basisstapels op van Aas tot Koning per kleur.

Patience is al eeuwenlang een geliefd kaartspel, vooral populair sinds de digitale versie bij Windows werd meegeleverd. Het vereist een combinatie van strategie, planning en een beetje geluk.`,
    controls: `Sleep kaarten om ze tussen kolommen te verplaatsen. Stapel af in aflopende volgorde met afwisselende kleuren. Bouw basisstapels op van Aas tot Koning per kleur.`,
  },
  'slope': {
    title: 'Slope — Hellingbaan',
    description: `Bestuur een bal die met toenemende snelheid een eindeloze 3D-helling af rolt. Ontweek rode obstakels en voorkom dat je van de rand valt in dit snelle reactiespel.

Slope werd ontwikkeld door Rob Kay en is een van de meest populaire browserspellen in het genre eindeloze renners. De neon-esthetiek en vloeiende 3D-graphics maken het visueel aantrekkelijk en de stijgende moeilijkheidsgraad houdt spelers uitgedaagd.`,
    controls: `Gebruik de <strong>pijltjestoetsen links/rechts</strong> of <strong>A/D</strong> om de bal te sturen. Vermijd rode blokken en val niet van de rand. Hoe verder je komt, hoe sneller het gaat!`,
  },
  'among-us': {
    title: 'Among Us — Onder Ons',
    description: `Werk samen als bemanningslid om taken te voltooien op een ruimteschip, of saboteer als bedrieger het team zonder betrapt te worden. Bespreek verdachte activiteiten en stem om de bedrieger eruit te gooien.

Among Us werd in 2018 uitgebracht door InnerSloth maar werd pas in 2020 een wereldwijd fenomeen dankzij streamers op Twitch en YouTube. Het spel combineert sociale deductie met eenvoudige minigames en is geschikt voor 4 tot 15 spelers.`,
    controls: `Gebruik <strong>WASD</strong> of een joystick om te bewegen. Voltooi taken als bemanningslid of saboteer als bedrieger. Gebruik de meldknop om vergaderingen te starten en verdachten te bespreken!`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Geometrische Sprint',
    description: `Navigeer een vierkant blokje door ritme-gebaseerde obstakelparcoursen vol stekels, platforms en portalen. Het blokje beweegt automatisch — jij bepaalt wanneer het springt.

Geometry Dash werd in 2013 uitgebracht door de Zweedse ontwikkelaar Robert Topala (RobTop Games). Het spel staat bekend om zijn door de community gemaakte levels en de perfecte synchronisatie van gameplay met elektronische muziek.`,
    controls: `Druk op <strong>Spatiebalk</strong>, tik of klik om te springen. Houd ingedrukt voor doorlopende sprongen in sommige modi. Timing is alles — de muziek helpt je het ritme te vinden!`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Tunnelrace',
    description: `Vlieg door een kleurrijke 3D-tunnel en ontwijkt draaiende obstakels die steeds sneller op je afkomen. Test je reflexen in dit duizelingwekkende snelheidsspel.

Tunnel Rush is een populair browserspel dat spelers uitdaagt met steeds complexere patronen en toenemende snelheid. De levendige neonkleuren en het hypnotiserende tunneleffect maken het een visueel spectaculaire ervaring.`,
    controls: `Gebruik de <strong>pijltjestoetsen links/rechts</strong> of <strong>A/D</strong> om obstakels te ontwijken. Reageer snel, want de snelheid neemt voortdurend toe!`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Bellenschieter',
    description: `Schiet gekleurde bellen naar boven om groepen van drie of meer gelijke kleuren te vormen en ze te laten knappen. Ruim het hele veld op voordat de bellen de onderkant bereiken.

Bubble Shooter is geïnspireerd op het Japanse arcadespel Puzzle Bobble uit 1994, ontworpen door Taito. Het simpele maar verslavende concept heeft het tot een van de meest gespeelde casual games ter wereld gemaakt.`,
    controls: `Richt met de <strong>muis</strong> en klik om een bel te schieten. Maak groepen van drie of meer gelijke kleuren om ze te laten knappen. Plan je schoten zorgvuldig!`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Spinnenpatience',
    description: `Stapel kaarten in aflopende volgorde van Koning tot Aas per kleur om complete reeksen van het bord te verwijderen. Speel met één, twee of vier kleuren voor oplopende moeilijkheidsgraden.

Spinnenpatience werd populair toen het bij Windows ME en XP werd meegeleverd. Het is een van de meest uitdagende vormen van patience en vereist zorgvuldige planning en strategisch denken.`,
    controls: `Sleep kaarten om ze in aflopende volgorde te stapelen. Complete reeksen van Koning tot Aas in één kleur worden automatisch verwijderd. Klik op de trekstapel voor nieuwe kaarten.`,
  },
  'mahjong': {
    title: 'Mahjong — Tegelspel',
    description: `Vind en verwijder paren gelijke tegels van een gestapelde opzet. Alleen vrije tegels — zonder buren links of rechts en niet bedekt — kunnen worden geselecteerd.

Mahjong Solitaire is gebaseerd op het traditionele Chinese tegelspel dat al meer dan 2500 jaar bestaat. De solitaire-versie werd in 1981 bedacht door Brodie Lockard voor de computer en is sindsdien een van de populairste puzzelspellen.`,
    controls: `Klik op twee identieke vrije tegels om ze van het bord te verwijderen. Een tegel is vrij als er geen tegel bovenop ligt en minstens één zijde (links of rechts) open is.`,
  },
  'freecell': {
    title: 'FreeCell — Vrije Cel',
    description: `Sorteer alle kaarten naar de basisstapels per kleur van Aas tot Koning. Gebruik vier vrije cellen als tijdelijke opslagplaatsen om kaarten strategisch te verschuiven.

FreeCell werd in 1978 bedacht door Paul Alfille en werd beroemd als onderdeel van Windows. Bijna alle deals (99,999%) zijn oplosbaar, wat het een puzzel maakt waar vaardigheid belangrijker is dan geluk.`,
    controls: `Sleep kaarten tussen kolommen in aflopende volgorde met afwisselende kleuren. Gebruik de vier vrije cellen voor tijdelijke opslag. Bouw basisstapels op van Aas tot Koning per kleur.`,
  },
  'backgammon': {
    title: 'Backgammon — Triktrak',
    description: `Verplaats je vijftien schijven over het bord op basis van dobbelsteenworpen en probeer ze als eerste allemaal van het bord te halen. Blokkeer je tegenstander en sla zijn stukken.

Backgammon, in het Nederlands ook wel Triktrak genoemd, is een van de oudste bekende bordspellen en dateert van ongeveer 5000 jaar geleden uit Mesopotamië. Het combineert strategie met een element van geluk door de dobbelstenen.`,
    controls: `Gooi de dobbelstenen en klik op schijven om ze te verplaatsen. Combineer bewegingen strategisch. Breng al je schijven naar je thuiskwadrant en begin met uitspelen!`,
  },
  'hangman': {
    title: 'Hangman — Galgje',
    description: `Raad het verborgen woord letter voor letter. Bij elke foute letter wordt een deel van de galg getekend. Raad het woord voordat de tekening compleet is!

Galgje is een klassiek woordspel dat al generaties lang wordt gespeeld op schoolborden en papier. De oorsprong is onduidelijk, maar het spel werd al in de Victoriaanse tijd gespeeld. Het helpt bij het vergroten van woordenschat en spellingvaardigheden.`,
    controls: `Klik op letters of typ ze op je toetsenbord om een letter te raden. Juiste letters verschijnen in het woord, foute letters worden bijgehouden. Raad het woord voordat de tekening af is!`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Fruitsnijder',
    description: `Snijd fruit doormidden door over het scherm te vegen terwijl je bommen vermijdt. Combineer meerdere vruchten in één veeg voor bonuspunten en bouw combo's op.

Fruit Ninja werd in 2010 uitgebracht door het Australische Halfbrick Studios en werd al snel een van de bestverkochte mobiele games. Het spel heeft wereldwijd meer dan een miljard downloads bereikt en werd een cultureel fenomeen.`,
    controls: `Veeg over het scherm of gebruik de <strong>muis</strong> om fruit door te snijden. Vermijd bommen! Snijd meerdere vruchten tegelijk voor combo-bonussen.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Motorstunts',
    description: `Race met een motorfiets over gekke parcoursen vol loopings, springschansen en dodelijke vallen. Voer salto's uit in de lucht voor tijdbonussen en probeer drie sterren per level te halen.

Moto X3M is een populaire reeks fysica-gebaseerde motorsportspellen ontwikkeld door Madpuffers. Het spel combineert uitdagende obstakelparcoursen met ragdoll-fysica voor hilarische en spannende momenten.`,
    controls: `Gebruik <strong>pijl omhoog</strong> voor gas, <strong>pijl omlaag</strong> voor remmen. <strong>Links/rechts</strong> om de motorrijder naar voren of achteren te leunen. Maak salto's voor tijdbonussen!`,
  },
  'drift-boss': {
    title: 'Drift Boss — Driftmeester',
    description: `Stuur een auto over een kronkelige weg en drift om de bochten zonder van de rand te vallen. Eén knop is alles wat je nodig hebt in dit verslavende, minimalistisch bestuurde spel.

Drift Boss is een populair casual browserspel dat de kunst van het driften vereenvoudigt tot één simpele besturing. Ondanks de eenvoudige opzet biedt het een verrassend uitdagende ervaring die spelers steeds opnieuw laat proberen.`,
    controls: `Klik of druk op <strong>Spatiebalk</strong> om naar rechts te sturen. Laat los om weer naar links te gaan. Blijf op de weg en drift zo ver mogelijk!`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basketbalhelden',
    description: `Speel spectaculaire een-op-een of twee-op-twee basketbalwedstrijden met legendarische spelers. Scoor driepunters, maak dunks en versla je tegenstanders in dit actievolle sportspel.

Basketball Legends is een geliefd browsersportspel dat de opwinding van professioneel basketbal vertaalt naar een toegankelijk 2D-format. Met zijn cartoonachtige stijl en snelle gameplay trekt het zowel sportfans als casual gamers aan.`,
    controls: `Speler 1: <strong>WASD</strong> om te bewegen, <strong>B</strong> om te schieten, <strong>S</strong> om te pompen. Speler 2: <strong>Pijltjestoetsen</strong> om te bewegen, <strong>L</strong> om te schieten.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Eierenauto',
    description: `Rij zorgvuldig over heuvels met een ei op je auto. Balanceer snelheid en voorzichtigheid om te voorkomen dat het ei van de auto rolt en breekt.

Eggy Car is een charmant fysica-puzzelspel dat spelers uitdaagt om een eenvoudig concept onder de knie te krijgen: rijd zonder je ei te breken. De schattige graphics en frustrerende maar verslavende gameplay hebben het tot een internet-hit gemaakt.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> of <strong>W/D</strong> om gas te geven. Rij voorzichtig over heuvels. Ga niet te snel bergaf, anders rolt het ei eraf!`,
  },
  'stack-ball': {
    title: 'Stack Ball — Stapelbal',
    description: `Laat een bal door draaiende platforms breken door op het scherm te tikken. Vermijd zwarte platforms — die zijn onbreekbaar tenzij je een vuurbalmodus activeert.

Stack Ball is een populair mobiel hypercasual-spel dat eenvoudige tikbesturing combineert met bevredigende vernietigingsmechaniek. De kleurrijke visuele effecten en het snelle speeltempo maken het onweerstaanbaar.`,
    controls: `Houd het scherm ingedrukt of klik om de bal naar beneden te laten vallen en platforms te breken. Laat los om te stoppen. Vermijd zwarte platforms tenzij je in vuurbalmodus bent!`,
  },
  'vex-7': {
    title: 'VEX 7 — Parcoursloper',
    description: `Spring, klim, glijdt en ren door steeds moeilijkere parcoursen vol dodelijke vallen en slimme puzzels. Gebruik muursprongen en precisietiming om elk level te overleven.

VEX 7 is het nieuwste deel in de populaire VEX-platformserie. De franchise staat bekend om zijn uitdagende levels, vloeiende animaties en de perfecte balans tussen frustratie en voldoening bij het voltooien van moeilijke secties.`,
    controls: `Gebruik <strong>WASD</strong> of <strong>pijltjestoetsen</strong> om te bewegen en te springen. Druk tegen muren om muursprongen te maken. Vermijd stekels, zagen en andere vallen!`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Klein Vissen',
    description: `Werp je hengel uit en vang vissen om geld te verdienen. Upgrade je uitrusting om dieper te vissen en zeldzamere, waardevolle vissen te vangen in dit ontspannen idle-spel.

Tiny Fishing combineert de ontspanning van een visserijsimulatie met de voortgang van een idle game. Het eenvoudige maar verslavende upgradessysteem houdt spelers uren bezig met het ontdekken van steeds zeldzamere vissen.`,
    controls: `Klik om je hengel uit te werpen. Klik op het juiste moment om de diepte in te stellen. Beweeg de <strong>muis</strong> om vissen te vangen terwijl je lijn omhoogkomt. Verkoop vissen en upgrade!`,
  },
  'gunspin': {
    title: 'Gunspin — Wapenspin',
    description: `Schiet met een wapen om een projectiel zo ver mogelijk door de lucht te schieten. Gebruik de terugslag van elk schot om in de lucht te blijven en de afstand te vergroten. Upgrade je wapens voor meer kracht.

Gunspin is een uniek afstandsspel dat fysica en upgrades combineert. Elk wapen heeft een ander terugslag- en schadepatroon, waardoor spelers strategisch moeten kiezen welke wapens ze upgraden.`,
    controls: `Klik of tik om te schieten. Gebruik de terugslag om de richting en hoogte te beïnvloeden. Verzamel munten om wapens en vaardigheden te upgraden!`,
  },
  'vex-6': {
    title: 'VEX 6 — Parcoursloper',
    description: `Navigeer door verraderlijke parcoursen met vallen, timing-puzzels en uitdagende platformsecties. Gebruik muursprongen en snelle reflexen om elk level te voltooien.

VEX 6 bouwt voort op het succes van zijn voorgangers met nog meer creatieve levels en nieuwe bewegingsmechanieken. De serie is een van de meest populaire platform-spelreeksen in de browserwereld.`,
    controls: `Gebruik <strong>WASD</strong> of <strong>pijltjestoetsen</strong> om te bewegen en te springen. <strong>S</strong> of <strong>pijl omlaag</strong> om te glijden. Spring tegen muren voor muursprongen!`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Burritostad',
    description: `Lanceer een worstelende bison uit de ring en laat hem zo ver mogelijk stuiteren over gummibeertjes in Candyland. Koop upgrades om steeds verder te vliegen en ontsnap uit de snoepwereld.

Burrito Bison is een geliefd lanceer- en upgradespel ontwikkeld door Juicy Beast Studio. De hilarische premisse, kleurrijke graphics en verslavende upgrade-loop maken het een klassieker in het genre.`,
    controls: `Klik om te lanceren vanuit de ring. Klik op het juiste moment om op speciale gummibeertjes te stuiteren. Gebruik <strong>raketboosts</strong> wanneer beschikbaar. Koop upgrades tussen pogingen!`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Lappenpopstomp',
    description: `Schop, sla en lanceer een lappenpop zo ver en spectaculair mogelijk. Gebruik verschillende wapens en power-ups om de pop door obstakelparcoursen te slingeren en punten te scoren.

Ragdoll Hit maakt gebruik van ragdoll-fysica voor hilarische en onvoorspelbare animaties. Het spel is puur vermakelijk en biedt eindeloos plezier met zijn overdreven fysica en creatieve levels.`,
    controls: `Klik en sleep om de richting en kracht van je klap te bepalen. Gebruik power-ups om extra afstand en punten te behalen. Probeer alle levels te voltooien!`,
  },
  'soccer-random': {
    title: 'Soccer Random — Willekeurig Voetbal',
    description: `Speel hilarische een-op-een voetbalwedstrijden waarbij het veld, de bal en de omstandigheden bij elk doelpunt willekeurig veranderen. Scoor vijf doelpunten om de wedstrijd te winnen.

Soccer Random is onderdeel van de populaire Random Sports-serie en voegt een onvoorspelbaar element toe aan voetbal. Van gigantische ballen tot gladde ijsvelden — geen twee wedstrijden zijn hetzelfde.`,
    controls: `Speler 1: druk op <strong>W</strong> om te springen en te trappen. Speler 2: druk op de <strong>pijl omhoog</strong>. Het spel is één-knop per speler — eenvoudig maar chaotisch!`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Super Mario Broers',
    description: `Help Mario door het Paddenstoelkoninkrijk te rennen, over vijanden te springen en munten te verzamelen. Red Prinses Peach van de kwaadaardige Bowser in dit legendarische platformspel.

Super Mario Bros werd in 1985 uitgebracht door Nintendo en wordt beschouwd als een van de invloedrijkste videospellen aller tijden. Het spel redde de videogame-industrie na de crash van 1983 en maakte Mario tot het bekendste personage in gaming.`,
    controls: `Gebruik de <strong>pijltjestoetsen</strong> om te bewegen. Druk op <strong>Spatiebalk</strong> of <strong>Z</strong> om te springen. Ren, spring op vijanden en verzamel munten en power-ups!`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Honkbalbroers',
    description: `Sla homeruns en scoor punten in dit snelle, arcadeachtige honkbalspel. Met eenvoudige besturing en overdreven actie is elk potje een spektakel.

Baseball Bros combineert de spanning van honkbal met arcadeachtige overdrijving. Power-ups, speciale slagen en explosieve actie maken het een unieke sportgame die toegankelijk is voor iedereen.`,
    controls: `Klik of druk op <strong>Spatiebalk</strong> om te slaan wanneer de bal wordt geworpen. Timing is cruciaal — raak de bal op het juiste moment voor de beste klap!`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Honkbal 9',
    description: `Beheer een honkbalteam en speel complete wedstrijden met slaan, gooien en veldwerk. Upgrade je spelers en leid je team naar het kampioenschap.

Baseball 9 biedt een volledige honkbalervaring in een toegankelijk pakket. Het spel combineert teammanagement met actieve gameplay en laat spelers zowel de strategische als de actiekant van honkbal ervaren.`,
    controls: `Veeg of klik om te slaan bij het slaan. Richt en gooi bij het werpen. Volg de aanwijzingen op het scherm voor veldwerk. Upgrade je team tussen wedstrijden!`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Muziekmixer Fase 9',
    description: `Maak unieke muziekcomposities door personages naar het podium te slepen en hun geluiden te combineren. Ontdek speciale combinaties voor verborgen animaties en bonusnummers.

Sprunki Phase 9 is het nieuwste deel in de Sprunki-muziekcreatieserie, geïnspireerd door Incredibox. Het biedt een donkerder, atmosferischer geluidspalet dan eerdere fases en laat spelers experimenteren met nieuwe geluidseffecten.`,
    controls: `Sleep <strong>personages</strong> naar de podiumposities om geluiden toe te voegen. Combineer verschillende personages voor unieke muziek. Ontdek geheime combinaties voor speciale animaties!`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Sprunki Klikker',
    description: `Klik om punten te verdienen en ontgrendel Sprunki-personages en upgrades. Automatiseer je productie met helpers en bereik astronomische scores in dit verslavende incrementele spel.

Sprunki Clicker combineert het populaire Sprunki-universum met het verslavende clickergenre. Verzamel alle personages, ontgrendel speciale vaardigheden en bouw een ononstopbare puntenmachine.`,
    controls: `Klik op het <strong>Sprunki-personage</strong> om punten te verdienen. Koop upgrades en helpers in de winkel. Ontgrendel nieuwe personages naarmate je meer punten verzamelt!`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Sprunki Nachtmodus',
    description: `Creëer atmosferische nachtelijke muziekcomposities met een speciaal donker thema. Meng geluiden van mysterieuze personages voor unieke nachtelijke melodieën.

Sprunki Night Time voegt een sfeervolle nachtelijke draai toe aan de Sprunki-muziekervaring. De donkere visuele stijl en de mysterieuze geluiden creëren een unieke, betoverende sfeer die verschilt van de standaard Sprunki-fases.`,
    controls: `Sleep <strong>nachtpersonages</strong> naar het podium om geluiden toe te voegen. Experimenteer met verschillende combinaties voor unieke nachtelijke muziek. Zoek naar verborgen combinaties!`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Sprunki Volwassen',
    description: `Maak volwassen muziekcomposities met geavanceerdere beats en complexere geluidslagen. Deze versie biedt diepere muzikale mogelijkheden voor ervaren spelers.

Sprunki Grown Up is bedoeld voor spelers die meer uitdaging zoeken in hun muziekcreaties. Met geavanceerdere geluidsfragmenten en complexere combinaties biedt het een rijkere muzikale ervaring.`,
    controls: `Sleep <strong>personages</strong> naar het podium om geluidslagen toe te voegen. Combineer geavanceerde beats en melodieën. Ontdek complexe combinaties voor unieke composities!`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Sprunki Speeltuin',
    description: `Experimenteer vrijelijk met alle Sprunki-personages en geluiden in een open speelomgeving zonder beperkingen. Maak je eigen muziek zonder regels of doelen.

Sprunki Playground biedt een vrije creatieve ruimte waar spelers naar hartenlust kunnen experimenteren met alle beschikbare geluiden en personages. Het is de perfecte plek om nieuwe combinaties te ontdekken en je creativiteit de vrije loop te laten.`,
    controls: `Sleep alle beschikbare <strong>personages</strong> naar het podium. Er zijn geen regels — experimenteer vrij met alle geluiden en combinaties. Maak je eigen unieke composities!`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Gekke Kippen 3D',
    description: `Schiet op gekke kippen die overal opduiken in een kleurrijke 3D-omgeving. Mik zorgvuldig en schiet zo veel mogelijk kippen neer voor de tijd om is.

Crazy Chicken (Moorhuhn) is een klassieke Duitse spellenreeks die in 1999 begon als marketingcampagne en uitgroeide tot een geliefd franchise. De 3D-versie brengt het vertrouwde kippenschietplezier naar een modern jasje.`,
    controls: `Gebruik de <strong>muis</strong> om te richten en <strong>klik</strong> om te schieten. Zoek verborgen kippen voor bonuspunten. Schiet zoveel mogelijk kippen voor de tijd op is!`,
  },
};
