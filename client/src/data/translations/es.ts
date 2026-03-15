import type { GameTranslation } from '../gameTranslations';

export const ES_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Puzzle de Deslizar y Fusionar',
    description: `Desliza fichas numeradas en una cuadrícula de 4×4 y combina números iguales para alcanzar la esquiva ficha 2048. Cada deslizamiento fusiona fichas idénticas y genera un nuevo 2 o 4 — planifica varios movimientos por adelantado o verás cómo el tablero se llena rápido. Fácil de aprender, endiabladamente difícil de dominar.

Creado por el desarrollador italiano Gabriele Cirulli en marzo de 2014, 2048 se convirtió en un fenómeno mundial de la noche a la mañana, inspirando cientos de variantes. El juego se basa en Threes! de Asher Vollmer, pero su lanzamiento de código abierto lo convirtió en el juego de navegador más clonado de la historia.`,
    controls: `Usa las teclas de dirección (↑ ↓ ← →) o desliza en el móvil para mover todas las fichas en una dirección. Las fichas con el mismo número se fusionan al chocar. El objetivo es crear una ficha con el número 2048.`,
  },
  'tetris': {
    title: 'Tetris — Puzzle Clásico de Bloques',
    description: `El eterno puzzle de bloques que caen que definió una generación. Rota y posiciona tetrominós mientras descienden, completando líneas horizontales para eliminarlas del tablero. A medida que sube tu puntuación, las piezas caen más rápido.

Inventado por el ingeniero de software soviético Alexey Pajitnov en 1985, Tetris ha vendido más de 520 millones de copias en todas las plataformas imaginables. El nombre combina el prefijo griego "tetra" (cuatro) con tenis.`,
    controls: `Usa las teclas de dirección para mover piezas: ← → para desplazar, ↑ para rotar, ↓ para caída suave. Pulsa Espacio para caída instantánea. Completa filas para eliminarlas y sumar puntos.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Toca para Volar',
    description: `Navega con un pequeño pájaro pixelado a través de una serie infinita de tuberías verdes tocando para aletear. Un toque hace que el pájaro salte; la gravedad lo jala hacia abajo. ¿Puedes superar 50?

Flappy Bird fue creado por el desarrollador vietnamita Dong Nguyen y lanzado en mayo de 2013. Se convirtió en la app gratuita más descargada a principios de 2014, ganando unos $50.000 al día en anuncios.`,
    controls: `Haz clic, toca o pulsa cualquier tecla para que el pájaro aletee. No hagas nada y la gravedad lo jala hacia abajo. Navega por los espacios entre las tuberías sin tocarlas. Cada tubería suma un punto.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Corredor T-Rex',
    description: `Corre a través de un desierto pixelado como el querido T-Rex de Chrome, saltando sobre cactus y agachándote bajo pterodáctilos en este corredor sin fin. La velocidad aumenta sin cesar.

Oculto dentro de la página "Sin Internet" de Google Chrome desde 2014, el juego Dino fue diseñado por Sebastien Gabriel. Aproximadamente 270 millones de partidas se juegan cada mes.`,
    controls: `Pulsa Espacio o ↑ para saltar sobre cactus. Pulsa ↓ para agacharte bajo pterodáctilos. En móvil, toca para saltar y desliza hacia abajo para agacharte. El T-Rex corre automáticamente.`,
  },
  'snake': {
    title: 'Snake — Juego Retro Clásico',
    description: `Guía una serpiente que crece por el tablero, comiendo comida para crecer mientras evitas tu propia cola y las paredes. Cuanto más sobrevivas, más larga y difícil de controlar se vuelve.

Los orígenes de Snake se remontan al juego arcade Blockade de 1976. Se convirtió en un fenómeno cultural cuando Nokia preinstaló una versión en sus teléfonos en 1998.`,
    controls: `Usa las teclas de dirección (↑ ↓ ← →) o WASD para cambiar de dirección. La serpiente se mueve continuamente. Come la comida para crecer y sumar puntos. Evita las paredes y tu propia cola.`,
  },
  'pac-man': {
    title: 'Pac-Man — Clásico Arcade',
    description: `Devora tu camino a través de un laberinto de puntos mientras evades cuatro fantasmas coloridos — Blinky, Pinky, Inky y Clyde. Agarra un Power Pellet para invertir la situación.

Lanzado por Namco en mayo de 1980, Pac-Man se convirtió en el juego arcade más taquillero de todos los tiempos, recaudando más de 2.500 millones de dólares en monedas.`,
    controls: `Usa las teclas de dirección para navegar a Pac-Man por el laberinto. Come todos los puntos para completar el nivel. Agarra las Power Pellets en las esquinas para volver a los fantasmas azules temporalmente.`,
  },
  'minesweeper': {
    title: 'Buscaminas — Puzzle de Minas',
    description: `Descubre casillas en una cuadrícula sin detonar minas ocultas. Cada número revelado te dice cuántas minas acechan en las ocho celdas circundantes — usa la lógica para deducir qué casillas son seguras.

Buscaminas fue creado por Robert Donner y Curt Johnson para Microsoft Windows 3.1 en 1990, diseñado para enseñar a los usuarios a hacer clic derecho e izquierdo.`,
    controls: `Clic izquierdo para revelar una casilla. Los números muestran cuántas minas adyacentes existen. Clic derecho para marcar minas sospechosas. Usa la lógica para deducir casillas seguras.`,
  },
  'solitaire': {
    title: 'Solitario — Juego de Cartas Klondike',
    description: `El juego de cartas individual por excelencia. Ordena una baraja mezclada en cuatro pilas de base por palo, del As al Rey, moviendo cartas entre siete columnas del tableau.

El Solitario Klondike ganó fama mundial después de que Microsoft lo incluyera en Windows 3.0 en 1990. Diseñado por el becario Wes Cherry.`,
    controls: `Haz clic en las cartas para seleccionarlas, luego clic en un destino válido. Construye columnas en orden descendente con colores alternos. Mueve Ases a las bases y construye por palo.`,
  },
  'chess': {
    title: 'Ajedrez — Juega contra la Computadora',
    description: `Desafía a un oponente computarizado en el juego de estrategia más celebrado del mundo. Comanda un ejército de 16 piezas a través de un tablero de 64 casillas.

El ajedrez se originó en la India alrededor del siglo VI como "chaturanga" y se extendió por la Ruta de la Seda hasta Persia y Europa. Hoy más de 600 millones de personas juegan regularmente.`,
    controls: `Haz clic en una pieza para seleccionarla, luego clic en la casilla destino. Los movimientos válidos se resaltan. Reglas estándar incluyendo enroque, captura al paso y promoción de peones.`,
  },
  'checkers': {
    title: 'Damas — Juego de Mesa',
    description: `Salta y captura las piezas de tu oponente en un tablero de 8×8. Mueve en diagonal, encadena múltiples saltos y corona tus piezas en poderosos reyes que pueden moverse hacia atrás.

Damas es uno de los juegos de mesa más antiguos, con una versión encontrada en la antigua ciudad de Ur que data del 3000 a.C.`,
    controls: `Haz clic en una pieza para seleccionarla, luego clic en la casilla diagonal destino. Saltar sobre una pieza del oponente la captura. Llega al extremo opuesto para coronar una pieza.`,
  },
  'sudoku': {
    title: 'Sudoku — Puzzle de Lógica Numérica',
    description: `Rellena una cuadrícula de 9×9 para que cada fila, columna y caja de 3×3 contenga los dígitos del 1 al 9 sin repetir. Usa pura lógica para deducir cada número faltante.

El Sudoku moderno fue creado por el arquitecto estadounidense Howard Garns en 1979 bajo el nombre "Number Place". Se convirtió en una moda global tras popularizarse en Japón.`,
    controls: `Haz clic en una celda vacía y escribe un número del 1 al 9. Cada fila, columna y caja de 3×3 debe contener todos los dígitos del 1 al 9 exactamente una vez.`,
  },
  'wordle': {
    title: 'Wordle Unlimited — Juego de Adivinar Palabras',
    description: `Adivina la palabra secreta de cinco letras en seis intentos o menos. Las fichas de colores revelan qué letras son correctas (verde), están mal ubicadas (amarillo) o ausentes (gris).

Wordle fue creado por Josh Wardle como regalo para su pareja en 2021. Pasó de 90 jugadores a más de 2 millones diarios en enero de 2022.`,
    controls: `Escribe una palabra de cinco letras y pulsa Enter. Verde = posición correcta. Amarillo = letra en la palabra pero en otro lugar. Gris = letra no está en la palabra. Tienes seis intentos.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Juego Idle de Galletas',
    description: `Haz clic en la galleta gigante para hornear galletas, luego gástalas en mejoras — abuelas, granjas, fábricas y portales — que hornean automáticamente aún más.

Creado por el programador francés Julien "Orteil" Thiennot en 2013, Cookie Clicker fue pionero del género de juegos idle. Lanzado en Steam en 2021 con 97% de valoraciones positivas.`,
    controls: `Haz clic en la galleta grande para producir galletas. Gasta galletas en edificios en la tienda para automatizar la producción. Compra mejoras para multiplicar tu producción.`,
  },
  'connect-four': {
    title: 'Conecta 4 — Estrategia de Discos',
    description: `Lanza discos de colores en una cuadrícula vertical, intentando conectar cuatro en fila — horizontal, vertical o diagonalmente — antes que tu oponente.

Conecta 4 fue vendido por primera vez por Milton Bradley en 1974. En 1988, Victor Allis demostró que el primer jugador siempre puede forzar una victoria comenzando en la columna central.`,
    controls: `Haz clic en una columna para lanzar tu disco. Los discos caen al fondo por gravedad. Conecta cuatro de tu color en fila para ganar.`,
  },
  'tic-tac-toe': {
    title: 'Tres en Raya — Juego de X y O',
    description: `Toma turnos colocando X y O en una cuadrícula de 3×3, intentando conseguir tres en fila. Juega contra un amigo o desafía a la IA.

Tres en Raya es uno de los juegos más antiguos conocidos, con ejemplos en ruinas del antiguo Egipto que datan del 1300 a.C.`,
    controls: `Haz clic en una casilla vacía para colocar tu marca. Consigue tres marcas en fila horizontal, vertical o diagonal para ganar.`,
  },
  'reversi': {
    title: 'Reversi — Juego de Estrategia Othello',
    description: `Coloca discos en un tablero de 8×8 y voltea las piezas de tu oponente atrapándolas entre las tuyas. Cada movimiento puede cambiar el equilibrio de poder.

Reversi fue inventado en 1883. La versión moderna, Othello, fue popularizada por Goro Hasegawa en 1971.`,
    controls: `Haz clic en una casilla vacía para colocar tu disco. Los discos del oponente atrapados entre tus discos cambian a tu color.`,
  },
  'hextris': {
    title: 'Hextris — Puzzle Hexagonal',
    description: `Un giro fascinante en los puzzles de bloques que caen, ambientado en un hexágono giratorio. Bloques de colores caen hacia el centro desde los seis lados.

Hextris fue creado en 2014 por estudiantes de la Universidad de Maryland durante un hackathon.`,
    controls: `Usa ← y → (o A y D) para rotar el hexágono central. Une tres o más bloques del mismo color en fila para eliminarlos.`,
  },
  'word-search': {
    title: 'Sopa de Letras — Puzzle de Palabras Ocultas',
    description: `Escanea una cuadrícula de letras mezcladas para encontrar palabras ocultas en horizontal, vertical y diagonal. Las palabras pueden leerse en ambas direcciones.

Los puzzles de sopa de letras fueron inventados por Norman E. Gibat en 1968.`,
    controls: `Haz clic y arrastra sobre las letras para resaltar una palabra. Las palabras pueden estar ocultas en cualquier dirección.`,
  },
  'falling-blocks': {
    title: 'Bloques que Caen — Apilador de Cubos',
    description: `Cubos de colores llueven y debes apilarlos y combinarlos antes de que se apilen hasta arriba. Coloca los bloques estratégicamente para crear combos de colores.

Los juegos de bloques que caen tienen su origen en Tetris (1985) y han evolucionado en docenas de variantes.`,
    controls: `Usa ← y → para mover la pieza. Pulsa ↑ o Espacio para rotar. Pulsa ↓ para caída rápida. Combina colores y completa filas para eliminar bloques.`,
  },
  'card-solitaire': {
    title: 'Solitario Clásico — Juego de Cartas Paciencia',
    description: `Una versión limpia del juego de cartas en solitario favorito del mundo. Construye secuencias descendentes de colores alternos y mueve las 52 cartas a las cuatro pilas de base.

Los juegos de solitario han sido populares desde el siglo XVIII. Napoleón Bonaparte era un ávido jugador durante su exilio.`,
    controls: `Haz clic en una carta para seleccionarla, luego clic en un destino válido. Construye columnas alternando rojo y negro. Los Ases van a las pilas de base.`,
  },
  'slope': {
    title: 'Slope — Juego de Bola Rodante 3D',
    description: `Controla una bola rodando por una pendiente iluminada con neón a velocidad creciente. Esquiva obstáculos, navega curvas cerradas y evita caer del borde.

Slope fue desarrollado por Rob Kay y se convirtió en uno de los juegos de navegador más populares del mundo. Usa WebGL para renderizado 3D fluido.`,
    controls: `Usa ← y → o A y D para dirigir la bola. Evita obstáculos rojos y huecos. La bola acelera continuamente.`,
  },
  'among-us': {
    title: 'Among Us — Deducción Social',
    description: `Trabaja con tu tripulación para completar tareas a bordo de una nave espacial — pero cuidado, hay impostores entre ustedes. Discute, acusa y vota para expulsar sospechosos.

Among Us fue desarrollado por InnerSloth y explotó en popularidad en 2020. En su pico tenía 500 millones de jugadores activos mensuales.`,
    controls: `Usa WASD o flechas para moverte. Haz clic en tareas para completarlas. Reporta cadáveres o convoca reuniones de emergencia.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Plataformero Rítmico',
    description: `Salta y vuela a través de un mundo pulsante lleno de obstáculos sincronizado con música electrónica. Toca para saltar sobre pinchos y navegar portales de gravedad.

Geometry Dash fue creado por el desarrollador sueco Robert Topala en 2013. Ha sido descargado más de 200 millones de veces con más de 80 millones de niveles creados por usuarios.`,
    controls: `Haz clic, toca o pulsa Espacio para saltar. Mantén pulsado para seguir saltando en modo nave. Los obstáculos están sincronizados con la música.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Esquiva 3D en Túnel',
    description: `Lánzate a través de un túnel 3D retorcido y cambiante de color a velocidad vertiginosa, esquivando barreras que aparecen con apenas un momento de aviso.

Tunnel Rush se convirtió en una sensación viral como uno de los juegos de navegador más accesibles pero desafiantes.`,
    controls: `Usa ← y → o A y D para esquivar obstáculos en el túnel. Reacciona rápido — a altas velocidades tienes menos de un segundo.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Dispara y Combina',
    description: `Apunta y dispara burbujas de colores para crear grupos de tres o más colores iguales, reventándolas del tablero. Limpia todas las burbujas para ganar cada nivel.

Bubble Shooter tiene sus raíces en Puzzle Bobble de Taito (1994). La versión de navegador se convirtió en uno de los juegos casuales más jugados de internet.`,
    controls: `Apunta con el ratón y haz clic para disparar una burbuja. Combina tres o más del mismo color para reventarlas.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Desafío de Cartas',
    description: `Ordena cartas en secuencias descendentes del mismo palo a través de diez columnas. Completa una secuencia Rey a As para retirarla.

Spider Solitaire fue incluido con Microsoft Windows desde 1998 y se convirtió en uno de los juegos más jugados de la historia.`,
    controls: `Haz clic en una carta para seleccionarla, luego clic en un destino válido. Solo secuencias del mismo palo se mueven como grupo. Completa Rey-As para retirarla.`,
  },
  'mahjong': {
    title: 'Mahjong — Clásico de Emparejar Fichas',
    description: `Retira pares de fichas iguales de un elaborado arreglo multicapa. Solo las fichas "libres" pueden seleccionarse. Limpia todas las fichas para ganar.

Mahjong Solitaire fue creado por Brodie Lockard en 1981 en el sistema PLATO.`,
    controls: `Haz clic en una ficha libre para seleccionarla, luego clic en otra ficha libre igual para retirar el par. Usa el botón de pista si te atascas.`,
  },
  'freecell': {
    title: 'FreeCell — Solitario Estratégico',
    description: `Las 52 cartas se reparten boca arriba en ocho columnas — sin información oculta, cada partida es una prueba pura de estrategia. Usa cuatro celdas libres como almacenamiento temporal.

FreeCell fue popularizado por su inclusión en Windows desde Windows 95. Solo la repartida #11982 es imposible.`,
    controls: `Haz clic en una carta, luego clic en una columna destino o celda libre. Construye columnas en orden descendente con colores alternos. Usa las cuatro celdas libres sabiamente.`,
  },
  'backgammon': {
    title: 'Backgammon — Juego de Mesa Clásico',
    description: `Lanza los dados y carrera con tus quince fichas alrededor del tablero. Bloquea, golpea y supera a la IA en este eterno juego de estrategia.

Backgammon es uno de los juegos de mesa más antiguos, con orígenes de hace 5.000 años en Mesopotamia.`,
    controls: `Haz clic en el botón de dados para lanzar. Haz clic en una ficha, luego clic en el punto destino. Debes usar ambos dados si es posible.`,
  },
  'hangman': {
    title: 'Ahorcado — Juego de Adivinar Palabras',
    description: `Adivina la palabra oculta letra por letra antes de que se complete el dibujo del ahorcado. Cada intento fallido añade una parte del cuerpo.

El Ahorcado se ha jugado desde al menos la época victoriana y es uno de los juegos de palabras más conocidos del mundo.`,
    controls: `Haz clic en las letras para adivinar. Las letras correctas aparecen en sus posiciones. Tienes 6-8 intentos incorrectos.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Corta y Rebana',
    description: `Corta frutas volando por la pantalla con tu dedo o ratón. Corta varias en un solo movimiento para combos, pero cuidado con las bombas.

Fruit Ninja fue desarrollado por Halfbrick Studios y lanzado en 2010. Ha sido descargado más de 1.000 millones de veces.`,
    controls: `Desliza por la pantalla o haz clic y arrastra para cortar frutas. Corta varias en un movimiento para combos. Evita las bombas.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Carrera de Motos',
    description: `Conduce tu moto a través de 25 pistas llenas de barriles explosivos, loops gigantes y sierras mortales. Haz piruetas para bonos de tiempo.

Moto X3M fue desarrollado por Madpuffers en 2016. La serie ha tenido más de 500 millones de partidas.`,
    controls: `Pulsa ARRIBA o W para acelerar, ABAJO o S para frenar. IZQUIERDA/DERECHA para inclinarte en el aire. Haz piruetas para bonos.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Derrape de Un Botón',
    description: `Domina el arte del derrape con solo un botón. Toca para girar a la derecha, suelta para derrapar a la izquierda. Manténte en la carretera.

Drift Boss fue creado por Madpuffers, conocido por sus juegos accesibles de un solo botón.`,
    controls: `Haz clic o toca para girar a la derecha. Suelta para derrapar a la izquierda. Sincroniza tus toques para mantenerte en la carretera.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Baloncesto para 2 Jugadores',
    description: `Elige entre equipos legendarios y compite en partidos rápidos con super tiros, bloqueos y clavadas. Juega contra la CPU o desafía a un amigo.

Basketball Legends presenta jugadores caricaturizados con movimientos especiales inspirados en superestrellas de la NBA.`,
    controls: `Jugador 1: WASD para moverse, B para tirar, N para super tiro, M para bloquear. Jugador 2: Flechas para moverse, K para tirar, L para super tiro.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Equilibra el Huevo',
    description: `Conduce un coche cuesta arriba con un delicado huevo encima. Navega por terreno irregular sin dejar que el huevo se caiga.

Eggy Car convierte la conducción en un puzzle de física de precisión. El huevo obedece gravedad e inercia realistas.`,
    controls: `Mantén pulsado para acelerar. Suelta para avanzar por inercia. Navega las colinas con cuidado. Conduce lo más lejos posible.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Destruye Plataformas',
    description: `Aplasta plataformas rotatorias tocando para soltar la bola. Limpia plataformas de colores pero evita las negras. Acumula velocidad para el modo fuego.

Stack Ball combina descenso en hélice con física de destrucción satisfactoria.`,
    controls: `Toca y mantén para soltar la bola. Suelta para detenerte. Evita las plataformas negras. Destruye varias seguidas para el modo fuego.`,
  },
  'vex-7': {
    title: 'Vex 7 — Plataformero de Stickman',
    description: `Navega tu stickman por carreras de obstáculos brutales con cuchillas giratorias, pinchos y plataformas móviles. Más de 10 actos desafiantes.

Vex 7 es la última entrega de una de las series de plataformas más populares. Más de 1.000 millones de partidas en total.`,
    controls: `Usa WASD o flechas para moverte y saltar. Pulsa S para deslizarte. Salta por paredes. Evita pinchos, cuchillas y peligros.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Lanza y Atrapa',
    description: `Lanza tu línea de pesca y atrapa peces deslizando el anzuelo mientras desciende. Gasta dinero en mejoras de longitud, velocidad y ganancias offline.

Tiny Fishing combina mecánicas idle con pesca activa. Los peces legendarios acechan a más de 100 metros.`,
    controls: `Haz clic y mantén para lanzar. Mueve el ratón para atrapar peces. Recoge el máximo por lanzamiento. Gasta ganancias en mejoras.`,
  },
  'gunspin': {
    title: 'GunSpin — Lanzador de Armas',
    description: `Lanza tu arma y mantenla girando disparando en el momento justo. Cada disparo impulsa el arma más lejos. Cronometra tus clics para maximizar la distancia.

GunSpin combina física de proyectiles con sistemas de mejoras idle.`,
    controls: `Haz clic o toca para disparar. Cada disparo crea retroceso que empuja el arma. Cronometra tus disparos para mantener altitud. Recoge monedas para mejoras.`,
  },
  'vex-6': {
    title: 'Vex 6 — Plataformero de Stickman',
    description: `Corre, salta, deslízate y escala paredes a través de traicioneras carreras de obstáculos. Vex 6 continúa la serie con nuevos actos.

Vex 6 introduce mecánicas de natación con medidor de aire, sierras sobre rieles y plataformas que se desmoronan.`,
    controls: `Usa WASD o flechas para moverte y saltar. Pulsa S para deslizarte. Salta por paredes. Evita pinchos, sierras y pozos.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Juego de Lanzamiento',
    description: `Golpea, rebota y propúlsate a través de oleadas de ositos de gominola. Lanza a Burrito Bison desde el ring de lucha libre.

Burrito Bison: Launcha Libre presenta tres luchadores jugables con habilidades especiales únicas. Originalmente un juego Flash de Juicy Beast Studios.`,
    controls: `Haz clic para lanzar desde el ring. Haz clic para rebotar sobre ositos de gominola. Usa habilidades especiales. Gana dinero para mejoras.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Brawler de Física',
    description: `Suelta golpes poderosos sobre tu oponente ragdoll y observa el caos basado en física. Apunta, carga y golpea para enviar stickmen volando.

Ragdoll Hit usa un motor de física realista que calcula fuerza de impacto y colisión de forma independiente.`,
    controls: `Haz clic y arrastra para apuntar tu golpe. Suelta para golpear. Golpea oponentes contra obstáculos para daño extra.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Fútbol para 2 Jugadores',
    description: `Un hilarante juego de fútbol donde las reglas, campo y jugadores cambian cada ronda. Marca goles con jugadores ragdoll tambaleantes.

Soccer Random aleatoriza todo cada ronda — tamaño del balón, número de jugadores, superficie e incluso la gravedad.`,
    controls: `Jugador 1: Pulsa W para patear. Jugador 2: Pulsa FLECHA ARRIBA. Marca 5 goles para ganar. El campo cambia cada ronda.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Plataformero Clásico',
    description: `El legendario plataformero de desplazamiento lateral. Guía a Mario a través del Reino Champiñón, pisando Goombas, rompiendo ladrillos y rescatando a la Princesa Peach.

Super Mario Bros fue lanzado por Nintendo en 1985 y es considerado el videojuego más influyente jamás creado. Diseñado por Shigeru Miyamoto, vendió más de 40 millones de copias.`,
    controls: `Usa flechas para mover a Mario. Pulsa Z o ARRIBA para saltar. Pulsa X para correr/disparar. Pisa enemigos aterrizando sobre ellos. Recoge monedas y power-ups.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Béisbol Multijugador',
    description: `Ponte al bate en este juego de béisbol rápido con jugadores cartoon y acción arcade. Lanza, batea y defiende tu camino a la victoria.

Baseball Bros combina mecánicas simplificadas con juego competitivo. Partidos rápidos de 3 entradas.`,
    controls: `Haz clic para lanzar o batear. Usa el ratón para apuntar. Cronometra tu clic para golpear la pelota. Usa flechas para controlar defensores.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Manager de Equipo',
    description: `Administra tu propio equipo de béisbol y compite en ligas y torneos. Recluta jugadores, mejora habilidades y lidera tu escuadrón.

Baseball 9 combina gestión de equipo con acción en el campo. Recluta jugadores con estadísticas únicas.`,
    controls: `Haz clic para batear. Apunta y haz clic para lanzar. Administra tu equipo entre partidos.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Creador de Música',
    description: `Crea mezclas musicales arrastrando y soltando personajes animados en el escenario. Cada personaje Sprunki añade un loop de sonido diferente.

Sprunki Phase 9 es la novena entrega de la serie de creación musical Sprunki, inspirada en Incredibox.`,
    controls: `Arrastra personajes al escenario para añadir su sonido. Haz clic para eliminar. Experimenta con combinaciones para descubrir animaciones bonus.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Juego Musical Idle',
    description: `Haz clic para ganar beats y desbloquear nuevos personajes Sprunki. Cada mejora añade nuevos sonidos a tu composición.

Sprunki Clicker fusiona mecánicas de clicker idle con el universo musical de Sprunki.`,
    controls: `Haz clic para ganar beats. Gasta beats en mejoras. Desbloquea nuevos personajes y packs de sonido.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Mezclador Musical Nocturno',
    description: `Crea melodías inquietantes en este mezclador Sprunki con temática nocturna. Arrastra personajes espeluznantes para crear capas de ritmos y voces fantasmales.

Sprunki Night Time reimagina la fórmula Sprunki con una estética oscura y nocturna.`,
    controls: `Arrastra personajes al escenario para añadir su sonido. Encuentra combinaciones especiales para animaciones bonus.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mezclador Musical Maduro',
    description: `Una versión evolucionada de la creación musical Sprunki con sonidos más sofisticados y diseños maduros. Construye pistas complejas.

Sprunki Grown Up presenta versiones adultas de los personajes clásicos con elementos sonoros más complejos.`,
    controls: `Arrastra personajes evolucionados al escenario. Experimenta con capas para composiciones más ricas.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Sandbox Musical',
    description: `La experiencia sandbox definitiva de Sprunki con todos los personajes y sonidos desbloqueados desde el principio. Mezcla y experimenta libremente.

Sprunki Playground elimina todas las barreras de progresión y da acceso inmediato a cada personaje y sonido.`,
    controls: `Arrastra cualquier personaje al escenario. Crea capas de sonidos libremente. Usa el botón de grabar para guardar tu mezcla.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Galería de Tiro',
    description: `Apunta a los pollos locos volando a través de paisajes 3D en esta galería de tiro arcade. Haz clic para disparar a los pollos.

Crazy Chicken (Moorhuhn) se originó como juego promocional en 1999 y se convirtió en una sensación viral con más de 10 millones de descargas.`,
    controls: `Mueve el ratón para apuntar. Haz clic para disparar. Busca objetivos bonus ocultos. Los pollos dorados valen puntos extra.`,
  },
  'retro-bowl': {
    title: 'Retro Bowl — Manager de Fútbol Americano',
    description: `Dirige tu propio equipo de fútbol americano en este simulador deportivo con estilo retro. Recluta jugadores, diseña tácticas y lleva a tu franquicia al campeonato.

Retro Bowl combina gestión de equipo con jugabilidad arcade en el campo. Controla los pases y las carreras mientras administras el vestuario, los contratos y la moral del equipo.`,
    controls: `Desliza para lanzar el balón hacia tus receptores. Toca para esquivar defensores al correr. Gestiona tu plantilla entre partidos.`,
  },
  'run-3': {
    title: 'Run 3 — Corredor Espacial Infinito',
    description: `Corre, salta y desafía la gravedad a través de túneles flotantes en el espacio exterior. Cambia entre paredes y techo para evitar los huecos que aparecen en tu camino.

Run 3 amplía la serie con docenas de niveles nuevos, múltiples personajes desbloqueables y un modo exploración infinita. Cada personaje tiene habilidades únicas que cambian tu forma de jugar.`,
    controls: `Usa las flechas o A/D para moverte. Pulsa ESPACIO o ARRIBA para saltar. Corre por las paredes para cambiar la gravedad.`,
  },
  'crossy-road': {
    title: 'Crossy Road — Saltador Infinito',
    description: `Cruza carreteras con tráfico, ríos caudalosos y vías de tren en este juego de saltos infinitos inspirado en Frogger. Avanza lo más lejos posible sin ser atropellado.

Crossy Road ofrece cientos de personajes coleccionables y escenarios variados. Cada intento es único gracias a la generación procedural del terreno.`,
    controls: `Toca o pulsa ESPACIO para saltar hacia adelante. Usa las flechas para moverte a los lados. No te quedes quieto demasiado tiempo o el águila te atrapará.`,
  },
  'cut-the-rope': {
    title: 'Cut the Rope — Dale Caramelos a Om Nom',
    description: `Corta las cuerdas en el momento justo para que el caramelo caiga en la boca del adorable Om Nom. Resuelve puzles de física cada vez más ingeniosos.

Cut the Rope introduce burbujas de aire, cojines inflables, teletransportadores y más mecánicas a lo largo de cientos de niveles. Recoge las tres estrellas de cada nivel para completarlo al máximo.`,
    controls: `Desliza el dedo o el ratón para cortar las cuerdas. Toca las burbujas para reventarlas. Cronometra tus cortes para recoger todas las estrellas.`,
  },
  'stickman-hook': {
    title: 'Stickman Hook — Balancéate y Vuela',
    description: `Balancéate de gancho en gancho como un stickman acrobático. Suelta en el momento perfecto para volar por los aires y alcanzar la meta.

Stickman Hook ofrece cientos de niveles con dificultad creciente y docenas de personajes desbloqueables. La física del balanceo es intuitiva pero difícil de dominar.`,
    controls: `Mantén pulsado para engancharte al punto más cercano. Suelta para soltarte y volar. Cronometra tus balanceos para ganar impulso.`,
  },
  'drive-mad': {
    title: 'Drive Mad — Desafío de Conducción Física',
    description: `Conduce vehículos por circuitos llenos de obstáculos imposibles en este juego de física vehicular. Mantén el equilibrio y evita volcar para llegar a la meta.

Drive Mad pone a prueba tu paciencia y habilidad con rampas empinadas, plataformas inestables y saltos de precisión. Cada nivel es un puzle de conducción diferente.`,
    controls: `Usa las flechas o W/S para acelerar y frenar. Mantén el equilibrio del vehículo para no volcar. Llega a la bandera de meta para superar el nivel.`,
  },
  'paper-io-2': {
    title: 'Paper.io 2 — Conquista de Territorio',
    description: `Expande tu territorio pintando el suelo a tu paso en este juego .io multijugador. Vuelve a tu zona segura para reclamar el terreno que has rodeado.

Paper.io 2 es un juego de estrategia en tiempo real donde debes equilibrar la ambición con la prudencia. Cuanto más te alejes de tu territorio, mayor será la recompensa, pero también el riesgo.`,
    controls: `Usa las flechas o desliza para cambiar de dirección. Rodea áreas vacías y vuelve a tu territorio para reclamarlas. No dejes que otros crucen tu estela.`,
  },
  'subway-surfers': {
    title: 'Subway Surfers — Corredor Infinito del Metro',
    description: `Corre a toda velocidad por las vías del tren esquivando trenes, barreras y obstáculos como Jake y sus amigos. Recoge monedas y potenciadores para batir tu récord.

Subway Surfers es uno de los juegos móviles más descargados de la historia, con escenarios temáticos que cambian periódicamente y tablas de surf especiales con habilidades únicas.`,
    controls: `Desliza hacia los lados para cambiar de carril. Desliza hacia arriba para saltar y hacia abajo para deslizarte. Recoge potenciadores como el imán de monedas y el jetpack.`,
  },
  'jetpack-joyride': {
    title: 'Jetpack Joyride — Acción Infinita con Jetpack',
    description: `Ponte el jetpack de Barry Steakfries y vuela a través de un laboratorio secreto esquivando láseres, misiles y campos eléctricos. Recoge monedas y vehículos especiales.

Jetpack Joyride combina acción frenética con mecánicas de colección. Desbloquea jetpacks diferentes, cada uno con efectos visuales únicos, y completa misiones para ganar recompensas extra.`,
    controls: `Mantén pulsado para activar el jetpack y subir. Suelta para descender. Esquiva obstáculos y recoge vehículos especiales para protección temporal.`,
  },
  'worlds-hardest-game': {
    title: "World's Hardest Game — Desafío de Precisión Extrema",
    description: `Guía tu cuadrado rojo a través de laberintos repletos de bolas azules en movimiento. Un solo contacto te devuelve al inicio. Solo los más pacientes lo superarán.

World's Hardest Game hace honor a su nombre con 30 niveles de dificultad brutal. Cada nivel requiere cronometrar tus movimientos a la perfección y memorizar los patrones de los enemigos.`,
    controls: `Usa las flechas para mover el cuadrado rojo. Recoge los círculos amarillos y llega a la zona verde de meta. Evita todo contacto con las bolas azules.`,
  },
};
