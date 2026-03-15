import type { GameTranslation } from '../gameTranslations';

export const PT_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Puzzle de Deslizar e Fundir',
    description: `Deslize peças numeradas em uma grade 4×4 e combine números iguais para alcançar a cobiçada peça 2048. Cada deslize funde peças idênticas e gera um novo 2 ou 4 — planeje várias jogadas com antecedência ou seu tabuleiro ficará cheio rapidamente. Fácil de aprender, diabolicamente difícil de dominar.

Criado pelo desenvolvedor italiano Gabriele Cirulli em março de 2014, 2048 se tornou um fenômeno mundial da noite para o dia, inspirando centenas de variantes. O jogo foi inspirado em Threes! de Asher Vollmer, mas sua publicação em código aberto o tornou o jogo de navegador mais clonado da história.`,
    controls: `Use as setas direcionais (↑ ↓ ← →) ou deslize no celular para mover todas as peças em uma direção. Peças com o mesmo número se fundem ao se tocarem. O objetivo é criar uma peça com o número 2048.`,
  },
  'tetris': {
    title: 'Tetris — Puzzle Clássico de Blocos',
    description: `O eterno puzzle de blocos que caem que definiu uma geração. Gire e posicione os tetrominós enquanto descem, completando linhas horizontais para eliminá-las. Quanto maior a pontuação, mais rápido as peças caem.

Inventado pelo engenheiro soviético Alexey Pajitnov em 1985, Tetris vendeu mais de 520 milhões de cópias em todas as plataformas imagináveis. O nome combina o prefixo grego "tetra" (quatro) com tênis.`,
    controls: `Use as setas: ← → para mover, ↑ para girar, ↓ para queda suave. Pressione Espaço para queda instantânea. Complete linhas para eliminá-las e ganhar pontos.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Toque para Voar',
    description: `Guie um pequeno pássaro pixelado através de uma série infinita de canos verdes tocando para bater as asas. Um toque faz o pássaro subir; a gravidade o puxa para baixo. Você consegue passar de 50?

Flappy Bird foi criado pelo desenvolvedor vietnamita Dong Nguyen e lançado em maio de 2013. Tornou-se o aplicativo gratuito mais baixado no início de 2014, gerando cerca de US$ 50.000 por dia em publicidade.`,
    controls: `Clique, toque ou pressione qualquer tecla para bater as asas do pássaro. A gravidade o puxa para baixo. Navegue entre os espaços nos canos sem tocá-los. Cada cano vale um ponto.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Corredor T-Rex',
    description: `Corra por um deserto pixelado como o adorado T-Rex do Chrome, pulando sobre cactos e se abaixando sob pterodáctilos neste corredor infinito. A velocidade aumenta sem parar.

Escondido na página "Sem conexão" do Chrome desde 2014, o jogo do Dino foi projetado por Sebastien Gabriel. Cerca de 270 milhões de partidas são jogadas por mês.`,
    controls: `Pressione Espaço ou ↑ para pular sobre cactos. Pressione ↓ para se abaixar sob pterodáctilos. No celular, toque para pular e deslize para baixo para se abaixar. O T-Rex corre automaticamente.`,
  },
  'snake': {
    title: 'Snake — Jogo Retrô Clássico',
    description: `Guie uma cobra em crescimento pelo tabuleiro, comendo alimentos para crescer enquanto evita sua própria cauda e as paredes. Quanto mais você sobrevive, mais longa e difícil de controlar a cobra fica.

As origens do Snake remontam ao jogo de arcade Blockade de 1976. Tornou-se um fenômeno cultural quando a Nokia pré-instalou uma versão em seus telefones em 1998.`,
    controls: `Use as setas direcionais (↑ ↓ ← →) ou WASD para mudar de direção. A cobra se move continuamente. Coma o alimento para crescer e ganhar pontos. Evite as paredes e sua própria cauda.`,
  },
  'pac-man': {
    title: 'Pac-Man — Clássico de Arcade',
    description: `Devore seu caminho através de um labirinto de pontos enquanto evita quatro fantasmas coloridos — Blinky, Pinky, Inky e Clyde. Pegue uma Pastilha de Poder para virar o jogo.

Lançado pela Namco em maio de 1980, Pac-Man se tornou o jogo de arcade mais lucrativo de todos os tempos, gerando mais de US$ 2,5 bilhões em moedas.`,
    controls: `Use as setas para navegar Pac-Man pelo labirinto. Coma todos os pontos para completar o nível. Pegue as Pastilhas de Poder nos cantos para tornar os fantasmas azuis temporariamente.`,
  },
  'minesweeper': {
    title: 'Campo Minado — Puzzle de Minas',
    description: `Descubra casas em uma grade sem detonar minas escondidas. Cada número revelado indica quantas minas se escondem nas oito células vizinhas — use lógica para deduzir quais casas são seguras.

O Campo Minado foi criado por Robert Donner e Curt Johnson para o Windows 3.1 em 1990, projetado para ensinar aos usuários o clique com o botão direito.`,
    controls: `Clique com o botão esquerdo para revelar uma casa. Os números mostram quantas minas adjacentes existem. Clique com o botão direito para marcar minas suspeitas. Use lógica para deduzir as casas seguras.`,
  },
  'solitaire': {
    title: 'Paciência — Jogo de Cartas Klondike',
    description: `O jogo de cartas solo por excelência. Organize um baralho embaralhado em quatro pilhas de fundação por naipe, do Ás ao Rei, movendo cartas entre sete colunas do tableau.

O Paciência Klondike ganhou fama mundial depois que a Microsoft o incluiu no Windows 3.0 em 1990. Foi programado pelo estagiário Wes Cherry.`,
    controls: `Clique nas cartas para selecioná-las, depois clique em um destino válido. Construa colunas em ordem decrescente com cores alternadas. Mova os Ases para as fundações e construa por naipe.`,
  },
  'chess': {
    title: 'Xadrez — Jogue contra o Computador',
    description: `Desafie um adversário computadorizado no jogo de estratégia mais celebrado do mundo. Comande um exército de 16 peças em um tabuleiro de 64 casas.

O xadrez teve origem na Índia por volta do século VI como "chaturanga" e se espalhou pela Rota da Seda até a Pérsia e a Europa.`,
    controls: `Clique em uma peça para selecioná-la, depois clique na casa de destino. Os movimentos válidos são destacados. Regras padrão incluindo roque, captura en passant e promoção de peões.`,
  },
  'checkers': {
    title: 'Damas — Jogo de Tabuleiro',
    description: `Pule e capture as peças do seu adversário em um tabuleiro 8×8. Mova-se na diagonal, encadeie múltiplos saltos e coroe suas peças em poderosos reis que podem se mover para trás.

Damas é um dos jogos de tabuleiro mais antigos, com uma versão encontrada na antiga cidade de Ur datada de 3000 a.C.`,
    controls: `Clique em uma peça para selecioná-la, depois clique na casa diagonal de destino. Pular sobre uma peça adversária a captura. Alcance a borda oposta para coroar uma peça.`,
  },
  'sudoku': {
    title: 'Sudoku — Puzzle Lógico Numérico',
    description: `Preencha uma grade 9×9 de modo que cada linha, coluna e quadrado 3×3 contenha os dígitos de 1 a 9 sem repetição. Use pura lógica para deduzir cada número que falta.

O Sudoku moderno foi criado pelo arquiteto americano Howard Garns em 1979. O nome vem do japonês "Sūji wa dokushin ni kagiru" (os dígitos devem ser únicos).`,
    controls: `Clique em uma célula vazia e digite um número de 1 a 9. Cada linha, coluna e quadrado 3×3 deve conter todos os dígitos de 1 a 9 exatamente uma vez.`,
  },
  'wordle': {
    title: 'Wordle Ilimitado — Jogo de Adivinhar Palavras',
    description: `Adivinhe a palavra secreta de cinco letras em seis tentativas ou menos. As peças coloridas revelam quais letras estão corretas (verde), fora de posição (amarelo) ou ausentes (cinza).

Wordle foi criado por Josh Wardle como presente para sua companheira em 2021. Foi adquirido pelo New York Times por um valor na faixa dos sete dígitos.`,
    controls: `Digite uma palavra de cinco letras e pressione Enter. Verde = posição correta. Amarelo = letra na palavra mas em outra posição. Cinza = letra ausente. Você tem seis tentativas.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Jogo Idle de Cookies',
    description: `Clique no cookie gigante para produzir cookies, depois gaste-os em melhorias — vovós, fazendas, fábricas e portais — que produzem cookies automaticamente.

Criado pelo programador francês Julien "Orteil" Thiennot em 2013, Cookie Clicker foi pioneiro do gênero idle. Tem mais de 600 melhorias e 500 conquistas.`,
    controls: `Clique no grande cookie para produzir cookies. Gaste cookies em prédios na loja para automatizar a produção. Compre melhorias para multiplicar a produção.`,
  },
  'connect-four': {
    title: 'Conecte 4 — Estratégia com Fichas',
    description: `Solte fichas coloridas em uma grade vertical, tentando conectar quatro em linha — horizontalmente, verticalmente ou na diagonal — antes do seu adversário.

Conecte 4 foi vendido pela primeira vez pela Milton Bradley em 1974. Foi resolvido matematicamente em 1988 por Victor Allis.`,
    controls: `Clique em uma coluna para soltar sua ficha. As fichas caem até o fundo pela gravidade. Conecte quatro da sua cor em linha para vencer.`,
  },
  'tic-tac-toe': {
    title: 'Jogo da Velha — Jogo de X e O',
    description: `Alternem posicionando X e O em uma grade 3×3, tentando conseguir três em linha. Jogue contra um amigo ou desafie a IA.

O Jogo da Velha é um dos jogos mais antigos conhecidos, com exemplos nas ruínas do Egito antigo datados de 1300 a.C.`,
    controls: `Clique em uma casa vazia para colocar sua marca. Consiga três marcas em linha horizontal, vertical ou diagonal para vencer.`,
  },
  'reversi': {
    title: 'Reversi — Jogo de Estratégia Othello',
    description: `Posicione discos em um tabuleiro 8×8 e vire as peças adversárias prendendo-as entre as suas. Cada jogada pode mudar o equilíbrio de poder.

Reversi foi inventado em 1883. A versão moderna, Othello, foi popularizada por Goro Hasegawa em 1971 com o lema "Um minuto para aprender, uma vida para dominar".`,
    controls: `Clique em uma casa vazia para posicionar seu disco. Os discos adversários presos entre os seus mudam para a sua cor.`,
  },
  'hextris': {
    title: 'Hextris — Puzzle Hexagonal',
    description: `Uma variação fascinante dos puzzles de blocos que caem, ambientada em um hexágono giratório. Blocos coloridos caem em direção ao centro pelos seis lados.

Hextris foi criado em 2014 por estudantes da Universidade de Maryland durante um hackathon de 36 horas.`,
    controls: `Use ← e → (ou A e D) para girar o hexágono central. Combine três ou mais blocos da mesma cor em linha para eliminá-los.`,
  },
  'word-search': {
    title: 'Caça-Palavras — Puzzle de Palavras Escondidas',
    description: `Examine uma grade de letras embaralhadas para encontrar palavras escondidas na horizontal, vertical e diagonal. As palavras podem ser lidas em ambas as direções.

Os puzzles de caça-palavras foram inventados por Norman E. Gibat em 1968 em Oklahoma.`,
    controls: `Clique e arraste sobre as letras para destacar uma palavra. As palavras podem estar escondidas em qualquer direção.`,
  },
  'falling-blocks': {
    title: 'Blocos que Caem — Empilhador de Cubos',
    description: `Cubos coloridos chovem e você precisa empilhá-los e combiná-los antes que se acumulem até o topo. Posicione os blocos estrategicamente para criar combos de cores.

Os jogos de blocos que caem têm origem no Tetris (1985) e evoluíram para dezenas de variantes como Columns, Dr. Mario e Puyo Puyo.`,
    controls: `Use ← e → para mover a peça. Pressione ↑ ou Espaço para girar. Pressione ↓ para queda rápida. Combine cores e complete linhas para eliminar blocos.`,
  },
  'card-solitaire': {
    title: 'Paciência Clássica — Jogo de Cartas Patience',
    description: `Uma versão limpa do jogo de cartas solo mais popular do mundo. Construa sequências decrescentes com cores alternadas e mova todas as 52 cartas para as quatro pilhas de fundação.

Os jogos de paciência são populares desde o século XVIII. Napoleão Bonaparte era um jogador assíduo durante seu exílio em Santa Helena.`,
    controls: `Clique em uma carta para selecioná-la, depois clique em um destino válido. Construa colunas alternando vermelho e preto. Os Ases vão para as pilhas de fundação.`,
  },
  'slope': {
    title: 'Slope — Jogo 3D de Bola Rolante',
    description: `Controle uma bola rolando por uma pista iluminada com neon em velocidade crescente. Desvie de obstáculos, enfrente curvas fechadas e evite cair da borda.

Slope foi desenvolvido por Rob Kay e se tornou um dos jogos de navegador mais populares do mundo, especialmente nas escolas.`,
    controls: `Use ← e → ou A e D para guiar a bola. Evite obstáculos vermelhos e buracos. A bola acelera continuamente.`,
  },
  'among-us': {
    title: 'Among Us — Dedução Social',
    description: `Trabalhe com sua tripulação para completar tarefas a bordo de uma nave espacial — mas cuidado, há impostores entre vocês. Discuta, acuse e vote para expulsar os suspeitos.

Among Us foi desenvolvido pela InnerSloth e explodiu em popularidade em 2020 durante a pandemia, apesar de ter sido lançado em 2018.`,
    controls: `Use WASD ou setas para se mover. Clique nas tarefas para completá-las. Reporte corpos ou convoque reuniões de emergência.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Plataforma Rítmico',
    description: `Pule e voe através de um mundo pulsante cheio de obstáculos sincronizado com música eletrônica. Toque para pular sobre espinhos e navegar pelos portais de gravidade.

Geometry Dash foi criado pelo desenvolvedor sueco Robert Topala em 2013. Vendeu mais de 21 milhões de cópias no Steam.`,
    controls: `Clique, toque ou pressione Espaço para pular. Segure pressionado para continuar pulando no modo nave. Os obstáculos são sincronizados com a música.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Desvio 3D no Túnel',
    description: `Lance-se por um túnel 3D retorcido e multicolorido em velocidade vertiginosa, desviando de barreiras que aparecem com apenas um instante de aviso.

Tunnel Rush se tornou uma sensação viral como um dos jogos de navegador mais acessíveis e desafiadores disponíveis.`,
    controls: `Use ← e → ou A e D para desviar de obstáculos no túnel. Reaja rápido — em alta velocidade você tem menos de um segundo.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Mire e Combine',
    description: `Mire e atire bolhas coloridas para criar grupos de três ou mais da mesma cor, estourando-as do tabuleiro. Elimine todas as bolhas para vencer cada nível.

Bubble Shooter tem suas raízes em Puzzle Bobble da Taito (1994). Possui mais de 100 milhões de jogadores mensais.`,
    controls: `Mire com o mouse e clique para atirar uma bolha. Combine três ou mais da mesma cor para estourá-las.`,
  },
  'spider-solitaire': {
    title: 'Spider Paciência — Desafio de Cartas',
    description: `Organize as cartas em sequências decrescentes do mesmo naipe através de dez colunas. Complete uma sequência Rei-Ás para removê-la.

Spider Paciência foi incluído com o Microsoft Windows desde 1998. O nome deriva das oito pilhas de fundação, como as patas de uma aranha.`,
    controls: `Clique em uma carta para selecioná-la, depois clique em um destino válido. Apenas sequências do mesmo naipe se movem como grupo. Complete Rei-Ás para remover.`,
  },
  'mahjong': {
    title: 'Mahjong — Clássico de Combinação de Peças',
    description: `Remova pares de peças idênticas de um arranjo elaborado em múltiplas camadas. Apenas peças "livres" podem ser selecionadas. Elimine todas as peças para vencer.

Mahjong Solitaire foi criado por Brodie Lockard em 1981 no sistema PLATO. O jogo original de Mahjong teve origem na China durante a dinastia Qing.`,
    controls: `Clique em uma peça livre para selecioná-la, depois clique em outra peça livre idêntica para remover o par. Use o botão de dica se ficar preso.`,
  },
  'freecell': {
    title: 'FreeCell — Paciência Estratégica',
    description: `Todas as 52 cartas são distribuídas viradas para cima em oito colunas — sem informação escondida, cada partida é um teste puro de estratégia. Use quatro células livres como armazenamento temporário.

FreeCell foi popularizado por sua inclusão no Windows desde o Windows 95. Apenas a distribuição #11982 das 32.000 originais é impossível.`,
    controls: `Clique em uma carta, depois clique em uma coluna de destino ou célula livre. Construa colunas em ordem decrescente com cores alternadas. Use as quatro células livres com sabedoria.`,
  },
  'backgammon': {
    title: 'Gamão — Jogo de Tabuleiro Clássico',
    description: `Lance os dados e faça a corrida com suas quinze pedras ao redor do tabuleiro. Bloqueie, acerte e supere a IA neste eterno jogo de estratégia.

O Gamão é um dos jogos de tabuleiro mais antigos, com origens de 5.000 anos na Mesopotâmia. O dado de duplicação, introduzido na Nova York dos anos 1920, transformou o jogo competitivo.`,
    controls: `Clique no botão de dados para lançar. Clique em uma pedra, depois clique no ponto de destino. Você deve usar ambos os dados se possível.`,
  },
  'hangman': {
    title: 'Forca — Jogo de Adivinhar Palavras',
    description: `Adivinhe a palavra oculta letra por letra antes que o desenho do enforcado esteja completo. Cada tentativa errada adiciona uma parte do corpo.

A Forca é jogada pelo menos desde a era vitoriana e é um dos jogos de palavras mais conhecidos do mundo.`,
    controls: `Clique nas letras para adivinhar. As letras corretas aparecem em suas posições. Você tem 6-8 tentativas erradas.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Corte e Fatie',
    description: `Corte frutas que voam pela tela com o dedo ou mouse. Fatie várias frutas em um único movimento para combos, mas cuidado com as bombas.

Fruit Ninja foi desenvolvido pela Halfbrick Studios e lançado em 2010. Foi baixado mais de 1 bilhão de vezes em todo o mundo.`,
    controls: `Deslize na tela ou clique e arraste para cortar frutas. Fatie várias frutas em um movimento para combos. Evite as bombas.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Corrida de Moto',
    description: `Pilote sua moto por 25 pistas cheias de barris explosivos, loops gigantes e serras mortais. Faça acrobacias para bônus de tempo.

Moto X3M foi desenvolvido pela Madpuffers em 2016. Já foi jogado mais de 500 milhões de vezes.`,
    controls: `Pressione CIMA ou W para acelerar, BAIXO ou S para frear. ESQUERDA/DIREITA para inclinar no ar. Faça acrobacias para bônus.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Drift com Um Botão',
    description: `Domine a arte do drifting com apenas um botão. Toque para virar à direita, solte para driftar à esquerda. Fique na pista.

Drift Boss foi criado pela Madpuffers, conhecidos por seus jogos acessíveis de um botão só.`,
    controls: `Clique ou toque para virar à direita. Solte para driftar à esquerda. Sincronize seus toques para ficar na pista.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basquete para 2 Jogadores',
    description: `Escolha entre equipes lendárias e dispute partidas rápidas com super arremessos, bloqueios e enterradas. Jogue contra a CPU ou desafie um amigo.

Basketball Legends apresenta jogadores caricatos com movimentos especiais inspirados nas superestrelas da NBA.`,
    controls: `Jogador 1: WASD para mover, B para arremessar, N para super arremesso, M para bloquear. Jogador 2: Setas para mover, K para arremessar, L para super arremesso.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Equilibre o Ovo',
    description: `Dirija um carro morro acima com um ovo delicado em cima. Navegue por terreno irregular sem deixar o ovo cair.

Eggy Car transforma a direção em um puzzle de física de precisão. O ovo obedece à gravidade e inércia realistas.`,
    controls: `Segure pressionado para acelerar. Solte para seguir por inércia. Navegue pelas colinas com cuidado. Dirija o mais longe possível.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Destrua Plataformas',
    description: `Esmague plataformas giratórias tocando para fazer a bola cair. Destrua plataformas coloridas mas evite as pretas. Acumule velocidade para o modo fogo.

Stack Ball combina descida em hélice com física de destruição satisfatória. Mais de 100 milhões de downloads.`,
    controls: `Toque e segure para fazer a bola cair. Solte para parar. Evite as plataformas pretas. Destrua várias seguidas para o modo fogo.`,
  },
  'vex-7': {
    title: 'Vex 7 — Plataforma Stickman',
    description: `Navegue seu stickman por percursos brutais de obstáculos com lâminas giratórias, espinhos e plataformas móveis. Mais de 10 atos desafiadores.

Vex 7 é a mais recente edição de uma das séries de plataforma mais populares. Mais de 1 bilhão de partidas no total.`,
    controls: `Use WASD ou setas para mover e pular. Pressione S para deslizar. Pule nas paredes. Evite espinhos, lâminas e perigos.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Lance e Pesque',
    description: `Lance sua linha e pesque peixes deslizando o anzol durante a descida. Gaste dinheiro em melhorias de comprimento, velocidade e ganhos offline.

Tiny Fishing combina mecânicas idle com pesca ativa. Os peixes lendários se escondem além dos 100 metros.`,
    controls: `Clique e segure para lançar. Mova o mouse para pescar. Pesque o máximo por lançamento. Gaste os ganhos em melhorias.`,
  },
  'gunspin': {
    title: 'GunSpin — Lançador de Armas',
    description: `Lance sua arma e mantenha-a girando atirando no momento certo. Cada tiro empurra a arma mais longe. Cronometre seus cliques para maximizar a distância.

GunSpin combina física de projéteis com sistemas de melhoria idle. Mais de 20 armas desbloqueáveis.`,
    controls: `Clique ou toque para atirar. Cada tiro cria recuo que empurra a arma. Cronometre seus tiros para manter a altitude. Colete moedas para melhorias.`,
  },
  'vex-6': {
    title: 'Vex 6 — Plataforma Stickman',
    description: `Corra, pule, deslize e escale paredes por traiçoeiros percursos de obstáculos. Vex 6 continua a série com novos atos.

Vex 6 introduz natação com indicador de ar, serras em trilhos e plataformas que desmoronam.`,
    controls: `Use WASD ou setas para mover e pular. Pressione S para deslizar. Pule nas paredes. Evite espinhos, serras e buracos.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Jogo de Lançamento',
    description: `Bata, quique e lance-se por ondas de ursinhos de goma. Lance o Burrito Bison do ringue de luta livre.

Burrito Bison: Launcha Libre apresenta três lutadores jogáveis com habilidades especiais únicas.`,
    controls: `Clique para lançar do ringue. Clique para quicar nos ursinhos de goma. Use habilidades especiais. Ganhe dinheiro para melhorias.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Luta com Física',
    description: `Desfira golpes poderosos no seu adversário ragdoll e observe o caos baseado em física. Mire, carregue e acerte para mandar os stickmen voando.

Ragdoll Hit usa um motor de física realista que calcula força de impacto e colisões independentemente.`,
    controls: `Clique e arraste para mirar seu golpe. Solte para acertar. Arremesse adversários contra obstáculos para dano extra.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Futebol para 2 Jogadores',
    description: `Um hilário jogo de futebol onde regras, campo e jogadores mudam a cada rodada. Faça gols com jogadores ragdoll cambaleantes.

Soccer Random randomiza tudo a cada rodada — tamanho da bola, número de jogadores, superfície e até a gravidade.`,
    controls: `Jogador 1: Pressione W para chutar. Jogador 2: Pressione SETA PARA CIMA. Marque 5 gols para vencer. O campo muda a cada rodada.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Plataforma Clássico',
    description: `O lendário plataforma de rolagem lateral. Guie Mario pelo Reino dos Cogumelos, pisando em Goombas, quebrando tijolos e salvando a Princesa Peach.

Super Mario Bros foi lançado pela Nintendo em 1985 e é considerado o videogame mais influente já criado. Vendeu mais de 40 milhões de cópias.`,
    controls: `Use as setas para mover Mario. Pressione Z ou CIMA para pular. Pressione X para correr/atirar. Pise nos inimigos para eliminá-los. Colete moedas e power-ups.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Beisebol Multijogador',
    description: `Vá para a rebatida neste jogo de beisebol veloz com jogadores cartoon e ação arcade. Lance, rebata e defenda para vencer.

Baseball Bros combina mecânicas simplificadas com gameplay competitivo. Partidas rápidas de 3 innings.`,
    controls: `Clique para lançar ou rebater. Use o mouse para mirar. Cronometre seu clique para acertar a bola. Use as setas para controlar os defensores.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Gerente de Equipe',
    description: `Gerencie sua equipe de beisebol e compete em ligas e torneios. Recrute jogadores, melhore habilidades e lidere sua equipe.

Baseball 9 combina gerenciamento de equipe com ação em campo. Reflete métricas reais como média de rebatida, ERA e OPS.`,
    controls: `Clique para rebater. Mire e clique para lançar. Gerencie sua equipe entre as partidas.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Criador de Música',
    description: `Crie mixagens musicais arrastando e soltando personagens animados no palco. Cada personagem Sprunki adiciona um loop sonoro diferente.

Sprunki Phase 9 é a nona edição da série de criação musical Sprunki, inspirada no Incredibox.`,
    controls: `Arraste personagens para o palco para adicionar seu som. Clique para remover. Experimente combinações para descobrir animações bônus.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Jogo Musical Idle',
    description: `Clique para ganhar batidas e desbloquear novos personagens Sprunki. Cada melhoria adiciona novos sons à sua composição.

Sprunki Clicker funde mecânicas de clicker idle com o universo musical Sprunki.`,
    controls: `Clique para ganhar batidas. Gaste batidas em melhorias. Desbloqueie novos personagens e pacotes sonoros.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Mixer Musical Noturno',
    description: `Crie melodias sombrias neste mixer Sprunki com tema noturno. Arraste personagens espectrais para criar camadas de ritmos e vocais fantasmagóricos.

Sprunki Night Time reimagina a fórmula Sprunki com uma estética sombria e noturna.`,
    controls: `Arraste personagens para o palco para adicionar seu som. Encontre combinações especiais para animações bônus.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mixer Musical Maduro',
    description: `Uma versão evoluída da criação musical Sprunki com sons mais sofisticados e designs maduros. Construa faixas complexas.

Sprunki Grown Up apresenta versões adultas dos personagens clássicos com elementos sonoros mais complexos.`,
    controls: `Arraste personagens evoluídos para o palco. Experimente com as camadas para composições mais ricas.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Sandbox Musical',
    description: `A experiência sandbox definitiva de Sprunki com todos os personagens e sons desbloqueados desde o início. Mixe e experimente livremente.

Sprunki Playground elimina todas as barreiras de progressão e dá acesso imediato a cada personagem e som.`,
    controls: `Arraste qualquer personagem para o palco. Crie camadas de sons livremente. Use o botão de gravação para salvar seu mix.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Tiro ao Alvo',
    description: `Mire nos frangos loucos que voam por cenários 3D neste tiro ao alvo arcade. Clique para atirar nos frangos.

Crazy Chicken (Moorhuhn) nasceu como jogo promocional em 1999 e se tornou uma sensação viral com mais de 10 milhões de downloads.`,
    controls: `Mova o mouse para mirar. Clique para atirar. Procure alvos bônus escondidos. Os frangos dourados valem pontos extras.`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — Gerente de Futebol Americano',
    description: `Gerencie sua equipe de futebol americano neste jogo de gestão esportiva em estilo retrô. Escale jogadores, planeje jogadas e conduza seu time ao campeonato.

Retro Bowl combina gestão estratégica de elenco com ação em campo em pixel art. Cada decisão fora de campo influencia o desempenho do seu time na partida.`,
    controls: `Deslize para lançar a bola para os recebedores. Toque para desviar dos defensores. Use os menus para gerenciar o elenco e as táticas.`,
  },
  'run-3': {
    title: 'Run 3 — Corrida Infinita no Espaço',
    description: `Corra, salte e desafie a gravidade em túneis flutuantes no espaço. Mude as paredes em que corre para evitar buracos e sobreviver o máximo possível.

Run 3 expande a série com novos personagens, centenas de fases e um modo infinito. A rotação do túnel transforma cada salto em um desafio único.`,
    controls: `Setas esquerda/direita para mover. Barra de espaço para pular. R para reiniciar a fase.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Travessia Infinita',
    description: `Atravesse ruas movimentadas, rios e trilhos de trem neste colorido jogo de habilidade inspirado em Frogger. Cada passo pode ser o último!

Crossy Road oferece centenas de personagens desbloqueáveis e cenários gerados aleatoriamente. Seu estilo voxel e jogabilidade imediata o tornam irresistível.`,
    controls: `Toque ou pressione a seta para cima para avançar. Setas laterais para se mover. Não fique parado por muito tempo!`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Alimente Om Nom com Doces',
    description: `Corte as cordas no momento certo para fazer o doce cair na boca do Om Nom. Use a física, bolhas de ar e almofadas para resolver cada quebra-cabeça.

Cut the Rope é um puzzle físico premiado com centenas de fases que desafiam sua lógica e seu tempo de reação. Colete todas as estrelas para a pontuação perfeita.`,
    controls: `Deslize para cortar as cordas. Toque nas bolhas para inflá-las. Interaja com os elementos da fase para guiar o doce.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Balance e Voe',
    description: `Prenda-se nos pontos de ancoragem e balance como um acrobata para alcançar a chegada. Solte no momento certo para voar entre os pontos.

Stickman Hook é um jogo de física frenético com fases cada vez mais desafiadoras. A mecânica de balanço é fácil de aprender, mas difícil de dominar.`,
    controls: `Mantenha pressionado para se prender ao ponto mais próximo. Solte para se lançar. O timing é tudo!`,
  },
  'drive-mad': {
    title: 'Drive Mad — Desafio de Direção Física',
    description: `Pilote seu veículo por pistas cheias de obstáculos absurdos sem capotar. Equilibre velocidade e inclinação para chegar ao final.

Drive Mad testa sua habilidade com rampas insanas, plataformas móveis e terrenos imprevisíveis. Cada fase exige precisão e paciência.`,
    controls: `Seta para cima para acelerar. Seta para baixo para frear. Equilibre a inclinação do veículo para não virar.`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Conquista de Território',
    description: `Expanda seu território traçando linhas pelo mapa e voltando à sua zona. Corte o caminho dos adversários para eliminá-los e domine a arena.

Paper.io 2 é um jogo .io competitivo em que estratégia e timing fazem a diferença. Quanto mais você se arriscar longe da sua área, maior será a recompensa.`,
    controls: `Use as setas direcionais ou arraste para se mover. Saia do seu território para conquistar nova área e retorne para reivindicá-la.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Corrida Infinita no Metrô',
    description: `Corra a toda velocidade pelos trilhos do metrô com Jake e seus amigos, desviando de trens e obstáculos enquanto coleta moedas e power-ups.

Subway Surfers é um dos endless runners mais famosos do mundo, com cenários que mudam periodicamente e dezenas de personagens e pranchas para desbloquear.`,
    controls: `Deslize para os lados para trocar de faixa. Deslize para cima para pular, para baixo para deslizar. Colete moedas e power-ups especiais.`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Ação Infinita com Jetpack',
    description: `Vista o jetpack roubado e atravesse o laboratório desviando de lasers, mísseis e campos elétricos. Colete moedas e veículos especiais pelo caminho.

Jetpack Joyride acompanha as aventuras de Barry Steakfries em um endless runner cheio de adrenalina. Desbloqueie jetpacks únicos e complete missões para ganhar recompensas.`,
    controls: `Mantenha pressionado para ativar o jetpack e subir. Solte para descer. Evite os obstáculos e colete power-ups.`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Desafio de Precisão Extrema",
    description: `Guie o quadrado vermelho por labirintos cheios de esferas azuis em movimento. Um único toque e você recomeça. Só os jogadores mais habilidosos chegarão ao final.

World's Hardest Game é um lendário jogo de precisão que exige reflexos perfeitos e paciência infinita. Cada fase foi projetada para testar seus limites.`,
    controls: `Use as setas direcionais para mover o quadrado vermelho. Colete as moedas amarelas e evite todas as esferas azuis para completar a fase.`,
  },
};
