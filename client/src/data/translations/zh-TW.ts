import type { GameTranslation } from '../gameTranslations';

export const ZH_TW_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — 滑動合併數字遊戲',
    description: `在4×4網格上滑動數字方塊，將相同的數字合併以達到2048方塊。每次滑動會合併匹配的方塊並產生新的2或4——提前規劃多步，否則棋盤會迅速填滿。易學難精。

由義大利開發者Gabriele Cirulli於2014年3月創建，2048一夜之間成為全球現象，啟發了數百種變體。該遊戲基於Asher Vollmer的Threes!，但其開源發佈使其成為歷史上被複製最多的瀏覽器遊戲。`,
    controls: `使用方向鍵（↑ ↓ ← →）或在手機上滑動來移動所有方塊。相同數字的方塊碰撞時會合併。目標是創建一個數字為2048的方塊。`,
  },
  'tetris': {
    title: 'Tetris — 經典方塊拼圖',
    description: `這款永恆的方塊下落拼圖遊戲塑造了整整一代人。旋轉和放置四格骨牌，完成水平行以消除它們。分數越高，方塊下落越快。

由蘇聯軟體工程師Alexey Pajitnov於1985年發明，Tetris在各個平台上銷量超過5.2億份。名字來源於希臘前綴「tetra」（四）與網球的結合。`,
    controls: `使用方向鍵：← →移動，↑旋轉，↓慢降。按空白鍵快速下落。完成整行以消除並得分。`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — 點擊飛翔',
    description: `引導一隻像素小鳥穿過無盡的綠色管道，點擊螢幕讓牠拍動翅膀。每次點擊讓小鳥上升，重力將牠拉下。你能突破50分嗎？

Flappy Bird由越南開發者阮河東創建，於2013年5月發佈。2014年初成為下載量最大的免費應用程式，每天透過廣告賺取約5萬美元。`,
    controls: `點擊、觸摸或按任意鍵讓小鳥拍動翅膀。不操作時重力會將小鳥拉下。穿過管道之間的間隙。每穿過一根管道得一分。`,
  },
  'chrome-dino': {
    title: 'Chrome恐龍快跑 — T-Rex跑酷',
    description: `扮演Chrome瀏覽器著名的T-Rex恐龍穿越像素沙漠，跳過仙人掌，蹲下躲避翼龍。這是一款無盡奔跑遊戲，速度不斷加快。

自2014年起隱藏在Google Chrome的「無網路」頁面中，由Sebastien Gabriel設計。每月約有2.7億次遊戲。`,
    controls: `按空白鍵或↑跳過仙人掌。按↓蹲下躲避翼龍。在手機上，點擊跳躍，向下滑動蹲下。T-Rex自動奔跑。`,
  },
  'snake': {
    title: 'Snake — 經典貪吃蛇',
    description: `在棋盤上控制一條不斷變長的蛇，吃食物來成長，同時避開自己的尾巴和牆壁。蛇越長越難控制，你能堅持多久？

貪吃蛇的起源可追溯到1976年的街機遊戲Blockade。當諾基亞在1998年將其預裝到手機上時，它成為了文化現象。`,
    controls: `使用方向鍵（↑ ↓ ← →）或WASD改變方向。蛇持續移動。吃食物以成長並得分。避開牆壁和自己的尾巴。`,
  },
  'pac-man': {
    title: 'Pac-Man — 街機傳奇',
    description: `在迷宮中吃掉所有豆子，同時躲避四個彩色幽靈——Blinky、Pinky、Inky和Clyde。吃下能量豆來反轉局勢。

由Namco於1980年5月發佈，Pac-Man成為有史以來收入最高的街機遊戲，硬幣收入超過25億美元。`,
    controls: `使用方向鍵在迷宮中導航Pac-Man。吃掉所有豆子以完成關卡。吃角落的能量豆使幽靈暫時變藍。`,
  },
  'minesweeper': {
    title: '踩地雷 — 邏輯排雷遊戲',
    description: `在網格上翻開格子而不引爆隱藏的地雷。每個顯示的數字告訴你周圍八個格子中隱藏了多少顆地雷——用邏輯推斷安全的格子。

踩地雷由Robert Donner和Curt Johnson為Microsoft Windows 3.1於1990年創建，旨在教使用者學習滑鼠的左鍵和右鍵操作。`,
    controls: `左鍵點擊翻開格子。數字表示相鄰地雷的數量。右鍵點擊標記可疑地雷。用邏輯推斷安全的格子。`,
  },
  'solitaire': {
    title: '紙牌 — 經典克朗代克',
    description: `最經典的單人紙牌遊戲。將洗好的牌按花色從A到K排列到四個基礎堆中，在七列之間移動紙牌。

克朗代克紙牌在微軟將其收錄到Windows 3.0（1990年）後風靡全球。由實習生Wes Cherry編寫程式。`,
    controls: `點擊紙牌選擇，然後點擊有效的目標位置。按顏色交替降序排列建立列。將A移到基礎堆上並按花色建立。`,
  },
  'chess': {
    title: '西洋棋 — 對戰電腦',
    description: `在世界上最著名的策略遊戲中挑戰電腦對手。在64格棋盤上指揮16枚棋子的軍隊。

西洋棋起源於6世紀的印度，名為「恰圖蘭卡」，透過絲綢之路傳播到波斯和歐洲。如今全球有超過6億的固定玩家。`,
    controls: `點擊棋子選擇，然後點擊目標格子。有效移動會被高亮顯示。標準規則包括王車易位、吃過路兵和兵的升變。`,
  },
  'checkers': {
    title: '跳棋 — 經典棋盤遊戲',
    description: `在8×8棋盤上跳過並吃掉對手的棋子。沿對角線移動，連續多次跳躍，將棋子升級為「王」以獲得後退能力。

跳棋是最古老的棋盤遊戲之一，在古城烏爾發現的版本可追溯到公元前3000年。`,
    controls: `點擊棋子選擇，然後點擊對角線上的目標格子。跳過對手的棋子以吃掉它。到達對面邊緣可升級棋子。`,
  },
  'sudoku': {
    title: '數獨 — 數字邏輯謎題',
    description: `填充9×9網格，使每行、每列和每個3×3宮格都包含數字1到9且不重複。純粹用邏輯推斷每個缺失的數字。

現代數獨由美國建築師Howard Garns於1979年以「Number Place」為名發明。在日本流行後成為全球熱潮。`,
    controls: `點擊空格並輸入數字1到9。每行、每列和每個3×3宮格必須恰好包含數字1到9各一次。`,
  },
  'wordle': {
    title: 'Wordle無限版 — 猜詞遊戲',
    description: `在六次或更少的機會內猜出五個字母的秘密單詞。彩色方塊顯示哪些字母正確（綠色）、位置錯誤（黃色）或不在單詞中（灰色）。

Wordle由Josh Wardle於2021年作為禮物送給女友。從90名玩家增長到2022年1月每天超過200萬玩家。`,
    controls: `輸入一個五字母單詞並按Enter。綠色=位置正確。黃色=字母在單詞中但位置不對。灰色=字母不在單詞中。你有六次機會。`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — 餅乾點擊遊戲',
    description: `點擊巨大的餅乾來烘焙餅乾，然後花費購買升級——奶奶、農場、工廠和傳送門——自動烘焙更多餅乾。

由法國程式設計師Julien "Orteil" Thiennot於2013年創建，Cookie Clicker開創了放置類遊戲。2021年在Steam上發佈，獲得97%好評。`,
    controls: `點擊大餅乾來生產餅乾。花費餅乾在商店購買建築以自動化生產。購買升級以倍增產量。`,
  },
  'connect-four': {
    title: '四子棋 — 策略連珠',
    description: `將彩色棋子投入垂直棋盤，嘗試連成四個——水平、垂直或對角線——在對手之前。

四子棋由Milton Bradley於1974年首次銷售。1988年，Victor Allis證明了先手玩家從中間列開始可以始終獲勝。`,
    controls: `點擊列來投放棋子。棋子受重力下落。將四個相同顏色的棋子連成一線即可獲勝。`,
  },
  'tic-tac-toe': {
    title: '井字棋 — 經典XO遊戲',
    description: `在3×3網格上交替放置X和O，嘗試連成三個。與朋友對戰或挑戰AI。

井字棋是已知最古老的遊戲之一，在古埃及遺跡中發現的例子可追溯到公元前1300年。`,
    controls: `點擊空格放置你的符號。在水平、垂直或對角線上連成三個即可獲勝。`,
  },
  'reversi': {
    title: '黑白棋 — 奧賽羅策略遊戲',
    description: `在8×8棋盤上放置棋子，透過夾住對手的棋子來翻轉它們。每一步都可能改變力量的平衡。

Reversi發明於1883年。現代版本Othello由長谷川五郎於1971年推廣，口號是「一分鐘學會，一輩子精通」。`,
    controls: `點擊空格放置你的棋子。被夾住的對手棋子會變為你的顏色。`,
  },
  'hextris': {
    title: 'Hextris — 六邊形方塊拼圖',
    description: `經典方塊下落遊戲的創意變體，設置在旋轉的六邊形上。彩色方塊從六個方向落向中心。

Hextris由馬里蘭大學學生於2014年在一次黑客馬拉松中創建。`,
    controls: `使用←和→（或A和D）旋轉中心六邊形。將三個或更多相同顏色的方塊連接在一起以消除。`,
  },
  'word-search': {
    title: '找單詞 — 隱藏詞彙搜索',
    description: `在隨機字母網格中沿水平、垂直和對角線方向尋找隱藏的單詞。單詞可以從兩個方向閱讀。

找單詞遊戲由Norman E. Gibat於1968年發明。`,
    controls: `點擊並拖動字母來標記單詞。單詞可以隱藏在任何方向。`,
  },
  'falling-blocks': {
    title: '下落方塊 — 方塊堆疊遊戲',
    description: `彩色方塊不斷下落，你需要堆疊和匹配它們以防止堆積過高。策略性地放置方塊以創建顏色組合。

下落方塊遊戲起源於Tetris（1985年），並發展出數十種變體。`,
    controls: `使用←和→移動方塊。按↑或空白鍵旋轉。按↓快速下落。匹配顏色並完成整行以消除方塊。`,
  },
  'card-solitaire': {
    title: '紙牌接龍 — 經典單人紙牌',
    description: `世界上最受歡迎的單人紙牌遊戲的緊湊版。按顏色交替降序排列，將全部52張牌移至四個基礎堆。

紙牌接龍自18世紀以來一直很流行。拿破崙·波拿巴在流放期間是一位狂熱的玩家。`,
    controls: `點擊紙牌選擇，然後點擊有效的目標位置。按紅黑交替建立列。將A移到基礎堆。`,
  },
  'slope': {
    title: 'Slope — 3D滾球遊戲',
    description: `控制一個球沿著霓虹燈發光的斜坡以不斷加速的速度滾下。避開障礙物，通過急彎，不要掉下邊緣。

Slope由Rob Kay開發，成為世界上最受歡迎的瀏覽器遊戲之一。使用WebGL實現流暢的3D圖形。`,
    controls: `使用←和→或A和D控制球。避開紅色障礙物和洞。球會持續加速。`,
  },
  'among-us': {
    title: 'Among Us — 找出內鬼',
    description: `與船員合作完成太空飛船上的任務——但要小心，你們中間有內鬼。討論、指控並投票驅逐嫌疑人。

Among Us由InnerSloth開發，2020年爆紅。高峰期每月有5億活躍玩家。`,
    controls: `使用WASD或方向鍵移動。點擊任務完成它們。報告屍體或召開緊急會議。`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — 節奏障礙跑酷',
    description: `跳躍和飛行穿過充滿障礙的多彩世界，與電子音樂同步。點擊跳過尖刺並導航重力門。

Geometry Dash由瑞典開發者Robert Topala於2013年創建。下載量超過2億次，擁有超過8000萬個使用者創建的關卡。`,
    controls: `點擊、觸摸或按空白鍵跳躍。在飛船模式中長按持續跳躍。障礙與音樂同步。`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — 3D隧道衝刺',
    description: `以極高速度穿過旋轉變色的3D隧道。躲避瞬間出現的障礙物。

Tunnel Rush作為最容易上手但最具挑戰性的瀏覽器遊戲之一成為病毒式現象。`,
    controls: `使用←和→或A和D在隧道中躲避障礙物。反應要快——在高速下你只有不到一秒的時間。`,
  },
  'bubble-shooter': {
    title: '泡泡射手 — 彩色泡泡消除',
    description: `瞄準並射出彩色泡泡，將三個或更多相同顏色的泡泡連在一起使其爆破。清除所有泡泡以通過每個關卡。

泡泡射手起源於Taito的Puzzle Bobble（1994年）。網頁版成為網路上玩家最多的休閒遊戲之一。`,
    controls: `用滑鼠瞄準並點擊射出泡泡。將三個或更多相同顏色的泡泡匹配在一起使其爆破。`,
  },
  'spider-solitaire': {
    title: '蜘蛛紙牌 — 策略接龍',
    description: `在十列中按降序排列同花色的牌。完成K到A的序列以移除它們。

蜘蛛紙牌自1998年起被收錄在Microsoft Windows中，成為歷史上玩家最多的遊戲之一。`,
    controls: `點擊紙牌選擇，然後點擊有效的目標位置。只有同花色的序列才能作為一組移動。完成K-A以移除。`,
  },
  'mahjong': {
    title: '麻將連連看 — 經典配對消除',
    description: `從複雜的堆疊圖案中移除成對的相同牌。只有「自由」的牌才能被選擇。移除所有牌即可獲勝。

麻將接龍由Brodie Lockard於1981年在PLATO系統上創建。`,
    controls: `點擊一個自由的牌選擇，然後點擊另一個相同的自由牌以移除配對。如果卡住可以使用提示按鈕。`,
  },
  'freecell': {
    title: 'FreeCell — 策略紙牌',
    description: `所有52張牌面朝上發在八列中——沒有隱藏資訊。每局都是純策略考驗。使用四個空閒單元格作為臨時儲存。

FreeCell因被收錄在Windows 95及以後的版本中而廣受歡迎。在原始的32,000局中，只有第11982局無解。`,
    controls: `點擊紙牌，然後點擊目標列或空閒單元格。按顏色交替降序排列建立列。明智地使用四個空閒單元格。`,
  },
  'backgammon': {
    title: '西洋雙陸棋 — 經典棋盤',
    description: `擲骰子，讓你的十五枚棋子競速穿過棋盤。封鎖、擊打並擊敗AI，在這款永恆的策略遊戲中取勝。

西洋雙陸棋是最古老的棋盤遊戲之一，起源於5000多年前的美索不達米亞。`,
    controls: `點擊骰子按鈕擲骰。點擊棋子，然後點擊目標點。如果可能，你必須使用兩個骰子。`,
  },
  'hangman': {
    title: 'Hangman — 猜字母遊戲',
    description: `在絞刑架上的小人畫完之前，逐個字母猜出隱藏的單詞。每次猜錯都會增加一個身體部位。

Hangman至少從維多利亞時代就開始玩了，是世界上最著名的文字遊戲之一。`,
    controls: `點擊字母來猜測。正確的字母會出現在相應的位置。你有6-8次猜錯的機會。`,
  },
  'fruit-ninja': {
    title: '水果忍者 — 切水果遊戲',
    description: `用手指或滑鼠切開飛過螢幕的水果。同時切多個水果獲得連擊獎勵，但要小心炸彈。

水果忍者由Halfbrick Studios開發，於2010年發佈。下載量超過10億次。`,
    controls: `在螢幕上滑動或點擊拖動來切水果。同時切多個水果獲得連擊。避開炸彈。`,
  },
  'moto-x3m': {
    title: 'Moto X3M — 極限摩托特技',
    description: `駕駛摩托車穿過25個充滿爆炸桶、巨型環路和致命旋轉鋸的賽道。做特技動作獲得時間獎勵。

Moto X3M由Madpuffers於2016年開發。該系列遊戲總遊玩次數超過5億。`,
    controls: `按UP或W加速，DOWN或S煞車。左/右傾斜空中姿態。做特技動作獲得獎勵。`,
  },
  'drift-boss': {
    title: 'Drift Boss — 一鍵漂移',
    description: `用一個按鍵掌握漂移藝術。按住向右轉，鬆開向左滑。保持在道路上。

Drift Boss由Madpuffers創建，以易於上手的一鍵遊戲著稱。`,
    controls: `點擊或按住向右轉。鬆開向左滑。把握按鍵節奏以保持在道路上。`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — 雙人籃球',
    description: `選擇傳奇球隊，在快節奏的比賽中進行精彩的助攻、蓋帽和灌籃。與電腦對戰或挑戰朋友。

Basketball Legends擁有卡通風格的球員和特殊技能，靈感來自NBA球星。`,
    controls: `玩家1：WASD移動，B投籃，N特殊投籃，M蓋帽。玩家2：方向鍵移動，K投籃，L特殊投籃。`,
  },
  'eggy-car': {
    title: 'Eggy Car — 護蛋駕車',
    description: `駕車翻越山丘，車頂上放著一顆易碎的雞蛋。在崎嶇地形上行駛而不讓雞蛋掉落。

Eggy Car將駕駛變成了精確的物理謎題。雞蛋遵循真實的重力和慣性。`,
    controls: `按住加速。鬆開自由滾動。小心通過陡坡。盡可能開得更遠。`,
  },
  'stack-ball': {
    title: 'Stack Ball — 擊碎層層',
    description: `點擊讓球下落穿過旋轉的層。擊碎彩色層但避開黑色層。累積速度開啟火焰模式。

Stack Ball融合了螺旋下降和令人滿足的物理破壞效果。`,
    controls: `按住讓球下落。鬆開停止。避開黑色層。連續擊碎多層開啟火焰模式。`,
  },
  'vex-7': {
    title: 'Vex 7 — 火柴人闖關',
    description: `引導你的火柴人穿過佈滿旋轉刀片、尖刺和移動平台的殘酷障礙賽道。超過10個挑戰關卡。

Vex 7是最受歡迎的平台跳躍系列之一的最新作，總遊玩次數超過10億。`,
    controls: `使用WASD或方向鍵移動和跳躍。按S滑行。蹬牆跳。避開尖刺、刀片和陷阱。`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — 迷你釣魚',
    description: `拋出魚線，在魚鉤下沉時滑動鉤子捕魚。用金錢升級魚線長度、速度和離線收入。

Tiny Fishing融合了放置機制和主動釣魚玩法。傳說中的魚隱藏在100公尺以下的深處。`,
    controls: `按住點擊拋竿。滑動滑鼠捕魚。每次盡可能多捕。用收入升級。`,
  },
  'gunspin': {
    title: 'GunSpin — 槍械旋轉飛行',
    description: `扔出槍支並透過在正確的時機射擊來保持旋轉。每次射擊的後座力推動槍飛得更遠。把握點擊節奏以獲得最大距離。

GunSpin融合了真實的彈道物理和放置升級系統。`,
    controls: `點擊或觸摸射擊。每次射擊產生的後座力推動槍前進。把握射擊節奏以保持高度。收集金幣升級。`,
  },
  'vex-6': {
    title: 'Vex 6 — 火柴人闖關',
    description: `奔跑、跳躍、滑行和攀牆穿過危險的障礙賽道。Vex 6以新關卡延續了這個系列。

Vex 6引入了帶氧氣條的游泳機制、軌道上的鋸刀和易碎地板。`,
    controls: `使用WASD或方向鍵移動和跳躍。按S滑行。蹬牆跳。避開尖刺、鋸刀和陷阱。`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — 彈射飛行',
    description: `擊打、彈跳並將自己發射穿過果凍熊軍團。從摔跤台上彈射Burrito Bison。

Burrito Bison: Launcha Libre擁有三個可玩的摔跤手和特殊能力。原版是Juicy Beast Studios的Flash遊戲。`,
    controls: `點擊從擂台彈射。點擊在果凍熊上彈跳。使用特殊能力。收集金錢升級。`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — 布偶人擊打',
    description: `猛擊布偶對手並觀看基於物理的混亂場面。瞄準、蓄力、出拳，將火柴人擊飛。

Ragdoll Hit使用真實的物理引擎獨立計算衝擊力和碰撞。`,
    controls: `點擊並拖動瞄準拳頭。鬆開出拳。將對手打向障礙物以造成更多傷害。`,
  },
  'soccer-random': {
    title: 'Soccer Random — 雙人隨機足球',
    description: `一場瘋狂的足球遊戲，規則、球場和球員每半場都會改變。用搖擺的布偶球員射門。

Soccer Random每半場隨機化一切——球的大小、球員數量、地面材質甚至重力。`,
    controls: `玩家1：按W踢球。玩家2：按↑鍵。進5球獲勝。球場每半場改變。`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — 經典冒險傳奇',
    description: `經典橫版捲軸傳奇。引導瑪利歐穿越蘑菇王國，踩踏Goomba、敲碎磚塊、拯救桃花公主。

Super Mario Bros由任天堂於1985年發佈，被視為有史以來最具影響力的電子遊戲。由宮本茂設計，銷量超過4000萬份。`,
    controls: `使用方向鍵移動瑪利歐。按Z或↑跳躍。按X奔跑/射擊。跳到敵人頭上踩踏它們。收集金幣和能力提升道具。`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — 棒球街機',
    description: `在這款快節奏的棒球遊戲中走上打擊區，擁有卡通角色和街機動作。投球、擊球和防守以贏得勝利。

Baseball Bros融合了簡單的機制和競技玩法。快速的3局比賽。`,
    controls: `點擊投球或擊球。使用滑鼠瞄準。把握點擊節奏來擊球。用方向鍵控制跑壘。`,
  },
  'baseball-9': {
    title: 'Baseball 9 — 棒球隊管理',
    description: `管理你自己的棒球隊，參加聯賽和錦標賽。招募球員、升級技能並帶領球隊。

Baseball 9融合了球隊管理和場上動作。招募擁有獨特數據的球員。`,
    controls: `點擊擊球。瞄準並點擊投球。在比賽間管理球隊。`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — 音樂創作',
    description: `透過拖放動畫角色到舞台上來創建音樂混音。每個Sprunki角色添加不同的音效循環。

Sprunki Phase 9是Sprunki音樂創作系列的第九部，靈感來自Incredibox。`,
    controls: `拖動角色到舞台上添加音效。點擊移除。嘗試不同組合發現隱藏動畫。`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — 音樂放置遊戲',
    description: `點擊收集節拍並解鎖新的Sprunki角色。每次升級為你的作品添加新的音效。

Sprunki Clicker融合了放置點擊機制和Sprunki音樂世界。`,
    controls: `點擊收集節拍。用節拍升級。解鎖新角色和音效套裝。`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — 夜間音樂混音',
    description: `在夜間主題的Sprunki中創建令人毛骨悚然的旋律。拖動可怕的角色來疊加節拍和詭異的音效。

Sprunki Night Time以黑暗和夜間美學呈現Sprunki配方。`,
    controls: `拖動角色到舞台上添加音效。尋找特殊組合解鎖隱藏動畫。`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — 成人版音樂混音',
    description: `Sprunki音樂創作器的成人版，具有更精緻的音效和成熟的設計。創建複雜的音軌。

Sprunki Grown Up以成人版經典角色呈現，擁有更複雜的音效元素。`,
    controls: `拖動成人角色到舞台上。嘗試不同層次的音效以創建更豐富的作品。`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — 音樂沙盒',
    description: `終極Sprunki沙盒體驗，所有角色和音效從一開始就解鎖。自由混音和實驗。

Sprunki Playground移除了所有進度障礙，提供對全部角色和音效的即時存取。`,
    controls: `拖動任何角色到舞台上。自由疊加音效。使用儲存按鈕儲存你的混音。`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — 瘋狂射雞',
    description: `在這款街機射擊遊戲中瞄準飛過3D場景的瘋狂雞。點擊射落牠們。

Crazy Chicken（Moorhuhn）於1999年作為廣告遊戲出現，憑藉超過1000萬次下載成為病毒式現象。`,
    controls: `移動滑鼠瞄準。點擊射擊。尋找隱藏的獎勵目標。金雞給予額外積分。`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — 美式足球經理',
    description: `在這款復古像素風格遊戲中管理你的美式足球隊。選秀球員、制定進攻戰術，帶領球隊贏得Retro Bowl冠軍。

Retro Bowl將團隊管理策略與暢快的操控玩法相結合。親自操控傳球，在場外做出關鍵決策。`,
    controls: `滑動或點擊向接球手傳球。透過管理選單選秀球員和管理陣容。`,
  },
  'run-3': {
    title: 'Run 3 — 太空無盡跑酷',
    description: `在充滿缺口的太空隧道中奔跑和跳躍。旋轉隧道牆壁尋找新路徑，盡可能跑得更遠。

Run 3擁有多個可解鎖角色，每個角色都有獨特能力。探索故事模式或挑戰無盡模式。`,
    controls: `使用左右方向鍵或A/D轉向。按空白鍵跳躍。角色會自動向前跑。`,
  },
  'crossy-road': {
    title: 'Crossy Road — 無盡跳躍',
    description: `在這款經典跳躍遊戲中穿越馬路、鐵軌和河流。閃避車輛、火車和各種障礙物，盡可能走得更遠。

Crossy Road靈感來自經典Frogger，擁有可愛的體素畫風和大量可收集角色。`,
    controls: `點擊或按空白鍵向前跳。使用左右方向鍵左右移動。`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — 割繩子餵Om Nom',
    description: `精準割斷繩子，將糖果送入貪吃小怪獸Om Nom的嘴裡。關卡逐漸增加難度，考驗你的物理直覺和時機把握。

Cut the Rope是一款經典物理解謎遊戲，需要巧妙運用時機和策略。收集每關三顆星獲得最高評價。`,
    controls: `用滑鼠或手指劃過繩子來切斷。點擊氣泡、氣墊等機關來引導糖果。`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — 擺盪飛行',
    description: `像蜘蛛人一樣從一個支點擺盪到另一個支點。掌握釋放時機，飛越障礙到達終點。

Stickman Hook擁有大量關卡和可解鎖角色。逼真的擺盪物理讓這款遊戲易上手難精通。`,
    controls: `點擊或長按拋出繩索。鬆開後飛向空中。掌握好時機到達目的地。`,
  },
  'drive-mad': {
    title: 'Drive Mad — 物理駕駛挑戰',
    description: `駕駛汽車通過瘋狂的物理障礙賽道。在斜坡、橋樑和各種障礙物上保持平衡，不要翻車。

Drive Mad擁有大量難度遞增的關卡。逼真的物理系統讓每個關卡都充滿新挑戰。`,
    controls: `按W或上方向鍵加速。按S或下方向鍵倒車。保持車身平衡避免翻車。`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — 領地爭奪戰',
    description: `透過畫出區域並連回自己的領地來擴張版圖。離開領地時要小心，不要讓對手撞到你的路徑。

Paper.io 2是一款競技領地爭奪.io遊戲。巧妙規劃路線，搶佔盡可能多的領地稱霸全圖。`,
    controls: `使用滑鼠或方向鍵控制方向。離開領地畫出新區域，及時回到領地完成圈地。`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — 地鐵無盡跑酷',
    description: `和Jake及夥伴們在鐵軌上奔跑，躲避查票員的追捕。閃避火車、跳過障礙、沿途收集金幣。

Subway Surfers是經典的無盡跑酷遊戲，擁有懸浮滑板道具和大量可解鎖角色。`,
    controls: `左右滑動或使用方向鍵切換跑道。向上滑動或按空白鍵跳躍。向下滑動蹲下滑行。`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — 噴射背包冒險',
    description: `和Barry Steakfries一起駕駛噴射背包穿越秘密實驗室。收集金幣、閃避障礙、駕駛各種酷炫載具。

Jetpack Joyride是一款充滿能量道具、任務和收藏品的無盡動作遊戲。`,
    controls: `點擊或長按開啟噴射背包上升。鬆開後下降。閃避雷射、飛彈和各種障礙物。`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — 極限精準挑戰",
    description: `操控紅色方塊閃避移動的藍色圓點，收集黃色圓圈通過傳說級難度關卡。需要極致的專注力和完美的時機。

World's Hardest Game被公認為史上最難的遊戲之一。每個關卡都需要耐心和精準的操控。`,
    controls: `使用方向鍵或WASD移動。閃避藍色圓點，收集黃色圓圈，到達綠色安全區。`,
  },
};
