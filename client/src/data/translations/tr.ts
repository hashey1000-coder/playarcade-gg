import type { GameTranslation } from '../gameTranslations';

export const TR_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Sayı Birleştirme Bulmacası',
    description: `Aynı sayıdaki karoları kaydırarak birleştirin ve 2048 karosuna ulaşmaya çalışın. Her hamle stratejik düşünme gerektirir; yanlış bir kayma tahtayı doldurabilir ve oyunu bitirebilir.

2048, 2014 yılında İtalyan geliştirici Gabriele Cirulli tarafından tek bir hafta sonunda yaratılmıştır. Açık kaynaklı olarak yayımlanan oyun birkaç gün içinde milyonlarca oyuncuya ulaşmış ve sayısız klona ilham vermiştir.`,
    controls: `⬆️⬇️⬅️➡️ Ok tuşları veya kaydırma ile karoları hareket ettirin. Aynı değerdeki karolar birleşir. 2048 karosuna ulaşmayı hedefleyin!`,
  },
  'tetris': {
    title: 'Tetris — Blok Dizme Oyunu',
    description: `Düşen tetromino parçalarını döndürüp yerleştirerek yatay satırları tamamlayın. Tamamlanan satırlar silinir ve puan kazanırsınız; parçalar ekranın tepesine ulaştığında oyun sona erer.

Tetris, 1985 yılında Sovyet yazılım mühendisi Aleksey Pajitnov tarafından geliştirilmiştir. Soğuk Savaş döneminde Batı'ya ulaşan oyun, Game Boy ile birlikte küresel bir fenomene dönüşmüştür.`,
    controls: `⬅️➡️ Parçayı yanlara kaydır · ⬆️ Döndür · ⬇️ Hızlı düşür · Boşluk tuşu ile anında yerleştir.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Uçan Kuş Macerası',
    description: `Ekrana dokunarak veya tıklayarak kuşu havada tutun ve boruların arasından geçirin. Zamanlama her şeydir; bir anlık dikkatsizlik kuşun düşmesine neden olur.

Flappy Bird, 2013 yılında Vietnamlı geliştirici Dong Nguyen tarafından yaratılmıştır. Oyun günlük 50.000 dolar kazanmasına rağmen Nguyen baskılar nedeniyle uygulamayı mağazalardan kaldırmıştır.`,
    controls: `🖱️ Tıklayın, dokunun veya boşluk tuşuna basın — kuş kanat çırpsın. Boruların arasından geçin!`,
  },
  'chrome-dino': {
    title: 'Chrome Dino — Çöl Koşucusu',
    description: `İnternet bağlantınız kesildiğinde karşınıza çıkan bu efsanevi dinozoru kaktüslerin ve kuşların üzerinden zıplatın. Hız giderek artar ve refleksleriniz sınanır.

Chrome Dino, 2014 yılında Google Chrome ekibi tarafından çevrimdışı eğlence olarak tasarlanmıştır. Ayda yaklaşık 270 milyon kez oynandığı tahmin edilen oyun, dünyanın en çok oynanan gizli oyunlarından biridir.`,
    controls: `⬆️ veya Boşluk ile zıpla · ⬇️ ile eğil · Engellere çarpmadan koşmaya devam et!`,
  },
  'snake': {
    title: 'Snake — Yılan Oyunu',
    description: `Yılanı yiyeceklere doğru yönlendirin; her lokma yılanı uzatır. Kendi kuyruğunuza veya duvarlara çarpmadan mümkün olduğunca uzun bir yılan oluşturun.

Snake, 1997 yılında Nokia 6110 telefonlarıyla popülerleşmiştir. İlk versiyonu 1976'daki Blockade oyununa dayanır ve mobil oyunların öncülerinden biri kabul edilir.`,
    controls: `⬆️⬇️⬅️➡️ Ok tuşları ile yılanı yönlendirin. Yemleri yiyin ve büyüyün, kendinize çarpmayın!`,
  },
  'pac-man': {
    title: 'Pac-Man — Labirent Macerası',
    description: `Labirentte dolaşarak tüm noktaları toplayın ve hayaletlerden kaçının. Güç haplarını yiyerek kısa süreliğine hayaletleri avlayabilirsiniz.

Pac-Man, 1980 yılında Namco tarafından Toru Iwatani tasarımıyla piyasaya sürülmüştür. Bir pizza diliminden esinlenen karakter, video oyun tarihinin en tanınmış ikonlarından biri haline gelmiştir.`,
    controls: `⬆️⬇️⬅️➡️ Ok tuşları ile Pac-Man'i yönlendirin. Noktaları toplayın, hayaletlerden kaçın!`,
  },
  'minesweeper': {
    title: 'Minesweeper — Mayın Tarlası',
    description: `Mayın içermeyen kareleri açarak tahtayı temizleyin. Sayılar komşu karelerdeki mayın sayısını gösterir; mantık ve dikkatle tüm güvenli kareleri bulun.

Mayın Tarlası ilk kez 1990 yılında Windows 3.1 ile birlikte dağıtılmıştır. Fare kullanımını öğretmek amacıyla tasarlanmış olsa da zamanla bağımsız bir bulmaca klasiği haline gelmiştir.`,
    controls: `🖱️ Sol tık ile kareyi aç · Sağ tık ile bayrak koy · Sayılara göre mayınları tespit et!`,
  },
  'solitaire': {
    title: 'Solitaire — Klasik İskambil Sabrı',
    description: `Kartları renk sırasına göre As'tan Kral'a kadar dört temel yığına yerleştirin. Sütunlardaki kartları dönüşümlü renklerle azalan sıraya dizin.

Solitaire (Klondike), 1990 yılında Microsoft Windows ile birlikte sunulmuştur. Fare kullanımını öğretmek amacıyla eklenmiş olsa da milyonların vazgeçilmez ofis arkadaşı haline gelmiştir.`,
    controls: `🖱️ Kartları sürükleyip bırakın. Dönüşümlü renk ve azalan sıra ile sütunları düzenleyin, As'ları temele taşıyın.`,
  },
  'chess': {
    title: 'Chess — Satranç',
    description: `İki oyuncunun 16'şar taşla oynandığı strateji oyunlarının kralı. Rakip şahı mat ederek oyunu kazanın; her taş farklı kurallara göre hareket eder.

Satrancın kökenleri 6. yüzyılda Hindistan'daki Chaturanga oyununa dayanır. Yüzyıllar içinde Pers ve Arap dünyası üzerinden Avrupa'ya yayılmış, bugün 600 milyondan fazla kişi tarafından oynanmaktadır.`,
    controls: `🖱️ Taşı seçin, ardından gitmek istediğiniz kareye tıklayın. Her taşın kendine özgü hareket kuralları vardır.`,
  },
  'checkers': {
    title: 'Checkers — Dama',
    description: `Çapraz hareket ederek rakip taşları atlayıp yakalayın. Son sıraya ulaşan taş "dama" olur ve ileri-geri hareket edebilir.

Dama, bilinen en eski masa oyunlarından biridir; kökeni M.Ö. 3000 yılına kadar uzanır. Antik Mısır'da Ur şehrinde bulunan oyun tahtaları bunun kanıtıdır.`,
    controls: `🖱️ Taşınızı seçin ve çapraz olarak hedef kareye sürükleyin. Rakip taşların üzerinden atlayarak onları yakalayın.`,
  },
  'sudoku': {
    title: 'Sudoku — Sayı Bulmacası',
    description: `9×9 ızgarayı 1-9 arası rakamlarla doldurun; her satır, sütun ve 3×3 kutu her rakamı yalnızca bir kez içermelidir. Mantık ve çıkarım gücünüz sınanır.

Sudoku modern haliyle 1986 yılında Japonya'da popülerleşmiş olsa da, aslında 18. yüzyılda İsviçreli matematikçi Euler'in Latin kareleri üzerine çalışmalarına dayanmaktadır.`,
    controls: `🖱️ Boş hücreye tıklayın ve 1-9 arası bir rakam girin. Her satır, sütun ve 3×3 kutuda tekrar olmamalıdır.`,
  },
  'wordle': {
    title: 'Wordle — Kelime Tahmin Oyunu',
    description: `Altı denemede beş harfli gizli kelimeyi tahmin edin. Her tahminden sonra harfler yeşil, sarı veya gri olarak renklenir ve doğru cevaba yaklaşmanıza yardımcı olur.

Wordle, 2021 yılında Josh Wardle tarafından eşi için kişisel bir proje olarak geliştirilmiştir. Viral olmasının ardından 2022'de The New York Times tarafından satın alınmıştır.`,
    controls: `⌨️ Klavyeden beş harfli kelime yazın ve Enter'a basın. Renk ipuçlarını kullanarak altı denemede kelimeyi bulun!`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Kurabiye Tıklama Oyunu',
    description: `Dev kurabiyeye tıklayarak kurabiye üretin, ardından otomatik üreticiler ve yükseltmeler satın alın. Üstel büyüme mekanikleriyle milyarlarca kurabiyeye ulaşın.

Cookie Clicker, 2013 yılında Fransız programcı Julien "Orteil" Thiennot tarafından yaratılmış ve "artımlı oyun" (incremental game) türünün doğmasına öncülük etmiştir.`,
    controls: `🖱️ Kurabiyeye tıklayın! Kazandığınız kurabiyelerle yükseltme ve yardımcılar satın alın.`,
  },
  'connect-four': {
    title: 'Connect Four — Dörtlü Bağlantı',
    description: `Sırayla sütunlara jeton bırakarak yatay, dikey veya çapraz dört jeton dizisi oluşturmaya çalışın. Hem saldırı hem savunma stratejisi gerektirir.

Connect Four, 1974 yılında Milton Bradley tarafından piyasaya sürülmüştür. 1988'de oyun matematiksel olarak çözülmüş ve ilk oynayan oyuncunun doğru stratejiyle her zaman kazanabileceği kanıtlanmıştır.`,
    controls: `🖱️ Jetonunuzu bırakmak istediğiniz sütuna tıklayın. Dört jetonu arka arkaya dizmeye çalışın!`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — XOX Oyunu',
    description: `3×3 ızgarada sırayla X veya O yerleştirerek üç sembolü aynı hizaya getirmeye çalışın. Basit ama stratejik bu oyun her yaştan oyuncu için eğlencelidir.

XOX oyununun kökeni Antik Mısır'a kadar uzanır. Oyun teorisi açısından mükemmel oynandığında her zaman berabere biter; bu nedenle bilgisayar biliminde yapay zeka eğitimi için sıkça kullanılır.`,
    controls: `🖱️ Boş kareye tıklayarak X veya O yerleştirin. Üç sembolü yatay, dikey veya çapraz dizin!`,
  },
  'reversi': {
    title: 'Reversi — Taş Çevirme Strateji Oyunu',
    description: `Rakibin taşlarını kendi taşlarınız arasına alarak çevirin. Oyun sonunda tahtada en çok taşı olan oyuncu kazanır.

Reversi'nin modern versiyonu Othello, 1971'de Japon iş insanı Goro Hasegawa tarafından patentlenmiştir. "Öğrenmesi bir dakika, ustalaşması bir ömür" sloganıyla tanınır.`,
    controls: `🖱️ Taşınızı yerleştirmek istediğiniz kareye tıklayın. Rakip taşları aranıza alarak çevirin!`,
  },
  'hextris': {
    title: 'Hextris — Altıgen Blok Bulmacası',
    description: `Merkezi altıgenin etrafına düşen renkli blokları hizalayın. Aynı renkteki blokları yan yana getirerek satırları temizleyin; hız giderek artar.

Hextris, klasik Tetris mekaniğini altıgen geometriyle buluşturan açık kaynaklı bir projedir. MIT öğrencileri tarafından geliştirilmiş ve minimalist tasarımıyla dikkat çekmiştir.`,
    controls: `⬅️➡️ Ok tuşları ile altıgeni döndürün. Aynı renkteki blokları eşleştirerek temizleyin!`,
  },
  'word-search': {
    title: 'Word Search — Kelime Arama Bulmacası',
    description: `Harf ızgarasında gizlenmiş kelimeleri yatay, dikey veya çapraz olarak bulun. Kelime listesindeki tüm sözcükleri en kısa sürede keşfedin.

Kelime arama bulmacaları, 1968 yılında Norman E. Gibat tarafından Selenby Digest dergisinde yayımlanmıştır. Günümüzde gazete ve bulmaca kitaplarının vazgeçilmez bir parçasıdır.`,
    controls: `🖱️ İlk harfe tıklayıp son harfe sürükleyerek kelimeyi seçin. Tüm gizli kelimeleri bulun!`,
  },
  'falling-blocks': {
    title: 'Falling Blocks — Düşen Bloklar',
    description: `Ekrandan düşen renkli blokları stratejik olarak yerleştirin ve satırları tamamlayarak temizleyin. Klasik blok dizme oyununun modern ve renkli yorumu.

Düşen blok bulmacaları, Tetris'in 1984'teki başarısının ardından popülerleşen bir oyun türüdür. Basit mekanikleri ve bağımlılık yapıcı oynanışlarıyla her platformda yer bulmuşlardır.`,
    controls: `⬅️➡️ Blokları kaydır · ⬆️ Döndür · ⬇️ Hızlı düşür. Satırları tamamlayarak puan kazanın!`,
  },
  'card-solitaire': {
    title: 'Card Solitaire — Kart Sabrı',
    description: `Klasik tek kişilik kart oyununda kartları kurallara göre sıralayın ve tüm kartları temel yığınlara taşıyın. Sabır ve strateji gerektirir.

Tek kişilik kart oyunları 18. yüzyıl Avrupa'sında ortaya çıkmıştır. Napolyon'un sürgün yıllarında bu tür oyunları sıklıkla oynadığı rivayet edilir.`,
    controls: `🖱️ Kartları sürükleyip bırakın. Alternating renklerle azalan sıra oluşturun, As'ları temele taşıyın.`,
  },
  'slope': {
    title: 'Slope — Eğimli Koşu',
    description: `Yeşil topu sonsuz bir eğimli platformda yönlendirin. Engellere çarpmadan ve kenarlardan düşmeden mümkün olduğunca uzağa gidin; hız sürekli artar.

Slope, 2014 yılında Rob Kay tarafından tarayıcı tabanlı bir 3D koşu oyunu olarak geliştirilmiştir. Neon estetiği ve bağımlılık yapıcı zorluğuyla okul bilgisayarlarında fenomen haline gelmiştir.`,
    controls: `⬅️➡️ Ok tuşları ile topu yönlendirin. Engellerden kaçın ve platformdan düşmeyin!`,
  },
  'among-us': {
    title: 'Among Us — Aramızdaki Hain',
    description: `Mürettebat olarak görevleri tamamlayın veya hain olarak diğer oyuncuları fark edilmeden etkisiz hale getirin. Sosyal çıkarım ve strateji oyunudur.

Among Us, 2018 yılında InnerSloth tarafından yayımlanmış ancak 2020 pandemi döneminde yayıncılar sayesinde küresel bir fenomene dönüşmüştür. Mafia ve Kurtadam oyunlarından ilham almıştır.`,
    controls: `🖱️ Tıklayarak veya dokunarak hareket edin ve görevleri tamamlayın. Toplantılarda şüphelilere oy verin!`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Geometri Koşusu',
    description: `Ritme dayalı platform oyununda küpünüzü engellerden atlayarak ve uçarak hedefe ulaştırın. Müzikle senkronize zorluklar reflekslerinizi test eder.

Geometry Dash, 2013 yılında İsveçli geliştirici Robert Topala tarafından yaratılmıştır. Kullanıcı yapımı seviyeler sayesinde 100 milyondan fazla indirilmiş ve aktif bir topluluk oluşmuştur.`,
    controls: `🖱️ Tıklayın veya boşluk tuşuna basın — küp zıplar. Engellere çarpmadan müzikle birlikte ilerleyin!`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Tünel Koşusu',
    description: `Hızla dönen neon tünelde engellerden kaçının. Reflekslerinizi ve odaklanma yeteneğinizi sınayan bu oyun giderek hızlanır.

Tunnel Rush, Deer Cat Games tarafından geliştirilmiş bir tarayıcı oyunudur. Run serisinden ve Audiosurf'ten ilham alan oyun, hipnotik görsel efektleriyle dikkat çeker.`,
    controls: `⬅️➡️ Ok tuşları ile sola veya sağa kaçın. Engellere çarpmadan tünelde ilerlemeye devam edin!`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Balon Patlatma',
    description: `Aynı renkteki balonları gruplandırmak için renkli balonlar fırlatın. Üç veya daha fazla aynı renk bir araya geldiğinde patlar; en az hamleyle tüm balonları temizleyin.

Bubble Shooter konsepti, 1994 yılında Taito'nun Puzzle Bobble (Bust-a-Move) oyunuyla başlamıştır. Basit mekaniği sayesinde mobil platformlarda en çok oynanan bulmaca türlerinden biri olmuştur.`,
    controls: `🖱️ Fareyi hedefleyerek tıklayın veya dokunarak balon fırlatın. Üç aynı rengi eşleştirin!`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Örümcek Sabrı',
    description: `Sekiz sütundaki kartları azalan sırayla düzenleyerek tam dizileri kaldırın. Bir, iki veya dört takımla oynayarak zorluk seviyesini ayarlayabilirsiniz.

Spider Solitaire, Windows 98 Plus paketinde tanıtılmış ve Windows XP ile birlikte standart olarak sunulmuştur. En popüler solitaire varyantlarından biri olarak milyonlarca oyuncu tarafından sevilmektedir.`,
    controls: `🖱️ Kartları sütunlar arasında sürükleyin. Aynı takımdan K'dan A'ya tam seri oluşturarak kaldırın.`,
  },
  'mahjong': {
    title: 'Mahjong — Eşleştirme Bulmacası',
    description: `Aynı desendeki açık taşları eşleştirerek tahtayı temizleyin. Yalnızca en az bir kenarı açık olan taşlar seçilebilir; strateji ve hafıza gücü gerektirir.

Mahjong orijinal olarak 19. yüzyıl Çin'inde dört kişilik bir masa oyunu olarak ortaya çıkmıştır. Dijital eşleştirme versiyonu 1981'de Brodie Lockard tarafından geliştirilmiştir.`,
    controls: `🖱️ Aynı desendeki iki açık taşa tıklayarak eşleştirin. Tüm taşları temizleyin!`,
  },
  'freecell': {
    title: 'FreeCell — Serbest Hücre Sabrı',
    description: `Dört serbest hücreyi geçici depo olarak kullanarak tüm kartları temel yığınlara taşıyın. Klondike'tan farklı olarak tüm kartlar baştan görünürdür.

FreeCell, 1978 yılında Paul Alfille tarafından PLATO sistemi için programlanmıştır. Oyundaki 32.000 dağılımdan yalnızca bir tanesi (no. 11982) çözülemez olarak bilinmektedir.`,
    controls: `🖱️ Kartları sütunlar, serbest hücreler ve temel yığınlar arasında taşıyın. Tüm kartları As'tan Kral'a sıralayın!`,
  },
  'backgammon': {
    title: 'Backgammon — Tavla',
    description: `Zar atarak pullarınızı tahta boyunca ilerletin ve rakibinizden önce tüm pulları çıkarmayı hedefleyin. Şans ve strateji dengesi oyuna benzersiz bir derinlik katar.

Tavla, 5.000 yılı aşan tarihiyle dünyanın en eski masa oyunlarından biridir. Mezopotamya'da bulunan antik oyun tahtaları, oyunun M.Ö. 3000'lere dayandığını göstermektedir.`,
    controls: `🖱️ Zarları atın, ardından pullarınızı tıklayarak ilerletin. Tüm pullarınızı tahtadan çıkarmayı hedefleyin!`,
  },
  'hangman': {
    title: 'Hangman — Adam Asmaca',
    description: `Gizli kelimeyi harf harf tahmin edin. Her yanlış tahmin çöp adamın bir parçasını çizer; çöp adam tamamlanmadan kelimeyi bulmanız gerekir.

Adam Asmaca oyununun kökeni Viktorya dönemine uzanır. Basit kurallarıyla dil öğrenimi ve kelime bilgisi geliştirmede yaygın olarak kullanılan eğitici bir oyundur.`,
    controls: `⌨️ Klavyeden harf seçin veya harfe tıklayın. Çöp adam tamamlanmadan kelimeyi tahmin edin!`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Meyve Ninja',
    description: `Havaya fırlayan meyveleri parmağınızla veya fareyle dilimleyin. Bombalara dokunmayın! Kombolar yaparak yüksek puan hedefleyin.

Fruit Ninja, 2010 yılında Halfbrick Studios tarafından geliştirilmiştir. İlk yılında 20 milyon kopya satarak mobil oyun tarihinin en başarılı başlangıçlarından birini yapmıştır.`,
    controls: `🖱️ Fareyi sürükleyerek meyveleri dilimleyin. Bombalara dokunmayın, kombo yaparak yüksek puan kazanın!`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Motosiklet Akrobasi',
    description: `Çılgın parkurlarda motosikletinizi sürerek engelleri aşın, havada takla atın ve en kısa sürede bitiş çizgisine ulaşın. Her seviye yeni zorluklar sunar.

Moto X3M, Madpuffers tarafından geliştirilmiş popüler bir fizik tabanlı yarış oyunudur. Excitebike ve Trials serisinden ilham alan oyun, tarayıcı tabanlı yarış oyunlarının en sevilenlerinden biridir.`,
    controls: `⬆️ Gaz ver · ⬇️ Fren yap · ⬅️➡️ Havada dengele. Engelleri aş ve en kısa sürede bitir!`,
  },
  'drift-boss': {
    title: 'Drift Boss — Drift Ustası',
    description: `Tek tuşla aracınızı yolda tutarak drift yapın. Doğru zamanlama ile virajlarda savrulmadan ilerleyin ve mesafe rekorunuzu kırın.

Drift Boss, minimalist kontrol mekanizmasıyla "kolay öğren, zor ustalaş" felsefesini benimseyen bir tarayıcı oyunudur. Tek tuşla oynanan oyunlar arasında en popülerlerden biri haline gelmiştir.`,
    controls: `🖱️ Tıklayın veya boşluk tuşuna basın — araç sağa döner. Bırakınca sola gider. Yolda kalın!`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Basketbol Efsaneleri',
    description: `Efsanevi basketbol oyuncularıyla bire bir veya ikiye iki maçlar yapın. Smaçlar, üçlükler ve özel hareketlerle sahada fırtına estirin.

Basketball Legends, MadPuffers tarafından geliştirilmiş bir tarayıcı tabanlı spor oyunudur. Karikatürize grafikleri ve hızlı oynanışıyla basketbol severlerin favorisi olmuştur.`,
    controls: `WASD veya ok tuşları ile hareket · Z/K ile şut at · X/L ile özel hareket · Smaç için koşarken şut tuşuna bas!`,
  },
  'eggy-car': {
    title: 'Eggy Car — Yumurtalı Araba',
    description: `Tepelerde ilerlerken arabanızın üzerindeki yumurtayı düşürmeden mümkün olduğunca uzağa gidin. Gaz ve fren dengesini iyi ayarlamanız gerekir.

Eggy Car, fizik tabanlı denge oyunlarının minimalist ve eğlenceli bir yorumudur. Basit konseptiyle bağımlılık yapıcı bir oyun deneyimi sunar ve her yaştan oyuncu tarafından sevilebilir.`,
    controls: `⬆️ Gaz ver · ⬇️ Fren yap. Yumurtayı düşürmeden tepelerden geç!`,
  },
  'stack-ball': {
    title: 'Stack Ball — Top Kırıcı',
    description: `Topu dönen platformların arasından düşürün. Renkli katmanları kırabilirsiniz ama siyah katmanlara çarpmaktan kaçının; smash modunda ise her şeyi parçalayın!

Stack Ball, Azur Interactive tarafından geliştirilmiş hiper-gündelik bir mobil oyundur. Basit dokunmatik mekanizması ve tatmin edici kırma efektleriyle yüz milyonlarca indirilmiştir.`,
    controls: `🖱️ Basılı tutun — top düşer, bırakın — top durur. Siyah katmanlara çarpmayın!`,
  },
  'vex-7': {
    title: 'VEX 7 — Parkur Macerası',
    description: `Zorlu parkurlarda koşun, zıplayın, kayın ve duvarlara tutunarak her bölümü tamamlayın. VEX serisinin yedinci oyunu daha da zorlu seviyeler sunar.

VEX serisi, Amazing Adam tarafından geliştirilmiş ve tarayıcı tabanlı platform oyunlarının en popüler serilerinden biri haline gelmiştir. Her yeni bölüm yeni mekanikler ve seviyeler ekler.`,
    controls: `WASD veya ok tuşları ile hareket · Duvarda kaydırma ve çift zıplama mekaniklerini kullanın!`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Minik Balıkçı',
    description: `Oltanızı suya atın ve balıkları yakalayın. Kazandığınız paralarla oltanızı geliştirin, daha derine inin ve daha değerli balıklar yakalayın.

Tiny Fishing, artımlı oyun mekaniklerini balıkçılık temasıyla birleştiren rahatlatıcı bir oyundur. Basit kontrolleri ve ilerleme sistemiyle saatlerce keyifli vakit geçirmenizi sağlar.`,
    controls: `🖱️ Tıklayarak oltayı atın, ardından balıkları yakalamak için fareyi hareket ettirin!`,
  },
  'gunspin': {
    title: 'GunSpin — Silah Fırlatma',
    description: `Silahınızı fırlatın ve ateş ederek havada mesafe kazanın. Doğru açı ve zamanlama ile mümkün olduğunca uzağa ulaşın, kazandığınız paralarla yeni silahlar açın.

GunSpin, fırlatma oyunları türünde benzersiz bir mekanikle öne çıkar. Silahın geri tepmesini itici güç olarak kullanan yaratıcı konseptiyle oyuncuları eğlendirir.`,
    controls: `🖱️ Tıklayarak ateş edin — geri tepme silahı ileri iter. Doğru zamanlamayla mesafeyi artırın!`,
  },
  'vex-6': {
    title: 'VEX 6 — Parkur Macerası',
    description: `Tehlikeli tuzaklarla dolu parkurlarda çöp adamınızı hedefe ulaştırın. Zamanlama, refleks ve hassas kontrol gerektiren seviyeler sizi bekliyor.

VEX 6, serinin altıncı oyunu olarak yeni mekanikler ve daha zorlu seviyeler sunmaktadır. Platform oyunu severler tarafından büyük beğeni toplayan seri, milyonlarca kez oynanmıştır.`,
    controls: `WASD veya ok tuşları ile hareket edin. Duvar zıplama ve kaydırma hareketlerini ustaca kullanın!`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Sakızlı Diyar Macerası',
    description: `Dev güreşçi Burrito Bison'u fırlatarak sakız ayıcıkları ezin ve mümkün olduğunca uzağa gidin. Yükseltmeler satın alarak daha güçlü ve hızlı olun.

Burrito Bison, Juicy Beast tarafından geliştirilmiş kült bir fırlatma oyunudur. Absürt humoru ve tatmin edici ilerleme sistemiyle bağımsız oyun dünyasının sevilen yapımlarından biri olmuştur.`,
    controls: `🖱️ Tıklayarak fırlatın, ardından yere çarpmadan önce tıklayarak slam yapın. Güçlenmeleri toplayın!`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Bez Bebek Fırlatma',
    description: `Bez bebeği çeşitli nesnelere doğru fırlatarak mümkün olduğunca çok hasar puanı toplayın. Fizik motoru gerçekçi ve eğlenceli sonuçlar üretir.

Ragdoll fiziği, 1990'ların sonunda video oyunlarında popülerleşmiştir. Bu tür fizik simülasyonları karakter hareketlerine gerçekçilik katar ve eğlenceli sonuçlar doğurur.`,
    controls: `🖱️ Fareyi sürükleyerek açı ve güç ayarlayın, bırakarak fırlatın. Maksimum hasar puanı hedefleyin!`,
  },
  'soccer-random': {
    title: 'Soccer Random — Rastgele Futbol',
    description: `Her turda değişen çılgın kurallarla futbol oynayın! Sahalar, toplar ve oyuncu boyutları rastgele değişir; uyum sağlayarak gol atın.

Soccer Random, RHM Interactive tarafından geliştirilmiş eğlenceli bir iki kişilik futbol oyunudur. Öngörülemeyen mekanikleri ile her maçı benzersiz bir deneyime dönüştürür.`,
    controls: `🖱️ Tıklayarak veya boşluk tuşuyla zıplayın ve topa vurun. İki kişilik modda W tuşunu kullanın!`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Süper Mario',
    description: `Tesisatçı Mario olarak Mantar Krallığı'nda ilerleyin, düşmanları ezin, güç mantarları toplayın ve Prenses Peach'i kurtarın.

Super Mario Bros, 1985 yılında Nintendo tarafından yayımlanmış ve video oyun endüstrisini 1983 krizinden kurtarmıştır. Shigeru Miyamoto'nun tasarladığı oyun, 58 milyondan fazla kopya satarak tarihin en etkili oyunlarından biri olmuştur.`,
    controls: `⬅️➡️ Hareket · ⬆️ veya Boşluk ile zıpla · Düşmanların üzerine atlayarak onları ez!`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Beyzbol Kardeşler',
    description: `Güçlü vuruşlarla topu mümkün olduğunca uzağa yollayın ve stadyumu kasıp kavurun. Vuruş zamanlamanızı mükemmelleştirerek ev sayısı rekorları kırın.

Baseball Bros, arcade tarzı beyzbol oyunlarının modern bir yorumudur. Abartılı fizik ve güçlendirmelerle klasik beyzbol oyunlarından farklı bir deneyim sunar.`,
    controls: `🖱️ Doğru zamanda tıklayarak vuruş yapın. Güçlendirmeleri toplayarak süper vuruşlar yapın!`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Beyzbol 9',
    description: `Kendi takımınızı kurun, oyuncuları geliştirin ve liglerde mücadele edin. Vuruş, atış ve saha savunması yaparak maçları kazanın.

Baseball 9, Playus Soft tarafından geliştirilmiş popüler bir mobil beyzbol simülasyonudur. Karikatürize grafikleri ve derin takım yönetim mekanikleriyle beyzbol oyunları arasında öne çıkar.`,
    controls: `🖱️ Vuruş için zamanlama ile tıklayın · Atış için hedef seçin · Saha savunmasını yönetin!`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Müzik Yaratma',
    description: `Karakterlere ses öğeleri sürükleyerek benzersiz müzik kompozisyonları oluşturun. Phase 9, karanlık ve atmosferik temalarıyla serinin en yoğun bölümüdür.

Sprunki, Incredibox müzik oyununun hayran yapımı bir modudur. Topluluk tarafından oluşturulan farklı "phase"ler, özgün ses paletleri ve görsel temalar sunar.`,
    controls: `🖱️ Ses simgelerini karakterlerin üzerine sürükleyin. Farklı kombinasyonlarla benzersiz ritimler yaratın!`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Tıklama Oyunu',
    description: `Sprunki karakterlerine tıklayarak puan kazanın ve yükseltmeler satın alın. Artımlı oyun mekanikleriyle sürekli büyüyen bir müzik imparatorluğu kurun.

Sprunki Clicker, popüler Sprunki müzik evrenini artımlı (idle/clicker) oyun türüyle birleştirmektedir. Cookie Clicker benzeri mekaniklerle tanıdık karakterleri yeni bir bağlamda sunar.`,
    controls: `🖱️ Karakterlere tıklayarak puan kazanın. Otomatik üreticiler ve yükseltmeler satın alın!`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Gece Müziği',
    description: `Gece temalı atmosferde sakinleştirici ve gizemli müzikler oluşturun. Karanlık tonlar ve yumuşak melodilerle benzersiz gece kompozisyonları yaratın.

Sprunki Night Time, Sprunki serisinin gece versiyonudur. Loş ışıklar ve yıldızlı gökyüzü estetiğiyle rahatlatıcı bir müzik yapım deneyimi sunar.`,
    controls: `🖱️ Gece temalı ses öğelerini karakterlere sürükleyin. Sakinleştirici gece melodileri oluşturun!`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Yetişkin Müzik Stüdyosu',
    description: `Sprunki karakterlerinin yetişkin versiyonlarıyla daha karmaşık ve sofistike müzik parçaları oluşturun. Gelişmiş ses efektleri ve derin melodiler keşfedin.

Sprunki Grown Up, serinin olgun temalı bir versiyonudur. Daha karmaşık ritim kalıpları ve zengin ses katmanlarıyla deneyimli müzik severler için tasarlanmıştır.`,
    controls: `🖱️ Yetişkin karakterlere ses öğeleri sürükleyerek karmaşık besteler oluşturun!`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Müzik Oyun Alanı',
    description: `Renkli ve neşeli bir ortamda serbestçe müzik deneyleri yapın. Tüm ses öğeleri ve karakterlerle sınırsız yaratıcılığınızı konuşturun.

Sprunki Playground, serinin en erişilebilir ve eğlenceli versiyonudur. Her yaştan kullanıcının kolayca müzik oluşturabilmesi için tasarlanmış rahat bir ortam sunar.`,
    controls: `🖱️ Karakterlere istediğiniz sesleri sürükleyin, birleştirin ve eğlenin! Sınırsız müzik denemesi yapın!`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Çılgın Tavuk 3D',
    description: `Üç boyutlu ortamda tavukları nişan alarak vurun. Farklı bölgelerde gizlenen tavukları bulun ve en yüksek puanı elde edin.

Crazy Chicken (Moorhuhn), 1999 yılında Almanya'da bir reklam oyunu olarak başlamıştır. Kısa sürede viral bir fenomene dönüşmüş ve birçok devam oyunu çıkarılmıştır.`,
    controls: `🖱️ Fareyi hareket ettirerek nişan alın ve tıklayarak ateş edin. Gizli tavukları bulun ve bonus puan kazanın!`,
  },
};
