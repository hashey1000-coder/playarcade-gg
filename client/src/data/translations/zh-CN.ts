import type { GameTranslation } from '../gameTranslations';

export const ZH_CN_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — 滑动合并数字游戏',
    description: `在4×4网格上滑动数字方块，将相同的数字合并以达到2048方块。每次滑动会合并匹配的方块并生成新的2或4——提前规划多步，否则棋盘会迅速填满。易学难精。

由意大利开发者Gabriele Cirulli于2014年3月创建，2048一夜之间成为全球现象，启发了数百种变体。该游戏基于Asher Vollmer的Threes!，但其开源发布使其成为历史上被克隆最多的浏览器游戏。`,
    controls: `使用方向键（↑ ↓ ← →）或在手机上滑动来移动所有方块。相同数字的方块碰撞时会合并。目标是创建一个数字为2048的方块。`,
  },
  'tetris': {
    title: 'Tetris — 经典方块拼图',
    description: `这款永恒的方块下落拼图游戏塑造了整整一代人。旋转和放置四格骨牌，完成水平行以消除它们。分数越高，方块下落越快。

由苏联软件工程师Alexey Pajitnov于1985年发明，Tetris在各个平台上销量超过5.2亿份。名字来源于希腊前缀"tetra"（四）与网球的结合。`,
    controls: `使用方向键：← →移动，↑旋转，↓慢降。按空格键快速下落。完成整行以消除并得分。`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — 点击飞翔',
    description: `引导一只像素小鸟穿过无尽的绿色管道，点击屏幕让它扇翅膀。每次点击让小鸟上升，重力将它拉下。你能突破50分吗？

Flappy Bird由越南开发者阮河东创建，于2013年5月发布。2014年初成为下载量最大的免费应用，每天通过广告赚取约5万美元。`,
    controls: `点击、触摸或按任意键让小鸟扇翅膀。不操作时重力会将小鸟拉下。穿过管道之间的间隙。每穿过一根管道得一分。`,
  },
  'chrome-dino': {
    title: 'Chrome恐龙快跑 — T-Rex跑酷',
    description: `扮演Chrome浏览器著名的T-Rex恐龙穿越像素沙漠，跳过仙人掌，蹲下躲避翼龙。这是一款无尽奔跑游戏，速度不断加快。

自2014年起隐藏在Google Chrome的"无网络"页面中，由Sebastien Gabriel设计。每月约有2.7亿次游戏。`,
    controls: `按空格键或↑跳过仙人掌。按↓蹲下躲避翼龙。在手机上，点击跳跃，向下滑动蹲下。T-Rex自动奔跑。`,
  },
  'snake': {
    title: 'Snake — 经典贪吃蛇',
    description: `在棋盘上控制一条不断变长的蛇，吃食物来成长，同时避开自己的尾巴和墙壁。蛇越长越难控制，你能坚持多久？

贪吃蛇的起源可追溯到1976年的街机游戏Blockade。当诺基亚在1998年将其预装到手机上时，它成为了文化现象。`,
    controls: `使用方向键（↑ ↓ ← →）或WASD改变方向。蛇持续移动。吃食物以成长并得分。避开墙壁和自己的尾巴。`,
  },
  'pac-man': {
    title: 'Pac-Man — 街机传奇',
    description: `在迷宫中吃掉所有豆子，同时躲避四个彩色幽灵——Blinky、Pinky、Inky和Clyde。吃下能量豆来反转局势。

由Namco于1980年5月发布，Pac-Man成为有史以来收入最高的街机游戏，硬币收入超过25亿美元。`,
    controls: `使用方向键在迷宫中导航Pac-Man。吃掉所有豆子以完成关卡。吃角落的能量豆使幽灵暂时变蓝。`,
  },
  'minesweeper': {
    title: '扫雷 — 逻辑排雷游戏',
    description: `在网格上翻开格子而不引爆隐藏的地雷。每个显示的数字告诉你周围八个格子中隐藏了多少颗地雷——用逻辑推断安全的格子。

扫雷由Robert Donner和Curt Johnson为Microsoft Windows 3.1于1990年创建，旨在教用户学习鼠标的左键和右键操作。`,
    controls: `左键点击翻开格子。数字表示相邻地雷的数量。右键点击标记可疑地雷。用逻辑推断安全的格子。`,
  },
  'solitaire': {
    title: '纸牌 — 经典克朗代克',
    description: `最经典的单人纸牌游戏。将洗好的牌按花色从A到K排列到四个基础堆中，在七列之间移动纸牌。

克朗代克纸牌在微软将其收录到Windows 3.0（1990年）后风靡全球。由实习生Wes Cherry编程。`,
    controls: `点击纸牌选择，然后点击有效的目标位置。按颜色交替降序排列建立列。将A移到基础堆上并按花色建立。`,
  },
  'chess': {
    title: '国际象棋 — 对战电脑',
    description: `在世界上最著名的策略游戏中挑战电脑对手。在64格棋盘上指挥16枚棋子的军队。

国际象棋起源于6世纪的印度，名为"恰图兰卡"，通过丝绸之路传播到波斯和欧洲。如今全球有超过6亿的固定玩家。`,
    controls: `点击棋子选择，然后点击目标格子。有效移动会被高亮显示。标准规则包括王车易位、吃过路兵和兵的升变。`,
  },
  'checkers': {
    title: '跳棋 — 经典棋盘游戏',
    description: `在8×8棋盘上跳过并吃掉对手的棋子。沿对角线移动，连续多次跳跃，将棋子升级为"王"以获得后退能力。

跳棋是最古老的棋盘游戏之一，在古城乌尔发现的版本可追溯到公元前3000年。`,
    controls: `点击棋子选择，然后点击对角线上的目标格子。跳过对手的棋子以吃掉它。到达对面边缘可升级棋子。`,
  },
  'sudoku': {
    title: '数独 — 数字逻辑谜题',
    description: `填充9×9网格，使每行、每列和每个3×3宫格都包含数字1到9且不重复。纯粹用逻辑推断每个缺失的数字。

现代数独由美国建筑师Howard Garns于1979年以"Number Place"为名发明。在日本流行后成为全球热潮。`,
    controls: `点击空格并输入数字1到9。每行、每列和每个3×3宫格必须恰好包含数字1到9各一次。`,
  },
  'wordle': {
    title: 'Wordle无限版 — 猜词游戏',
    description: `在六次或更少的机会内猜出五个字母的秘密单词。彩色方块显示哪些字母正确（绿色）、位置错误（黄色）或不在单词中（灰色）。

Wordle由Josh Wardle于2021年作为礼物送给女友。从90名玩家增长到2022年1月每天超过200万玩家。`,
    controls: `输入一个五字母单词并按回车。绿色=位置正确。黄色=字母在单词中但位置不对。灰色=字母不在单词中。你有六次机会。`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — 饼干点击游戏',
    description: `点击巨大的饼干来烘焙饼干，然后花费购买升级——奶奶、农场、工厂和传送门——自动烘焙更多饼干。

由法国程序员Julien "Orteil" Thiennot于2013年创建，Cookie Clicker开创了放置类游戏。2021年在Steam上发布，获得97%好评。`,
    controls: `点击大饼干来生产饼干。花费饼干在商店购买建筑以自动化生产。购买升级以倍增产量。`,
  },
  'connect-four': {
    title: '四子棋 — 策略连珠',
    description: `将彩色棋子投入垂直棋盘，尝试连成四个——水平、垂直或对角线——在对手之前。

四子棋由Milton Bradley于1974年首次销售。1988年，Victor Allis证明了先手玩家从中间列开始可以始终获胜。`,
    controls: `点击列来投放棋子。棋子受重力下落。将四个相同颜色的棋子连成一线即可获胜。`,
  },
  'tic-tac-toe': {
    title: '井字棋 — 经典XO游戏',
    description: `在3×3网格上交替放置X和O，尝试连成三个。与朋友对战或挑战AI。

井字棋是已知最古老的游戏之一，在古埃及遗迹中发现的例子可追溯到公元前1300年。`,
    controls: `点击空格放置你的符号。在水平、垂直或对角线上连成三个即可获胜。`,
  },
  'reversi': {
    title: '黑白棋 — 奥赛罗策略游戏',
    description: `在8×8棋盘上放置棋子，通过夹住对手的棋子来翻转它们。每一步都可能改变力量的平衡。

Reversi发明于1883年。现代版本Othello由长谷川五郎于1971年推广，口号是"一分钟学会，一辈子精通"。`,
    controls: `点击空格放置你的棋子。被夹住的对手棋子会变为你的颜色。`,
  },
  'hextris': {
    title: 'Hextris — 六边形方块拼图',
    description: `经典方块下落游戏的创意变体，设置在旋转的六边形上。彩色方块从六个方向落向中心。

Hextris由马里兰大学学生于2014年在一次黑客马拉松中创建。`,
    controls: `使用←和→（或A和D）旋转中心六边形。将三个或更多相同颜色的方块连接在一起以消除。`,
  },
  'word-search': {
    title: '找单词 — 隐藏词汇搜索',
    description: `在随机字母网格中沿水平、垂直和对角线方向寻找隐藏的单词。单词可以从两个方向阅读。

找单词游戏由Norman E. Gibat于1968年发明。`,
    controls: `点击并拖动字母来标记单词。单词可以隐藏在任何方向。`,
  },
  'falling-blocks': {
    title: '下落方块 — 方块堆叠游戏',
    description: `彩色方块不断下落，你需要堆叠和匹配它们以防止堆积过高。策略性地放置方块以创建颜色组合。

下落方块游戏起源于Tetris（1985年），并发展出数十种变体。`,
    controls: `使用←和→移动方块。按↑或空格键旋转。按↓快速下落。匹配颜色并完成整行以消除方块。`,
  },
  'card-solitaire': {
    title: '纸牌接龙 — 经典单人纸牌',
    description: `世界上最受欢迎的单人纸牌游戏的紧凑版。按颜色交替降序排列，将全部52张牌移至四个基础堆。

纸牌接龙自18世纪以来一直很流行。拿破仑·波拿巴在流放期间是一位狂热的玩家。`,
    controls: `点击纸牌选择，然后点击有效的目标位置。按红黑交替建立列。将A移到基础堆。`,
  },
  'slope': {
    title: 'Slope — 3D滚球游戏',
    description: `控制一个球沿着霓虹灯发光的斜坡以不断加速的速度滚下。避开障碍物，通过急弯，不要掉下边缘。

Slope由Rob Kay开发，成为世界上最受欢迎的浏览器游戏之一。使用WebGL实现流畅的3D图形。`,
    controls: `使用←和→或A和D控制球。避开红色障碍物和洞。球会持续加速。`,
  },
  'among-us': {
    title: 'Among Us — 找出内鬼',
    description: `与船员合作完成太空飞船上的任务——但要小心，你们中间有内鬼。讨论、指控并投票驱逐嫌疑人。

Among Us由InnerSloth开发，2020年爆红。高峰期每月有5亿活跃玩家。`,
    controls: `使用WASD或方向键移动。点击任务完成它们。报告尸体或召开紧急会议。`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — 节奏障碍跑酷',
    description: `跳跃和飞行穿过充满障碍的多彩世界，与电子音乐同步。点击跳过尖刺并导航重力门。

Geometry Dash由瑞典开发者Robert Topala于2013年创建。下载量超过2亿次，拥有超过8000万个用户创建的关卡。`,
    controls: `点击、触摸或按空格键跳跃。在飞船模式中长按持续跳跃。障碍与音乐同步。`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — 3D隧道冲刺',
    description: `以极高速度穿过旋转变色的3D隧道。躲避瞬间出现的障碍物。

Tunnel Rush作为最容易上手但最具挑战性的浏览器游戏之一成为病毒式现象。`,
    controls: `使用←和→或A和D在隧道中躲避障碍物。反应要快——在高速下你只有不到一秒的时间。`,
  },
  'bubble-shooter': {
    title: '泡泡射手 — 彩色泡泡消除',
    description: `瞄准并射出彩色泡泡，将三个或更多相同颜色的泡泡连在一起使其爆破。清除所有泡泡以通过每个关卡。

泡泡射手起源于Taito的Puzzle Bobble（1994年）。网页版成为互联网上玩家最多的休闲游戏之一。`,
    controls: `用鼠标瞄准并点击射出泡泡。将三个或更多相同颜色的泡泡匹配在一起使其爆破。`,
  },
  'spider-solitaire': {
    title: '蜘蛛纸牌 — 策略接龙',
    description: `在十列中按降序排列同花色的牌。完成K到A的序列以移除它们。

蜘蛛纸牌自1998年起被收录在Microsoft Windows中，成为历史上玩家最多的游戏之一。`,
    controls: `点击纸牌选择，然后点击有效的目标位置。只有同花色的序列才能作为一组移动。完成K-A以移除。`,
  },
  'mahjong': {
    title: '麻将连连看 — 经典配对消除',
    description: `从复杂的堆叠图案中移除成对的相同牌。只有"自由"的牌才能被选择。移除所有牌即可获胜。

麻将接龙由Brodie Lockard于1981年在PLATO系统上创建。`,
    controls: `点击一个自由的牌选择，然后点击另一个相同的自由牌以移除配对。如果卡住可以使用提示按钮。`,
  },
  'freecell': {
    title: 'FreeCell — 策略纸牌',
    description: `所有52张牌面朝上发在八列中——没有隐藏信息。每局都是纯策略考验。使用四个空闲单元格作为临时存储。

FreeCell因被收录在Windows 95及以后的版本中而广受欢迎。在原始的32,000局中，只有第11982局无解。`,
    controls: `点击纸牌，然后点击目标列或空闲单元格。按颜色交替降序排列建立列。明智地使用四个空闲单元格。`,
  },
  'backgammon': {
    title: '西洋双陆棋 — 经典棋盘',
    description: `掷骰子，让你的十五枚棋子竞速穿过棋盘。封锁、击打并击败AI，在这款永恒的策略游戏中取胜。

西洋双陆棋是最古老的棋盘游戏之一，起源于5000多年前的美索不达米亚。`,
    controls: `点击骰子按钮掷骰。点击棋子，然后点击目标点。如果可能，你必须使用两个骰子。`,
  },
  'hangman': {
    title: 'Hangman — 猜字母游戏',
    description: `在绞刑架上的小人画完之前，逐个字母猜出隐藏的单词。每次猜错都会增加一个身体部位。

Hangman至少从维多利亚时代就开始玩了，是世界上最著名的文字游戏之一。`,
    controls: `点击字母来猜测。正确的字母会出现在相应的位置。你有6-8次猜错的机会。`,
  },
  'fruit-ninja': {
    title: '水果忍者 — 切水果游戏',
    description: `用手指或鼠标切开飞过屏幕的水果。同时切多个水果获得连击奖励，但要小心炸弹。

水果忍者由Halfbrick Studios开发，于2010年发布。下载量超过10亿次。`,
    controls: `在屏幕上滑动或点击拖动来切水果。同时切多个水果获得连击。避开炸弹。`,
  },
  'moto-x3m': {
    title: 'Moto X3M — 极限摩托特技',
    description: `驾驶摩托车穿过25个充满爆炸桶、巨型环路和致命旋转锯的赛道。做特技动作获得时间奖励。

Moto X3M由Madpuffers于2016年开发。该系列游戏总游玩次数超过5亿。`,
    controls: `按UP或W加速，DOWN或S刹车。左/右倾斜空中姿态。做特技动作获得奖励。`,
  },
  'drift-boss': {
    title: 'Drift Boss — 一键漂移',
    description: `用一个按键掌握漂移艺术。按住向右转，松开向左滑。保持在道路上。

Drift Boss由Madpuffers创建，以易于上手的一键游戏著称。`,
    controls: `点击或按住向右转。松开向左滑。把握按键节奏以保持在道路上。`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — 双人篮球',
    description: `选择传奇球队，在快节奏的比赛中进行精彩的助攻、盖帽和扣篮。与电脑对战或挑战朋友。

Basketball Legends拥有卡通风格的球员和特殊技能，灵感来自NBA球星。`,
    controls: `玩家1：WASD移动，B投篮，N特殊投篮，M盖帽。玩家2：方向键移动，K投篮，L特殊投篮。`,
  },
  'eggy-car': {
    title: 'Eggy Car — 护蛋驾车',
    description: `驾车翻越山丘，车顶上放着一颗易碎的鸡蛋。在崎岖地形上行驶而不让鸡蛋掉落。

Eggy Car将驾驶变成了精确的物理谜题。鸡蛋遵循真实的重力和惯性。`,
    controls: `按住加速。松开自由滚动。小心通过陡坡。尽可能开得更远。`,
  },
  'stack-ball': {
    title: 'Stack Ball — 击碎层层',
    description: `点击让球下落穿过旋转的层。击碎彩色层但避开黑色层。积累速度开启火焰模式。

Stack Ball融合了螺旋下降和令人满足的物理破坏效果。`,
    controls: `按住让球下落。松开停止。避开黑色层。连续击碎多层开启火焰模式。`,
  },
  'vex-7': {
    title: 'Vex 7 — 火柴人闯关',
    description: `引导你的火柴人穿过布满旋转刀片、尖刺和移动平台的残酷障碍赛道。超过10个挑战关卡。

Vex 7是最受欢迎的平台跳跃系列之一的最新作，总游玩次数超过10亿。`,
    controls: `使用WASD或方向键移动和跳跃。按S滑行。蹬墙跳。避开尖刺、刀片和陷阱。`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — 迷你钓鱼',
    description: `抛出鱼线，在鱼钩下沉时滑动钩子捕鱼。用金钱升级鱼线长度、速度和离线收入。

Tiny Fishing融合了放置机制和主动钓鱼玩法。传说中的鱼隐藏在100米以下的深处。`,
    controls: `按住点击抛竿。滑动鼠标捕鱼。每次尽可能多捕。用收入升级。`,
  },
  'gunspin': {
    title: 'GunSpin — 枪械旋转飞行',
    description: `扔出枪支并通过在正确的时机射击来保持旋转。每次射击的后坐力推动枪飞得更远。把握点击节奏以获得最大距离。

GunSpin融合了真实的弹道物理和放置升级系统。`,
    controls: `点击或触摸射击。每次射击产生的后坐力推动枪前进。把握射击节奏以保持高度。收集金币升级。`,
  },
  'vex-6': {
    title: 'Vex 6 — 火柴人闯关',
    description: `奔跑、跳跃、滑行和攀墙穿过危险的障碍赛道。Vex 6以新关卡延续了这个系列。

Vex 6引入了带氧气条的游泳机制、轨道上的锯刀和易碎地板。`,
    controls: `使用WASD或方向键移动和跳跃。按S滑行。蹬墙跳。避开尖刺、锯刀和陷阱。`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — 弹射飞行',
    description: `击打、弹跳并将自己发射穿过果冻熊军团。从摔跤台上弹射Burrito Bison。

Burrito Bison: Launcha Libre拥有三个可玩的摔跤手和特殊能力。原版是Juicy Beast Studios的Flash游戏。`,
    controls: `点击从擂台弹射。点击在果冻熊上弹跳。使用特殊能力。收集金钱升级。`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — 布偶人击打',
    description: `猛击布偶对手并观看基于物理的混乱场面。瞄准、蓄力、出拳，将火柴人击飞。

Ragdoll Hit使用真实的物理引擎独立计算冲击力和碰撞。`,
    controls: `点击并拖动瞄准拳头。松开出拳。将对手打向障碍物以造成更多伤害。`,
  },
  'soccer-random': {
    title: 'Soccer Random — 双人随机足球',
    description: `一场疯狂的足球游戏，规则、球场和球员每半场都会改变。用摇摆的布偶球员射门。

Soccer Random每半场随机化一切——球的大小、球员数量、地面材质甚至重力。`,
    controls: `玩家1：按W踢球。玩家2：按↑键。进5球获胜。球场每半场改变。`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — 经典冒险传奇',
    description: `经典横版卷轴传奇。引导马里奥穿越蘑菇王国，踩踏Goomba、敲碎砖块、拯救桃花公主。

Super Mario Bros由任天堂于1985年发布，被视为有史以来最具影响力的电子游戏。由宫本茂设计，销量超过4000万份。`,
    controls: `使用方向键移动马里奥。按Z或↑跳跃。按X奔跑/射击。跳到敌人头上踩踏它们。收集金币和能力提升道具。`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — 棒球街机',
    description: `在这款快节奏的棒球游戏中走上打击区，拥有卡通角色和街机动作。投球、击球和防守以赢得胜利。

Baseball Bros融合了简单的机制和竞技玩法。快速的3局比赛。`,
    controls: `点击投球或击球。使用鼠标瞄准。把握点击节奏来击球。用方向键控制跑垒。`,
  },
  'baseball-9': {
    title: 'Baseball 9 — 棒球队管理',
    description: `管理你自己的棒球队，参加联赛和锦标赛。招募球员、升级技能并带领球队。

Baseball 9融合了球队管理和场上动作。招募拥有独特数据的球员。`,
    controls: `点击击球。瞄准并点击投球。在比赛间管理球队。`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — 音乐创作',
    description: `通过拖放动画角色到舞台上来创建音乐混音。每个Sprunki角色添加不同的音效循环。

Sprunki Phase 9是Sprunki音乐创作系列的第九部，灵感来自Incredibox。`,
    controls: `拖动角色到舞台上添加音效。点击移除。尝试不同组合发现隐藏动画。`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — 音乐放置游戏',
    description: `点击收集节拍并解锁新的Sprunki角色。每次升级为你的作品添加新的音效。

Sprunki Clicker融合了放置点击机制和Sprunki音乐世界。`,
    controls: `点击收集节拍。用节拍升级。解锁新角色和音效套装。`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — 夜间音乐混音',
    description: `在夜间主题的Sprunki中创建令人毛骨悚然的旋律。拖动可怕的角色来叠加节拍和诡异的音效。

Sprunki Night Time以黑暗和夜间美学呈现Sprunki配方。`,
    controls: `拖动角色到舞台上添加音效。寻找特殊组合解锁隐藏动画。`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — 成人版音乐混音',
    description: `Sprunki音乐创作器的成人版，具有更精致的音效和成熟的设计。创建复杂的音轨。

Sprunki Grown Up以成人版经典角色呈现，拥有更复杂的音效元素。`,
    controls: `拖动成人角色到舞台上。尝试不同层次的音效以创建更丰富的作品。`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — 音乐沙盒',
    description: `终极Sprunki沙盒体验，所有角色和音效从一开始就解锁。自由混音和实验。

Sprunki Playground移除了所有进度障碍，提供对全部角色和音效的即时访问。`,
    controls: `拖动任何角色到舞台上。自由叠加音效。使用保存按钮保存你的混音。`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — 疯狂射鸡',
    description: `在这款街机射击游戏中瞄准飞过3D场景的疯狂鸡。点击射落它们。

Crazy Chicken（Moorhuhn）于1999年作为广告游戏出现，凭借超过1000万次下载成为病毒式现象。`,
    controls: `移动鼠标瞄准。点击射击。寻找隐藏的奖励目标。金鸡给予额外积分。`,
  },
};
