import type { GameTranslation } from '../gameTranslations';

export const PL_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Gra Liczbowa',
    description: `Przesuwaj kafelki na planszy 4×4, łącząc te o tej samej wartości, aby osiągnąć kafelek 2048. Każdy ruch przesuwa wszystkie kafelki w wybranym kierunku, a połączone kafelki podwajają swoją wartość. Planuj strategicznie — nowy kafelek pojawia się po każdym ruchu.

2048 została stworzona w 2014 roku przez włoskiego programistę Gabriele Cirulli jako weekendowy projekt. Gra szybko stała się wiralem, przyciągając miliony graczy na całym świecie. Inspiracją były wcześniejsze gry liczbowe, takie jak Threes!`,
    controls: `Używaj klawiszy strzałek lub przeciągaj palcem, aby przesuwać kafelki. Kafelki o tej samej wartości łączą się po zderzeniu. Staraj się uzyskać kafelek 2048!`,
  },
  'tetris': {
    title: 'Tetris — Układanie Klocków',
    description: `Tetris to kultowa gra logiczna, w której obracasz i układasz spadające klocki (tetromina), tworząc pełne linie. Każda ukończona linia znika, zdobywasz punkty i robisz miejsce na kolejne klocki. Tempo wzrasta z każdym poziomem.

Tetris został stworzony w 1985 roku przez radzieckiego programistę Aleksieja Pażytnowa. Jest jedną z najczęściej sprzedawanych gier wszech czasów i zrewolucjonizowała branżę gier wideo. Nazwa pochodzi od greckiego przedrostka „tetra" i tenisa.`,
    controls: `Strzałki lewo/prawo: przesuwanie klocka. Strzałka w górę: obrót. Strzałka w dół: szybszy spadek. Spacja: natychmiastowe upuszczenie.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Latający Ptak',
    description: `Prowadź małego ptaka przez labirynt zielonych rur, stukając w ekran, aby utrzymać się w powietrzu. Każda para rur, przez którą przelecisz, daje jeden punkt. Gra wymaga perfekcyjnego wyczucia czasu i cierpliwości.

Flappy Bird został stworzony w 2013 roku przez wietnamskiego programistę Dong Nguyena. Gra stała się fenomenem internetowym, generując 50 000 dolarów dziennie z reklam, zanim twórca usunął ją ze sklepów z powodu poczucia winy za jej uzależniający charakter.`,
    controls: `Kliknij, stuknij lub naciśnij spację, aby machać skrzydłami. Unikaj rur i podłogi. Każda rura to jeden punkt!`,
  },
  'chrome-dino': {
    title: 'Chrome Dino — Bieg Dinozaura',
    description: `Biegnij z uroczym dinozaurem T-Rex przez pustynię, przeskakując kaktusy i schylając się pod pterodaktylami. Gra przyspiesza z czasem, testując twoje refleksy. Prosta, ale niezwykle wciągająca.

Chrome Dino (znany też jako T-Rex Runner) to ukryta gra w przeglądarce Google Chrome, dostępna po utracie połączenia z internetem. Została stworzona w 2014 roku przez Sebastiana Gabriela. Każdego miesiąca gra jest uruchamiana około 270 milionów razy.`,
    controls: `Spacja lub strzałka w górę: skok. Strzałka w dół: schyl się. Unikaj przeszkód tak długo, jak to możliwe!`,
  },
  'snake': {
    title: 'Snake — Gra w Węża',
    description: `Steruj wężem po planszy, zbierając jabłka, aby rosnąć. Unikaj ścian i własnego ogona — każde zderzenie kończy grę. Im dłuższy wąż, tym trudniejsza gra.

Snake to jedna z najstarszych gier mobilnych, spopularyzowana przez telefony Nokia w 1998 roku. Gra Taneli Armanto, Snake II na Nokii 6110, stała się fenomenem kulturowym i była preinstalowana na ponad 400 milionach urządzeń Nokia.`,
    controls: `Klawisze strzałek lub WASD: kierunek ruchu węża. Zbieraj jedzenie i unikaj zderzenia z samym sobą!`,
  },
  'pac-man': {
    title: 'Pac-Man — Zjadacz Kropek',
    description: `Steruj Pac-Manem przez labirynt, jedząc wszystkie kropki i unikając duchów. Zjedz specjalną kropkę energetyczną, aby na krótko zamienić duchy w niebieskie cele. Zbieraj owoce za dodatkowe punkty.

Pac-Man został stworzony przez Toru Iwataniego z firmy Namco w 1980 roku. Inspiracją do postaci była pizza z brakującym kawałkiem. Gra zarobiła ponad 14 miliardów dolarów i jest jedną z najbardziej rozpoznawalnych gier w historii.`,
    controls: `Strzałki lub WASD: kierunek ruchu Pac-Mana. Jedz wszystkie kropki, unikaj duchów i zbieraj owoce bonusowe!`,
  },
  'minesweeper': {
    title: 'Minesweeper — Saper',
    description: `Odkrywaj pola na planszy, unikając ukrytych min. Liczby na polach wskazują, ile min sąsiaduje z danym polem. Używaj logiki i dedukcji, aby oznaczyć wszystkie miny flagami i odkryć bezpieczne pola.

Saper został dołączony do systemu Windows 3.1 w 1992 roku, aby nauczyć użytkowników obsługi myszy — lewego i prawego przycisku. Gra stała się jedną z najczęściej granych gier na świecie, a światowy rekord na planszy eksperta wynosi zaledwie kilka sekund.`,
    controls: `Lewy przycisk myszy: odkryj pole. Prawy przycisk: postaw/usuń flagę. Liczby pokazują liczbę sąsiadujących min.`,
  },
  'solitaire': {
    title: 'Solitaire — Pasjans Klondike',
    description: `Klasyczny pasjans karciany, w którym układasz karty od asa do króla na stosach docelowych, sortując je według koloru. Karty na planszy układasz naprzemiennie kolorami w kolejności malejącej.

Pasjans Klondike został dołączony do Windows 3.0 w 1990 roku, by nauczyć użytkowników techniki przeciągnij i upuść. Szacuje się, że pracownicy na całym świecie spędzili miliardy godzin grając w tę grę w pracy.`,
    controls: `Kliknij i przeciągnij karty między kolumnami. Buduj stosy od króla do asa naprzemiennie kolorami. Przenoś asy na stosy docelowe.`,
  },
  'chess': {
    title: 'Chess — Szachy',
    description: `Szachy to królewska gra strategiczna dla dwóch graczy. Każda figura ma unikalne ruchy — od potężnego hetmana po skromnego pionka. Celem jest postawienie mata królowi przeciwnika.

Szachy mają ponad 1500 lat historii, wywodząc się z indyjskiej gry czaturanga. Współczesna forma gry ukształtowała się w Europie w XV wieku. Istnieje więcej możliwych partii szachowych niż atomów we wszechświecie.`,
    controls: `Kliknij figurę, aby ją wybrać, a następnie kliknij pole docelowe. Postaw mata królowi przeciwnika, aby wygrać!`,
  },
  'checkers': {
    title: 'Checkers — Warcaby',
    description: `Warcaby to klasyczna gra planszowa dla dwóch graczy. Przesuwaj swoje pionki po przekątnej i przeskakuj pionki przeciwnika, aby je zbić. Dotrzyj do ostatniego rzędu, aby awansować pionka na damkę.

Warcaby to jedna z najstarszych gier na świecie — najstarsze znalezione plansze pochodzą z miasta Ur sprzed 5000 lat. W 2007 roku naukowcy z Uniwersytetu Alberty dowiedli, że idealna gra zawsze kończy się remisem.`,
    controls: `Kliknij pionek, a następnie kliknij pole docelowe. Zbijaj pionki przeciwnika, przeskakując je po przekątnej.`,
  },
  'sudoku': {
    title: 'Sudoku — Łamigłówka Liczbowa',
    description: `Wypełnij siatkę 9×9 cyframi od 1 do 9 tak, aby każda cyfra pojawiła się dokładnie raz w każdym wierszu, kolumnie i kwadracie 3×3. Wymaga logicznego myślenia i cierpliwości.

Sudoku wywodzi się z łamigłówek Leonharda Eulera z XVIII wieku. Nowoczesna forma powstała w Japonii w 1984 roku dzięki wydawnictwu Nikoli. Nazwa oznacza „liczba musi być pojedyncza". Gra zdobyła światową popularność w 2005 roku.`,
    controls: `Kliknij pustą komórkę i wpisz cyfrę od 1 do 9. Każda cyfra może pojawić się tylko raz w wierszu, kolumnie i kwadracie 3×3.`,
  },
  'wordle': {
    title: 'Wordle — Zgadywanie Słów',
    description: `Odgadnij pięcioliterowe słowo w sześciu próbach. Po każdej próbie kolory podpowiedzą, które litery są poprawne i na właściwym miejscu (zielone), poprawne ale w złym miejscu (żółte) lub nieobecne w słowie (szare).

Wordle został stworzony w 2021 roku przez Josha Wardle'a jako prezent dla partnerki. W styczniu 2022 roku The New York Times kupiło grę za ponad milion dolarów. Gra codziennie przyciąga miliony graczy na całym świecie.`,
    controls: `Wpisz pięcioliterowe słowo i naciśnij Enter. Kolory liter podpowiedzą: zielony = właściwa litera i pozycja, żółty = właściwa litera, zła pozycja, szary = brak litery.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Klikacz Ciastek',
    description: `Klikaj gigantyczne ciastko, aby zdobywać ciastka, a następnie inwestuj je w ulepszenia i budynki, które automatycznie produkują więcej ciastek. Gra typu idle, w której produkcja rośnie wykładniczo.

Cookie Clicker został stworzony w 2013 roku przez francuskiego programistę Julien „Orteil" Thiennot. Gra zapoczątkowała falę gier typu idle/incremental i ma oddaną społeczność graczy, którzy odkrywają coraz głębsze warstwy mechaniki.`,
    controls: `Klikaj ciastko, aby zdobywać ciastka. Kupuj ulepszenia i budynki w sklepie. Odkrywaj osiągnięcia i specjalne ulepszenia!`,
  },
  'connect-four': {
    title: 'Connect Four — Czwórki',
    description: `Wrzucaj kolorowe krążki do pionowej planszy 7×6, starając się ułożyć cztery w rzędzie — poziomo, pionowo lub po przekątnej. Prosta zasada, ale wymaga strategicznego myślenia.

Connect Four (Czwórki) zostało stworzone przez Miltona Bradleya w 1974 roku. W 1988 roku James Dow Allen i Victor Allis niezależnie rozwiązali grę, udowadniając, że pierwszy gracz zawsze wygrywa przy idealnej grze.`,
    controls: `Kliknij kolumnę, aby wrzucić krążek. Ułóż cztery krążki w rzędzie poziomo, pionowo lub po przekątnej, aby wygrać!`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — Kółko i Krzyżyk',
    description: `Klasyczna gra dla dwóch graczy na planszy 3×3. Jeden gracz stawia kółka, drugi krzyżyki. Wygrywa ten, kto pierwszy ułoży trzy swoje symbole w linii — poziomo, pionowo lub po przekątnej.

Kółko i krzyżyk to jedna z najstarszych gier na świecie — warianty były grywane w starożytnym Egipcie ponad 3500 lat temu. Gra została w pełni rozwiązana matematycznie — idealna gra obu stron zawsze kończy się remisem.`,
    controls: `Kliknij puste pole, aby postawić swój symbol (X lub O). Ułóż trzy w rzędzie, aby wygrać!`,
  },
  'reversi': {
    title: 'Reversi — Othello',
    description: `Strategiczna gra planszowa, w której umieszczasz krążki na planszy 8×8, otaczając krążki przeciwnika, aby je przejąć (odwrócić na swój kolor). Wygrywa gracz z większą liczbą krążków po zapełnieniu planszy.

Reversi zostało wymyślone w 1883 roku w Anglii. Współczesna wersja, Othello, została stworzona w 1971 roku przez Japończyka Goro Hasegawę. Motto gry to „Minuta, by się nauczyć, całe życie, by opanować".`,
    controls: `Kliknij pole, aby umieścić krążek. Musisz otoczyć co najmniej jeden krążek przeciwnika. Odwracaj jak najwięcej krążków!`,
  },
  'hextris': {
    title: 'Hextris — Heksagonalny Tetris',
    description: `Obracaj centralny sześciokąt, łapiąc kolorowe klocki spadające z sześciu kierunków. Twórz pełne linie tego samego koloru, aby je usunąć. Kombinacja Tetrisa i geometrii sześciokątnej.

Hextris to gra open-source stworzona w 2014 roku, inspirowana Tetrisem i heksagonalną geometrią. Dodaje unikalny twist do klasycznej mechaniki — zamiast dwuwymiarowego spadania, klocki zbliżają się z sześciu stron jednocześnie.`,
    controls: `Strzałki lewo/prawo lub A/D: obracanie sześciokąta. Łap klocki i twórz pełne linie tego samego koloru!`,
  },
  'word-search': {
    title: 'Word Search — Wyszukiwanka Słów',
    description: `Znajdź ukryte słowa w siatce liter. Słowa mogą być ukryte poziomo, pionowo i po przekątnej, zarówno w przód, jak i w tył. Idealna gra do ćwiczenia koncentracji i rozszerzania słownictwa.

Pierwsza znana wyszukiwanka słów została opublikowana w 1968 roku w gazecie Selenby Digest w Oklahomie przez Normana E. Gibbata. Łamigłówki te stały się popularnym narzędziem edukacyjnym stosowanym w szkołach na całym świecie.`,
    controls: `Kliknij pierwszą literę słowa i przeciągnij do ostatniej. Znajdź wszystkie słowa z listy!`,
  },
  'falling-blocks': {
    title: 'Falling Blocks — Spadające Klocki',
    description: `Układaj spadające klocki, tworząc pełne linie, które znikają, zdobywając punkty. Gra przyspiesza z każdym poziomem, wymagając coraz szybszych decyzji i lepszego planowania.

Falling Blocks to klasyczna gra logiczna inspirowana mechaniką układania klocków, która zdobyła ogromną popularność od lat 80. Prosta koncepcja łączenia figur geometrycznych okazała się jedną z najbardziej wciągających mechanik w historii gier.`,
    controls: `Strzałki lewo/prawo: przesuwanie. Strzałka w górę: obrót. Strzałka w dół: szybszy spadek. Spacja: natychmiastowe upuszczenie.`,
  },
  'card-solitaire': {
    title: 'Card Solitaire — Pasjans Klasyczny',
    description: `Klasyczny pasjans, w którym sortujesz karty według kolorów od asa do króla. Buduj kolumny na planszy, naprzemiennie układając karty czerwone i czarne w kolejności malejącej.

Pasjans karciany ma korzenie w XVIII-wiecznej Europie, gdzie był popularną rozrywką arystokracji. Napoleon Bonaparte podobno grywał w pasjansa podczas wygnania na wyspie Świętej Heleny.`,
    controls: `Przeciągaj karty między kolumnami. Układaj naprzemiennie kolory w kolejności malejącej. Przenoś asy i kolejne karty na stosy docelowe.`,
  },
  'slope': {
    title: 'Slope — Zbocze',
    description: `Steruj kulą toczącą się po niekończącym się, neonowym zboczu. Unikaj czerwonych przeszkód i nie spadnij z krawędzi. Gra przyspiesza z czasem, testując twoje refleksy do granic możliwości.

Slope to popularna gra przeglądarkowa znana z minimalistycznej grafiki neonowej i uzależniającej rozgrywki. Proceduralnie generowane poziomy oznaczają, że żaden przejazd nie jest taki sam, co zachęca do wielokrotnego grania.`,
    controls: `Strzałki lewo/prawo lub A/D: sterowanie kulą. Unikaj przeszkód i utrzymuj kulę na torze!`,
  },
  'among-us': {
    title: 'Among Us — Wśród Nas',
    description: `Gra społeczna, w której członkowie załogi statku kosmicznego wykonują zadania, a ukryci oszuści próbują sabotować misję i eliminować graczy. Dyskutuj i głosuj, aby znaleźć oszustów.

Among Us zostało stworzone przez studio InnerSloth w 2018 roku, ale eksplodowało popularnością w 2020 roku podczas pandemii. W szczytowym momencie grało jednocześnie ponad 3,8 miliona graczy, a gra stała się fenomenem kulturalnym.`,
    controls: `Kliknij, aby się poruszać i wykonywać zadania. Zgłaszaj podejrzane zachowania. Dyskutuj i głosuj na spotkaniach, aby wyrzucić oszustów!`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Geometryczny Pęd',
    description: `Steruj kwadratową ikoną przez poziomy pełne przeszkód, poruszające się w rytm muzyki. Precyzyjne skoki i idealne wyczucie czasu są kluczem do przetrwania w tej szalenie trudnej grze platformowej.

Geometry Dash zostało stworzone w 2013 roku przez Roberta Topala (RobTop Games) ze Szwecji. Gra ma ponad 75 milionów pobrań i aktywną społeczność twórców poziomów, którzy stworzyli miliony niestandardowych map.`,
    controls: `Kliknij, stuknij lub naciśnij spację, aby skoczyć. Trzymaj, aby wykonywać wielokrotne skoki. Unikaj wszystkich przeszkód!`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Pęd przez Tunel',
    description: `Leć przez kolorowy tunel 3D, omijając przeszkody pojawiające się z ogromną prędkością. Gra wymaga błyskawicznych refleksów i pełnej koncentracji. Każdy przejazd jest inny dzięki proceduralnej generacji.

Tunnel Rush to popularna gra przeglądarkowa łącząca elementy gatunku endless runner z efektami wizualnymi inspirowanymi psychodelią. Hipnotyzujące kolory i rosnąca prędkość tworzą niezwykle immersyjne doświadczenie.`,
    controls: `Strzałki lewo/prawo lub A/D: omijanie przeszkód. Przetrwaj jak najdłużej w tunelu!`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Strzelanie Bąbelkami',
    description: `Celuj i strzelaj kolorowymi bąbelkami, łącząc trzy lub więcej tego samego koloru, aby je usunąć. Wyczyść całą planszę, zanim bąbelki opadną zbyt nisko. Prosta, ale niezwykle relaksująca gra.

Bubble Shooter wywodzi się z japońskiej gry Puzzle Bobble (Bust-a-Move) z 1994 roku, stworzonej przez firmę Taito. Format strzelania bąbelkami stał się jednym z najpopularniejszych gatunków gier casualowych i mobilnych na świecie.`,
    controls: `Celuj myszką i kliknij, aby wystrzelić bąbelek. Łącz trzy lub więcej tego samego koloru, aby je usunąć!`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Pasjans Pająk',
    description: `Układaj karty w malejące sekwencje od króla do asa tego samego koloru. Ukończone sekwencje znikają z planszy. Używaj jednego, dwóch lub czterech kolorów dla różnego poziomu trudności.

Pasjans Pająk został spopularyzowany przez dołączenie go do systemu Windows 98. Gra zdobyła tak wielkie oddanie pracowników biurowych, że niektóre firmy usuwały ją z komputerów służbowych, aby zwiększyć produktywność.`,
    controls: `Przeciągaj karty, aby tworzyć malejące sekwencje. Kompletne sekwencje od K do A tego samego koloru znikają. Kliknij stos, aby rozdać nowe karty.`,
  },
  'mahjong': {
    title: 'Mahjong — Mahjong Pasjansowy',
    description: `Łącz pary identycznych kafelków, aby usunąć je z planszy. Kafelek jest wolny, gdy ma odsłoniętą lewą lub prawą stronę i nie jest zasłonięty z góry. Wyczyść całą planszę, aby wygrać.

Mahjong to tradycyjna chińska gra powstała w dynastii Qing (ok. XIX w.). Wersja pasjansowa (Shanghai) zyskała popularność dzięki grze komputerowej z 1981 roku. Tradycyjny mahjong to gra dla czterech osób, popularna w całej Azji.`,
    controls: `Kliknij dwa identyczne, wolne kafelki, aby je usunąć. Kafelek jest wolny, gdy nic go nie blokuje z góry ani z obu boków.`,
  },
  'freecell': {
    title: 'FreeCell — Wolna Komórka',
    description: `Pasjans, w którym wszystkie karty są widoczne od początku. Przenoś karty na cztery wolne komórki jako tymczasowe przechowalnię. Zbuduj cztery stosy od asa do króla według koloru.

FreeCell został spopularyzowany przez Microsofta w Windows 95. Co ciekawe, spośród 32 000 możliwych układów w oryginalnej wersji, tylko jeden (układ #11982) jest uznawany za nierozwiązywalny. Szansa na wygraną to ponad 99,99%.`,
    controls: `Przeciągaj karty między kolumnami i wolnymi komórkami. Buduj stosy docelowe od asa do króla według koloru.`,
  },
  'backgammon': {
    title: 'Backgammon — Tryktrak',
    description: `Starożytna gra planszowa dla dwóch graczy, w której przesuwasz żetony zgodnie z rzutem kości, starając się jako pierwszy wyprowadzić wszystkie swoje żetony z planszy. Łączy strategię z elementem losowości.

Tryktrak to jedna z najstarszych znanych gier planszowych — najstarsze znaleziska mają ponad 5000 lat. Gra była popularna w starożytnej Persji, Rzymie i Egipcie. Współczesne turnieje o milionowe nagrody odbywają się na całym świecie.`,
    controls: `Rzuć kośćmi i kliknij żetony, aby je przesunąć. Staraj się wyprowadzić wszystkie swoje żetony z planszy przed przeciwnikiem.`,
  },
  'hangman': {
    title: 'Hangman — Wisielec',
    description: `Zgaduj litery, aby odkryć ukryte słowo. Każda błędna litera dodaje element do rysunku wisielca. Odgadnij słowo, zanim rysunek zostanie ukończony!

Wisielec to popularna gra słowna o niejasnym pochodzeniu — prawdopodobnie wywodzi się z wiktoriańskiej Anglii. Gra jest szeroko wykorzystywana w edukacji jako narzędzie do nauki słownictwa i pisowni w wielu językach.`,
    controls: `Kliknij lub wpisz litery, aby zgadywać. Masz ograniczoną liczbę błędnych prób. Odgadnij całe słowo, zanim skończą się życia!`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Owocowy Ninja',
    description: `Przecinaj owoce lecące w powietrzu, unikając bomb. Twórz combo, tnąc wiele owoców jednym ruchem. Szybkość i precyzja są kluczem do zdobycia wysokiego wyniku.

Fruit Ninja został stworzony w 2010 roku przez australijskie studio Halfbrick. Gra osiągnęła ponad miliard pobrań i stała się jedną z najpopularniejszych gier mobilnych w historii, definiując gatunek gier opartych na przeciąganiu palcem.`,
    controls: `Przeciągaj myszką lub palcem, aby ciąć owoce. Unikaj bomb! Twórz combo, tnąc wiele owoców naraz.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Szalony Motocross',
    description: `Pędź na motocyklu przez szalone tory pełne pętli, skoków i śmiertelnych pułapek. Wykonuj efektowne sztuczki w powietrzu, aby zdobyć bonusy czasowe. Ukończ każdy poziom jak najszybciej.

Seria Moto X3M to jedna z najpopularniejszych gier kaskaderskich online. Inspirowana klasykami gatunku, oferuje coraz bardziej kreatywne i wymagające poziomy, z fizyką, która zachęca do eksperymentowania.`,
    controls: `Strzałka w górę: gaz. Strzałka w dół: hamulec/cofanie. Strzałki lewo/prawo: pochylanie motocykla w powietrzu.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Mistrz Driftu',
    description: `Driftuj samochodem po krętej drodze, starając się nie spaść z krawędzi. Kliknij, aby skręcić w prawo, puść, aby skręcić w lewo. Prosta mechanika, ale opanowanie jej wymaga praktyki.

Drift Boss to popularna casualowa gra, która zdobyła uznanie dzięki intuicyjnej mechanice jednopalcowej. Minimalistyczny design i rosnąca trudność tworzą idealną grę na krótkie sesje rozrywkowe.`,
    controls: `Kliknij/trzymaj: skręt w prawo. Puść: skręt w lewo. Utrzymaj samochód na drodze tak długo, jak to możliwe!`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Legendy Koszykówki',
    description: `Graj jako legendy koszykówki w dynamicznych meczach 1v1 lub 2v2. Wykonuj wsady, trójki i specjalne ruchy. Tryb turnieju, szybka gra i tryb wieloosobowy na jednym urządzeniu.

Basketball Legends to popularna gra przeglądarkowa inspirowana prawdziwymi gwiazdami NBA. Karykaturalny styl graficzny i dynamiczna rozgrywka przyciągnęły miliony fanów koszykówki na całym świecie.`,
    controls: `WASD: ruch. B: strzał/blok. S: specjalny ruch. Gracz 2: strzałki + K/L. Zdobywaj punkty i wygrywaj mecze!`,
  },
  'eggy-car': {
    title: 'Eggy Car — Jajko na Kółkach',
    description: `Prowadź samochód z jajkiem na dachu po pagórkowatym terenie. Jajko nie jest przymocowane — jedź ostrożnie, aby go nie upuścić! Delikatna jazda i wyczucie fizyki to klucz do sukcesu.

Eggy Car to urocza gra fizyczna, która łączy prostą koncepcję z zaskakująco uzależniającą mechaniką. Jej humorystyczne podejście do fizyki jazdy sprawia, że zarówno porażki, jak i sukcesy dostarczają rozrywki.`,
    controls: `Strzałka w górę lub W: gaz. Strzałka w dół lub S: hamulec/cofanie. Jedź ostrożnie, nie upuść jajka!`,
  },
  'stack-ball': {
    title: 'Stack Ball — Spadająca Piłka',
    description: `Rozbijaj kolorowe platformy, spadając piłką w dół spiralnej wieży. Unikaj czarnych platform — zderzenie z nimi kończy grę. Trzymaj, aby spaść szybciej i zniszczyć więcej platform.

Stack Ball to popularna gra typu hyper-casual, która podbiła rynki mobilne dzięki prostej, ale satysfakcjonującej mechanice niszczenia. Gatunek hyper-casual stał się dominującą siłą na rynku gier mobilnych.`,
    controls: `Kliknij i trzymaj, aby spadać i niszczyć platformy. Puść przed czarnymi platformami! Zbieraj bonusy, aby stać się niezniszczalnym.`,
  },
  'vex-7': {
    title: 'VEX 7 — Platformówka Ekstremalna',
    description: `Biegaj, skacz i wspinaj się przez wymagające platformowe poziomy pełne pułapek. Siódma część popularnej serii VEX oferuje nowe mechaniki, trudniejsze poziomy i gładką kontrolę postaci.

Seria VEX to jedna z najpopularniejszych platformówek przeglądarkowych, znana z precyzyjnej kontroli i wyzwań inspirowanych grami typu „masocore". Każda część wprowadza nowe mechaniki, utrzymując serię świeżą.`,
    controls: `WASD lub strzałki: ruch i skok. Ślizgaj się po ścianach, wykonuj podwójne skoki i unikaj pułapek!`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Małe Wędkarstwo',
    description: `Zarzucaj wędkę i łap ryby, aby zarabiać pieniądze. Ulepszaj sprzęt wędkarski, aby łapać większe i cenniejsze ryby z głębszych wód. Relaksująca gra idle z elementami progressji.

Tiny Fishing łączy prostą mechanikę kliknięcia z systemem ulepszeń typowym dla gier idle. Relaksujący klimat i satysfakcjonujący system postępu sprawiają, że gra jest idealną odskocznią od bardziej intensywnych tytułów.`,
    controls: `Kliknij, aby zarzucić wędkę. Kliknij ponownie, aby zahaczyć rybę. Łap ryby i ulepszaj sprzęt za zarobione pieniądze!`,
  },
  'gunspin': {
    title: 'GunSpin — Wirujący Pistolet',
    description: `Wystrzel broń i wykorzystaj odrzut, aby utrzymać ją w powietrzu jak najdłużej. Zbieraj amunicję i monety podczas lotu. Ulepszaj broń i odblokuj nowe typy dla lepszych wyników.

GunSpin to unikalna gra fizyczna, w której mechanika odrzutu broni staje się główną rozgrywką. Zaskakująco głęboki system ulepszeń i różnorodność broni sprawiają, że gra oferuje godziny rozrywki.`,
    controls: `Kliknij, aby wystrzelić. Każdy strzał napędza broń do przodu. Zbieraj amunicję, aby kontynuować lot, i monety na ulepszenia!`,
  },
  'vex-6': {
    title: 'VEX 6 — Platformówka Hardcore',
    description: `Szósta część kultowej serii platformówek VEX. Pokonuj śmiertelne pułapki, precyzyjnie skacz i biegnij po ścianach. Nowe mechaniki, w tym pływanie pod wodą i ruchome platformy.

VEX 6 kontynuuje tradycję serii, oferując jedne z najtrudniejszych poziomów platformowych dostępnych w przeglądarce. Gra testuje zarówno cierpliwość, jak i umiejętności precyzyjnego sterowania.`,
    controls: `WASD lub strzałki: ruch i skok. Ślizgaj się po ścianach, pływaj i unikaj pułapek w wymagających poziomach!`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Burrito Bizon',
    description: `Wyrzuć Burrito Bisona z ringu wrestlingowego i leć jak najdalej, odbijając się od żelkowych misiów. Ulepszaj swoje umiejętności, aby latać dalej i szybciej. Szalona gra typu launcher.

Burrito Bison został stworzony przez studio Juicy Beast. Gra łączy absurdalny humor z wciągającą mechaniką launcher, gdzie każdy lot pozwala odblokować nowe ulepszenia i osiągnąć coraz większe dystanse.`,
    controls: `Kliknij, aby wyrzucić Bisona. Kliknij w odpowiednim momencie, aby aktywować specjalne uderzenia. Ulepszaj umiejętności między lotami!`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Uderzenie Szmacianej Lalki',
    description: `Wyrzucaj szmacianą lalkę z różnych urządzeń i obserwuj spektakularne zderzenia z fizyki ragdoll. Celuj, aby zadać jak największe obrażenia i zdobyć punkty. Destrukcyjna fizyka w najlepszym wydaniu.

Gry z fizyką ragdoll zyskały popularność dzięki realistycznej (i często komicznej) symulacji ciała ludzkiego. Ragdoll Hit wykorzystuje tę mechanikę, tworząc satysfakcjonujące i humorystyczne doświadczenie.`,
    controls: `Celuj i kliknij, aby wyrzucić lalkę. Reguluj kąt i siłę, aby zmaksymalizować obrażenia i zdobyć więcej punktów!`,
  },
  'soccer-random': {
    title: 'Soccer Random — Losowa Piłka Nożna',
    description: `Graj w piłkę nożną z losowo zmienianymi warunkami — zmienia się boisko, piłka, bramka i pogoda! Każdy mecz to niespodzianka. Prosta mechanika jednego przycisku, ale ogromna frajda.

Soccer Random należy do serii gier „Random" studia RHM Interactive, które zdobyły ogromną popularność dzięki nieoczekiwanym zmianom zasad w trakcie gry. To piłka nożna, jakiej nigdy wcześniej nie grałeś!`,
    controls: `Gracz 1: W, aby skoczyć/kopnąć. Gracz 2: strzałka w górę. Strzel więcej goli niż przeciwnik, aby wygrać!`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Super Mario',
    description: `Biegaj i skacz jako Mario w klasycznej grze platformowej. Zbieraj monety, niszczyj wrogów skacząc im na głowy i ratuj księżniczkę Peach z rąk złego Bowsera.

Super Mario Bros zostało wydane przez Nintendo w 1985 roku i jest uważane za jedną z najważniejszych gier w historii. Sprzedano ponad 40 milionów kopii, a Mario stał się najbardziej rozpoznawalną postacią w świecie gier wideo.`,
    controls: `Strzałki: ruch. Spacja lub strzałka w górę: skok. Zbieraj monety, grzyby i gwiazdy. Unikaj wrogów lub skacz im na głowy!`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Bracia Baseballa',
    description: `Graj w dynamiczny baseball z kreskówkowymi postaciami. Odbijaj piłki z ogromną siłą, zdobywaj home runy i pokonuj drużyny przeciwników. Szybka, pełna akcji gra baseballowa.

Baseball Bros to uproszczona, ale ekscytująca gra baseballowa, która skupia się na najbardziej satysfakcjonującym aspekcie baseballa — potężnych odbiciach. Idealny balans między prostotą a głębią rozgrywki.`,
    controls: `Kliknij, aby zamachnąć się kijem w odpowiednim momencie. Celuj w idealne trafienie, aby zdobyć home run!`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Baseball Dziewiątka',
    description: `Pełna gra baseballowa z zarządzaniem drużyną, rozwojem zawodników i dynamicznymi meczami. Rekrutuj graczy, trenuj umiejętności i prowadź swoją drużynę do mistrzowskiego tytułu.

Baseball 9 to jedna z najpopularniejszych mobilnych gier baseballowych, oferująca głęboki system zarządzania drużyną połączony z przystępną rozgrywką. Gra przyciąga zarówno casualowych graczy, jak i zagorzałych fanów baseballa.`,
    controls: `Kliknij, aby rzucić piłkę lub zamachnąć się kijem. Zarządzaj składem drużyny i rozwijaj umiejętności zawodników między meczami.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Tworzenie Muzyki Faza 9',
    description: `Twórz unikalne kompozycje muzyczne, łącząc postacie Sprunki z różnymi dźwiękami i efektami. Faza 9 wprowadza nowe, ciemniejsze brzmienia i tajemnicze postacie do odkrycia.

Sprunki to fanowska modyfikacja gry Incredibox, pozwalająca na tworzenie muzyki przez kombinowanie postaci. Faza 9 oferuje mroczniejszą atmosferę i nowe, eksperymentalne dźwięki, które rozszerzają możliwości twórcze.`,
    controls: `Przeciągnij postacie na scenę, aby dodać dźwięki. Kombinuj różne postacie, aby odkryć unikalne harmonie i sekretne animacje!`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Klikacz Sprunki',
    description: `Klikaj postacie Sprunki, aby zdobywać punkty i odblokowywać nowe postacie, dźwięki i ulepszenia. Gra idle łącząca świat Sprunki z mechaniką klikania.

Sprunki Clicker łączy popularny świat postaci Sprunki z wciągającą mechaniką gier idle. Odkrywaj nowe postacie, zbieraj osiągnięcia i buduj swoją kolekcję muzycznych bohaterów.`,
    controls: `Klikaj postacie Sprunki, aby zdobywać punkty. Kupuj ulepszenia i odblokowuj nowe postacie w sklepie!`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Sprunki Nocna Pora',
    description: `Twórz muzykę w nocnej atmosferze ze specjalnymi postaciami i dźwiękami nocnymi. Ciemniejsza, bardziej atmosferyczna wersja Sprunki z unikalnymi efektami dźwiękowymi.

Sprunki Night Time oferuje nocną wersję doświadczenia muzycznego Sprunki. Zmieniona atmosfera i specjalne nocne brzmienia tworzą zupełnie nowe możliwości twórcze dla miłośników muzycznych eksperymentów.`,
    controls: `Przeciągnij nocne postacie na scenę, aby tworzyć atmosferyczną muzykę. Odkrywaj sekretne kombinacje dostępne tylko w trybie nocnym!`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Sprunki Dorośli',
    description: `Dorosła wersja Sprunki z bardziej złożonymi dźwiękami, zaawansowanymi beatami i dojrzalszą estetyką. Twórz profesjonalnie brzmiące kompozycje z rozszerzoną paletą dźwięków.

Sprunki Grown Up to wersja przeznaczona dla bardziej doświadczonych użytkowników, oferująca głębsze brzmienia i bardziej skomplikowane kompozycje. Idealna dla osób szukających poważniejszego doświadczenia muzycznego.`,
    controls: `Przeciągnij dorosłe postacie na scenę. Kombinuj zaawansowane dźwięki, aby tworzyć dojrzałe kompozycje muzyczne!`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Plac Zabaw Sprunki',
    description: `Swobodnie eksperymentuj z muzyką na placu zabaw Sprunki. Brak zasad — mieszaj i łącz dowolne postacie i dźwięki. Idealna przestrzeń do kreatywnej zabawy muzycznej.

Sprunki Playground to tryb piaskownicy, który daje pełną swobodę twórczą. Bez ograniczeń i celów — po prostu ciesz się tworzeniem muzyki w kolorowym świecie postaci Sprunki.`,
    controls: `Przeciągaj postacie na plac zabaw w dowolnej kolejności. Eksperymentuj swobodnie bez żadnych ograniczeń!`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Szalone Kurczaki 3D',
    description: `Strzelaj do szalonych kurczaków w trójwymiarowym środowisku. Celuj precyzyjnie, aby trafić jak najwięcej kurczaków i zdobyć najwyższy wynik. Klasyczna gra strzelecka w nowej odsłonie 3D.

Crazy Chicken (Moorhuhn) to kultowa niemiecka gra z 1999 roku, która stała się fenomenem internetowym w Europie. Oryginalna wersja była pobierana miliony razy i sparaliżowała produktywność w wielu biurach.`,
    controls: `Celuj myszką i kliknij, aby strzelać do kurczaków. Celuj w dalsze cele, aby zdobyć więcej punktów. Nie przegap żadnego kurczaka!`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — Menedżer Futbolu Amerykańskiego',
    description: `Zarządzaj drużyną futbolu amerykańskiego w stylu retro. Rekrutuj zawodników, opracowuj strategie i prowadź swój zespół do zwycięstwa w Retro Bowl. Pikselowa grafika przywodzi na myśl złotą erę gier.

Retro Bowl łączy zarządzanie drużyną z dynamiczną rozgrywką na boisku. Podejmuj kluczowe decyzje kadrowe, dbaj o morale zespołu i rozgrywaj emocjonujące mecze w drodze po mistrzostwo.`,
    controls: `Przesuń palcem lub użyj myszy, aby podać piłkę do odbiorców. Steruj biegaczem za pomocą strzałek lub dotknięcia ekranu.`,
  },
  'run-3': {
    title: 'Run 3 — Kosmiczny Bieg Bez Końca',
    description: `Biegnij i skacz przez tunele w kosmosie, które rozpadają się pod Twoimi stopami. Obracaj ściany, unikaj dziur i odkrywaj nowe trasy w tej wciągającej grze platformowej.

Run 3 oferuje dziesiątki poziomów z rosnącym poziomem trudności oraz różne postacie do odblokowania, z których każda posiada unikalne umiejętności. Tryb nieskończony zapewnia rozgrywkę bez końca.`,
    controls: `Strzałki lewo/prawo: ruch na boki. Spacja lub strzałka w górę: skok. Biegnij po ścianach, aby zmienić orientację tunelu.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Nieskończone Przeskakiwanie',
    description: `Przeprowadź swoją postać przez ruchliwe drogi, torach kolejowe i rwące rzeki. Unikaj samochodów, pociągów i innych przeszkód w tej nowoczesnej wersji klasycznego Froggera.

Crossy Road oferuje setki postaci do odblokowania, każda z unikalnymi światami i tematami. Prosta mechanika hop-hop sprawia, że gra jest łatwa do nauki, ale trudna do opanowania.`,
    controls: `Przesuń w górę, aby skoczyć do przodu. Przesuń w lewo, prawo lub w dół, aby się poruszać. Unikaj przeszkód i zbieraj monety!`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Nakarm Om Noma Cukierkami',
    description: `Przecinaj liny we właściwym momencie, aby dostarczyć cukierka prosto do pyszczka Om Noma. Rozwiązuj łamigłówki fizyczne, zbieraj gwiazdki i odkrywaj nowe mechaniki na każdym poziomie.

Cut the Rope to wielokrotnie nagradzana gra logiczna, która zdobyła serca milionów graczy na całym świecie. Każdy pakiet poziomów wprowadza nowe elementy, takie jak poduszki powietrzne, teleporty i magiczne kapelusze.`,
    controls: `Przesuń palcem lub kliknij i przeciągnij, aby przeciąć linę. Dotknij poduszek powietrznych i bąbelków, aby skierować cukierka do Om Noma.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Huśtaj się i Lataj',
    description: `Chwytaj się punktów zaczepienia i huśtaj się jak pajęczak przez kolorowe poziomy. Puszczaj się w idealnym momencie, aby nabrać rozpędu i dolecieć do mety.

Stickman Hook to gra oparta na fizyce wahadła, w której wyczucie czasu jest kluczem do sukcesu. Setki poziomów o rosnącej trudności i odblokowane postacie czekają na Ciebie.`,
    controls: `Kliknij lub dotknij ekranu, aby zaczepić się o punkt. Puść, aby się odczepić i lecieć dalej. Wyczucie czasu jest kluczowe!`,
  },
  'drive-mad': {
    title: 'Drive Mad — Szalone Wyzwanie Jazdy',
    description: `Prowadź samochód przez szalone tory przeszkód pełne ramp, pętli i niebezpiecznych odcinków. Utrzymaj pojazd w pionie i dotrzyj do mety w jednym kawałku.

Drive Mad testuje Twoje umiejętności balansowania i wyczucie gazu. Każdy poziom oferuje nowy, zaskakujący układ przeszkód, który wymaga precyzji i cierpliwości.`,
    controls: `Strzałka w górę: gaz. Strzałka w dół: cofanie. Balansuj pojazdem, aby nie przewrócić się na trudnych odcinkach!`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Podbój Terytorium',
    description: `Wyjdź ze swojej strefy, zakreśl obszar i wróć, aby go przejąć. Powiększaj swoje terytorium, jednocześnie broniąc się przed innymi graczami, którzy mogą przeciąć Twój ślad.

Paper.io 2 to dynamiczna gra .io, w której strategia i odwaga decydują o zwycięstwie. Im większe ryzyko podejmiesz, tym więcej terytorium zdobędziesz — ale jeden błąd oznacza koniec gry.`,
    controls: `Używaj strzałek lub myszy, aby kierować ruchem postaci. Zakreślaj obszary i wracaj na swoje terytorium, aby je przejąć.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Nieskończony Bieg po Torach',
    description: `Wciel się w Jake'a i uciekaj przed złośliwym dozorcą i jego psem po torach metra. Zbieraj monety, używaj deskorolki i power-upów, aby biec jak najdalej.

Subway Surfers to jedna z najpopularniejszych gier mobilnych na świecie z miliardami pobrań. Regularnie aktualizowane lokacje przenoszą gracza do miast z całego globu.`,
    controls: `Przesuń w lewo/prawo: zmiana toru. Przesuń w górę: skok. Przesuń w dół: ślizg. Zbieraj monety i power-upy podczas biegu!`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Szalona Przygoda z Plecakiem Odrzutowym',
    description: `Wskocz na plecak odrzutowy jako Barry Steakfries i leć przez laboratorium pełne przeszkód. Zbieraj monety, zdobywaj pojazdy specjalne i unikaj pocisków i laserów.

Jetpack Joyride to dynamiczna gra akcji, w której każdy lot jest inny dzięki losowym misjom i nagrodzie z automatu po każdej rozgrywce. Odblokuj nowe plecaki, kostiumy i ulepszenia.`,
    controls: `Dotknij ekranu lub kliknij i przytrzymaj, aby wznosić się. Puść, aby opadać. Unikaj laserów, rakiet i pól elektrycznych!`,
  },
  'fireboy-and-watergirl': {
    title: 'Fireboy and Watergirl — Świątynia Leśna',
    description: `Prowadź dwóch przeciwstawnych elementarnych bohaterów przez 32 poziomy kooperacyjnych zagadek. Fireboy jest odporny na ogień, Watergirl na wodę — dotknij złego elementu i natychmiast giniesz. Aktywuj dźwignie, by otwierać drzwi i prowadź oboje do wyjść jednocześnie.

Wydany w 2009 roku, to jedna z najbardziej lubianych franczyz gier przeglądarkowych z ponad 500 milionami rozgrywek w pięciu częściach. Nauczyciele na całym świecie używają go jako ćwiczenia z pracy zespołowej.`,
    controls: `Gracz 1 (Fireboy): strzałki do poruszania się i skakania. Gracz 2 (Watergirl): WASD do poruszania się. Fireboy ginie w wodzie, Watergirl w ogniu. Oboje giną w zielonym szlamie. Prowadź oboje jednocześnie do wyjść we właściwym kolorze.`,
  },
  'ovo': {
    title: 'OvO — Platformer Parkour',
    description: `Biegnij, ślizgaj się i skacz przez ponad 40 precyzyjnych poziomów platformowych. Opanuj dive-slam, by prześlizgnąć się pod barierami, i wall-jump, by tworzyć skróty.

Stworzone przez Dedragames, wirusowe w 2021 roku. Speedrunnerzy kończą całą grę w mniej niż 3 minuty.`,
    controls: `Strzałki lub WASD do biegu. Spacja lub ↑ do skoku. ↓ w powietrzu to dive-slam. Dive-slam podczas biegu to ślizg. Skok przy ścianie to wall-jump.`,
  },
  'basketball-stars': {
    title: 'Basketball Stars — Koszykówka 1 na 1',
    description: `Zmierz się z AI lub znajomym w koszykówce jeden na jeden. Zmyl obrońcę i wybierz idealny moment na trójkę lub efektowny wsad.

Stworzone przez Madpuffers. Roster postaci inspirowany gwiazdami NBA, codziennie grają setki tysięcy graczy.`,
    controls: `Gracz 1: A/D ruch, W skok, S obrona/kradzież. B lub klik do rzutu. Gracz 2: strzałki, ↑ skok, ↓ obrona. L lub klik do rzutu.`,
  },
  'monkey-mart': {
    title: 'Monkey Mart — Menadżer Supermarketu',
    description: `Prowadź własny supermarket jako uroczy małpiszon! Zbieraj plony, uzupełniaj półki i obsługuj klientów, zanim stracą cierpliwość. Zatrudniaj pomocnicze małpki, by automatyzować zadania.

Ponad 100 milionów rozgrywek od 2022 roku. Zbudowane w zaledwie trzy miesiące przez niezależnego dewelopera TinyDobbins.`,
    controls: `Strzałki lub WASD do chodzenia. Chód po polach zbiera plony. Podejście do pustej półki uzupełnia ją. Wydaj monety na nowe sekcje i pomocników.`,
  },
  'short-life': {
    title: 'Short Life — Przetrwanie Toru Przeszkód',
    description: `Prowadź postać ragdoll przez śmiercionośne tory przeszkód pełne obracających się pił, młotów i min. Tytuł nie jest przesadą — giń, śmiej się i od razu próbuj ponownie.

Stworzone przez RHM Interactive. 20 poziomów rosnącej brutalności z silnikiem fizycznym, który sprawia, że każda śmierć jest inna.`,
    controls: `Strzałki lub WASD do poruszania się i skakania. Wszystkie zagrożenia zabijają natychmiast. Dotrzyj do flagi na końcu każdego poziomu, by przejść dalej. Natychmiastowy restart po każdej śmierci.`,
  },
  '1v1-lol': {
    title: '1v1.LOL — Buduj i Strzelaj',
    description: `Walcz w arenach buduj-i-walcz, gdzie przetrwanie wymaga celnego strzelania i jeszcze szybszego budowania. Stawiaj ściany i rampy, by zdobyć przewagę wysokości, a potem wyeliminuj przeciwnika.

Ponad 200 milionów zarejestrowanych użytkowników bez budżetu marketingowego. Wirusowo rozszerzył się przez szkoły na całym świecie.`,
    controls: `WASD ruch. Mysz celowanie/strzelanie. Q ściana, E podłoga, R rampa, F dach. Shift sprint. Kółko myszy zmiana broni.`,
  },
  'smash-karts': {
    title: 'Smash Karts — Wieloosobowa Bitwa na Kartach',
    description: `Wskocz do karta i eliminuj przeciwników rakietami, karabinami maszynowymi i minami w tej szybkiej arenie bitwy. Zbieraj skrzynie z bronią i bądź ostatnim kartem.

Ponad 150 milionów rozgrywek w 2023 roku. Dedykowane serwery gwarantują niskie opóźnienia.`,
    controls: `WASD lub strzałki do jazdy. Mysz do celowania. Spacja lub klik do strzelania. Zbieraj skrzynie z bronią. Najwięcej eliminacji po czasie wygrywa.`,
  },
  'penalty-shooters-2': {
    title: 'Penalty Shooters 2 — Rzuty Karne',
    description: `Zmierz się z ostateczną presją piłkarską w seriach rzutów karnych w 8 międzynarodowych turniejach. Jako napastnik obserwuj pochylenie bramkarza. Jako bramkarz czytaj kierunek strzału.

Ponad 200 milionów rozgrywek. Ponad 50 drużyn narodowych z autentycznymi kolorami koszulek.`,
    controls: `Jako napastnik: mysz do celowania, klik do strzału. Bramkarz się pochyla — użyj wskazówki. Jako bramkarz: kliknij po właściwej stronie, by się rzucić.`,
  },
  'getaway-shootout': {
    title: 'Getaway Shootout — Chaotyczny Wyścig',
    description: `Skacz, strzelaj i potykaj się w stronę pojazdu ucieczki przed przeciwnikami w tym chaotycznym brawlerze. Sterowanie jest celowo niezgrabne — naprzemienne skoki lewo-prawo — co sprawia, że każdy wyścig to komedia.

Stworzone przez New Eich Games. Losowo pojawiające się bronie gwarantują wyjątkowe mecze.`,
    controls: `Gracz 1: W skok w lewo, E skok w prawo, R użyj przedmiotu. Gracz 2: I lewo, O prawo, P przedmiot. Pierwszy do pojazdu wygrywa rundę.`,
  },
  'big-tower-tiny-square': {
    title: 'Big Tower Tiny Square — Pionowy Platformer',
    description: `Wspinaj się na niebezpiecznie wysoką wieżę jako mały kwadracik, jedna śmiercionośna komnata na raz. Każde piętro przynosi okrutniejsze pułapki. Twoim celem jest ananas na samym szczycie.

Ponad 110 ręcznie stworzonych komnat. Przeciętny gracz potrzebuje 3–5 godzin i ponad 2000 śmierci, by dotrzeć na szczyt.`,
    controls: `Strzałki lub WASD do ruchu. Spacja, W lub ↑ do skoku. Podwójne naciśnięcie kierunku w powietrzu daje mały impuls. Każde zagrożenie zabija natychmiast i resetuje tylko bieżącą komnatę.`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Wyzwanie Najwyższej Precyzji",
    description: `Poprowadź czerwony kwadrat przez labirynt niebieskich kul, zbierając żółte monety. Brzmi prosto? To jedna z najtrudniejszych gier, jakie kiedykolwiek powstały — wymaga absolutnej precyzji i idealnego wyczucia czasu.

World's Hardest Game to legenda wśród gier przeglądarkowych, znana z doprowadzania graczy do szału. Każdy z 30 poziomów wymaga perfekcyjnej koordynacji i żelaznych nerwów.`,
    controls: `Strzałki: ruch czerwonym kwadratem. Unikaj niebieskich kul, zbieraj żółte monety i dotrzyj do zielonej strefy!`,
  },
};
