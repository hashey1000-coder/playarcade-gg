import type { GameTranslation } from '../gameTranslations';

export const ID_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Teka-Teki Geser dan Gabungkan',
    description: `Geser ubin bernomor pada papan 4×4 dan gabungkan angka yang sama untuk mencapai ubin 2048 yang sulit dipahami. Setiap geseran menggabungkan ubin identik dan memunculkan angka 2 atau 4 baru — rencanakan beberapa langkah ke depan, atau papan akan cepat penuh. Mudah dipelajari, sangat sulit dikuasai.

Dibuat oleh pengembang Italia Gabriele Cirulli pada Maret 2014, 2048 menjadi fenomena global dalam semalam dan menginspirasi ratusan varian. Gim ini didasarkan pada Threes! karya Asher Vollmer, tetapi perilisan sumber terbukanya menjadikannya gim peramban paling banyak ditiru dalam sejarah.`,
    controls: `Gunakan tombol panah (↑ ↓ ← →) atau geser di ponsel untuk memindahkan semua ubin ke satu arah. Ubin dengan angka yang sama akan bergabung saat bersentuhan. Tujuannya adalah membuat ubin 2048.`,
  },
  'tetris': {
    title: 'Tetris — Teka-Teki Blok Klasik',
    description: `Teka-teki blok jatuh abadi yang mendefinisikan satu generasi. Putar dan tempatkan tetromino saat jatuh dan isi baris horizontal untuk membersihkannya. Semakin tinggi skor, semakin cepat blok jatuh.

Diciptakan oleh insinyur perangkat lunak Soviet Alexey Pajitnov pada tahun 1985, Tetris telah terjual lebih dari 520 juta kopi di semua platform yang bisa dibayangkan. Namanya menggabungkan awalan Yunani "tetra" (empat) dengan tenis.`,
    controls: `Gunakan tombol panah: ← → untuk memindahkan, ↑ untuk memutar, ↓ untuk jatuh perlahan. Tekan spasi untuk jatuh langsung. Isi baris untuk membersihkannya dan kumpulkan poin.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Ketuk untuk Terbang',
    description: `Navigasikan burung piksel kecil melalui deretan pipa hijau tak berujung dengan mengetuk untuk mengepakkan sayap. Satu ketukan membuat burung naik; gravitasi menariknya turun. Bisakah kamu melewati 50?

Flappy Bird dibuat oleh pengembang Vietnam Dong Nguyen dan dirilis pada Mei 2013. Pada awal 2014, gim ini menjadi aplikasi gratis paling banyak diunduh dan menghasilkan sekitar 50.000 dolar per hari dari iklan.`,
    controls: `Klik, ketuk, atau tekan tombol apa saja untuk membuat burung mengepak. Tanpa input, gravitasi akan menariknya turun. Navigasi melalui celah antar pipa. Setiap pipa memberikan satu poin.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Pelari T-Rex',
    description: `Berlari sebagai T-Rex Chrome yang populer melintasi gurun piksel, melompati kaktus dan menunduk dari pterodactyl dalam pelari tanpa akhir ini. Kecepatan terus meningkat.

Tersembunyi di halaman "Tidak Ada Internet" Google Chrome sejak 2014, gim dino ini dirancang oleh Sebastien Gabriel. Sekitar 270 juta gim dimainkan setiap bulan.`,
    controls: `Tekan spasi atau ↑ untuk melompati kaktus. Tekan ↓ untuk menunduk dari pterodactyl. Di ponsel, ketuk untuk melompat dan geser ke bawah untuk menunduk. T-Rex berlari otomatis.`,
  },
  'snake': {
    title: 'Snake — Klasik Retro',
    description: `Arahkan ular yang terus tumbuh melintasi papan permainan, makan makanan untuk tumbuh dan hindari ekor sendiri serta dinding. Semakin lama bertahan, semakin panjang dan sulit dikendalikan.

Asal-usul Snake dapat ditelusuri ke gim arkade Blockade tahun 1976. Gim ini menjadi fenomena budaya ketika Nokia memasangnya di ponsel mereka pada tahun 1998.`,
    controls: `Gunakan tombol panah (↑ ↓ ← →) atau WASD untuk mengubah arah. Ular bergerak terus-menerus. Makan makanan untuk tumbuh dan mengumpulkan poin. Hindari dinding dan ekor sendiri.`,
  },
  'pac-man': {
    title: 'Pac-Man — Klasik Arkade',
    description: `Makan seluruh labirin yang penuh titik sambil menghindari empat hantu berwarna — Blinky, Pinky, Inky, dan Clyde. Ambil pelet kekuatan untuk membalikkan keadaan.

Dirilis oleh Namco pada Mei 1980, Pac-Man menjadi gim arkade paling menguntungkan sepanjang masa dengan pendapatan koin lebih dari 2,5 miliar dolar.`,
    controls: `Gunakan tombol panah untuk menavigasi Pac-Man melalui labirin. Makan semua titik untuk menyelesaikan level. Ambil pelet kekuatan di sudut untuk sementara membuat hantu menjadi biru.`,
  },
  'minesweeper': {
    title: 'Minesweeper — Teka-Teki Ranjau',
    description: `Ungkap kotak pada papan tanpa memicu ranjau tersembunyi. Setiap angka yang terungkap menunjukkan berapa banyak ranjau yang mengintai di delapan sel sekitarnya — gunakan logika untuk mengidentifikasi kotak yang aman.

Minesweeper dibuat oleh Robert Donner dan Curt Johnson untuk Microsoft Windows 3.1 pada tahun 1990 untuk mengajarkan pengguna cara klik kanan dan klik kiri.`,
    controls: `Klik kiri untuk mengungkap kotak. Angka menunjukkan jumlah ranjau yang bersebelahan. Klik kanan untuk menandai ranjau yang dicurigai. Gunakan logika untuk mengidentifikasi kotak yang aman.`,
  },
  'solitaire': {
    title: 'Solitaire — Permainan Kartu Klondike',
    description: `Permainan kartu solitaire terhebat. Susun setumpuk kartu acak ke empat tumpukan dasar berdasarkan jenis, dari As hingga Raja, dengan memindahkan kartu antar tujuh kolom tablo.

Klondike Solitaire menjadi terkenal di seluruh dunia setelah Microsoft menyertakannya di Windows 3.0 pada tahun 1990. Dirancang oleh karyawan magang Wes Cherry.`,
    controls: `Klik kartu untuk memilihnya, lalu klik tujuan yang valid. Bangun kolom dalam urutan menurun dengan warna bergantian. Pindahkan As ke tumpukan dasar dan bangun berdasarkan jenis.`,
  },
  'chess': {
    title: 'Catur — Bermain Melawan Komputer',
    description: `Tantang lawan yang dikendalikan komputer dalam permainan strategi paling terkenal di dunia. Pimpin pasukan 16 bidak di papan 64 kotak.

Catur berasal dari India pada abad ke-6 sebagai "chaturanga" dan menyebar melalui Jalur Sutra ke Persia dan Eropa. Saat ini lebih dari 600 juta orang bermain secara teratur.`,
    controls: `Klik bidak untuk memilihnya, lalu klik kotak tujuan. Langkah yang valid akan ditandai. Aturan standar termasuk rokade, en passant, dan promosi pion.`,
  },
  'checkers': {
    title: 'Checkers — Permainan Papan Dam',
    description: `Lompati dan tangkap bidak lawan di papan 8×8. Bergerak secara diagonal, rangkai beberapa lompatan, dan mahkotai bidak menjadi raja yang bisa bergerak mundur.

Checkers adalah salah satu permainan papan tertua, dengan versi yang ditemukan di kota kuno Ur yang berasal dari 3000 SM.`,
    controls: `Klik bidak untuk memilihnya, lalu klik kotak diagonal tujuan. Melompati bidak lawan akan menangkapnya. Capai sisi berlawanan untuk memahkotai bidak.`,
  },
  'sudoku': {
    title: 'Sudoku — Teka-Teki Logika Angka',
    description: `Isi papan 9×9 sehingga setiap baris, kolom, dan kotak 3×3 berisi angka 1 hingga 9 tanpa pengulangan. Gunakan logika murni untuk menemukan setiap angka yang hilang.

Sudoku modern diciptakan oleh arsitek Amerika Howard Garns pada tahun 1979 dengan nama "Number Place". Gim ini menjadi tren global setelah menjadi populer di Jepang.`,
    controls: `Klik sel kosong dan ketik angka dari 1 hingga 9. Setiap baris, kolom, dan kotak 3×3 harus berisi semua angka dari 1 hingga 9 tepat satu kali.`,
  },
  'wordle': {
    title: 'Wordle Unlimited — Permainan Tebak Kata',
    description: `Tebak kata rahasia lima huruf dalam enam percobaan atau kurang. Kotak berwarna menunjukkan huruf mana yang benar (hijau), salah tempat (kuning), atau tidak ada (abu-abu).

Wordle dibuat oleh Josh Wardle sebagai hadiah untuk pasangannya pada tahun 2021. Gim ini tumbuh dari 90 pemain menjadi lebih dari 2 juta pemain harian pada Januari 2022.`,
    controls: `Ketik kata lima huruf dan tekan Enter. Hijau = posisi tepat. Kuning = huruf ada dalam kata tapi di posisi lain. Abu-abu = huruf tidak ada dalam kata. Kamu punya enam percobaan.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Gim Idle Kue',
    description: `Klik kue raksasa untuk memanggang kue, lalu habiskan untuk peningkatan — nenek, pertanian, pabrik, dan portal — yang otomatis memanggang lebih banyak lagi.

Dibuat oleh programmer Prancis Julien "Orteil" Thiennot pada tahun 2013, Cookie Clicker membuka jalan untuk genre idle. Dirilis di Steam 2021 dengan 97% ulasan positif.`,
    controls: `Klik kue besar untuk memproduksi kue. Belanjakan kue untuk bangunan di toko untuk mengotomatiskan produksi. Beli peningkatan untuk melipatgandakan produksi.`,
  },
  'connect-four': {
    title: 'Connect Four — Empat Berjajar',
    description: `Jatuhkan keping berwarna ke papan vertikal dan coba hubungkan empat berturut-turut — horizontal, vertikal, atau diagonal — sebelum lawan.

Connect Four pertama kali dijual oleh Milton Bradley pada tahun 1974. Pada tahun 1988 Victor Allis membuktikan bahwa pemain pertama selalu bisa menang jika memulai dari kolom tengah.`,
    controls: `Klik kolom untuk menjatuhkan kepingmu. Keping jatuh ke bawah karena gravitasi. Hubungkan empat keping berwarnamu berturut-turut untuk menang.`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — Silang Nol',
    description: `Letakkan X dan O bergantian pada papan 3×3 dan coba dapatkan tiga berturut-turut. Mainkan melawan teman atau tantang AI.

Tic-Tac-Toe adalah salah satu permainan tertua yang diketahui, dengan contoh di reruntuhan Mesir Kuno yang berasal dari 1300 SM.`,
    controls: `Klik kotak kosong untuk meletakkan tanda. Dapatkan tiga tanda dalam baris horizontal, vertikal, atau diagonal untuk menang.`,
  },
  'reversi': {
    title: 'Reversi — Permainan Strategi Membalik Bidak',
    description: `Letakkan bidak di papan 8×8 dan balik bidak lawan dengan mengapitnya. Setiap langkah bisa mengubah keseimbangan kekuatan.

Reversi ditemukan pada tahun 1883. Versi modernnya, Othello, dipopulerkan oleh Goro Hasegawa pada tahun 1971 dengan slogan "Satu menit untuk belajar, seumur hidup untuk menguasai".`,
    controls: `Klik kotak kosong untuk meletakkan bidakmu. Bidak lawan yang diapit berubah menjadi warnamu.`,
  },
  'hextris': {
    title: 'Hextris — Teka-Teki Blok Heksagonal',
    description: `Sebuah variasi menarik dari teka-teki blok jatuh klasik, ditempatkan dalam heksagon berputar. Blok berwarna jatuh ke tengah dari enam sisi.

Hextris dibuat pada tahun 2014 oleh mahasiswa University of Maryland dalam sebuah hackathon.`,
    controls: `Gunakan ← dan → (atau A dan D) untuk memutar heksagon tengah. Hubungkan tiga atau lebih blok warna yang sama berturut-turut untuk menghilangkannya.`,
  },
  'word-search': {
    title: 'Word Search — Teka-Teki Cari Kata',
    description: `Cari kata-kata tersembunyi dalam papan huruf acak secara horizontal, vertikal, dan diagonal. Kata bisa dibaca dari kedua arah.

Teka-teki cari kata diciptakan oleh Norman E. Gibat pada tahun 1968.`,
    controls: `Klik dan seret pada huruf-huruf untuk menandai kata. Kata bisa tersembunyi di arah mana pun.`,
  },
  'falling-blocks': {
    title: 'Falling Blocks — Penumpuk Kubus',
    description: `Kubus berwarna berjatuhan dan kamu harus menumpuk serta menggabungkannya sebelum menumpuk ke atas. Tempatkan blok secara strategis untuk kombo warna.

Permainan blok jatuh berasal dari Tetris (1985) dan telah berkembang menjadi lusinan varian.`,
    controls: `Gunakan ← dan → untuk memindahkan blok. Tekan ↑ atau spasi untuk memutar. Tekan ↓ untuk jatuh cepat. Gabungkan warna dan isi baris untuk menghilangkan blok.`,
  },
  'card-solitaire': {
    title: 'Card Solitaire — Permainan Kartu Solitaire',
    description: `Versi bersih dari permainan kartu solitaire paling populer di dunia. Bangun urutan menurun dengan warna bergantian dan pindahkan semua 52 kartu ke empat tumpukan dasar.

Permainan solitaire telah populer sejak abad ke-18. Napoleon Bonaparte adalah pemain yang rajin selama pengasingannya.`,
    controls: `Klik kartu untuk memilihnya, lalu klik tujuan yang valid. Bangun kolom dengan bergantian merah dan hitam. As masuk ke tumpukan dasar.`,
  },
  'slope': {
    title: 'Slope — Permainan Bola 3D',
    description: `Kendalikan bola yang menggelinding menuruni lereng bercahaya neon dengan kecepatan yang terus meningkat. Hindari rintangan, navigasi tikungan tajam, dan jangan jatuh dari tepi.

Slope dikembangkan oleh Rob Kay dan telah menjadi salah satu gim peramban paling populer di dunia. Menggunakan WebGL untuk rendering 3D yang halus.`,
    controls: `Gunakan ← dan → atau A dan D untuk mengendalikan bola. Hindari rintangan merah dan lubang. Bola terus berakselerasi.`,
  },
  'among-us': {
    title: 'Among Us — Deduksi Sosial',
    description: `Bekerja sama dengan kru untuk menyelesaikan tugas di pesawat luar angkasa — tapi hati-hati, ada penipu di antara kalian. Diskusikan, tuduh, dan voting untuk mengeluarkan tersangka.

Among Us dikembangkan oleh InnerSloth dan meledak popularitasnya pada tahun 2020. Pada puncaknya, gim ini memiliki 500 juta pemain aktif bulanan.`,
    controls: `Gunakan WASD atau tombol panah untuk bergerak. Klik tugas untuk menyelesaikannya. Laporkan mayat atau panggil rapat darurat.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Gim Platform Ritme',
    description: `Lompat dan terbang melalui dunia berdenyut penuh rintangan, disinkronkan dengan musik elektronik. Ketuk untuk melompati duri dan menavigasi portal gravitasi.

Geometry Dash dibuat oleh pengembang Swedia Robert Topala pada tahun 2013. Telah diunduh lebih dari 200 juta kali dengan lebih dari 80 juta level buatan pengguna.`,
    controls: `Klik, ketuk, atau tekan spasi untuk melompat. Tahan untuk terus melompat dalam mode pesawat. Rintangan disinkronkan dengan musik.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Gim Menghindari Terowongan 3D',
    description: `Meluncur melalui terowongan 3D yang berputar dan berubah warna dengan kecepatan sangat tinggi, menghindari penghalang yang muncul hanya dalam sepersekian detik.

Tunnel Rush menjadi sensasi viral sebagai salah satu gim peramban yang paling mudah diakses namun menantang.`,
    controls: `Gunakan ← dan → atau A dan D untuk menghindari rintangan di terowongan. Bereaksi cepat — pada kecepatan tinggi kamu punya kurang dari satu detik.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Bidik dan Cocokkan',
    description: `Bidik dan tembak gelembung berwarna untuk membentuk kelompok tiga atau lebih warna yang sama dan meledakkannya dari papan. Bersihkan semua gelembung untuk memenangkan setiap level.

Bubble Shooter berakar pada Puzzle Bobble dari Taito (1994). Versi web-nya menjadi salah satu gim kasual paling banyak dimainkan di internet.`,
    controls: `Bidik dengan mouse dan klik untuk menembak gelembung. Cocokkan tiga atau lebih warna yang sama untuk meledakkannya.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Tantangan Kartu',
    description: `Susun kartu dalam urutan menurun dengan jenis yang sama di sepuluh kolom. Selesaikan urutan Raja-As untuk menghapusnya.

Spider Solitaire telah disertakan di Microsoft Windows sejak 1998 dan telah menjadi salah satu gim paling banyak dimainkan dalam sejarah.`,
    controls: `Klik kartu untuk memilihnya, lalu klik tujuan yang valid. Hanya urutan dengan jenis yang sama yang bisa dipindahkan sebagai kelompok. Selesaikan Raja-As untuk menghapus.`,
  },
  'mahjong': {
    title: 'Mahjong — Permainan Mencocokkan Ubin Klasik',
    description: `Hapus pasangan ubin identik dari tata letak berlapis yang rumit. Hanya ubin "bebas" yang bisa dipilih. Bersihkan semua ubin untuk menang.

Mahjong solitaire dibuat pada tahun 1981 oleh Brodie Lockard di sistem PLATO.`,
    controls: `Klik ubin bebas untuk memilihnya, lalu klik ubin bebas identik lainnya untuk menghapus pasangan. Gunakan tombol petunjuk jika terjebak.`,
  },
  'freecell': {
    title: 'FreeCell — Solitaire Strategis',
    description: `Semua 52 kartu dibagikan terbuka di delapan kolom — tidak ada informasi tersembunyi, setiap permainan adalah ujian strategi murni. Gunakan empat sel bebas sebagai penyimpanan sementara.

FreeCell menjadi populer melalui penyertaannya di Windows sejak Windows 95. Hanya pembagian #11982 yang tidak bisa diselesaikan.`,
    controls: `Klik kartu, lalu klik kolom tujuan atau sel bebas. Bangun kolom dalam urutan menurun dengan warna bergantian. Gunakan empat sel bebas dengan bijak.`,
  },
  'backgammon': {
    title: 'Backgammon — Permainan Papan Klasik',
    description: `Lempar dadu dan perlombakan lima belas bidakmu melintasi papan. Blokir, pukul, dan kalahkan AI dalam permainan strategi abadi ini.

Backgammon adalah salah satu permainan papan tertua dengan asal-usul lebih dari 5.000 tahun yang lalu di Mesopotamia.`,
    controls: `Klik tombol dadu untuk melempar. Klik bidak, lalu klik titik tujuan. Kamu harus menggunakan kedua dadu jika memungkinkan.`,
  },
  'hangman': {
    title: 'Hangman — Permainan Tebak Kata',
    description: `Tebak kata tersembunyi huruf demi huruf sebelum gambar gantungan selesai. Setiap tebakan salah menambahkan bagian tubuh.

Hangman telah dimainkan setidaknya sejak era Victoria dan merupakan salah satu permainan kata paling terkenal di dunia.`,
    controls: `Klik huruf untuk menebak. Huruf yang benar muncul di posisinya. Kamu memiliki 6-8 kesempatan salah.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Iris dan Potong',
    description: `Iris buah yang terbang melintasi layar dengan jari atau mouse. Iris beberapa sekaligus untuk kombo, tapi hati-hati dengan bom.

Fruit Ninja dikembangkan oleh Halfbrick Studios dan dirilis pada tahun 2010. Telah diunduh lebih dari 1 miliar kali.`,
    controls: `Geser melintasi layar atau klik dan seret untuk mengiris buah. Iris beberapa sekaligus untuk kombo. Hindari bom.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Balap Motor Akrobatik',
    description: `Kendarai motor melintasi 25 lintasan penuh tong ledakan, looping besar, dan gergaji mematikan. Lakukan trik untuk bonus waktu.

Moto X3M dikembangkan pada 2016 oleh Madpuffers. Seri ini telah mencatat lebih dari 500 juta permainan.`,
    controls: `Tekan ATAS atau W untuk gas, BAWAH atau S untuk rem. KIRI/KANAN untuk condong di udara. Lakukan trik untuk bonus.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Drift Satu Tombol',
    description: `Kuasai seni drift hanya dengan satu tombol. Tekan untuk belok kanan, lepas untuk drift kiri. Tetap di jalan.

Drift Boss dibuat oleh Madpuffers, dikenal dengan gim satu tombol mereka yang mudah diakses.`,
    controls: `Klik atau tekan untuk belok kanan. Lepas untuk drift kiri. Atur waktu tekanmu untuk tetap di jalan.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basket 2 Pemain',
    description: `Pilih dari tim legendaris dan bertanding dalam pertandingan cepat dengan super pass, blok, dan slam dunk. Mainkan melawan CPU atau tantang teman.

Basketball Legends menampilkan pemain karikatur dengan gerakan khusus, terinspirasi dari bintang NBA.`,
    controls: `Pemain 1: WASD untuk bergerak, B untuk melempar, N untuk super lempar, M untuk memblok. Pemain 2: Tombol panah untuk bergerak, K untuk melempar, L untuk super lempar.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Seimbangkan Telur',
    description: `Kendarai mobil mendaki bukit dengan telur rapuh di atasnya. Navigasi medan tidak rata tanpa menjatuhkan telur.

Eggy Car mengubah mengemudi mobil menjadi teka-teki fisika presisi. Telur mengikuti gravitasi dan inersia yang realistis.`,
    controls: `Tahan untuk gas. Lepas untuk menggelinding bebas. Navigasi bukit dengan hati-hati. Berkendara sejauh mungkin.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Hancurkan Platform',
    description: `Hancurkan platform berputar dengan mengetuk untuk membiarkan bola jatuh. Bersihkan platform berwarna tapi hindari yang hitam. Bangun kecepatan untuk mode api.

Stack Ball menggabungkan penurunan helix dengan fisika penghancuran yang memuaskan.`,
    controls: `Tekan dan tahan untuk membiarkan bola jatuh. Lepas untuk berhenti. Hindari platform hitam. Hancurkan beberapa berturut-turut untuk mode api.`,
  },
  'vex-7': {
    title: 'Vex 7 — Gim Platform Stickman',
    description: `Navigasikan stickmanmu melalui lintasan rintangan brutal dengan pisau berputar, duri, dan platform bergerak. Lebih dari 10 babak menantang.

Vex 7 adalah bagian terbaru dalam salah satu seri platform paling populer. Lebih dari 1 miliar permainan secara total.`,
    controls: `Gunakan WASD atau tombol panah untuk bergerak dan melompat. Tekan S untuk meluncur. Lompat ke dinding. Hindari duri, pisau, dan bahaya.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Lempar dan Tangkap',
    description: `Lempar talimu dan tangkap ikan dengan menggerakkan kail saat tenggelam. Habiskan uang untuk peningkatan panjang, kecepatan, dan penghasilan offline.

Tiny Fishing menggabungkan mekanik idle dengan memancing aktif. Ikan legendaris bersembunyi di bawah 100 meter.`,
    controls: `Klik dan tahan untuk melempar. Gerakkan mouse untuk menangkap ikan. Tangkap maksimal per lemparan. Habiskan penghasilan untuk peningkatan.`,
  },
  'gunspin': {
    title: 'GunSpin — Pelempar Senjata',
    description: `Lempar senjatamu dan pertahankan putarannya dengan menembak di saat yang tepat. Setiap tembakan mendorong senjata lebih jauh. Atur waktu klikmu untuk jarak maksimal.

GunSpin menggabungkan fisika proyektil dengan sistem peningkatan idle.`,
    controls: `Klik atau ketuk untuk menembak. Setiap tembakan menciptakan recoil yang mendorong senjata. Atur waktu tembakanmu untuk mempertahankan ketinggian. Kumpulkan koin untuk peningkatan.`,
  },
  'vex-6': {
    title: 'Vex 6 — Gim Platform Stickman',
    description: `Berlari, melompat, meluncur, dan memanjat dinding melalui lintasan rintangan berbahaya. Vex 6 melanjutkan seri dengan babak baru.

Vex 6 memperkenalkan berenang dengan pengukur udara, gergaji di rel, dan platform yang rapuh.`,
    controls: `Gunakan WASD atau tombol panah untuk bergerak dan melompat. Tekan S untuk meluncur. Lompat ke dinding. Hindari duri, gergaji, dan lubang.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Gim Peluncuran',
    description: `Pukul, pantul, dan lontarkan dirimu melalui gelombang beruang gummy. Luncurkan Burrito Bison dari ring gulat.

Burrito Bison: Launcha Libre menawarkan tiga karakter pegulat yang bisa dimainkan dengan kemampuan khusus unik. Awalnya gim Flash oleh Juicy Beast Studios.`,
    controls: `Klik untuk meluncur dari ring. Klik untuk memantul pada beruang gummy. Gunakan kemampuan khusus. Kumpulkan uang untuk peningkatan.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Pertarungan Fisika',
    description: `Berikan pukulan kuat pada lawan ragdoll-mu dan lihat kekacauan berbasis fisika. Bidik, isi daya, dan pukul untuk mengirim stickman terbang.

Ragdoll Hit menggunakan mesin fisika realistis yang menghitung kekuatan tumbukan dan tabrakan secara independen.`,
    controls: `Klik dan seret untuk membidik pukulanmu. Lepas untuk memukul. Pukul lawan ke rintangan untuk kerusakan ekstra.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Sepak Bola 2 Pemain',
    description: `Gim sepak bola gila di mana aturan, lapangan, dan pemain berubah setiap ronde. Cetak gol dengan pemain ragdoll yang bergoyang.

Soccer Random mengacak segalanya per ronde — ukuran bola, jumlah pemain, permukaan, dan bahkan gravitasi.`,
    controls: `Pemain 1: Tekan W untuk menendang. Pemain 2: Tekan PANAH ATAS. Cetak 5 gol untuk menang. Lapangan berubah setiap ronde.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Gim Platform Klasik',
    description: `Gim platform gulir samping yang legendaris. Pimpin Mario melalui Kerajaan Jamur, injak Goomba, hancurkan blok, dan selamatkan Putri Peach.

Super Mario Bros dirilis tahun 1985 oleh Nintendo dan dianggap sebagai gim video paling berpengaruh sepanjang masa. Dirancang oleh Shigeru Miyamoto, terjual lebih dari 40 juta kopi.`,
    controls: `Gunakan tombol panah untuk menggerakkan Mario. Tekan Z atau ATAS untuk melompat. Tekan X untuk berlari/menembak. Injak musuh dengan mendarat di atasnya. Kumpulkan koin dan power-up.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Baseball Multipemain',
    description: `Masuk ke kotak pemukul dalam gim baseball cepat ini dengan pemain kartun dan aksi arkade. Lempar, pukul, dan pertahankan jalanmu menuju kemenangan.

Baseball Bros menggabungkan mekanik sederhana dengan permainan kompetitif. Pertandingan cepat 3-inning.`,
    controls: `Klik untuk melempar atau memukul. Gunakan mouse untuk membidik. Atur waktu klikmu untuk memukul bola. Gunakan tombol panah untuk pemain bertahan.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Manajer Tim',
    description: `Kelola tim baseballmu sendiri dan bertanding di liga dan turnamen. Rekrut pemain, tingkatkan keterampilan, dan pimpin skuadmu.

Baseball 9 menggabungkan manajemen tim dengan aksi lapangan. Rekrut pemain dengan statistik unik.`,
    controls: `Klik untuk memukul. Bidik dan klik untuk melempar. Kelola timmu antar pertandingan.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Pembuat Musik',
    description: `Buat campuran musik dengan menarik dan melepaskan karakter animasi ke panggung. Setiap karakter Sprunki menambahkan loop suara yang berbeda.

Sprunki Phase 9 adalah bagian kesembilan dalam seri pembuat musik Sprunki, terinspirasi oleh Incredibox.`,
    controls: `Seret karakter ke panggung untuk menambahkan suaranya. Klik untuk menghapus. Bereksperimen dengan kombinasi untuk menemukan animasi bonus.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Gim Idle Musik',
    description: `Klik untuk mendapatkan beat dan membuka karakter Sprunki baru. Setiap peningkatan menambahkan suara baru ke komposisimu.

Sprunki Clicker menggabungkan mekanik idle-clicker dengan alam semesta musikal Sprunki.`,
    controls: `Klik untuk mendapatkan beat. Habiskan beat untuk peningkatan. Buka karakter baru dan paket suara.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Mixer Musik Malam',
    description: `Buat melodi menyeramkan dalam mixer Sprunki bertema malam ini. Seret karakter menyeramkan untuk membuat lapisan ritme dan suara menghantui.

Sprunki Night Time menyajikan formula Sprunki dengan estetika gelap dan malam hari.`,
    controls: `Seret karakter ke panggung untuk menambahkan suaranya. Temukan kombinasi khusus untuk animasi bonus.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Mixer Musik Dewasa',
    description: `Versi lebih berkembang dari pembuat musik Sprunki dengan suara yang lebih canggih dan desain yang matang. Bangun trek yang kompleks.

Sprunki Grown Up menampilkan versi dewasa dari karakter klasik dengan elemen suara yang lebih kompleks.`,
    controls: `Seret karakter yang lebih berkembang ke panggung. Bereksperimen dengan lapisan untuk komposisi yang lebih kaya.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Kotak Pasir Musik',
    description: `Pengalaman kotak pasir Sprunki terhebat dengan semua karakter dan suara terbuka dari awal. Campur dan bereksperimen dengan bebas.

Sprunki Playground menghilangkan semua hambatan progres dan memberikan akses langsung ke setiap karakter dan suara.`,
    controls: `Seret karakter apa saja ke panggung. Buat lapisan suara dengan bebas. Gunakan tombol rekam untuk menyimpan campuranmu.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Galeri Tembak',
    description: `Bidik ayam gila yang terbang melintasi lanskap 3D dalam galeri tembak arkade ini. Klik untuk menembak jatuh ayam-ayam itu.

Crazy Chicken (Moorhuhn) muncul pada tahun 1999 sebagai gim iklan dan menjadi sensasi viral dengan lebih dari 10 juta unduhan.`,
    controls: `Gerakkan mouse untuk membidik. Klik untuk menembak. Cari target bonus tersembunyi. Ayam emas memberikan poin ekstra.`,
  },
};
