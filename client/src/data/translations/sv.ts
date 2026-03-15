import type { GameTranslation } from '../gameTranslations';

export const SV_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Skjut- och sammanfogningspussel',
    description: `Skjut numrerade brickor på ett 4×4-rutnät och kombinera lika tal för att nå den svårfångade 2048-brickan. Varje svepning sammanfogar identiska brickor och skapar en ny 2 eller 4 — planera flera drag framåt, annars fylls brädet snabbt. Lätt att lära, djävulskt svårt att bemästra.

Skapad av den italienske utvecklaren Gabriele Cirulli i mars 2014 blev 2048 ett världsomspännande fenomen över en natt och inspirerade hundratals varianter. Spelet bygger på Threes! av Asher Vollmer, men dess utgivning som öppen källkod gjorde det till det mest klonade webbläsarspelet i historien.`,
    controls: `Använd piltangenterna (↑ ↓ ← →) eller svep på mobilen för att flytta alla brickor i en riktning. Brickor med samma nummer sammanfogas vid beröring. Målet är att skapa en 2048-bricka.`,
  },
  'tetris': {
    title: 'Tetris — Klassiskt blockpussel',
    description: `Det tidlösa pusslet med fallande block som definierade en generation. Rotera och placera tetrominos medan de faller och fyll horisontella rader för att rensa dem. Ju högre poäng du får, desto snabbare faller bitarna.

Uppfunnet av den sovjetiske mjukvaruingenjören Alexej Pajitnov 1985, har Tetris sålts i över 520 miljoner exemplar på alla tänkbara plattformar. Namnet kombinerar det grekiska prefixet "tetra" (fyra) med tennis.`,
    controls: `Använd piltangenterna: ← → för att flytta, ↑ för att rotera, ↓ för mjuk landning. Tryck mellanslag för direkt fall. Fyll rader för att rensa dem och samla poäng.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Tryck för att flyga',
    description: `Navigera en liten pixelfågel genom en oändlig rad gröna rör genom att trycka för att flaxa med vingarna. Ett tryck får fågeln att stiga; gravitationen drar den nedåt. Klarar du över 50?

Flappy Bird skapades av den vietnamesiske utvecklaren Dong Nguyen och släpptes i maj 2013. I början av 2014 blev det den mest nedladdade gratisappen och tjänade cirka 50 000 dollar per dag på reklam.`,
    controls: `Klicka, tryck eller tryck på valfri tangent för att få fågeln att flaxa. Utan inmatning drar gravitationen nedåt. Navigera genom mellanrummen mellan rören. Varje rör ger en poäng.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — T-Rex-löpare',
    description: `Spring som den populära Chrome T-Rex genom en pixelöken, hoppa över kaktusar och duka under pterodaktyler i denna ändlösa löpare. Hastigheten ökar hela tiden.

Gömd på Google Chromes "Inget internet"-sida sedan 2014, designades dinospelet av Sebastien Gabriel. Omkring 270 miljoner spel spelas varje månad.`,
    controls: `Tryck mellanslag eller ↑ för att hoppa över kaktusar. Tryck ↓ för att duka under pterodaktyler. På mobilen, tryck för att hoppa och svep nedåt för att duka. T-Rex springer automatiskt.`,
  },
  'snake': {
    title: 'Snake — Retroklassiker',
    description: `Styr en växande orm över spelplanen, ät mat för att växa och undvik din egen svans och väggarna. Ju längre du överlever, desto längre och svårare att kontrollera blir den.

Snakes ursprung går tillbaka till arkadspelet Blockade från 1976. Det blev ett kulturellt fenomen när Nokia 1998 förinstallerade en version på sina telefoner.`,
    controls: `Använd piltangenterna (↑ ↓ ← →) eller WASD för att byta riktning. Ormen rör sig kontinuerligt. Ät mat för att växa och samla poäng. Undvik väggar och din egen svans.`,
  },
  'pac-man': {
    title: 'Pac-Man — Arkadklassiker',
    description: `Ät dig genom en labyrint full av prickar och undvik fyra färgglada spöken — Blinky, Pinky, Inky och Clyde. Ta en kraftpellet för att vända på steken.

Släppt av Namco i maj 1980 blev Pac-Man det mest inkomstbringande arkadspelet genom tiderna med över 2,5 miljarder dollar i myntintäkter.`,
    controls: `Använd piltangenterna för att navigera Pac-Man genom labyrinten. Ät alla prickar för att klara banan. Ta kraftpelletsarna i hörnen för att tillfälligt göra spökena blå.`,
  },
  'minesweeper': {
    title: 'Minesweeper — Minpussel',
    description: `Avslöja rutor på ett rutnät utan att utlösa dolda minor. Varje avslöjat nummer visar dig hur många minor som lurar i de åtta omgivande cellerna — använd logik för att identifiera säkra rutor.

Minesweeper skapades av Robert Donner och Curt Johnson för Microsoft Windows 3.1 år 1990 för att lära användare att höger- och vänsterklicka.`,
    controls: `Vänsterklicka för att avslöja en ruta. Nummer visar antalet angränsande minor. Högerklicka för att flagga misstänkta minor. Använd logik för att identifiera säkra rutor.`,
  },
  'solitaire': {
    title: 'Solitaire — Klondike-kortspel',
    description: `Det ultimata solitärkortspelet. Sortera en blandad kortlek i fyra grundhögar efter färg, från ess till kung, genom att flytta kort mellan sju tablåkolumner.

Klondike-solitaire blev världskänt efter att Microsoft inkluderade det i Windows 3.0 år 1990. Designat av praktikanten Wes Cherry.`,
    controls: `Klicka på kort för att välja dem, klicka sedan på en giltig destination. Bygg kolumner i fallande ordning med alternerande färger. Flytta ess till grundhögarna och bygg efter färg.`,
  },
  'chess': {
    title: 'Schack — Spela mot datorn',
    description: `Utmana en datorstyrda motståndare i världens mest berömda strategispel. Kommenderar en armé av 16 pjäser över ett 64-rutors bräde.

Schack uppstod i Indien på 500-talet som "chaturanga" och spreds via Sidenvägen till Persien och Europa. Idag spelar över 600 miljoner människor regelbundet.`,
    controls: `Klicka på en pjäs för att välja den, klicka sedan på målrutan. Giltiga drag markeras. Standardregler inklusive rockad, en passant och bondeförvandling.`,
  },
  'checkers': {
    title: 'Dam — Brädspel',
    description: `Hoppa och fånga motståndarens pjäser på ett 8×8-bräde. Flytta diagonalt, kedja flera hopp och kröna dina pjäser till mäktiga kungar som kan röra sig bakåt.

Dam är ett av de äldsta brädspelen, med en version hittad i den antika staden Ur som dateras till 3000 f.Kr.`,
    controls: `Klicka på en pjäs för att välja den, klicka sedan på den diagonala målrutan. Att hoppa över en motståndarpjäs fångar den. Nå motsatta sidan för att kröna en pjäs.`,
  },
  'sudoku': {
    title: 'Sudoku — Sifferlogikpussel',
    description: `Fyll ett 9×9-rutnät så att varje rad, kolumn och 3×3-ruta innehåller siffrorna 1 till 9 utan upprepning. Använd ren logik för att lista ut varje saknat nummer.

Modernt Sudoku skapades av den amerikanske arkitekten Howard Garns 1979 under namnet "Number Place". Det blev en global trend efter att ha blivit populärt i Japan.`,
    controls: `Klicka på en tom cell och skriv ett nummer från 1 till 9. Varje rad, kolumn och 3×3-ruta måste innehålla alla siffror från 1 till 9 exakt en gång.`,
  },
  'wordle': {
    title: 'Wordle Unlimited — Ordgissningsspel',
    description: `Gissa det hemliga fembokstavsord på sex försök eller färre. Färgade rutor visar vilka bokstäver som är korrekta (gröna), felplacerade (gula) eller saknas (grå).

Wordle skapades av Josh Wardle som en gåva till sin partner 2021. Det växte från 90 spelare till över 2 miljoner dagligen i januari 2022.`,
    controls: `Skriv ett fembokstavsord och tryck Enter. Grönt = rätt position. Gult = bokstaven finns i ordet men på en annan plats. Grått = bokstaven finns inte i ordet. Du har sex försök.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Idle-kakspel',
    description: `Klicka på den jättelika kakan för att baka kakor, spendera dem sedan på uppgraderingar — mormödrar, farmer, fabriker och portaler — som automatiskt bakar ännu fler.

Skapad av den franske programmeraren Julien "Orteil" Thiennot 2013 banade Cookie Clicker väg för idle-genren. Släppt på Steam 2021 med 97 % positiva omdömen.`,
    controls: `Klicka på den stora kakan för att producera kakor. Spendera kakor på byggnader i butiken för att automatisera produktionen. Köp uppgraderingar för att multiplicera produktionen.`,
  },
  'connect-four': {
    title: 'Fyra i rad — Strategispel med brickor',
    description: `Släpp färgade brickor i ett vertikalt rutnät och försök att koppla ihop fyra i rad — horisontellt, vertikalt eller diagonalt — före din motståndare.

Fyra i rad såldes första gången av Milton Bradley 1974. 1988 bevisade Victor Allis att den första spelaren alltid kan vinna om den börjar i mittkolumnen.`,
    controls: `Klicka på en kolumn för att släppa din bricka. Brickor faller nedåt med gravitationen. Koppla ihop fyra av din färg i rad för att vinna.`,
  },
  'tic-tac-toe': {
    title: 'Tre i rad — Kryss och ring',
    description: `Placera omväxlande X och O på ett 3×3-rutnät och försök att få tre i rad. Spela mot en vän eller utmana AI:n.

Tre i rad är ett av de äldsta kända spelen, med exempel i ruiner från det forntida Egypten som dateras till 1300 f.Kr.`,
    controls: `Klicka på en tom ruta för att placera din markering. Få tre markeringar i en horisontell, vertikal eller diagonal rad för att vinna.`,
  },
  'reversi': {
    title: 'Reversi — Othello-strategispel',
    description: `Placera pjäser på ett 8×8-bräde och vänd motståndarens pjäser genom att omringa dem. Varje drag kan förändra maktbalansen.

Reversi uppfanns 1883. Den moderna versionen, Othello, populariserades av Goro Hasegawa 1971.`,
    controls: `Klicka på en tom ruta för att placera din pjäs. Motståndarens pjäser som omringas byter till din färg.`,
  },
  'hextris': {
    title: 'Hextris — Hexagonalt pussel',
    description: `En fascinerande twist på klassiska fallande blockpussel, placerat i en roterande hexagon. Färgade block faller mot centrum från alla sex sidor.

Hextris skapades 2014 av studenter vid University of Maryland under ett hackathon.`,
    controls: `Använd ← och → (eller A och D) för att rotera den centrala hexagonen. Koppla ihop tre eller fler block av samma färg i rad för att eliminera dem.`,
  },
  'word-search': {
    title: 'Ordsök — Pussel med dolda ord',
    description: `Sök igenom ett rutnät av blandade bokstäver för att hitta dolda ord horisontellt, vertikalt och diagonalt. Ord kan läsas i båda riktningarna.

Ordsökspussel uppfanns av Norman E. Gibat 1968.`,
    controls: `Klicka och dra över bokstäver för att markera ett ord. Ord kan vara dolda i vilken riktning som helst.`,
  },
  'falling-blocks': {
    title: 'Fallande block — Kubstaplare',
    description: `Färgade kuber regnar ner och du måste stapla och kombinera dem innan de staplas upp till toppen. Placera block strategiskt för färgkombos.

Fallande block-spel har sitt ursprung i Tetris (1985) och har utvecklats till dussintals varianter.`,
    controls: `Använd ← och → för att flytta biten. Tryck ↑ eller mellanslag för att rotera. Tryck ↓ för snabbt fall. Kombinera färger och fyll rader för att eliminera block.`,
  },
  'card-solitaire': {
    title: 'Klassisk Solitaire — Patienskortspel',
    description: `En ren version av världens mest populära solitärkortspel. Bygg fallande sekvenser med alternerande färger och flytta alla 52 kort till de fyra grundhögarna.

Solitärspel har varit populära sedan 1700-talet. Napoleon Bonaparte var en ivrig spelare under sin exil.`,
    controls: `Klicka på ett kort för att välja det, klicka sedan på en giltig destination. Bygg kolumner med alternerande rött och svart. Ess går till grundhögarna.`,
  },
  'slope': {
    title: 'Slope — 3D-kulspel',
    description: `Styr en kula som rullar nerför en neonbelyst sluttning med ökande hastighet. Undvik hinder, navigera skarpa kurvor och undvik att falla av kanten.

Slope utvecklades av Rob Kay och har blivit ett av de mest populära webbläsarspelen i världen. Det använder WebGL för smidig 3D-rendering.`,
    controls: `Använd ← och → eller A och D för att styra kulan. Undvik röda hinder och hål. Kulan accelererar kontinuerligt.`,
  },
  'among-us': {
    title: 'Among Us — Social deduktion',
    description: `Samarbeta med din besättning för att slutföra uppgifter ombord på ett rymdskepp — men se upp, det finns bedragare bland er. Diskutera, anklaga och rösta för att kasta ut misstänkta.

Among Us utvecklades av InnerSloth och exploderade i popularitet 2020. Vid sin höjdpunkt hade det 500 miljoner aktiva månatliga spelare.`,
    controls: `Använd WASD eller piltangenterna för att röra dig. Klicka på uppgifter för att slutföra dem. Rapportera lik eller kalla till nödmöten.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Rytmplattformsspel',
    description: `Hoppa och flyg genom en pulserande värld full av hinder, synkroniserat med elektronisk musik. Tryck för att hoppa över taggar och navigera gravitationsportaler.

Geometry Dash skapades av den svenske utvecklaren Robert Topala 2013. Det har laddats ner över 200 miljoner gånger med över 80 miljoner användarskapade banor.`,
    controls: `Klicka, tryck eller tryck mellanslag för att hoppa. Håll intryckt för att fortsätta hoppa i fartygsläge. Hindren är synkroniserade med musiken.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — 3D-tunnelundvikningsspel',
    description: `Rasa genom en vridande och färgskiftande 3D-tunnel i halsbrytande hastighet och undvik barriärer som dyker upp med knappt en sekunds varning.

Tunnel Rush blev en viral sensation som ett av de mest tillgängliga men utmanande webbläsarspelen.`,
    controls: `Använd ← och → eller A och D för att undvika hinder i tunneln. Reagera snabbt — vid hög hastighet har du mindre än en sekund.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Sikta och matcha',
    description: `Sikta och skjut färgade bubblor för att bilda grupper om tre eller fler av samma färg och spränga dem från brädet. Rensa alla bubblor för att vinna varje nivå.

Bubble Shooter har sina rötter i Puzzle Bobble av Taito (1994). Webbversionen blev ett av de mest spelade casualspelen på internet.`,
    controls: `Sikta med musen och klicka för att skjuta en bubbla. Matcha tre eller fler av samma färg för att spränga dem.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Kortutmaning',
    description: `Sortera kort i fallande sekvenser av samma färg över tio kolumner. Slutför en sekvens kung-ess för att ta bort den.

Spider Solitaire har inkluderats i Microsoft Windows sedan 1998 och har blivit ett av de mest spelade spelen i historien.`,
    controls: `Klicka på ett kort för att välja det, klicka sedan på en giltig destination. Bara sekvenser av samma färg kan flyttas som grupp. Slutför kung-ess för att ta bort.`,
  },
  'mahjong': {
    title: 'Mahjong — Klassiskt brickmatchningsspel',
    description: `Ta bort par av identiska brickor från en utarbetad flerskiktslayout. Bara "fria" brickor kan väljas. Rensa alla brickor för att vinna.

Mahjong-solitaire skapades 1981 av Brodie Lockard på PLATO-systemet.`,
    controls: `Klicka på en fri bricka för att välja den, klicka sedan på en annan fri identisk bricka för att ta bort paret. Använd ledtrådsknappen om du kör fast.`,
  },
  'freecell': {
    title: 'FreeCell — Strategisk solitaire',
    description: `Alla 52 kort delas ut öppet i åtta kolumner — ingen dold information, varje spel är ett rent strategitest. Använd fyra fria celler som tillfällig förvaring.

FreeCell blev populärt genom att inkluderas i Windows sedan Windows 95. Bara fördelning #11982 är olöslig.`,
    controls: `Klicka på ett kort, klicka sedan på en målkolumn eller fri cell. Bygg kolumner i fallande ordning med alternerande färger. Använd de fyra fria cellerna klokt.`,
  },
  'backgammon': {
    title: 'Backgammon — Klassiskt brädspel',
    description: `Kasta tärning och tävla med dina femton pjäser över brädet. Blockera, slå och överträffa AI:n i detta tidlösa strategispel.

Backgammon är ett av de äldsta brädspelen med ursprung för 5 000 år sedan i Mesopotamien.`,
    controls: `Klicka på tärningsknappen för att kasta. Klicka på en pjäs, klicka sedan på målpunkten. Du måste använda båda tärningarna om möjligt.`,
  },
  'hangman': {
    title: 'Hänga gubbe — Ordgissningsspel',
    description: `Gissa det dolda ordet bokstav för bokstav innan teckningen av hänga gubbe är klar. Varje felaktigt försök lägger till en kroppsdel.

Hänga gubbe har spelats sedan åtminstone den viktorianska eran och är ett av världens mest kända ordspel.`,
    controls: `Klicka på bokstäver för att gissa. Korrekta bokstäver visas på sina positioner. Du har 6–8 felaktiga försök.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Skär och dela',
    description: `Skär frukt som flyger över skärmen med fingret eller musen. Skär flera i en rörelse för kombos, men se upp för bomber.

Fruit Ninja utvecklades av Halfbrick Studios och släpptes 2010. Det har laddats ner över 1 miljard gånger.`,
    controls: `Svep över skärmen eller klicka och dra för att skära frukt. Skär flera i en rörelse för kombos. Undvik bomber.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Motorcykelrace',
    description: `Kör din motorcykel genom 25 banor fulla av explosiva fat, enorma loopar och dödliga sågar. Gör tricks för tidsbonus.

Moto X3M utvecklades 2016 av Madpuffers. Serien har registrerat över 500 miljoner spel.`,
    controls: `Tryck UPP eller W för att accelerera, NER eller S för att bromsa. VÄNSTER/HÖGER för att luta i luften. Gör tricks för bonus.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Entangentsdrift',
    description: `Bemästra konsten att drifta med bara en tangent. Tryck för att svänga höger, släpp för att drifta vänster. Stanna på vägen.

Drift Boss skapades av Madpuffers, kända för sina tillgängliga entangentsspel.`,
    controls: `Klicka eller tryck för att svänga höger. Släpp för att drifta vänster. Tajma dina tryck för att stanna på vägen.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — 2-spelars basket',
    description: `Välj bland legendariska lag och tävla i snabba matcher med superpass, blockeringar och dunkar. Spela mot CPU:n eller utmana en vän.

Basketball Legends presenterar karikatyrspelare med specialdrag, inspirerade av NBA-superstjärnor.`,
    controls: `Spelare 1: WASD för att röra sig, B för att kasta, N för superkast, M för att blockera. Spelare 2: Piltangenter för att röra sig, K för att kasta, L för superkast.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Balansera ägget',
    description: `Kör en bil uppför med ett bräckligt ägg ovanpå. Navigera över ojämn terräng utan att tappa ägget.

Eggy Car förvandlar bilkörning till ett precisionsfysikpussel. Ägget lyder realistisk gravitation och tröghet.`,
    controls: `Håll intryckt för att accelerera. Släpp för att rulla fritt. Navigera kullarna försiktigt. Kör så långt som möjligt.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Krossa plattformar',
    description: `Krossa roterande plattformar genom att trycka för att låta bollen falla. Rensa färgade plattformar men undvik svarta. Bygg upp hastighet för eldläge.

Stack Ball kombinerar helixnedstigning med tillfredsställande förstörelsefysik.`,
    controls: `Tryck och håll för att låta bollen falla. Släpp för att stanna. Undvik svarta plattformar. Förstör flera i rad för eldläge.`,
  },
  'vex-7': {
    title: 'Vex 7 — Stickman-plattformsspel',
    description: `Navigera din stickman genom brutala hinderbabanor med roterande klingor, taggar och rörliga plattformar. Över 10 utmanande akter.

Vex 7 är den senaste delen i en av de mest populära plattformsserierna. Över 1 miljard spel totalt.`,
    controls: `Använd WASD eller piltangenterna för att röra dig och hoppa. Tryck S för att glida. Hoppa mot väggar. Undvik taggar, klingor och faror.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Kasta och fånga',
    description: `Kasta din lina och fånga fisk genom att glidia kroken när den sjunker. Spendera pengar på uppgraderingar för längd, hastighet och offlineintäkter.

Tiny Fishing kombinerar idle-mekanik med aktivt fiske. Legendariska fiskar lurar under 100 meter.`,
    controls: `Klicka och håll för att kasta. Rör musen för att fånga fisk. Fånga maximalt per kast. Spendera intäkter på uppgraderingar.`,
  },
  'gunspin': {
    title: 'GunSpin — Vapenkastare',
    description: `Kasta ditt vapen och håll det roterande genom att skjuta vid rätt tillfälle. Varje skott driver vapnet vidare. Tajma dina klick för maximal distans.

GunSpin kombinerar projektilfiysik med idle-uppgraderingssystem.`,
    controls: `Klicka eller tryck för att skjuta. Varje skott skapar rekyl som driver vapnet. Tajma dina skott för att behålla höjden. Samla mynt för uppgraderingar.`,
  },
  'vex-6': {
    title: 'Vex 6 — Stickman-plattformsspel',
    description: `Spring, hoppa, glid och klättra på väggar genom förrädiska hinderbabanor. Vex 6 fortsätter serien med nya akter.

Vex 6 introducerar simning med luftmätare, sågar på skenor och smuliga plattformar.`,
    controls: `Använd WASD eller piltangenterna för att röra dig och hoppa. Tryck S för att glida. Hoppa mot väggar. Undvik taggar, sågar och gropar.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Startspel',
    description: `Slå, studsa och katapultera dig genom vågor av gummibjörnar. Skjut Burrito Bison från brottningsringen.

Burrito Bison: Launcha Libre erbjuder tre spelbara brottare med unika specialförmågor. Ursprungligen ett Flash-spel av Juicy Beast Studios.`,
    controls: `Klicka för att starta från ringen. Klicka för att studsa på gummibjörnar. Använd specialförmågor. Tjäna pengar för uppgraderingar.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Fysikbråkare',
    description: `Ge din ragdoll-motståndare kraftfulla slag och se det fysikbaserade kaoset. Sikta, ladda och slå för att skicka stickmen flygande.

Ragdoll Hit använder en realistisk fysikmotor som beräknar träffkraft och kollisioner oberoende av varandra.`,
    controls: `Klicka och dra för att sikta ditt slag. Släpp för att slå till. Slå motståndare mot hinder för extra skada.`,
  },
  'soccer-random': {
    title: 'Soccer Random — 2-spelars fotboll',
    description: `Ett hejdlöst fotbollsspel där regler, plan och spelare ändras varje runda. Skjut mål med vickande ragdoll-spelare.

Soccer Random randomiserar allt per runda — bollstorlek, antal spelare, underlag och till och med gravitationen.`,
    controls: `Spelare 1: Tryck W för att skjuta. Spelare 2: Tryck PIL UPP. Skjut 5 mål för att vinna. Planen ändras varje runda.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Klassiskt plattformsspel',
    description: `Det legendariska sidscrollande plattformsspelet. Led Mario genom Svampriket, stampa på Goombas, slå sönder block och rädda Prinsessan Peach.

Super Mario Bros släpptes 1985 av Nintendo och anses vara det mest inflytelserika videospelet genom tiderna. Designat av Shigeru Miyamoto sålde det över 40 miljoner exemplar.`,
    controls: `Använd piltangenterna för att flytta Mario. Tryck Z eller UPP för att hoppa. Tryck X för att springa/skjuta. Stampa fiender genom att landa på dem. Samla mynt och power-ups.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Flerspelarbaseball',
    description: `Gå in vid slagträet i detta snabba basebollspel med tecknade spelare och arkadaction. Kasta, slå och försvara dig till seger.

Baseball Bros kombinerar förenklade mekaniker med tävlingsinriktat spelande. Snabba 3-inningars matcher.`,
    controls: `Klicka för att kasta eller slå. Använd musen för att sikta. Tajma ditt klick för att träffa bollen. Använd piltangenterna för försvararna.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Lagansvarig',
    description: `Hantera ditt eget basebolllag och tävla i ligor och turneringar. Rekrytera spelare, förbättra färdigheter och led din trupp.

Baseball 9 kombinerar lagledning med fältaction. Rekrytera spelare med unik statistik.`,
    controls: `Klicka för att slå. Sikta och klicka för att kasta. Hantera ditt lag mellan matcherna.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Musikskapare',
    description: `Skapa musikmixar genom att dra och släppa animerade karaktärer på scenen. Varje Sprunki-karaktär lägger till en annan ljudslinga.

Sprunki Phase 9 är den nionde delen i Sprunki-musikskapandeserien, inspirerad av Incredibox.`,
    controls: `Dra karaktärer till scenen för att lägga till deras ljud. Klicka för att ta bort. Experimentera med kombinationer för att upptäcka bonusanimationer.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Musik-idlespel',
    description: `Klicka för att tjäna beats och lås upp nya Sprunki-karaktärer. Varje uppgradering lägger till nya ljud till din komposition.

Sprunki Clicker sammanfogar idle-klickermekanik med det musikaliska Sprunki-universumet.`,
    controls: `Klicka för att tjäna beats. Spendera beats på uppgraderingar. Lås upp nya karaktärer och ljudpaket.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Nattlig musikmixer',
    description: `Skapa kusliga melodier i denna nattliga Sprunki-mixer. Dra läskiga karaktärer för att skapa lager av rytmer och spöklika röster.

Sprunki Night Time föreställer Sprunki-formeln med en mörk, nattlig estetik.`,
    controls: `Dra karaktärer till scenen för att lägga till deras ljud. Hitta speciella kombinationer för bonusanimationer.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mogen musikmixer',
    description: `En vidareutvecklad version av Sprunkis musikskapande med mer sofistikerade ljud och mogna designer. Bygg komplexa spår.

Sprunki Grown Up presenterar vuxna versioner av de klassiska karaktärerna med mer komplexa ljudelement.`,
    controls: `Dra vidareutvecklade karaktärer till scenen. Experimentera med lager för rikare kompositioner.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Musiksandlåda',
    description: `Den ultimata Sprunki-sandlådeupplevelsen med alla karaktärer och ljud upplåsta från start. Mixa och experimentera fritt.

Sprunki Playground tar bort alla framstegsbarriärer och ger omedelbar tillgång till varje karaktär och ljud.`,
    controls: `Dra valfria karaktärer till scenen. Skapa ljudlager fritt. Använd inspelningsknappen för att spara din mix.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Skjutbana',
    description: `Sikta på galna hönor som flyger genom 3D-landskap i denna arkadskjutbana. Klicka för att skjuta ner hönorna.

Crazy Chicken (Moorhuhn) uppstod 1999 som ett reklamspel och blev en viral sensation med över 10 miljoner nedladdningar.`,
    controls: `Rör musen för att sikta. Klicka för att skjuta. Leta efter dolda bonusmål. Guldhönor ger extrapoäng.`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — Amerikansk Fotbollsmanager',
    description: `Ta över ett amerikanskt fotbollslag i retrostil. Rekrytera spelare, planera strategier och led ditt lag till seger i Retro Bowl. Pixelgrafiken tar dig tillbaka till spelets guldålder.

Retro Bowl kombinerar laghantering med intensiv spelaction på planen. Fatta avgörande beslut om spelartruppen, håll moralen uppe och spela spännande matcher på vägen mot mästerskapet.`,
    controls: `Svep eller använd musen för att kasta bollen till mottagare. Styr löparen med piltangenterna eller genom att svepa.`,
  },
  'run-3': {
    title: 'Run 3 — Ändlös Rymdlöpare',
    description: `Spring och hoppa genom tunnlar i rymden som faller sönder under dina fötter. Rotera väggar, undvik hål och upptäck nya banor i detta beroendeframkallande plattformsspel.

Run 3 erbjuder dussintals nivåer med stigande svårighetsgrad och flera karaktärer att låsa upp, var och en med unika förmågor. Det ändlösa läget ger oändlig spelbarhet.`,
    controls: `Vänster-/högerpil: rör dig i sidled. Mellanslag eller uppåtpil: hoppa. Spring på väggar för att ändra tunnelns orientering.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Ändlös Hoppare',
    description: `Lotsa din figur över trafikerade vägar, järnvägsspår och forsande floder. Undvik bilar, tåg och andra hinder i denna moderna version av klassiska Frogger.

Crossy Road erbjuder hundratals karaktärer att låsa upp, alla med unika världar och teman. Den enkla hopp-mekaniken gör spelet lätt att lära sig men svårt att bemästra.`,
    controls: `Svep uppåt för att hoppa framåt. Svep vänster, höger eller nedåt för att röra dig. Undvik hinder och samla mynt!`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Mata Om Nom med Godis',
    description: `Klipp repet i rätt ögonblick för att leverera godiset rakt i munnen på Om Nom. Lös fysikpussel, samla stjärnor och upptäck nya mekaniker på varje nivå.

Cut the Rope är ett prisbelönt pusselspel som erövrat miljontals spelares hjärtan världen över. Varje nivåpaket introducerar nya element som luftkuddar, teleportar och magiska hattar.`,
    controls: `Svep eller klicka och dra för att klippa repet. Tryck på luftkuddar och bubblor för att styra godiset till Om Nom.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Svinga & Flyg',
    description: `Haka fast i fästpunkter och svinga dig som en spindelhjälte genom färgglada banor. Släpp i det perfekta ögonblicket för att få fart och nå mållinjen.

Stickman Hook är ett fysikbaserat pendelspel där tajming är nyckeln till framgång. Hundratals nivåer med stigande svårighetsgrad och upplåsbara karaktärer väntar.`,
    controls: `Klicka eller tryck på skärmen för att haka fast. Släpp för att lossa och flyga vidare. Tajming är allt!`,
  },
  'drive-mad': {
    title: 'Drive Mad — Fysikbaserat Körutmaning',
    description: `Kör din bil genom galna hinder­banor fyllda med ramper, loopar och farliga avsnitt. Håll fordonet upprätt och nå mållinjen i ett stycke.

Drive Mad testar din balansförmåga och gaskontroll. Varje nivå erbjuder en ny, överraskande hinderbana som kräver precision och tålamod.`,
    controls: `Uppåtpil: gas. Nedåtpil: backa. Balansera fordonet så det inte välter på svåra avsnitt!`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Erövra Territorium',
    description: `Lämna din zon, rita ett område och återvänd för att erövra det. Utöka ditt territorium samtidigt som du försvarar dig mot andra spelare som kan skära av ditt spår.

Paper.io 2 är ett dynamiskt .io-spel där strategi och mod avgör segern. Ju större risk du tar, desto mer mark erövrar du — men ett enda misstag innebär game over.`,
    controls: `Använd piltangenterna eller musen för att styra din figur. Rita områden och återvänd till ditt territorium för att erövra det.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Ändlös Tunnelbanelöpare',
    description: `Spela som Jake och fly från den butter vaktmästaren och hans hund längs tågspåren. Samla mynt, använd hoverboard och power-ups för att springa så långt som möjligt.

Subway Surfers är ett av världens mest populära mobilspel med miljarder nedladdningar. Regelbundet uppdaterade platser tar spelaren till städer runt hela jorden.`,
    controls: `Svep vänster/höger: byt spår. Svep uppåt: hoppa. Svep nedåt: glid. Samla mynt och power-ups medan du springer!`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Ändlös Jetpack-action',
    description: `Hoppa på en jetpack som Barry Steakfries och flyg genom ett laboratorium fullt av hinder. Samla mynt, erövra specialfordon och undvik missiler och lasrar.

Jetpack Joyride är ett actionfyllt spel där varje flygning är unik tack vare slumpmässiga uppdrag och en slotmaskin efter varje runda. Lås upp nya jetpacks, kostymer och uppgraderingar.`,
    controls: `Tryck på skärmen eller klicka och håll inne för att stiga. Släpp för att sjunka. Undvik lasrar, raketer och elektriska fält!`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Ultimat Precisionsutmaning",
    description: `Styr den röda fyrkanten genom en labyrint av blå bollar och samla gula mynt. Låter enkelt? Det här är ett av de svåraste spelen som någonsin skapats — det kräver absolut precision och perfekt tajming.

World's Hardest Game är en legend bland webbläsarspel, känt för att driva spelare till vansinne. Var och en av de 30 nivåerna kräver perfekt koordination och nerver av stål.`,
    controls: `Piltangenter: styr den röda fyrkanten. Undvik blå bollar, samla gula mynt och nå den gröna zonen!`,
  },
};
