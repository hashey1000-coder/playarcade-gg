import type { GameTranslation } from '../gameTranslations';

export const DE_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Schiebe- und Verschmelzungspuzzle',
    description: `Schiebe nummerierte Kacheln auf einem 4×4-Raster und kombiniere gleiche Zahlen, um die schwer fassbare 2048-Kachel zu erreichen. Jede Wischbewegung verschmilzt identische Kacheln und erzeugt eine neue 2 oder 4 — plane mehrere Züge voraus, sonst füllt sich dein Brett schnell. Leicht zu lernen, teuflisch schwer zu meistern.

Erstellt vom italienischen Entwickler Gabriele Cirulli im März 2014, wurde 2048 über Nacht zum weltweiten Phänomen und inspirierte Hunderte von Varianten. Das Spiel basiert auf Threes! von Asher Vollmer, aber seine Open-Source-Veröffentlichung machte es zum meistgeklonten Browserspiel der Geschichte.`,
    controls: `Verwende die Pfeiltasten (↑ ↓ ← →) oder wische auf dem Handy, um alle Kacheln in eine Richtung zu bewegen. Kacheln mit der gleichen Zahl verschmelzen bei Berührung. Das Ziel ist es, eine 2048-Kachel zu erstellen.`,
  },
  'tetris': {
    title: 'Tetris — Klassisches Block-Puzzle',
    description: `Das zeitlose Puzzle mit fallenden Blöcken, das eine Generation prägte. Drehe und positioniere Tetrominos beim Fallen und vervollständige horizontale Linien, um sie zu löschen. Je höher dein Punktestand, desto schneller fallen die Steine.

Erfunden vom sowjetischen Software-Ingenieur Alexey Pajitnov 1985, hat sich Tetris über 520 Millionen Mal auf allen erdenklichen Plattformen verkauft. Der Name kombiniert das griechische Präfix „tetra“ (vier) mit Tennis.`,
    controls: `Verwende die Pfeiltasten: ← → zum Verschieben, ↑ zum Drehen, ↓ für sanften Fall. Drücke Leertaste für sofortigen Fall. Vervollständige Reihen, um sie zu löschen und Punkte zu sammeln.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Tippe zum Fliegen',
    description: `Navigiere einen kleinen Pixelvogel durch eine endlose Reihe grüner Röhren, indem du tippst, um mit den Flügeln zu schlagen. Ein Tippen lässt den Vogel aufsteigen; die Schwerkraft zieht ihn nach unten. Schaffst du über 50?

Flappy Bird wurde vom vietnamesischen Entwickler Dong Nguyen erstellt und im Mai 2013 veröffentlicht. Anfang 2014 wurde es die meistgeladene kostenlose App und verdiente etwa 50.000 $ pro Tag an Werbung.`,
    controls: `Klicke, tippe oder drücke eine beliebige Taste, um den Vogel flattern zu lassen. Ohne Eingabe zieht die Schwerkraft nach unten. Navigiere durch die Lücken zwischen den Röhren. Jede Röhre gibt einen Punkt.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — T-Rex-Läufer',
    description: `Laufe als der beliebte Chrome T-Rex durch eine Pixelwüste, springe über Kakteen und ducke dich unter Flugsauriern in diesem Endlos-Läufer. Die Geschwindigkeit steigt unaufhörlich.

Versteckt in der „Kein Internet“-Seite von Google Chrome seit 2014, wurde das Dino-Spiel von Sebastien Gabriel entworfen. Rund 270 Millionen Spiele werden pro Monat gespielt.`,
    controls: `Drücke Leertaste oder ↑ zum Springen über Kakteen. Drücke ↓ zum Ducken unter Flugsauriern. Auf dem Handy tippe zum Springen und wische nach unten zum Ducken. Der T-Rex läuft automatisch.`,
  },
  'snake': {
    title: 'Snake — Retro-Klassiker',
    description: `Führe eine wachsende Schlange über das Spielfeld, friss Nahrung zum Wachsen und vermeide deinen eigenen Schwanz und die Wände. Je länger du überlebst, desto länger und schwieriger zu kontrollieren wird sie.

Die Ursprünge von Snake gehen auf das Arcade-Spiel Blockade von 1976 zurück. Es wurde zum kulturellen Phänomen, als Nokia 1998 eine Version auf seinen Handys vorinstallierte.`,
    controls: `Verwende die Pfeiltasten (↑ ↓ ← →) oder WASD, um die Richtung zu ändern. Die Schlange bewegt sich kontinuierlich. Friss Nahrung zum Wachsen und Punkte sammeln. Vermeide Wände und deinen eigenen Schwanz.`,
  },
  'pac-man': {
    title: 'Pac-Man — Arcade-Klassiker',
    description: `Friss dich durch ein Labyrinth voller Punkte und weiche vier bunten Geistern aus — Blinky, Pinky, Inky und Clyde. Schnappe dir einen Power-Pellet, um den Spieß umzudrehen.

Veröffentlicht von Namco im Mai 1980, wurde Pac-Man das umsatzstärkste Arcade-Spiel aller Zeiten mit über 2,5 Milliarden Dollar an Münzeinnahmen.`,
    controls: `Verwende die Pfeiltasten, um Pac-Man durch das Labyrinth zu navigieren. Friss alle Punkte, um das Level abzuschließen. Schnappe dir die Power-Pellets in den Ecken, um Geister vorübergehend blau zu färben.`,
  },
  'minesweeper': {
    title: 'Minesweeper — Minenpuzzle',
    description: `Decke Felder auf einem Raster auf, ohne versteckte Minen auszulösen. Jede aufgedeckte Zahl zeigt dir, wie viele Minen in den acht umliegenden Zellen lauern — nutze Logik, um sichere Felder zu ermitteln.

Minesweeper wurde von Robert Donner und Curt Johnson für Microsoft Windows 3.1 im Jahr 1990 erstellt, um Nutzern das Rechts- und Linksklicken beizubringen.`,
    controls: `Linksklick zum Aufdecken eines Feldes. Zahlen zeigen die Anzahl angrenzender Minen. Rechtsklick zum Markieren verdächtiger Minen. Nutze Logik, um sichere Felder zu ermitteln.`,
  },
  'solitaire': {
    title: 'Solitär — Klondike-Kartenspiel',
    description: `Das ultimative Einzelspieler-Kartenspiel. Sortiere ein gemischtes Kartendeck in vier Grundstapel nach Farbe, vom Ass zum König, indem du Karten zwischen sieben Tableau-Spalten bewegst.

Klondike-Solitär erlangte Weltbekannt­heit, nachdem Microsoft es 1990 in Windows 3.0 aufnahm. Entworfen vom Praktikanten Wes Cherry.`,
    controls: `Klicke auf Karten, um sie auszuwählen, dann klicke auf ein gültiges Ziel. Baue Spalten in absteigender Reihenfolge mit wechselnden Farben. Bewege Asse zu den Grundstapeln und baue nach Farbe.`,
  },
  'chess': {
    title: 'Schach — Spiele gegen den Computer',
    description: `Fordere einen Computergegner im berühmtesten Strategiespiel der Welt heraus. Kommandiere eine Armee von 16 Figuren über ein 64-Felder-Brett.

Schach entstand in Indien im 6. Jahrhundert als „Chaturanga“ und verbreitete sich über die Seidenstraße nach Persien und Europa. Heute spielen über 600 Millionen Menschen regelmäßig.`,
    controls: `Klicke auf eine Figur, um sie auszuwählen, dann klicke auf das Zielfeld. Gültige Züge werden hervorgehoben. Standardregeln einschließlich Rochade, En-passant-Schlagen und Bauernumwandlung.`,
  },
  'checkers': {
    title: 'Dame — Brettspiel',
    description: `Springe und fange die Spielsteine deines Gegners auf einem 8×8-Brett. Bewege dich diagonal, verkette mehrfache Sprünge und kröne deine Steine zu mächtigen Damen, die sich rückwärts bewegen können.

Dame ist eines der ältesten Brettspiele, mit einer Version, die in der antiken Stadt Ur gefunden wurde und auf 3000 v. Chr. datiert.`,
    controls: `Klicke auf einen Stein, um ihn auszuwählen, dann klicke auf das diagonale Zielfeld. Über einen gegnerischen Stein springen fängt ihn. Erreiche die gegenüberliegende Seite, um einen Stein zu krönen.`,
  },
  'sudoku': {
    title: 'Sudoku — Zahlenlogik-Puzzle',
    description: `Fülle ein 9×9-Raster, sodass jede Zeile, Spalte und 3×3-Box die Ziffern 1 bis 9 ohne Wiederholung enthält. Nutze reine Logik, um jede fehlende Zahl zu ermitteln.

Das moderne Sudoku wurde vom amerikanischen Architekten Howard Garns 1979 unter dem Namen „Number Place“ erfunden. Es wurde zum weltweiten Trend, nachdem es in Japan populär wurde.`,
    controls: `Klicke auf eine leere Zelle und tippe eine Zahl von 1 bis 9. Jede Zeile, Spalte und 3×3-Box muss alle Ziffern von 1 bis 9 genau einmal enthalten.`,
  },
  'wordle': {
    title: 'Wordle Unlimited — Wort-Ratespiel',
    description: `Errate das geheime Fünf-Buchstaben-Wort in sechs Versuchen oder weniger. Farbige Kacheln zeigen an, welche Buchstaben korrekt (grün), falsch platziert (gelb) oder nicht vorhanden (grau) sind.

Wordle wurde von Josh Wardle als Geschenk für seine Partnerin 2021 erstellt. Es wuchs von 90 Spielern auf über 2 Millionen täglich im Januar 2022.`,
    controls: `Tippe ein Fünf-Buchstaben-Wort und drücke Enter. Grün = richtige Position. Gelb = Buchstabe im Wort, aber an anderer Stelle. Grau = Buchstabe nicht im Wort. Du hast sechs Versuche.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Idle-Keksspiel',
    description: `Klicke auf den riesigen Keks, um Kekse zu backen, dann gib sie für Upgrades aus — Großmütter, Farmen, Fabriken und Portale — die automatisch noch mehr backen.

Erstellt vom französischen Programmierer Julien „Orteil“ Thiennot 2013, war Cookie Clicker Wegbereiter des Idle-Genres. 2021 auf Steam veröffentlicht mit 97% positiven Bewertungen.`,
    controls: `Klicke auf den großen Keks, um Kekse zu produzieren. Gib Kekse für Gebäude im Shop aus, um die Produktion zu automatisieren. Kaufe Upgrades, um die Produktion zu vervielfachen.`,
  },
  'connect-four': {
    title: 'Vier gewinnt — Strategie mit Chips',
    description: `Wirf farbige Chips in ein vertikales Raster und versuche, vier in einer Reihe zu verbinden — horizontal, vertikal oder diagonal — vor deinem Gegner.

Vier gewinnt wurde erstmals 1974 von Milton Bradley verkauft. 1988 bewies Victor Allis, dass der erste Spieler immer gewinnen kann, wenn er in der mittleren Spalte beginnt.`,
    controls: `Klicke auf eine Spalte, um deinen Chip einzuwerfen. Chips fallen durch die Schwerkraft nach unten. Verbinde vier deiner Farbe in einer Reihe zum Sieg.`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — X und O',
    description: `Setzt abwechselnd X und O auf ein 3×3-Raster und versucht, drei in einer Reihe zu bekommen. Spiel gegen einen Freund oder fordere die KI heraus.

Tic-Tac-Toe ist eines der ältesten bekannten Spiele, mit Beispielen in Ruinen des alten Ägyptens aus 1300 v. Chr.`,
    controls: `Klicke auf ein leeres Feld, um dein Zeichen zu setzen. Bringe drei Zeichen in einer horizontalen, vertikalen oder diagonalen Reihe zum Sieg.`,
  },
  'reversi': {
    title: 'Reversi — Othello-Strategiespiel',
    description: `Setze Spielsteine auf ein 8×8-Brett und drehe die gegnerischen Steine um, indem du sie einschließt. Jeder Zug kann das Machtgleichgewicht verändern.

Reversi wurde 1883 erfunden. Die moderne Version, Othello, wurde 1971 von Goro Hasegawa populär gemacht.`,
    controls: `Klicke auf ein leeres Feld, um deinen Stein zu setzen. Gegnerische Steine, die zwischen deinen eingeschlossen sind, wechseln zu deiner Farbe.`,
  },
  'hextris': {
    title: 'Hextris — Hexagonales Puzzle',
    description: `Eine faszinierende Wendung des klassischen Fallblock-Puzzles, angesiedelt in einem rotierenden Hexagon. Farbige Blöcke fallen von allen sechs Seiten zum Zentrum.

Hextris wurde 2014 von Studenten der University of Maryland während eines Hackathons erstellt.`,
    controls: `Verwende ← und → (oder A und D), um das zentrale Hexagon zu drehen. Verbinde drei oder mehr gleichfarbige Blöcke in einer Reihe, um sie zu beseitigen.`,
  },
  'word-search': {
    title: 'Wortsuche — Puzzle mit versteckten Wörtern',
    description: `Durchsuche ein Raster aus gemischten Buchstaben, um versteckte Wörter horizontal, vertikal und diagonal zu finden. Wörter können in beide Richtungen gelesen werden.

Wortsuch-Puzzle wurden 1968 von Norman E. Gibat erfunden.`,
    controls: `Klicke und ziehe über Buchstaben, um ein Wort hervorzuheben. Wörter können in jeder Richtung versteckt sein.`,
  },
  'falling-blocks': {
    title: 'Fallende Blöcke — Würfelstapler',
    description: `Farbige Würfel regnen herab und du musst sie stapeln und kombinieren, bevor sie sich bis oben aufstapeln. Platziere Blöcke strategisch für Farbkombos.

Fallblock-Spiele haben ihren Ursprung in Tetris (1985) und haben sich in Dutzende von Varianten entwickelt.`,
    controls: `Verwende ← und →, um das Teil zu bewegen. Drücke ↑ oder Leertaste zum Drehen. Drücke ↓ für schnellen Fall. Kombiniere Farben und vervollständige Reihen, um Blöcke zu beseitigen.`,
  },
  'card-solitaire': {
    title: 'Klassisches Solitär — Patience-Kartenspiel',
    description: `Eine saubere Version des beliebtesten Einzelspieler-Kartenspiels der Welt. Baue absteigende Folgen mit wechselnden Farben und bewege alle 52 Karten zu den vier Grundstapeln.

Solitär-Spiele sind seit dem 18. Jahrhundert beliebt. Napoleon Bonaparte war während seines Exils ein begeisterter Spieler.`,
    controls: `Klicke auf eine Karte, um sie auszuwählen, dann klicke auf ein gültiges Ziel. Baue Spalten abwechselnd rot und schwarz. Asse gehen auf die Grundstapel.`,
  },
  'slope': {
    title: 'Slope — 3D-Kugel-Laufspiel',
    description: `Steuere eine Kugel, die eine neonbeleuchtete Piste mit steigender Geschwindigkeit hinunterrollt. Weiche Hindernissen aus, navigiere enge Kurven und vermeide es, vom Rand zu fallen.

Slope wurde von Rob Kay entwickelt und ist zu einem der beliebtesten Browserspiele weltweit geworden. Es nutzt WebGL für flüssiges 3D-Rendering.`,
    controls: `Verwende ← und → oder A und D, um die Kugel zu steuern. Vermeide rote Hindernisse und Lücken. Die Kugel beschleunigt kontinuierlich.`,
  },
  'among-us': {
    title: 'Among Us — Soziale Deduktion',
    description: `Arbeite mit deiner Crew zusammen, um Aufgaben auf einem Raumschiff zu erledigen — aber Vorsicht, unter euch sind Betrüger. Diskutiere, beschuldige und stimme ab, um Verdächtige hinauszuwerfen.

Among Us wurde von InnerSloth entwickelt und explodierte 2020 in der Popularität. Auf seinem Höhepunkt hatte es 500 Millionen aktive monatliche Spieler.`,
    controls: `Verwende WASD oder Pfeiltasten zur Fortbewegung. Klicke auf Aufgaben, um sie zu erledigen. Melde Leichen oder rufe Notfallsitzungen ein.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Rhythmus-Plattformer',
    description: `Springe und fliege durch eine pulsierende Welt voller Hindernisse, synchronisiert mit elektronischer Musik. Tippe, um über Stacheln zu springen und Schwerkraftportale zu navigieren.

Geometry Dash wurde vom schwedischen Entwickler Robert Topala 2013 erstellt. Es wurde über 200 Millionen Mal heruntergeladen mit über 80 Millionen benutzergenerierten Levels.`,
    controls: `Klicke, tippe oder drücke Leertaste zum Springen. Halte gedrückt, um im Schiff-Modus weiterzuspringen. Hindernisse sind mit der Musik synchronisiert.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — 3D-Tunnel-Ausweichspiel',
    description: `Rase durch einen sich verdrehenden und farbwechselnden 3D-Tunnel mit halsbrecherischer Geschwindigkeit und weiche Barrieren aus, die mit kaum einer Sekunde Vorwarnung auftauchen.

Tunnel Rush wurde zu einer viralen Sensation als eines der zugänglichsten aber herausforderndsten Browserspiele.`,
    controls: `Verwende ← und → oder A und D, um Hindernissen im Tunnel auszuweichen. Reagiere schnell — bei hoher Geschwindigkeit hast du weniger als eine Sekunde.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Ziele und Kombiniere',
    description: `Ziele und schieße farbige Blasen, um Gruppen von drei oder mehr gleichen Farben zu bilden und sie vom Brett platzen zu lassen. Räume alle Blasen ab, um jedes Level zu gewinnen.

Bubble Shooter hat seine Wurzeln in Puzzle Bobble von Taito (1994). Die Browser-Version wurde zu einem der meistgespielten Casual-Spiele im Internet.`,
    controls: `Ziele mit der Maus und klicke, um eine Blase zu schießen. Kombiniere drei oder mehr gleicher Farbe zum Platzen.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitär — Karten-Herausforderung',
    description: `Sortiere Karten in absteigenden Folgen der gleichen Farbe über zehn Spalten. Vervollständige eine Folge König-Ass, um sie zu entfernen.

Spider Solitär war seit 1998 in Microsoft Windows enthalten und wurde zu einem der meistgespielten Spiele der Geschichte.`,
    controls: `Klicke auf eine Karte, um sie auszuwählen, dann klicke auf ein gültiges Ziel. Nur gleichfarbige Folgen bewegen sich als Gruppe. Vervollständige König-Ass zum Entfernen.`,
  },
  'mahjong': {
    title: 'Mahjong — Klassisches Kachel-Paarspiel',
    description: `Entferne Paare identischer Kacheln aus einer aufwendigen mehrschichtigen Anordnung. Nur „freie“ Kacheln können ausgewählt werden. Räume alle Kacheln ab, um zu gewinnen.

Mahjong-Solitär wurde 1981 von Brodie Lockard auf dem PLATO-System erstellt.`,
    controls: `Klicke auf eine freie Kachel, um sie auszuwählen, dann klicke auf eine andere freie identische Kachel, um das Paar zu entfernen. Nutze den Hinweis-Button, wenn du nicht weiterkommst.`,
  },
  'freecell': {
    title: 'FreeCell — Strategisches Solitär',
    description: `Alle 52 Karten werden offen in acht Spalten verteilt — keine versteckten Informationen, jedes Spiel ist ein reiner Strategietest. Nutze vier freie Zellen als temporären Speicher.

FreeCell wurde durch seine Aufnahme in Windows seit Windows 95 populär. Nur die Verteilung #11982 ist unlösbar.`,
    controls: `Klicke auf eine Karte, dann klicke auf eine Zielspalte oder freie Zelle. Baue Spalten in absteigender Reihenfolge mit wechselnden Farben. Nutze die vier freien Zellen weise.`,
  },
  'backgammon': {
    title: 'Backgammon — Klassisches Brettspiel',
    description: `Würfle und wettlaufe mit deinen fünfzehn Steinen über das Brett. Blockiere, schlage und übertriff die KI in diesem zeitlosen Strategiespiel.

Backgammon ist eines der ältesten Brettspiele mit Ursprüngen vor 5.000 Jahren in Mesopotamien.`,
    controls: `Klicke den Würfel-Button zum Würfeln. Klicke auf einen Stein, dann klicke auf den Zielpunkt. Du musst beide Würfel nutzen, wenn möglich.`,
  },
  'hangman': {
    title: 'Galgenmännchen — Wort-Ratespiel',
    description: `Errate das versteckte Wort Buchstabe für Buchstabe, bevor die Zeichnung des Galgenmännchens vollständig ist. Jeder Fehlversuch fügt ein Körperteil hinzu.

Galgenmännchen wird mindestens seit der viktorianischen Ära gespielt und ist eines der bekanntesten Wortspiele der Welt.`,
    controls: `Klicke auf Buchstaben zum Raten. Richtige Buchstaben erscheinen an ihren Positionen. Du hast 6-8 Fehlversuche.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Schneide und Zerteile',
    description: `Zerteile Früchte, die über den Bildschirm fliegen, mit deinem Finger oder der Maus. Schneide mehrere in einer Bewegung für Kombos, aber Vorsicht vor Bomben.

Fruit Ninja wurde von Halfbrick Studios entwickelt und 2010 veröffentlicht. Es wurde über 1 Milliarde Mal heruntergeladen.`,
    controls: `Wische über den Bildschirm oder klicke und ziehe, um Früchte zu schneiden. Schneide mehrere in einer Bewegung für Kombos. Vermeide Bomben.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Motorradrennen',
    description: `Fahre dein Motorrad durch 25 Strecken voller explosiver Fässer, riesiger Loopings und tödlicher Sägen. Mache Stunts für Zeitboni.

Moto X3M wurde 2016 von Madpuffers entwickelt. Die Serie hat über 500 Millionen Spiele verzeichnet.`,
    controls: `Drücke HOCH oder W zum Beschleunigen, RUNTER oder S zum Bremsen. LINKS/RECHTS zum Neigen in der Luft. Mache Stunts für Boni.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Ein-Tasten-Drift',
    description: `Meistere die Kunst des Driftens mit nur einer Taste. Tippe, um nach rechts zu lenken, loslassen zum Driften nach links. Bleib auf der Straße.

Drift Boss wurde von Madpuffers erstellt, bekannt für ihre zugänglichen Ein-Tasten-Spiele.`,
    controls: `Klicke oder tippe, um nach rechts zu lenken. Loslassen zum Driften nach links. Synchronisiere deine Taps, um auf der Straße zu bleiben.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — 2-Spieler-Basketball',
    description: `Wähle aus legendären Teams und kämpfe in schnellen Matches mit Super-Würfen, Blocks und Dunks. Spiel gegen die CPU oder fordere einen Freund heraus.

Basketball Legends präsentiert karikierte Spieler mit Spezialzügen, inspiriert von NBA-Superstars.`,
    controls: `Spieler 1: WASD zum Bewegen, B zum Werfen, N für Super-Wurf, M zum Blocken. Spieler 2: Pfeiltasten zum Bewegen, K zum Werfen, L für Super-Wurf.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Balanciere das Ei',
    description: `Fahre ein Auto bergauf mit einem zerbrechlichen Ei obendrauf. Navigiere über unebenes Gelände, ohne das Ei fallen zu lassen.

Eggy Car verwandelt Autofahren in ein Präzisions-Physik-Puzzle. Das Ei gehorcht realistischer Schwerkraft und Trägheit.`,
    controls: `Halte gedrückt zum Beschleunigen. Loslassen zum Rollen lassen. Navigiere die Hügel vorsichtig. Fahre so weit wie möglich.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Plattformen zerstören',
    description: `Zertrümmere rotierende Plattformen, indem du tippst, um den Ball fallen zu lassen. Räume farbige Plattformen ab, aber vermeide schwarze. Baue Geschwindigkeit für den Feuermodus auf.

Stack Ball kombiniert Helix-Abstieg mit befriedigender Zerstörungsphysik.`,
    controls: `Tippe und halte, um den Ball fallen zu lassen. Loslassen zum Stoppen. Vermeide schwarze Plattformen. Zerstöre mehrere hintereinander für den Feuermodus.`,
  },
  'vex-7': {
    title: 'Vex 7 — Stickman-Plattformer',
    description: `Navigiere deinen Stickman durch brutale Hindernisparcours mit rotierenden Klingen, Stacheln und beweglichen Plattformen. Über 10 herausfordernde Akte.

Vex 7 ist der neueste Teil einer der beliebtesten Plattformer-Serien. Über 1 Milliarde Spiele insgesamt.`,
    controls: `Verwende WASD oder Pfeiltasten zum Bewegen und Springen. Drücke S zum Rutschen. Springe an Wänden. Vermeide Stacheln, Klingen und Gefahren.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Wirf und Fange',
    description: `Wirf deine Angelleine und fange Fische, indem du den Haken beim Sinken gleitest. Gib Geld für Längen-, Geschwindigkeits- und Offline-Verdienst-Upgrades aus.

Tiny Fishing kombiniert Idle-Mechaniken mit aktivem Angeln. Legendäre Fische lauern unter 100 Metern.`,
    controls: `Klicke und halte zum Werfen. Bewege die Maus, um Fische zu fangen. Fange das Maximum pro Wurf. Gib Verdienst für Upgrades aus.`,
  },
  'gunspin': {
    title: 'GunSpin — Waffenwerfer',
    description: `Wirf deine Waffe und halte sie am Rotieren, indem du im richtigen Moment feurst. Jeder Schuss treibt die Waffe weiter. Timen deine Klicks für maximale Distanz.

GunSpin kombiniert Projektilphysik mit Idle-Upgrade-Systemen.`,
    controls: `Klicke oder tippe zum Feuern. Jeder Schuss erzeugt Rükstoß, der die Waffe antreibt. Time deine Schüsse, um die Höhe zu halten. Sammle Münzen für Upgrades.`,
  },
  'vex-6': {
    title: 'Vex 6 — Stickman-Plattformer',
    description: `Laufe, springe, rutsche und klettere an Wänden durch tückische Hindernisparcours. Vex 6 setzt die Serie mit neuen Akten fort.

Vex 6 führt Schwimmen mit Luftanzeige, Sägen auf Schienen und bröckelnde Plattformen ein.`,
    controls: `Verwende WASD oder Pfeiltasten zum Bewegen und Springen. Drücke S zum Rutschen. Springe an Wänden. Vermeide Stacheln, Sägen und Gruben.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Startspiel',
    description: `Schla, pralle und katapultiere dich durch Wellen von Gummibärchen. Starte Burrito Bison aus dem Wrestling-Ring.

Burrito Bison: Launcha Libre bietet drei spielbare Wrestler mit einzigartigen Spezialfähigkeiten. Ursprünglich ein Flash-Spiel von Juicy Beast Studios.`,
    controls: `Klicke zum Starten aus dem Ring. Klicke zum Abprallen auf Gummibärchen. Nutze Spezialfähigkeiten. Verdiene Geld für Upgrades.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Physik-Prügler',
    description: `Verpasse deinem Ragdoll-Gegner kraftvolle Schläge und beobachte das physikbasierte Chaos. Ziele, lade auf und schlage zu, um Stickmen fliegen zu lassen.

Ragdoll Hit nutzt eine realistische Physik-Engine, die Aufprallkraft und Kollisionen unabhängig berechnet.`,
    controls: `Klicke und ziehe, um deinen Schlag zu zielen. Loslassen zum Zuschlagen. Schlage Gegner gegen Hindernisse für Extraschaden.`,
  },
  'soccer-random': {
    title: 'Soccer Random — 2-Spieler-Fußball',
    description: `Ein urkomisches Fußballspiel, bei dem sich Regeln, Feld und Spieler jede Runde ändern. Schieße Tore mit wackelnden Ragdoll-Spielern.

Soccer Random randomisiert alles pro Runde — Ballgröße, Spieleranzahl, Oberfläche und sogar die Schwerkraft.`,
    controls: `Spieler 1: Drücke W zum Schießen. Spieler 2: Drücke PFEIL HOCH. Schieße 5 Tore zum Sieg. Das Feld ändert sich jede Runde.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Klassischer Plattformer',
    description: `Der legendäre Seitenscroller-Plattformer. Führe Mario durch das Pilzkönigreich, stampfe Goombas, zerschlage Blöcke und rette Prinzessin Peach.

Super Mario Bros wurde 1985 von Nintendo veröffentlicht und gilt als das einflussreichste Videospiel aller Zeiten. Entworfen von Shigeru Miyamoto, verkaufte es sich über 40 Millionen Mal.`,
    controls: `Verwende Pfeiltasten, um Mario zu bewegen. Drücke Z oder HOCH zum Springen. Drücke X zum Rennen/Schießen. Stampfe Feinde, indem du auf ihnen landest. Sammle Münzen und Power-ups.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Mehrspieler-Baseball',
    description: `Tritt an den Schlag in diesem rasanten Baseball-Spiel mit Cartoon-Spielern und Arcade-Action. Wirf, schlage und verteidige dich zum Sieg.

Baseball Bros kombiniert vereinfachte Mechaniken mit kompetitivem Gameplay. Schnelle 3-Innings-Matches.`,
    controls: `Klicke zum Werfen oder Schlagen. Verwende die Maus zum Zielen. Time deinen Klick, um den Ball zu treffen. Verwende Pfeiltasten für die Verteidiger.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Team-Manager',
    description: `Manage dein eigenes Baseball-Team und tritt in Ligen und Turnieren an. Rekrutiere Spieler, verbessere Fähigkeiten und führe deine Mannschaft.

Baseball 9 kombiniert Team-Management mit Feld-Action. Rekrutiere Spieler mit einzigartigen Statistiken.`,
    controls: `Klicke zum Schlagen. Ziele und klicke zum Werfen. Manage dein Team zwischen den Spielen.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Musik-Ersteller',
    description: `Erstelle Musikmixes durch Drag & Drop animierter Charaktere auf die Bühne. Jeder Sprunki-Charakter fügt eine andere Soundschleife hinzu.

Sprunki Phase 9 ist der neunte Teil der Sprunki-Musikerstellungsserie, inspiriert von Incredibox.`,
    controls: `Ziehe Charaktere auf die Bühne, um ihren Sound hinzuzufügen. Klicke zum Entfernen. Experimentiere mit Kombinationen, um Bonus-Animationen zu entdecken.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Musik-Idle-Spiel',
    description: `Klicke, um Beats zu verdienen und neue Sprunki-Charaktere freizuschalten. Jedes Upgrade fügt neue Sounds zu deiner Komposition hinzu.

Sprunki Clicker fusioniert Idle-Clicker-Mechaniken mit dem musikalischen Sprunki-Universum.`,
    controls: `Klicke, um Beats zu verdienen. Gib Beats für Upgrades aus. Schalte neue Charaktere und Sound-Pakete frei.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Nächtlicher Musik-Mixer',
    description: `Erstelle unheimliche Melodien in diesem nächtlichen Sprunki-Mixer. Ziehe gruselige Charaktere, um Schichten von Rhythmen und geisterhaften Stimmen zu erstellen.

Sprunki Night Time reimaginiert die Sprunki-Formel mit einer dunklen, nächtlichen Ästhetik.`,
    controls: `Ziehe Charaktere auf die Bühne, um ihren Sound hinzuzufügen. Finde spezielle Kombinationen für Bonus-Animationen.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Reifer Musik-Mixer',
    description: `Eine weiterentwickelte Version der Sprunki-Musikerstellung mit anspruchsvolleren Sounds und reifen Designs. Baue komplexe Tracks.

Sprunki Grown Up präsentiert erwachsene Versionen der klassischen Charaktere mit komplexeren Soundelementen.`,
    controls: `Ziehe weiterentwickelte Charaktere auf die Bühne. Experimentiere mit Schichten für reichere Kompositionen.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Musik-Sandbox',
    description: `Das ultimative Sprunki-Sandbox-Erlebnis mit allen Charakteren und Sounds von Anfang an freigeschaltet. Mische und experimentiere frei.

Sprunki Playground entfernt alle Fortschrittsbarrieren und gibt sofortigen Zugang zu jedem Charakter und Sound.`,
    controls: `Ziehe beliebige Charaktere auf die Bühne. Erstelle Soundschichten frei. Nutze den Aufnahme-Button, um deinen Mix zu speichern.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Schießbude',
    description: `Ziele auf verrückte Hühner, die durch 3D-Landschaften fliegen, in dieser Arcade-Schießbude. Klicke, um die Hühner abzuschießen.

Crazy Chicken (Moorhuhn) entstand 1999 als Werbespiel und wurde mit über 10 Millionen Downloads zur viralen Sensation.`,
    controls: `Bewege die Maus zum Zielen. Klicke zum Schießen. Suche nach versteckten Bonuszielen. Goldene Hühner geben Extrapunkte.`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — American-Football-Manager',
    description: `Leite dein eigenes American-Football-Team in diesem Sportsimulator im Retro-Stil. Rekrutiere Spieler, entwickle Taktiken und führe dein Franchise zum Meistertitel.

Retro Bowl verbindet Team-Management mit Arcade-Gameplay auf dem Feld. Steuere Pässe und Laufspielzüge und kümmere dich gleichzeitig um Kabine, Verträge und Teammoral.`,
    controls: `Wische, um den Ball zu deinen Empfängern zu werfen. Tippe, um Verteidigern beim Laufen auszuweichen. Verwalte deinen Kader zwischen den Spielen.`,
  },
  'run-3': {
    title: 'Run 3 — Endloser Weltraumlauf',
    description: `Renne, springe und trotze der Schwerkraft durch schwebende Tunnel im Weltall. Wechsle zwischen Wänden und Decke, um den Lücken auf deinem Weg auszuweichen.

Run 3 erweitert die Serie mit Dutzenden neuer Level, mehreren freischaltbaren Charakteren und einem endlosen Erkundungsmodus. Jeder Charakter hat einzigartige Fähigkeiten, die dein Spielerlebnis verändern.`,
    controls: `Verwende Pfeiltasten oder A/D zum Bewegen. Drücke LEERTASTE oder HOCH zum Springen. Laufe an Wänden entlang, um die Schwerkraft zu ändern.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Endloser Hüpfer',
    description: `Überquere verkehrsreiche Straßen, reißende Flüsse und Bahngleise in diesem endlosen Hüpfspiel im Frogger-Stil. Komme so weit wie möglich, ohne überfahren zu werden.

Crossy Road bietet Hunderte sammelbare Charaktere und abwechslungsreiche Schauplätze. Jeder Versuch ist dank prozeduraler Geländegenerierung einzigartig.`,
    controls: `Tippe oder drücke LEERTASTE, um nach vorne zu hüpfen. Verwende Pfeiltasten, um dich seitlich zu bewegen. Bleib nicht zu lange stehen, sonst schnappt dich der Adler.`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Füttere Om Nom mit Bonbons',
    description: `Schneide die Seile im richtigen Moment durch, damit das Bonbon in Om Noms Mund fällt. Löse immer kniffligere Physik-Rätsel.

Cut the Rope führt Luftblasen, Luftkissen, Teleporter und weitere Mechaniken über Hunderte von Leveln ein. Sammle alle drei Sterne pro Level für die perfekte Wertung.`,
    controls: `Wische mit dem Finger oder der Maus, um Seile durchzuschneiden. Tippe auf Blasen, um sie zum Platzen zu bringen. Time deine Schnitte, um alle Sterne zu sammeln.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Schwingen & Fliegen',
    description: `Schwinge dich von Haken zu Haken als akrobatisches Strichmännchen. Lass im perfekten Moment los, um durch die Luft zu fliegen und das Ziel zu erreichen.

Stickman Hook bietet Hunderte Level mit steigendem Schwierigkeitsgrad und Dutzende freischaltbare Charaktere. Die Schwungphysik ist intuitiv, aber schwer zu meistern.`,
    controls: `Halte gedrückt, um dich am nächsten Punkt einzuhaken. Loslassen, um dich zu lösen und zu fliegen. Time deine Schwünge, um Schwung aufzubauen.`,
  },
  'drive-mad': {
    title: 'Drive Mad — Physik-Fahrherausforderung',
    description: `Steuere Fahrzeuge über Strecken voller unmöglicher Hindernisse in diesem Physik-Fahrspiel. Halte die Balance und vermeide es umzukippen, um das Ziel zu erreichen.

Drive Mad stellt deine Geduld und dein Geschick auf die Probe — mit steilen Rampen, wackeligen Plattformen und Präzisionssprüngen. Jedes Level ist ein eigenes Fahr-Puzzle.`,
    controls: `Verwende Pfeiltasten oder W/S zum Beschleunigen und Bremsen. Halte das Fahrzeug im Gleichgewicht, damit es nicht umkippt. Erreiche die Zielflagge, um das Level abzuschließen.`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Gebietseroberung',
    description: `Erweitere dein Territorium, indem du den Boden auf deinem Weg einfärbst, in diesem .io-Mehrspieler-Spiel. Kehre in deine sichere Zone zurück, um das umschlossene Gebiet zu beanspruchen.

Paper.io 2 ist ein Echtzeit-Strategiespiel, in dem du Ehrgeiz und Vorsicht abwägen musst. Je weiter du dich von deinem Gebiet entfernst, desto größer die Belohnung — aber auch das Risiko.`,
    controls: `Verwende Pfeiltasten oder wische, um die Richtung zu ändern. Umschließe leere Flächen und kehre zu deinem Gebiet zurück, um sie zu beanspruchen. Lass niemanden deine Spur kreuzen.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Endloser U-Bahn-Lauf',
    description: `Rase mit Höchstgeschwindigkeit über die Gleise und weiche Zügen, Barrieren und Hindernissen aus — mit Jake und seinen Freunden. Sammle Münzen und Power-ups, um deinen Rekord zu brechen.

Subway Surfers ist eines der meistgeladenen Handyspiele aller Zeiten, mit regelmäßig wechselnden Themen-Schauplätzen und speziellen Surfbrettern mit einzigartigen Fähigkeiten.`,
    controls: `Wische seitlich, um die Spur zu wechseln. Wische nach oben zum Springen und nach unten zum Rutschen. Sammle Power-ups wie den Münzmagnet und das Jetpack.`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Endlose Jetpack-Action',
    description: `Schnall dir Barry Steakfries' Jetpack um und flieg durch ein Geheimlabor — vorbei an Lasern, Raketen und Elektrofeldern. Sammle Münzen und Spezialfahrzeuge.

Jetpack Joyride verbindet rasante Action mit Sammel-Mechaniken. Schalte verschiedene Jetpacks mit einzigartigen visuellen Effekten frei und erfülle Missionen für Extrabelohnungen.`,
    controls: `Halte gedrückt, um das Jetpack zu aktivieren und aufzusteigen. Loslassen, um zu sinken. Weiche Hindernissen aus und sammle Spezialfahrzeuge für vorübergehenden Schutz.`,
  },
  'fireboy-and-watergirl': {
    title: 'Fireboy and Watergirl — Waldtempel',
    description: `Steuere zwei gegensätzliche Helden durch 32 kooperative Rätsellevel. Fireboy ist feuerresistent, Watergirl wasserresistent — berühre das falsche Element und du stirbst sofort. Betätige Hebel, um Tore zu öffnen, und führe beide Charaktere gleichzeitig zu ihren Ausgängen.

Das Spiel wurde 2009 veröffentlicht und ist einer der beliebtesten Browserspiele aller Zeiten mit über 500 Millionen Spielen in fünf Teilen. Weltweit nutzen Lehrer es als Teamarbeit-Übung.`,
    controls: `Spieler 1 (Fireboy): Pfeiltasten zum Bewegen und Springen. Spieler 2 (Watergirl): WASD zum Bewegen. Fireboy stirbt in Wasser, Watergirl in Feuer. Beide sterben in grünem Schleim. Führt beide gleichzeitig zu den farblich passenden Ausgangstüren.`,
  },
  'ovo': {
    title: 'OvO — Parkour-Plattformer',
    description: `Sprinte, gleite und springe durch über 40 präzise Plattformlevel. Meistere den Tauchstoß zum Gleiten unter Hindernissen und Wandsprünge für kürzere Routen.

Von Dedragames entwickelt und 2021 viral. Speedrunner schaffen das gesamte Spiel in unter 3 Minuten.`,
    controls: `Pfeiltasten oder WASD zum Laufen. Leertaste oder ↑ zum Springen. ↓ beim Fallen für Tauchstoß. Im Laufen Tauchstoß für Slide. An Wand springen für Wandsprung.`,
  },
  'basketball-stars': {
    title: 'Basketball Stars — 1-gegen-1 Basketball',
    description: `Fordere die KI oder einen Freund im 1-gegen-1-Basketball heraus. Täusche deinen Verteidiger und wähle den perfekten Moment für einen Dreipunktwurf oder Dunking.

Entwickelt von Madpuffers. Das Charakter-Lineup ist von NBA-Superstars inspiriert und wird täglich von Hunderttausenden gespielt.`,
    controls: `Spieler 1: A/D Bewegung, W Sprung, S Verteidigung/Diebstahl. B oder Klick zum Schießen. Spieler 2: Pfeiltasten, ↑ Sprung, ↓ Verteidigung. L oder Klick zum Schießen.`,
  },
  'monkey-mart': {
    title: 'Monkey Mart — Supermarkt-Manager',
    description: `Führe deinen eigenen Supermarkt als niedlicher Affe! Ernte Produkte, befülle Regale und bediene Kunden. Stelle Helfer-Affen ein, um Aufgaben zu automatisieren.

Über 100 Millionen Spiele seit 2022. Vom Indie-Entwickler TinyDobbins in nur drei Monaten gebaut.`,
    controls: `Pfeiltasten oder WASD zum Gehen. Über Felder laufen zum Ernten. Zu leeren Regalen gehen zum Auffüllen. Münzen ausgeben für neue Bereiche und Helfer.`,
  },
  'short-life': {
    title: 'Short Life — Hindernisparcours-Überleben',
    description: `Führe eine Ragdoll-Figur durch tödliche Hindernisparcours mit rotierenden Sägeblättern, Hämmern und Minen. Der Name ist keine Übertreibung — stirb, lache und versuche es sofort wieder.

Von RHM Interactive entwickelt. 20 Level mit zunehmendem Brutalitätsgrad warten auf dich.`,
    controls: `Pfeiltasten oder WASD für Bewegung und Sprung. Alle Gefahren töten sofort. Ziel ist die Flagge am Ende jedes Levels. Nach jedem Tod sofort neustart.`,
  },
  '1v1-lol': {
    title: '1v1.LOL — Bauen und Schießen',
    description: `Kämpfe in Bau-und-Kampf-Arenen, wo Überleben schnelles Schießen und noch schnelleres Bauen bedeutet. Platziere Wände und Rampen für Höhenvorteil.

Über 200 Millionen registrierte Nutzer ohne Marketingbudget. In Schulen weltweit viral durch Mundpropaganda.`,
    controls: `WASD Bewegen. Maus Zielen/Schießen. Q Wand, E Boden, R Rampe, F Dach. Shift Sprinten. Mausrad Waffen wechseln.`,
  },
  'smash-karts': {
    title: 'Smash Karts — Mehrspieler-Kartbattle',
    description: `Spring in ein Kart und vernichte Gegner mit Raketen, Maschinengewehren und Minen in dieser schnellen Battle-Arena. Sammle Waffenkisten und sei das letzte Kart.

Über 150 Millionen Spiele 2023. Dedizierte Server sorgen für niedrige Latenz.`,
    controls: `WASD oder Pfeiltasten zum Fahren. Maus zum Zielen. Leertaste oder Klick zum Feuern. Waffenkisten aufsammeln. Meiste Abschüsse bei Zeitende gewinnt.`,
  },
  'penalty-shooters-2': {
    title: 'Penalty Shooters 2 — Fußball-Elfmeter',
    description: `Meistere den ultimativen Fußballdruck in Elfmeterschießen über 8 Turniere. Als Schütze beobachte das Neigen des Torwarts. Als Torwart lies die Körpersprache.

Über 200 Millionen Spiele. Über 50 Nationalmannschaften mit authentischen Trikotfarben.`,
    controls: `Als Schütze: Maus für Ziel, Klick zum Schießen. Torwart neigt sich — nutze den Hinweis. Als Torwart: Klicke die richtige Seite zum Hechten.`,
  },
  'getaway-shootout': {
    title: 'Getaway Shootout — Chaotisches Rennen',
    description: `Hüpfe, schieße und stolpere zum Fluchtfahrzeug, bevor deine Gegner ankommen. Steuerung ist absichtlich unbeholfen — abwechselnde Links-Rechts-Hüpfer machen jedes Rennen zur Komödie.

Von New Eich Games entwickelt. Zufällig spawnende Waffen sorgen für einzigartiges Spielerlebnis.`,
    controls: `Spieler 1: W links hüpfen, E rechts hüpfen, R Item nutzen. Spieler 2: I links, O rechts, P Item. Erst zum Fluchtfahrzeug gewinnt die Runde.`,
  },
  'big-tower-tiny-square': {
    title: 'Big Tower Tiny Square — Vertikaler Plattformer',
    description: `Erklimme einen gefährlich hohen Turm als winziges Quadrat, einen tödlichen Raum nach dem anderen. Jeder Stock bringt gemeinere Fallen. Dein Ziel ist die Ananas ganz oben.

Über 110 handgefertigte Räume. Der durchschnittliche Spieler braucht 3–5 Stunden und über 2.000 Tode.`,
    controls: `Pfeiltasten oder WASD bewegen. Leertaste oder W oder ↑ springen. Doppelklick Richtung in der Luft für kleinen Schub. Jede Gefahr tötet sofort und setzt nur im aktuellen Raum zurück.`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Ultimative Präzisionsherausforderung",
    description: `Führe dein rotes Quadrat durch Labyrinthe voller blauer Bälle in Bewegung. Eine einzige Berührung schickt dich zurück zum Start. Nur die Geduldigsten schaffen es.

World's Hardest Game macht seinem Namen alle Ehre — mit 30 Leveln von brutaler Schwierigkeit. Jedes Level erfordert perfektes Timing und das Auswendiglernen der Feindmuster.`,
    controls: `Verwende Pfeiltasten, um das rote Quadrat zu bewegen. Sammle die gelben Kreise und erreiche die grüne Zielzone. Vermeide jede Berührung mit den blauen Bällen.`,
  },
};
