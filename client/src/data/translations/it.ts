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
};
