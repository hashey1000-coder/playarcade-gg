import type { GameTranslation } from '../gameTranslations';

export const IT_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Puzzle Scorri e Fondi',
    description: `Scorri le tessere numerate su una griglia 4×4 e combina numeri uguali per raggiungere l’elusiva tessera 2048. Ogni scorrimento fonde tessere identiche e genera un nuovo 2 o 4 — pianifica più mosse in anticipo o il tuo tabellone si riempirà in fretta. Facile da imparare, diabolicamente difficile da padroneggiare.

Creato dallo sviluppatore italiano Gabriele Cirulli nel marzo 2014, 2048 è diventato un fenomeno mondiale da un giorno all’altro, ispirando centinaia di varianti.`,
    controls: `Usa i tasti freccia (↑ ↓ ← →) o scorri sul cellulare per muovere tutte le tessere in una direzione. Le tessere con lo stesso numero si fondono quando si toccano. L’obiettivo è creare una tessera con il numero 2048.`,
  },
  'tetris': {
    title: 'Tetris — Puzzle Classico di Blocchi',
    description: `L’eterno puzzle di blocchi che cadono che ha definito una generazione. Ruota e posiziona i tetromini mentre scendono, completando linee orizzontali per cancellarle. Più alto il punteggio, più veloci cadono i pezzi.

Inventato dall’ingegnere sovietico Alexey Pajitnov nel 1985, Tetris ha venduto oltre 520 milioni di copie su ogni piattaforma immaginabile.`,
    controls: `Usa i tasti freccia: ← → per spostare, ↑ per ruotare, ↓ per caduta morbida. Premi Spazio per caduta istantanea. Completa righe per cancellarle e guadagnare punti.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Tocca per Volare',
    description: `Guida un piccolo uccello pixelato attraverso una serie infinita di tubi verdi toccando per battere le ali. Un tocco fa salire l’uccello; la gravità lo tira giù. Riesci a superare 50?

Flappy Bird è stato creato dallo sviluppatore vietnamita Dong Nguyen e lanciato nel maggio 2013.`,
    controls: `Clicca, tocca o premi qualsiasi tasto per far battere le ali all’uccello. La gravità lo attira verso il basso. Naviga tra gli spazi nei tubi senza toccarli. Ogni tubo vale un punto.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Corridore T-Rex',
    description: `Corri attraverso un deserto pixelato come l’amato T-Rex di Chrome, saltando sui cactus e abbassandoti sotto gli pterodattili in questo corridore infinito. La velocità aumenta senza sosta.

Nascosto nella pagina "Nessuna connessione" di Chrome dal 2014, il gioco Dino è stato progettato da Sebastien Gabriel.`,
    controls: `Premi Spazio o ↑ per saltare sui cactus. Premi ↓ per abbassarti sotto gli pterodattili. Su mobile, tocca per saltare e scorri verso il basso per abbassarti. Il T-Rex corre automaticamente.`,
  },
  'snake': {
    title: 'Snake — Gioco Retro Classico',
    description: `Guida un serpente in crescita sul tabellone, mangiando cibo per crescere evitando la tua coda e le pareti. Più sopravvivi, più il serpente diventa lungo e difficile da controllare.

Le origini di Snake risalgono al gioco arcade Blockade del 1976. È diventato un fenomeno culturale quando Nokia ha preinstallato una versione sui suoi telefoni nel 1998.`,
    controls: `Usa i tasti freccia (↑ ↓ ← →) o WASD per cambiare direzione. Il serpente si muove continuamente. Mangia il cibo per crescere e guadagnare punti. Evita le pareti e la tua coda.`,
  },
  'pac-man': {
    title: 'Pac-Man — Classico Arcade',
    description: `Divora il tuo cammino attraverso un labirinto di punti evitando quattro fantasmi colorati — Blinky, Pinky, Inky e Clyde. Afferra un Power Pellet per invertire la situazione.

Lanciato da Namco nel maggio 1980, Pac-Man è diventato il gioco arcade con il maggiore incasso di sempre.`,
    controls: `Usa i tasti freccia per navigare Pac-Man nel labirinto. Mangia tutti i punti per completare il livello. Afferra i Power Pellet negli angoli per rendere i fantasmi blu temporaneamente.`,
  },
  'minesweeper': {
    title: 'Campo Minato — Puzzle di Mine',
    description: `Scopri caselle su una griglia senza far detonare mine nascoste. Ogni numero rivelato ti dice quante mine si nascondono nelle otto celle circostanti — usa la logica per dedurre quali caselle sono sicure.

Campo Minato è stato creato da Robert Donner e Curt Johnson per Windows 3.1 nel 1990.`,
    controls: `Clic sinistro per rivelare una casella. I numeri mostrano quante mine adiacenti esistono. Clic destro per contrassegnare mine sospette. Usa la logica per dedurre le caselle sicure.`,
  },
  'solitaire': {
    title: 'Solitario — Gioco di Carte Klondike',
    description: `Il gioco di carte in solitario per eccellenza. Ordina un mazzo mescolato in quattro pile base per seme, dall’Asso al Re, spostando carte tra sette colonne del tableau.

Il Solitario Klondike ha guadagnato fama mondiale dopo che Microsoft lo ha incluso in Windows 3.0 nel 1990.`,
    controls: `Clicca sulle carte per selezionarle, poi clicca su una destinazione valida. Costruisci colonne in ordine decrescente con colori alternati. Sposta gli Assi alle basi e costruisci per seme.`,
  },
  'chess': {
    title: 'Scacchi — Gioca contro il Computer',
    description: `Sfida un avversario computerizzato nel gioco di strategia più celebrato del mondo. Comanda un esercito di 16 pezzi su una scacchiera di 64 caselle.

Gli scacchi hanno avuto origine in India intorno al VI secolo come "chaturanga" e si sono diffusi attraverso la Via della Seta fino in Persia e in Europa.`,
    controls: `Clicca su un pezzo per selezionarlo, poi clicca sulla casella di destinazione. Le mosse valide vengono evidenziate. Regole standard inclusi arrocco, cattura en passant e promozione dei pedoni.`,
  },
  'checkers': {
    title: 'Dama — Gioco da Tavolo',
    description: `Salta e cattura i pezzi del tuo avversario su un tabellone 8×8. Muoviti in diagonale, concatena salti multipli e incorona i tuoi pezzi in potenti re che possono muoversi all’indietro.

La Dama è uno dei giochi da tavolo più antichi, con una versione trovata nell’antica città di Ur datata al 3000 a.C.`,
    controls: `Clicca su un pezzo per selezionarlo, poi clicca sulla casella diagonale di destinazione. Saltare sopra un pezzo avversario lo cattura. Raggiungi il bordo opposto per incoronare un pezzo.`,
  },
  'sudoku': {
    title: 'Sudoku — Puzzle Logico Numerico',
    description: `Riempi una griglia 9×9 in modo che ogni riga, colonna e riquadro 3×3 contenga le cifre da 1 a 9 senza ripetizioni. Usa la pura logica per dedurre ogni numero mancante.

Il Sudoku moderno è stato creato dall’architetto americano Howard Garns nel 1979.`,
    controls: `Clicca su una cella vuota e digita un numero da 1 a 9. Ogni riga, colonna e riquadro 3×3 deve contenere tutte le cifre da 1 a 9 esattamente una volta.`,
  },
  'wordle': {
    title: 'Wordle Illimitato — Gioco di Indovinare Parole',
    description: `Indovina la parola segreta di cinque lettere in sei tentativi o meno. Le tessere colorate rivelano quali lettere sono corrette (verde), fuori posto (giallo) o assenti (grigio).

Wordle è stato creato da Josh Wardle come regalo per la sua compagna nel 2021.`,
    controls: `Digita una parola di cinque lettere e premi Invio. Verde = posizione corretta. Giallo = lettera nella parola ma altrove. Grigio = lettera assente. Hai sei tentativi.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Gioco Idle di Biscotti',
    description: `Clicca sul biscotto gigante per sfornare biscotti, poi spendili in potenziamenti — nonne, fattorie, fabbriche e portali — che sfornano automaticamente ancora di più.

Creato dal programmatore francese Julien "Orteil" Thiennot nel 2013, Cookie Clicker è stato pioniere del genere idle.`,
    controls: `Clicca sul grande biscotto per produrre biscotti. Spendi biscotti in edifici nel negozio per automatizzare la produzione. Compra potenziamenti per moltiplicare la produzione.`,
  },
  'connect-four': {
    title: 'Forza 4 — Strategia con Gettoni',
    description: `Lancia gettoni colorati in una griglia verticale, cercando di collegarne quattro in fila — orizzontalmente, verticalmente o in diagonale — prima del tuo avversario.

Forza 4 è stato venduto per la prima volta da Milton Bradley nel 1974.`,
    controls: `Clicca su una colonna per lanciare il tuo gettone. I gettoni cadono in fondo per gravità. Collega quattro del tuo colore in fila per vincere.`,
  },
  'tic-tac-toe': {
    title: 'Tris — Gioco di X e O',
    description: `A turno posiziona X e O su una griglia 3×3, cercando di ottenerne tre in fila. Gioca contro un amico o sfida l’IA.

Il Tris è uno dei giochi più antichi conosciuti, con esempi nelle rovine dell’antico Egitto datati al 1300 a.C.`,
    controls: `Clicca su una casella vuota per piazzare il tuo segno. Ottieni tre segni in fila orizzontale, verticale o diagonale per vincere.`,
  },
  'reversi': {
    title: 'Reversi — Gioco di Strategia Othello',
    description: `Posiziona dischi su un tabellone 8×8 e capovolgi i pezzi avversari intrappolandoli tra i tuoi. Ogni mossa può cambiare l’equilibrio di potere.

Reversi è stato inventato nel 1883. La versione moderna, Othello, è stata resa popolare da Goro Hasegawa nel 1971.`,
    controls: `Clicca su una casella vuota per posizionare il tuo disco. I dischi avversari intrappolati tra i tuoi cambiano al tuo colore.`,
  },
  'hextris': {
    title: 'Hextris — Puzzle Esagonale',
    description: `Un twist affascinante sui puzzle di blocchi che cadono, ambientato in un esagono rotante. Blocchi colorati cadono verso il centro dai sei lati.

Hextris è stato creato nel 2014 da studenti dell’Università del Maryland durante un hackathon.`,
    controls: `Usa ← e → (o A e D) per ruotare l’esagono centrale. Unisci tre o più blocchi dello stesso colore in fila per eliminarli.`,
  },
  'word-search': {
    title: 'Ricerca di Parole — Puzzle di Parole Nascoste',
    description: `Scruta una griglia di lettere mescolate per trovare parole nascoste in orizzontale, verticale e diagonale. Le parole possono essere lette in entrambe le direzioni.

I puzzle di ricerca parole sono stati inventati da Norman E. Gibat nel 1968.`,
    controls: `Clicca e trascina sulle lettere per evidenziare una parola. Le parole possono essere nascoste in qualsiasi direzione.`,
  },
  'falling-blocks': {
    title: 'Blocchi Cadenti — Impilatore di Cubi',
    description: `Cubi colorati piovono e devi impilarli e combinarli prima che si accumulino fino in cima. Posiziona i blocchi strategicamente per creare combo di colori.

I giochi di blocchi cadenti hanno origine in Tetris (1985) e si sono evoluti in dozzine di varianti.`,
    controls: `Usa ← e → per muovere il pezzo. Premi ↑ o Spazio per ruotare. Premi ↓ per caduta rapida. Combina colori e completa righe per eliminare blocchi.`,
  },
  'card-solitaire': {
    title: 'Solitario Classico — Gioco di Carte Pazienza',
    description: `Una versione pulita del gioco di carte in solitario preferito del mondo. Costruisci sequenze decrescenti con colori alternati e sposta tutte le 52 carte alle quattro pile base.

I giochi di solitario sono popolari dal XVIII secolo. Napoleone Bonaparte era un giocatore appassionato durante il suo esilio.`,
    controls: `Clicca su una carta per selezionarla, poi clicca su una destinazione valida. Costruisci colonne alternando rosso e nero. Gli Assi vanno alle pile base.`,
  },
  'slope': {
    title: 'Slope — Gioco 3D di Palla Rotolante',
    description: `Controlla una palla che rotola giù per una pista illuminata al neon a velocità crescente. Schiva ostacoli, affronta curve strette ed evita di cadere dal bordo.

Slope è stato sviluppato da Rob Kay ed è diventato uno dei giochi browser più popolari al mondo.`,
    controls: `Usa ← e → o A e D per guidare la palla. Evita ostacoli rossi e buchi. La palla accelera continuamente.`,
  },
  'among-us': {
    title: 'Among Us — Deduzione Sociale',
    description: `Lavora con il tuo equipaggio per completare compiti a bordo di un’astronave — ma attenzione, ci sono impostori tra voi. Discuti, accusa e vota per espellere i sospetti.

Among Us è stato sviluppato da InnerSloth ed è esploso in popolarità nel 2020.`,
    controls: `Usa WASD o frecce per muoverti. Clicca sui compiti per completarli. Segnala cadaveri o convoca riunioni d’emergenza.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Platform Ritmico',
    description: `Salta e vola attraverso un mondo pulsante pieno di ostacoli sincronizzato con musica elettronica. Tocca per saltare sulle punte e navigare i portali di gravità.

Geometry Dash è stato creato dallo sviluppatore svedese Robert Topala nel 2013.`,
    controls: `Clicca, tocca o premi Spazio per saltare. Tieni premuto per continuare a saltare in modalità nave. Gli ostacoli sono sincronizzati con la musica.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Schivata 3D nel Tunnel',
    description: `Lanciati attraverso un tunnel 3D contorto e cangiante a velocità vertiginosa, schivando barriere che appaiono con appena un istante di preavviso.

Tunnel Rush è diventato una sensazione virale come uno dei giochi browser più accessibili ma impegnativi.`,
    controls: `Usa ← e → o A e D per schivare ostacoli nel tunnel. Reagisci in fretta — ad alta velocità hai meno di un secondo.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Mira e Combina',
    description: `Mira e spara bolle colorate per creare gruppi di tre o più dello stesso colore, facendole scoppiare dal tabellone. Elimina tutte le bolle per vincere ogni livello.

Bubble Shooter ha le sue radici in Puzzle Bobble di Taito (1994).`,
    controls: `Mira con il mouse e clicca per sparare una bolla. Combina tre o più dello stesso colore per farle scoppiare.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Sfida di Carte',
    description: `Ordina le carte in sequenze decrescenti dello stesso seme attraverso dieci colonne. Completa una sequenza Re-Asso per rimuoverla.

Spider Solitaire è stato incluso con Microsoft Windows dal 1998.`,
    controls: `Clicca su una carta per selezionarla, poi clicca su una destinazione valida. Solo sequenze dello stesso seme si muovono come gruppo. Completa Re-Asso per rimuovere.`,
  },
  'mahjong': {
    title: 'Mahjong — Classico di Abbinamento Tessere',
    description: `Rimuovi coppie di tessere identiche da un elaborato arrangement multistrato. Solo le tessere "libere" possono essere selezionate. Elimina tutte le tessere per vincere.

Mahjong Solitaire è stato creato da Brodie Lockard nel 1981 sul sistema PLATO.`,
    controls: `Clicca su una tessera libera per selezionarla, poi clicca su un’altra tessera libera identica per rimuovere la coppia. Usa il pulsante suggerimento se sei bloccato.`,
  },
  'freecell': {
    title: 'FreeCell — Solitario Strategico',
    description: `Tutte le 52 carte sono distribuite scoperte in otto colonne — nessuna informazione nascosta, ogni partita è un puro test di strategia. Usa quattro celle libere come deposito temporaneo.

FreeCell è stato reso popolare dalla sua inclusione in Windows da Windows 95. Solo la distribuzione #11982 è impossibile.`,
    controls: `Clicca su una carta, poi clicca su una colonna di destinazione o cella libera. Costruisci colonne in ordine decrescente con colori alternati. Usa le quattro celle libere saggiamente.`,
  },
  'backgammon': {
    title: 'Backgammon — Gioco da Tavolo Classico',
    description: `Lancia i dadi e fai la corsa con le tue quindici pedine intorno al tabellone. Blocca, colpisci e supera l’IA in questo eterno gioco di strategia.

Il Backgammon è uno dei giochi da tavolo più antichi, con origini di 5.000 anni in Mesopotamia.`,
    controls: `Clicca il pulsante dei dadi per lanciare. Clicca su una pedina, poi clicca sul punto di destinazione. Devi usare entrambi i dadi se possibile.`,
  },
  'hangman': {
    title: 'Impiccato — Gioco di Indovinare Parole',
    description: `Indovina la parola nascosta lettera per lettera prima che il disegno dell’impiccato sia completo. Ogni tentativo fallito aggiunge una parte del corpo.

L’Impiccato è giocato almeno dall’era vittoriana ed è uno dei giochi di parole più conosciuti del mondo.`,
    controls: `Clicca sulle lettere per indovinare. Le lettere corrette appaiono nelle loro posizioni. Hai 6-8 tentativi errati.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Taglia e Affetta',
    description: `Taglia frutta che vola sullo schermo con il dito o il mouse. Taglia più frutti in un solo movimento per combo, ma attento alle bombe.

Fruit Ninja è stato sviluppato da Halfbrick Studios e lanciato nel 2010. È stato scaricato più di 1 miliardo di volte.`,
    controls: `Scorri sullo schermo o clicca e trascina per tagliare frutta. Taglia più frutti in un movimento per combo. Evita le bombe.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Corsa in Moto',
    description: `Guida la tua moto attraverso 25 piste piene di barili esplosivi, loop giganti e seghe mortali. Fai acrobazie per bonus di tempo.

Moto X3M è stato sviluppato da Madpuffers nel 2016.`,
    controls: `Premi SU o W per accelerare, GIÙ o S per frenare. SINISTRA/DESTRA per inclinarti in aria. Fai acrobazie per bonus.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Drift a Un Pulsante',
    description: `Padroneggia l’arte del drifting con un solo pulsante. Tocca per girare a destra, rilascia per driftare a sinistra. Resta sulla strada.

Drift Boss è stato creato da Madpuffers, noti per i loro giochi accessibili a un solo pulsante.`,
    controls: `Clicca o tocca per girare a destra. Rilascia per driftare a sinistra. Sincronizza i tuoi tocchi per restare sulla strada.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basket per 2 Giocatori',
    description: `Scegli tra squadre leggendarie e compete in partite veloci con super tiri, stoppate e schiacciate. Gioca contro la CPU o sfida un amico.

Basketball Legends presenta giocatori caricaturali con mosse speciali ispirate alle superstar della NBA.`,
    controls: `Giocatore 1: WASD per muoversi, B per tirare, N per super tiro, M per stoppare. Giocatore 2: Frecce per muoversi, K per tirare, L per super tiro.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Bilancia l’Uovo',
    description: `Guida un’auto in salita con un delicato uovo sopra. Naviga su terreno irregolare senza far cadere l’uovo.

Eggy Car trasforma la guida in un puzzle di fisica di precisione. L’uovo obbedisce a gravità e inerzia realistiche.`,
    controls: `Tieni premuto per accelerare. Rilascia per procedere per inerzia. Naviga le colline con attenzione. Guida il più lontano possibile.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Distruggi Piattaforme',
    description: `Schiaccia piattaforme rotanti toccando per far cadere la palla. Elimina piattaforme colorate ma evita quelle nere. Accumula velocità per la modalità fuoco.

Stack Ball combina discesa a elica con fisica di distruzione soddisfacente.`,
    controls: `Tocca e tieni per far cadere la palla. Rilascia per fermarti. Evita le piattaforme nere. Distruggine più di seguito per la modalità fuoco.`,
  },
  'vex-7': {
    title: 'Vex 7 — Platform Stickman',
    description: `Naviga il tuo stickman attraverso brutali percorsi a ostacoli con lame rotanti, punte e piattaforme mobili. Più di 10 atti impegnativi.

Vex 7 è l’ultima puntata di una delle serie platform più popolari. Oltre 1 miliardo di partite in totale.`,
    controls: `Usa WASD o frecce per muoverti e saltare. Premi S per scivolare. Salta sulle pareti. Evita punte, lame e pericoli.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Lancia e Cattura',
    description: `Lancia la tua lenza e cattura pesci facendo scorrere l’amo durante la discesa. Spendi denaro in potenziamenti di lunghezza, velocità e guadagni offline.

Tiny Fishing combina meccaniche idle con pesca attiva. I pesci leggendari si nascondono oltre i 100 metri.`,
    controls: `Clicca e tieni per lanciare. Muovi il mouse per catturare pesci. Cattura il massimo per lancio. Spendi i guadagni in potenziamenti.`,
  },
  'gunspin': {
    title: 'GunSpin — Lanciatore d’Armi',
    description: `Lancia la tua arma e mantienila in rotazione sparando al momento giusto. Ogni sparo spinge l’arma più lontano. Cronometra i tuoi clic per massimizzare la distanza.

GunSpin combina fisica dei proiettili con sistemi di potenziamento idle.`,
    controls: `Clicca o tocca per sparare. Ogni sparo crea rinculo che spinge l’arma. Cronometra i tuoi spari per mantenere l’altitudine. Raccogli monete per potenziamenti.`,
  },
  'vex-6': {
    title: 'Vex 6 — Platform Stickman',
    description: `Corri, salta, scivola e scala pareti attraverso insidiosi percorsi a ostacoli. Vex 6 continua la serie con nuovi atti.

Vex 6 introduce il nuoto con indicatore d’aria, seghe su binari e piattaforme che si sgretolano.`,
    controls: `Usa WASD o frecce per muoverti e saltare. Premi S per scivolare. Salta sulle pareti. Evita punte, seghe e pozzi.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Gioco di Lancio',
    description: `Colpisci, rimbalza e lanciati attraverso ondate di orsetti gommosi. Lancia Burrito Bison dal ring di wrestling.

Burrito Bison: Launcha Libre presenta tre lottatori giocabili con abilità speciali uniche.`,
    controls: `Clicca per lanciare dal ring. Clicca per rimbalzare sugli orsetti gommosi. Usa abilità speciali. Guadagna denaro per potenziamenti.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Picchiaduro Fisico',
    description: `Sferra colpi potenti al tuo avversario ragdoll e osserva il caos basato sulla fisica. Mira, carica e colpisci per mandare gli stickmen in volo.

Ragdoll Hit usa un motore fisico realistico che calcola forza d’impatto e collisioni indipendentemente.`,
    controls: `Clicca e trascina per mirare il tuo colpo. Rilascia per colpire. Scaraventa avversari contro ostacoli per danni extra.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Calcio per 2 Giocatori',
    description: `Un esilarante gioco di calcio dove regole, campo e giocatori cambiano ogni round. Segna gol con giocatori ragdoll barcollanti.

Soccer Random randomizza tutto ogni round — dimensione della palla, numero di giocatori, superficie e persino la gravità.`,
    controls: `Giocatore 1: Premi W per calciare. Giocatore 2: Premi FRECCIA SU. Segna 5 gol per vincere. Il campo cambia ogni round.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Platform Classico',
    description: `Il leggendario platform a scorrimento laterale. Guida Mario attraverso il Regno dei Funghi, schiacciando Goomba, rompendo mattoni e salvando la Principessa Peach.

Super Mario Bros è stato lanciato da Nintendo nel 1985 ed è considerato il videogioco più influente mai creato.`,
    controls: `Usa le frecce per muovere Mario. Premi Z o SU per saltare. Premi X per correre/sparare. Schiaccia i nemici atterrando su di loro. Raccogli monete e power-up.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Baseball Multigiocatore',
    description: `Vai alla battuta in questo gioco di baseball veloce con giocatori cartoon e azione arcade. Lancia, batti e difendi per la vittoria.

Baseball Bros combina meccaniche semplificate con gameplay competitivo. Partite veloci da 3 inning.`,
    controls: `Clicca per lanciare o battere. Usa il mouse per mirare. Cronometra il tuo clic per colpire la palla. Usa le frecce per controllare i difensori.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Manager della Squadra',
    description: `Gestisci la tua squadra di baseball e competi in leghe e tornei. Recluta giocatori, migliora abilità e guida la tua squadra.

Baseball 9 combina gestione della squadra con azione sul campo.`,
    controls: `Clicca per battere. Mira e clicca per lanciare. Gestisci la tua squadra tra le partite.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Creatore di Musica',
    description: `Crea mix musicali trascinando e rilasciando personaggi animati sul palco. Ogni personaggio Sprunki aggiunge un loop sonoro diverso.

Sprunki Phase 9 è la nona puntata della serie di creazione musicale Sprunki, ispirata a Incredibox.`,
    controls: `Trascina personaggi sul palco per aggiungere il loro suono. Clicca per rimuovere. Sperimenta con combinazioni per scoprire animazioni bonus.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Gioco Musicale Idle',
    description: `Clicca per guadagnare beat e sbloccare nuovi personaggi Sprunki. Ogni potenziamento aggiunge nuovi suoni alla tua composizione.

Sprunki Clicker fonde meccaniche clicker idle con l’universo musicale Sprunki.`,
    controls: `Clicca per guadagnare beat. Spendi beat in potenziamenti. Sblocca nuovi personaggi e pacchetti sonori.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Mixer Musicale Notturno',
    description: `Crea melodie inquietanti in questo mixer Sprunki a tema notturno. Trascina personaggi spettrali per creare strati di ritmi e voci fantasma.

Sprunki Night Time reimmagina la formula Sprunki con un’estetica oscura e notturna.`,
    controls: `Trascina personaggi sul palco per aggiungere il loro suono. Trova combinazioni speciali per animazioni bonus.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mixer Musicale Maturo',
    description: `Una versione evoluta della creazione musicale Sprunki con suoni più sofisticati e design maturi. Costruisci tracce complesse.

Sprunki Grown Up presenta versioni adulte dei personaggi classici con elementi sonori più complessi.`,
    controls: `Trascina personaggi evoluti sul palco. Sperimenta con gli strati per composizioni più ricche.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Sandbox Musicale',
    description: `L’esperienza sandbox definitiva di Sprunki con tutti i personaggi e suoni sbloccati dall’inizio. Mixa e sperimenta liberamente.

Sprunki Playground elimina tutte le barriere di progressione e dà accesso immediato a ogni personaggio e suono.`,
    controls: `Trascina qualsiasi personaggio sul palco. Crea strati di suoni liberamente. Usa il pulsante di registrazione per salvare il tuo mix.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Tiro al Bersaglio',
    description: `Mira ai polli pazzi che volano attraverso paesaggi 3D in questo tiro al bersaglio arcade. Clicca per sparare ai polli.

Crazy Chicken (Moorhuhn) è nato come gioco promozionale nel 1999 ed è diventato una sensazione virale con oltre 10 milioni di download.`,
    controls: `Muovi il mouse per mirare. Clicca per sparare. Cerca obiettivi bonus nascosti. I polli dorati valgono punti extra.`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — Manager di Football Americano',
    description: `Gestisci la tua squadra di football americano in questo manageriale sportivo in stile retrò. Scegli i giocatori, pianifica le giocate e guida la tua squadra fino al campionato.

Retro Bowl combina gestione strategica del roster con azione sul campo in pixel art. Ogni decisione fuori dal campo influenza le prestazioni della tua squadra in partita.`,
    controls: `Scorri per lanciare il pallone ai ricevitori. Tocca per schivare i difensori. Usa i menu per gestire il roster e le tattiche.`,
  },
  'run-3': {
    title: 'Run 3 — Corsa Infinita nello Spazio',
    description: `Corri, salta e sfida la gravità in tunnel sospesi nello spazio. Cambia le pareti su cui corri per evitare le voragini e sopravvivere il più a lungo possibile.

Run 3 amplia la serie con nuovi personaggi, centinaia di livelli e una modalità infinita. La rotazione del tunnel rende ogni salto una sfida unica.`,
    controls: `Frecce sinistra/destra per muoverti. Barra spaziatrice per saltare. R per ricominciare il livello.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Attraversamento Infinito',
    description: `Attraversa strade trafficate, fiumi e binari ferroviari in questo coloratissimo gioco di abilità ispirato a Frogger. Ogni passo potrebbe essere l'ultimo!

Crossy Road offre centinaia di personaggi sbloccabili e scenari generati casualmente. Il suo stile voxel e il gameplay immediato lo rendono irresistibile.`,
    controls: `Tocca o premi la freccia su per avanzare. Frecce laterali per spostarti. Non restare fermo troppo a lungo!`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Dai le Caramelle a Om Nom',
    description: `Taglia le corde al momento giusto per far cadere la caramella nella bocca di Om Nom. Usa la fisica, le bolle d'aria e i cuscini per risolvere ogni rompicapo.

Cut the Rope è un puzzle fisico pluripremiato con centinaia di livelli che mettono alla prova logica e tempismo. Raccogli tutte le stelle per il punteggio perfetto.`,
    controls: `Scorri per tagliare le corde. Tocca le bolle per gonfiarle. Interagisci con gli elementi del livello per guidare la caramella.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Dondolati e Vola',
    description: `Agganciati ai punti di ancoraggio e dondolati come un acrobata per raggiungere il traguardo. Rilascia al momento giusto per volare tra un punto e l'altro.

Stickman Hook è un gioco fisico dal ritmo frenetico con livelli sempre più impegnativi. La fisica del dondolio è semplice da imparare ma difficile da padroneggiare.`,
    controls: `Tieni premuto per agganciarti al punto più vicino. Rilascia per staccarti e volare. Il tempismo è tutto!`,
  },
  'drive-mad': {
    title: 'Drive Mad — Sfida di Guida Fisica',
    description: `Guida il tuo veicolo su percorsi pieni di ostacoli assurdi senza ribaltarti. Bilancia velocità e inclinazione per arrivare al traguardo.

Drive Mad mette alla prova la tua abilità con rampe folli, piattaforme mobili e terreni imprevedibili. Ogni livello richiede precisione e pazienza.`,
    controls: `Freccia su per accelerare. Freccia giù per frenare. Bilancia l'inclinazione del veicolo per non capovolgerti.`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Conquista del Territorio',
    description: `Espandi il tuo territorio tracciando linee sulla mappa e tornando nella tua zona. Taglia il percorso degli avversari per eliminarli e dominare l'arena.

Paper.io 2 è un gioco .io competitivo in cui strategia e tempismo fanno la differenza. Più rischi allontanandoti dalla tua area, più grande sarà la ricompensa.`,
    controls: `Usa le frecce direzionali o trascina per muoverti. Esci dal tuo territorio per conquistare nuova area, poi rientra per reclamarla.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Corsa Infinita sui Binari',
    description: `Corri a perdifiato lungo i binari della metropolitana insieme a Jake e i suoi amici, schivando treni e ostacoli mentre raccogli monete e potenziamenti.

Subway Surfers è uno degli endless runner più famosi al mondo, con ambientazioni che cambiano periodicamente e decine di personaggi e tavole da skateboard da sbloccare.`,
    controls: `Scorri lateralmente per cambiare corsia. Scorri in alto per saltare, in basso per scivolare. Raccogli le monete e i potenziamenti speciali.`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Azione Infinita col Jetpack',
    description: `Indossa il jetpack rubato e sfreccia attraverso il laboratorio schivando laser, missili e campi elettrici. Raccogli monete e veicoli speciali lungo il percorso.

Jetpack Joyride segue le avventure di Barry Steakfries in un endless runner adrenalinico. Sblocca jetpack unici e completa missioni per guadagnare ricompense.`,
    controls: `Tieni premuto per attivare il jetpack e salire. Rilascia per scendere. Evita gli ostacoli e raccogli potenziamenti.`,
  },
  'fireboy-and-watergirl': {
    title: 'Fireboy and Watergirl — Tempio della Foresta',
    description: `Guida due eroi elementali opposti attraverso 32 livelli puzzle cooperativi. Fireboy è immune al fuoco, Watergirl all'acqua — tocca l'elemento sbagliato e muori subito. Aziona leve per aprire porte e porta entrambi i personaggi alle uscite contemporaneamente.

Pubblicato nel 2009, è uno dei franchise di giochi browser più amati con oltre 500 milioni di partite in cinque episodi. Gli insegnanti di tutto il mondo lo usano come esercizio di lavoro di squadra.`,
    controls: `Giocatore 1 (Fireboy): frecce per muoversi e saltare. Giocatore 2 (Watergirl): WASD per muoversi. Fireboy muore nell'acqua, Watergirl nel fuoco. Entrambi muoiono nel fango verde. Porta entrambi alle uscite del colore corrispondente contemporaneamente.`,
  },
  'ovo': {
    title: 'OvO — Platformer Parkour',
    description: `Corri, scivola e salta attraverso oltre 40 livelli platform di precisione. Padroneggia il dive-slam per passare sotto le barriere e i wall-jump per creare scorciatoie.

Creato da Dedragames e virale nel 2021. Gli speedrunner completano il gioco in meno di 3 minuti.`,
    controls: `Frecce o WASD per correre. Spazio o ↑ per saltare. ↓ in aria per dive-slam. Dive-slam correndo per scivolare. Salto vicino al muro per wall-jump.`,
  },
  'basketball-stars': {
    title: 'Basketball Stars — Basket 1 contro 1',
    description: `Sfida l'IA o un amico nel basket uno contro uno. Inganna il tuo difensore e scegli il momento perfetto per un tiro da tre o una schiacciata spettacolare.

Sviluppato da Madpuffers. Il roster dei personaggi è ispirato alle superstar NBA e conta centinaia di migliaia di giocatori al giorno.`,
    controls: `Giocatore 1: A/D muoversi, W saltare, S difendere/rubare. B o clic per tirare. Giocatore 2: frecce, ↑ saltare, ↓ difendere. L o clic per tirare.`,
  },
  'monkey-mart': {
    title: 'Monkey Mart — Gestore del Supermercato',
    description: `Gestisci il tuo supermercato come un adorabile scimmietta! Raccogli prodotti, rifornisci gli scaffali e servi i clienti prima che perdano la pazienza. Assumi scimmie assistenti per automatizzare i compiti.

Oltre 100 milioni di partite dal 2022. Costruito in soli tre mesi dallo sviluppatore indie TinyDobbins.`,
    controls: `Frecce o WASD per camminare. Cammina sui campi per raccogliere. Vai agli scaffali vuoti per rifornire. Spendi monete per nuove sezioni e assistenti.`,
  },
  'short-life': {
    title: 'Short Life — Sopravvivenza al Percorso',
    description: `Guida un personaggio ragdoll attraverso percorsi ad ostacoli letali pieni di seghe rotanti, martelli e mine. Il nome non è una metafora — muori, ridi e riprova subito.

Sviluppato da RHM Interactive. 20 livelli di brutalità crescente con un motore fisico che rende ogni morte diversa.`,
    controls: `Frecce o WASD per muoversi e saltare. Tutti i pericoli uccidono all'istante. Raggiungi la bandiera alla fine di ogni livello per avanzare. Ripartenza istantanea dopo ogni morte.`,
  },
  '1v1-lol': {
    title: '1v1.LOL — Costruire e Sparare',
    description: `Combatti in arene costruisci-e-spara dove sopravvivere richiede di sparare giusto e costruire ancora più veloce. Posiziona muri e rampe per l'alta quota poi elimina l'avversario.

Oltre 200 milioni di utenti registrati senza budget di marketing. Virale nelle scuole di tutto il mondo.`,
    controls: `WASD muoversi. Mouse mirare/sparare. Q muro, E pavimento, R rampa, F tetto. Shift correre. Rotella mouse cambiare armi.`,
  },
  'smash-karts': {
    title: 'Smash Karts — Battaglia di Kart Multiplayer',
    description: `Salta su un kart ed elimina i nemici con razzi, mitragliatrici e mine in questa rapida arena di battaglia. Raccogli casse di armi e sii l'ultimo kart in piedi.

Oltre 150 milioni di partite nel 2023. Server dedicati garantiscono bassa latenza.`,
    controls: `WASD o frecce per guidare. Mouse per mirare. Spazio o clic per sparare. Raccogli casse di armi. Maggiori eliminazioni alla fine del tempo vince.`,
  },
  'penalty-shooters-2': {
    title: 'Penalty Shooters 2 — Calci di Rigore',
    description: `Affronta la massima pressione calcistica nei calci di rigore in 8 tornei internazionali. Come attaccante, osserva l'inclinazione del portiere. Come portiere, leggi la direzione del tiro.

Oltre 200 milioni di partite. Oltre 50 nazionali con colori della maglia autentici.`,
    controls: `Come attaccante: mouse per mirare, clic per calciare. Il portiere si inclina — usa il suggerimento. Come portiere: clic sul lato giusto per tuffarti.`,
  },
  'getaway-shootout': {
    title: 'Getaway Shootout — Gara Caotica',
    description: `Salta, spara e inciampa verso il veicolo di fuga prima degli avversari in questo brawler caotico. I controlli sono deliberatamente goffi — salti alternati sinistra-destra — rendendo ogni gara una commedia.

Sviluppato da New Eich Games. Armi a comparsa casuale garantiscono partite uniche.`,
    controls: `Giocatore 1: W salto sinistro, E salto destro, R usa oggetto. Giocatore 2: I sinistra, O destra, P oggetto. Il primo al veicolo vince il round.`,
  },
  'big-tower-tiny-square': {
    title: 'Big Tower Tiny Square — Platformer Verticale',
    description: `Scala una torre pericolosamente alta come un quadratino, una stanza mortale alla volta. Ogni piano porta trappole più crudeli. Il tuo obiettivo è l'ananas in cima.

Oltre 110 stanze artigianali. Il giocatore medio ha bisogno di 3–5 ore e oltre 2.000 morti per arrivare in cima.`,
    controls: `Frecce o WASD per muoversi. Spazio, W o ↑ per saltare. Doppia pressione direzione in aria per piccola spinta. Qualsiasi pericolo uccide all'istante e resetta solo la stanza attuale.`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Sfida di Precisione Estrema",
    description: `Guida il quadrato rosso attraverso labirinti pieni di sfere blu in movimento. Un solo tocco e si ricomincia. Solo i giocatori più abili arriveranno alla fine.

World's Hardest Game è un gioco di precisione leggendario che richiede riflessi perfetti e una pazienza infinita. Ogni livello è progettato per metterti alla prova.`,
    controls: `Usa le frecce direzionali per muovere il quadrato rosso. Raccogli le monete gialle ed evita ogni sfera blu per completare il livello.`,
  },
};
