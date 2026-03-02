import type { GameTranslation } from '../gameTranslations';

export const VI_GAMES: Record<string, GameTranslation> = {
  '2048': {
    title: '2048 — Trò Chơi Trượt và Ghép Số',
    description: `Trượt các ô số trên lưới 4×4 và ghép các số giống nhau để đạt được ô 2048. Mỗi lần vuốt sẽ hợp nhất các ô giống nhau và tạo ra một ô 2 hoặc 4 mới — hãy lên kế hoạch trước nhiều bước, nếu không bảng sẽ nhanh chóng đầy. Dễ học, cực khó để thành thạo.

Được tạo bởi nhà phát triển người Ý Gabriele Cirulli vào tháng 3 năm 2014, 2048 đã trở thành hiện tượng toàn cầu chỉ sau một đêm và truyền cảm hứng cho hàng trăm biến thể. Trò chơi dựa trên Threes! của Asher Vollmer, nhưng việc phát hành mã nguồn mở đã biến nó thành trò chơi trình duyệt được sao chép nhiều nhất trong lịch sử.`,
    controls: `Sử dụng phím mũi tên (↑ ↓ ← →) hoặc vuốt trên điện thoại để trượt tất cả các ô theo một hướng. Các ô có cùng số sẽ hợp nhất khi chạm nhau. Mục tiêu là tạo ra ô có số 2048.`,
  },
  'tetris': {
    title: 'Tetris — Xếp Hình Khối Cổ Điển',
    description: `Trò chơi xếp hình khối rơi bất hủ đã định hình cả một thế hệ. Xoay và đặt các khối tetromino khi chúng rơi xuống, hoàn thành các hàng ngang để xoá chúng. Điểm càng cao, khối rơi càng nhanh.

Được phát minh bởi kỹ sư phần mềm Liên Xô Alexey Pajitnov vào năm 1985, Tetris đã bán hơn 520 triệu bản trên mọi nền tảng có thể tưởng tượng. Tên gọi kết hợp tiền tố Hy Lạp "tetra" (bốn) với tennis.`,
    controls: `Sử dụng phím mũi tên: ← → để di chuyển, ↑ để xoay, ↓ để thả chậm. Nhấn phím cách để thả nhanh. Hoàn thành hàng để xoá chúng và ghi điểm.`,
  },
  'flappy-bird': {
    title: 'Flappy Bird — Chạm Để Bay',
    description: `Điều hướng chú chim pixel nhỏ bé qua chuỗi ống xanh bất tận bằng cách chạm để vỗ cánh. Một lần chạm giúp chim bay lên; trọng lực kéo nó xuống. Bạn có thể vượt qua 50 không?

Flappy Bird được tạo bởi nhà phát triển Việt Nam Nguyễn Hà Đông và phát hành vào tháng 5 năm 2013. Vào đầu năm 2014, trò chơi trở thành ứng dụng miễn phí được tải nhiều nhất và kiếm được khoảng 50.000 đô la mỗi ngày từ quảng cáo.`,
    controls: `Nhấp chuột, chạm, hoặc nhấn phím bất kỳ để chim vỗ cánh. Không thao tác gì thì trọng lực sẽ kéo chim xuống. Điều hướng qua khe hở giữa các ống. Mỗi ống vượt qua được một điểm.`,
  },
  'chrome-dino': {
    title: 'Chrome Dino Run — Khủng Long T-Rex Chạy',
    description: `Chạy trong vai chú khủng long T-Rex nổi tiếng của Chrome qua sa mạc pixel, nhảy qua xương rồng và cúi tránh chim pterodactyl trong trò chơi chạy vô tận này. Tốc độ liên tục tăng lên.

Ẩn trong trang "Không Có Internet" của Google Chrome từ năm 2014, trò chơi khủng long được thiết kế bởi Sebastien Gabriel. Khoảng 270 triệu lượt chơi mỗi tháng.`,
    controls: `Nhấn phím cách hoặc ↑ để nhảy qua xương rồng. Nhấn ↓ để cúi tránh chim pterodactyl. Trên điện thoại, chạm để nhảy và vuốt xuống để cúi. T-Rex tự động chạy.`,
  },
  'snake': {
    title: 'Snake — Rắn Săn Mồi Cổ Điển',
    description: `Điều khiển con rắn ngày càng dài trên bàn chơi, ăn thức ăn để lớn lên và tránh đuôi của chính mình cũng như các bức tường. Bạn sống càng lâu, rắn càng dài và khó điều khiển hơn.

Nguồn gốc của Snake bắt nguồn từ trò chơi arcade Blockade năm 1976. Nó trở thành hiện tượng văn hoá khi Nokia cài đặt sẵn trên điện thoại của họ vào năm 1998.`,
    controls: `Sử dụng phím mũi tên (↑ ↓ ← →) hoặc WASD để đổi hướng. Rắn di chuyển liên tục. Ăn thức ăn để lớn lên và ghi điểm. Tránh tường và đuôi của chính mình.`,
  },
  'pac-man': {
    title: 'Pac-Man — Huyền Thoại Arcade',
    description: `Ăn hết mê cung đầy chấm trong khi tránh bốn con ma đầy màu sắc — Blinky, Pinky, Inky và Clyde. Lấy viên năng lượng để lật ngược tình thế.

Được Namco phát hành vào tháng 5 năm 1980, Pac-Man trở thành trò chơi arcade có doanh thu cao nhất mọi thời đại với hơn 2,5 tỷ đô la từ tiền xu.`,
    controls: `Sử dụng phím mũi tên để điều hướng Pac-Man qua mê cung. Ăn tất cả các chấm để hoàn thành màn chơi. Lấy viên năng lượng ở các góc để tạm thời biến ma thành màu xanh.`,
  },
  'minesweeper': {
    title: 'Minesweeper — Dò Mìn',
    description: `Mở các ô trên bảng mà không kích hoạt mìn ẩn. Mỗi số được hiện ra cho biết có bao nhiêu quả mìn đang ẩn trong tám ô xung quanh — sử dụng logic để xác định các ô an toàn.

Minesweeper được tạo bởi Robert Donner và Curt Johnson cho Microsoft Windows 3.1 vào năm 1990 để dạy người dùng cách nhấp chuột phải và chuột trái.`,
    controls: `Nhấp chuột trái để mở ô. Số cho biết số lượng mìn ở các ô liền kề. Nhấp chuột phải để đánh dấu mìn nghi ngờ. Sử dụng logic để xác định các ô an toàn.`,
  },
  'solitaire': {
    title: 'Solitaire — Xếp Bài Klondike',
    description: `Trò chơi xếp bài solitaire vĩ đại nhất. Sắp xếp một bộ bài xáo trộn vào bốn chồng nền theo chất, từ Át đến Vua, bằng cách di chuyển các lá bài giữa bảy cột tablo.

Klondike Solitaire nổi tiếng toàn thế giới sau khi Microsoft đưa vào Windows 3.0 năm 1990. Được lập trình bởi thực tập sinh Wes Cherry.`,
    controls: `Nhấp vào lá bài để chọn, sau đó nhấp vào vị trí đích hợp lệ. Xây dựng cột theo thứ tự giảm dần với màu xen kẽ. Di chuyển Át lên chồng nền và xây dựng theo chất.`,
  },
  'chess': {
    title: 'Cờ Vua — Đấu Với Máy Tính',
    description: `Thách đấu đối thủ do máy tính điều khiển trong trò chơi chiến thuật nổi tiếng nhất thế giới. Chỉ huy đội quân 16 quân cờ trên bàn cờ 64 ô.

Cờ vua bắt nguồn từ Ấn Độ vào thế kỷ thứ 6 dưới tên "chaturanga" và lan truyền qua Con đường Tơ lụa đến Ba Tư và Châu Âu. Ngày nay hơn 600 triệu người chơi thường xuyên.`,
    controls: `Nhấp vào quân cờ để chọn, sau đó nhấp vào ô đích. Các nước đi hợp lệ sẽ được đánh dấu. Quy tắc tiêu chuẩn bao gồm nhập thành, bắt tốt qua đường, và phong cấp.`,
  },
  'checkers': {
    title: 'Checkers — Cờ Đam',
    description: `Nhảy và bắt quân đối phương trên bàn cờ 8×8. Di chuyển theo đường chéo, nối chuỗi nhiều bước nhảy, và phong vua cho quân cờ để chúng có thể đi lùi.

Checkers là một trong những trò chơi bàn cổ nhất, với phiên bản được tìm thấy ở thành phố cổ Ur có niên đại 3000 năm trước Công nguyên.`,
    controls: `Nhấp vào quân cờ để chọn, sau đó nhấp vào ô chéo đích. Nhảy qua quân đối phương sẽ bắt được chúng. Đạt đến phía bên kia để phong vua cho quân cờ.`,
  },
  'sudoku': {
    title: 'Sudoku — Đố Vui Logic Số',
    description: `Điền vào bảng 9×9 sao cho mỗi hàng, cột và ô vuông 3×3 chứa các số từ 1 đến 9 mà không trùng lặp. Sử dụng logic thuần tuý để tìm từng số còn thiếu.

Sudoku hiện đại được phát minh bởi kiến trúc sư người Mỹ Howard Garns vào năm 1979 với tên "Number Place". Trò chơi trở thành xu hướng toàn cầu sau khi phổ biến ở Nhật Bản.`,
    controls: `Nhấp vào ô trống và nhập số từ 1 đến 9. Mỗi hàng, cột và ô vuông 3×3 phải chứa tất cả các số từ 1 đến 9 đúng một lần.`,
  },
  'wordle': {
    title: 'Wordle Không Giới Hạn — Trò Chơi Đoán Từ',
    description: `Đoán từ bí mật gồm năm chữ cái trong sáu lần thử hoặc ít hơn. Các ô màu cho biết chữ cái nào đúng (xanh lá), sai vị trí (vàng), hoặc không có trong từ (xám).

Wordle được Josh Wardle tạo ra như một món quà cho người yêu vào năm 2021. Trò chơi tăng từ 90 người chơi lên hơn 2 triệu người chơi hàng ngày vào tháng 1 năm 2022.`,
    controls: `Nhập một từ năm chữ cái và nhấn Enter. Xanh lá = đúng vị trí. Vàng = chữ cái có trong từ nhưng sai vị trí. Xám = chữ cái không có trong từ. Bạn có sáu lần thử.`,
  },
  'cookie-clicker': {
    title: 'Cookie Clicker — Game Nhàn Rỗi Bánh Quy',
    description: `Nhấp vào chiếc bánh quy khổng lồ để nướng bánh, sau đó chi tiêu để nâng cấp — bà ngoại, nông trại, nhà máy và cổng dịch chuyển — tự động nướng thêm nhiều bánh hơn.

Được tạo bởi lập trình viên người Pháp Julien "Orteil" Thiennot vào năm 2013, Cookie Clicker đã mở đường cho thể loại game nhàn rỗi. Phát hành trên Steam 2021 với 97% đánh giá tích cực.`,
    controls: `Nhấp vào chiếc bánh quy lớn để sản xuất bánh. Chi tiêu bánh để mua các công trình trong cửa hàng nhằm tự động hoá sản xuất. Mua nâng cấp để nhân đôi sản lượng.`,
  },
  'connect-four': {
    title: 'Connect Four — Bốn Ô Liên Tiếp',
    description: `Thả quân cờ màu vào bảng dọc và cố gắng nối bốn quân liên tiếp — ngang, dọc hoặc chéo — trước đối thủ.

Connect Four lần đầu được Milton Bradley bán vào năm 1974. Năm 1988, Victor Allis chứng minh rằng người chơi đầu tiên luôn có thể thắng nếu bắt đầu từ cột giữa.`,
    controls: `Nhấp vào cột để thả quân cờ. Quân cờ rơi xuống do trọng lực. Nối bốn quân cùng màu liên tiếp để thắng.`,
  },
  'tic-tac-toe': {
    title: 'Tic-Tac-Toe — Cờ Ca-rô 3x3',
    description: `Đặt X và O luân phiên trên bảng 3×3 và cố gắng có ba ký hiệu liên tiếp. Chơi với bạn bè hoặc thách đấu AI.

Tic-Tac-Toe là một trong những trò chơi lâu đời nhất được biết đến, với ví dụ ở các di tích Ai Cập cổ đại có niên đại từ năm 1300 trước Công nguyên.`,
    controls: `Nhấp vào ô trống để đặt ký hiệu. Có ba ký hiệu trong một hàng ngang, dọc hoặc chéo để thắng.`,
  },
  'reversi': {
    title: 'Reversi — Trò Chơi Chiến Thuật Lật Quân',
    description: `Đặt quân cờ trên bảng 8×8 và lật quân đối phương bằng cách kẹp chúng. Mỗi nước đi có thể thay đổi cán cân lực lượng.

Reversi được phát minh vào năm 1883. Phiên bản hiện đại, Othello, được Goro Hasegawa phổ biến vào năm 1971 với khẩu hiệu "Một phút để học, cả đời để thành thạo".`,
    controls: `Nhấp vào ô trống để đặt quân cờ. Các quân đối phương bị kẹp sẽ chuyển sang màu của bạn.`,
  },
  'hextris': {
    title: 'Hextris — Xếp Hình Lục Giác',
    description: `Một biến thể hấp dẫn của trò xếp hình khối rơi cổ điển, được đặt trong một hình lục giác xoay. Các khối màu rơi vào trung tâm từ sáu cạnh.

Hextris được tạo vào năm 2014 bởi các sinh viên Đại học Maryland trong một cuộc thi hackathon.`,
    controls: `Sử dụng ← và → (hoặc A và D) để xoay hình lục giác trung tâm. Nối ba hoặc nhiều khối cùng màu liên tiếp để loại bỏ chúng.`,
  },
  'word-search': {
    title: 'Word Search — Tìm Từ Ẩn',
    description: `Tìm các từ ẩn trong bảng chữ cái ngẫu nhiên theo chiều ngang, dọc và chéo. Từ có thể đọc theo cả hai hướng.

Trò chơi tìm từ được phát minh bởi Norman E. Gibat vào năm 1968.`,
    controls: `Nhấp và kéo trên các chữ cái để đánh dấu từ. Từ có thể ẩn theo bất kỳ hướng nào.`,
  },
  'falling-blocks': {
    title: 'Falling Blocks — Xếp Khối Rơi',
    description: `Các khối màu rơi xuống và bạn phải xếp chồng cũng như kết hợp chúng trước khi chúng chồng lên quá cao. Đặt khối chiến lược để tạo combo màu.

Trò chơi khối rơi bắt nguồn từ Tetris (1985) và đã phát triển thành hàng chục biến thể khác nhau.`,
    controls: `Sử dụng ← và → để di chuyển khối. Nhấn ↑ hoặc phím cách để xoay. Nhấn ↓ để thả nhanh. Kết hợp màu và hoàn thành hàng để xoá khối.`,
  },
  'card-solitaire': {
    title: 'Card Solitaire — Xếp Bài Một Người',
    description: `Phiên bản gọn gàng của trò chơi xếp bài một người phổ biến nhất thế giới. Xây dựng chuỗi giảm dần với màu xen kẽ và di chuyển tất cả 52 lá bài lên bốn chồng nền.

Trò chơi solitaire đã phổ biến từ thế kỷ 18. Napoleon Bonaparte là một người chơi chăm chỉ trong thời gian bị lưu đày.`,
    controls: `Nhấp vào lá bài để chọn, sau đó nhấp vào vị trí đích hợp lệ. Xây dựng cột với màu đỏ đen xen kẽ. Át vào chồng nền.`,
  },
  'slope': {
    title: 'Slope — Trò Chơi Bóng 3D',
    description: `Điều khiển quả bóng lăn xuống dốc phát sáng neon với tốc độ ngày càng tăng. Tránh chướng ngại vật, đi qua các khúc cua gấp và đừng rơi khỏi mép.

Slope được phát triển bởi Rob Kay và đã trở thành một trong những trò chơi trình duyệt phổ biến nhất thế giới. Sử dụng WebGL cho đồ hoạ 3D mượt mà.`,
    controls: `Sử dụng ← và → hoặc A và D để điều khiển bóng. Tránh các chướng ngại vật đỏ và các hố. Bóng liên tục tăng tốc.`,
  },
  'among-us': {
    title: 'Among Us — Suy Luận Xã Hội',
    description: `Hợp tác với phi hành đoàn để hoàn thành nhiệm vụ trên tàu vũ trụ — nhưng cẩn thận, có kẻ giả mạo trong số các bạn. Thảo luận, cáo buộc và bỏ phiếu trục xuất nghi phạm.

Among Us được phát triển bởi InnerSloth và bùng nổ phổ biến vào năm 2020. Ở đỉnh cao, trò chơi có 500 triệu người chơi hoạt động hàng tháng.`,
    controls: `Sử dụng WASD hoặc phím mũi tên để di chuyển. Nhấp vào nhiệm vụ để hoàn thành. Báo cáo xác chết hoặc gọi cuộc họp khẩn cấp.`,
  },
  'geometry-dash': {
    title: 'Geometry Dash — Game Nhịp Điệu Vượt Chướng Ngại',
    description: `Nhảy và bay qua thế giới đầy chướng ngại rực rỡ, đồng bộ với nhạc điện tử. Chạm để nhảy qua gai và điều hướng các cổng trọng lực.

Geometry Dash được tạo bởi nhà phát triển Thuỵ Điển Robert Topala vào năm 2013. Đã được tải xuống hơn 200 triệu lần với hơn 80 triệu màn chơi do người dùng tạo.`,
    controls: `Nhấp chuột, chạm hoặc nhấn phím cách để nhảy. Giữ để nhảy liên tục trong chế độ tàu bay. Chướng ngại vật đồng bộ với nhạc.`,
  },
  'tunnel-rush': {
    title: 'Tunnel Rush — Lướt Đường Hầm 3D',
    description: `Lướt qua đường hầm 3D xoay chuyển và đổi màu với tốc độ cực cao, tránh các rào cản xuất hiện chỉ trong tích tắc.

Tunnel Rush đã trở thành hiện tượng lan truyền như một trong những trò chơi trình duyệt dễ tiếp cận nhưng đầy thử thách nhất.`,
    controls: `Sử dụng ← và → hoặc A và D để né tránh chướng ngại vật trong đường hầm. Phản ứng nhanh — ở tốc độ cao bạn chỉ có chưa đầy một giây.`,
  },
  'bubble-shooter': {
    title: 'Bubble Shooter — Ngắm và Ghép Bóng',
    description: `Ngắm và bắn bong bóng màu để tạo nhóm ba hoặc nhiều hơn cùng màu và nổ chúng khỏi bảng. Xoá sạch tất cả bong bóng để thắng mỗi màn.

Bubble Shooter bắt nguồn từ Puzzle Bobble của Taito (1994). Phiên bản web đã trở thành một trong những trò chơi giải trí được chơi nhiều nhất trên internet.`,
    controls: `Ngắm bằng chuột và nhấp để bắn bong bóng. Ghép ba hoặc nhiều hơn cùng màu để nổ chúng.`,
  },
  'spider-solitaire': {
    title: 'Spider Solitaire — Thử Thách Xếp Bài',
    description: `Sắp xếp bài theo thứ tự giảm dần cùng chất trong mười cột. Hoàn thành chuỗi Vua-Át để loại bỏ chúng.

Spider Solitaire đã được đưa vào Microsoft Windows từ năm 1998 và trở thành một trong những trò chơi được chơi nhiều nhất trong lịch sử.`,
    controls: `Nhấp vào lá bài để chọn, sau đó nhấp vào vị trí đích hợp lệ. Chỉ các chuỗi cùng chất mới có thể di chuyển thành nhóm. Hoàn thành Vua-Át để loại bỏ.`,
  },
  'mahjong': {
    title: 'Mahjong — Ghép Ô Cổ Điển',
    description: `Xoá các cặp ô giống nhau từ bố cục xếp tầng phức tạp. Chỉ những ô "tự do" mới có thể được chọn. Xoá sạch tất cả ô để thắng.

Mahjong solitaire được tạo vào năm 1981 bởi Brodie Lockard trên hệ thống PLATO.`,
    controls: `Nhấp vào ô tự do để chọn, sau đó nhấp vào ô tự do giống hệt để xoá cặp. Sử dụng nút gợi ý nếu bí.`,
  },
  'freecell': {
    title: 'FreeCell — Solitaire Chiến Lược',
    description: `Tất cả 52 lá bài được chia úp ngửa trên tám cột — không có thông tin ẩn, mỗi ván là bài kiểm tra chiến lược thuần tuý. Sử dụng bốn ô trống làm bộ nhớ tạm.

FreeCell trở nên phổ biến nhờ được đưa vào Windows từ Windows 95. Chỉ có ván #11982 là không thể giải được.`,
    controls: `Nhấp vào lá bài, sau đó nhấp vào cột đích hoặc ô trống. Xây dựng cột theo thứ tự giảm dần với màu xen kẽ. Sử dụng bốn ô trống một cách khôn ngoan.`,
  },
  'backgammon': {
    title: 'Backgammon — Cờ Tào Cáo',
    description: `Tung xúc xắc và đua mười lăm quân cờ của bạn qua bàn cờ. Chặn, đánh bật và đánh bại AI trong trò chơi chiến lược bất hủ này.

Backgammon là một trong những trò chơi bàn cổ nhất với nguồn gốc hơn 5.000 năm tại Lưỡng Hà.`,
    controls: `Nhấp vào nút xúc xắc để tung. Nhấp vào quân cờ, sau đó nhấp vào điểm đích. Bạn phải sử dụng cả hai xúc xắc nếu có thể.`,
  },
  'hangman': {
    title: 'Hangman — Trò Chơi Đoán Chữ',
    description: `Đoán từ ẩn từng chữ cái một trước khi hình người treo hoàn thành. Mỗi lần đoán sai sẽ thêm một phần cơ thể.

Hangman đã được chơi ít nhất từ thời Victoria và là một trong những trò chơi chữ nổi tiếng nhất thế giới.`,
    controls: `Nhấp vào chữ cái để đoán. Chữ cái đúng sẽ xuất hiện ở vị trí tương ứng. Bạn có 6-8 lần đoán sai.`,
  },
  'fruit-ninja': {
    title: 'Fruit Ninja — Chém Trái Cây',
    description: `Chém các trái cây bay qua màn hình bằng ngón tay hoặc chuột. Chém nhiều trái cùng lúc để combo, nhưng cẩn thận với bom.

Fruit Ninja được phát triển bởi Halfbrick Studios và phát hành vào năm 2010. Đã được tải xuống hơn 1 tỷ lần.`,
    controls: `Vuốt qua màn hình hoặc nhấp và kéo để chém trái cây. Chém nhiều trái cùng lúc để combo. Tránh bom.`,
  },
  'moto-x3m': {
    title: 'Moto X3M — Đua Xe Mô Tô Mạo Hiểm',
    description: `Lái xe mô tô qua 25 đường đua đầy thùng nổ, vòng lặp khổng lồ và cưa xoay chết chóc. Thực hiện pha mạo hiểm để thưởng thời gian.

Moto X3M được phát triển năm 2016 bởi Madpuffers. Sê-ri này đã ghi nhận hơn 500 triệu lượt chơi.`,
    controls: `Nhấn LÊN hoặc W để tăng ga, XUỐNG hoặc S để phanh. TRÁI/PHẢI để nghiêng người khi bay. Thực hiện pha mạo hiểm để thưởng.`,
  },
  'drift-boss': {
    title: 'Drift Boss — Drift Một Nút',
    description: `Làm chủ nghệ thuật drift chỉ với một nút. Nhấn để rẽ phải, thả để trượt trái. Giữ trên đường.

Drift Boss được tạo bởi Madpuffers, nổi tiếng với các trò chơi một nút dễ tiếp cận.`,
    controls: `Nhấp chuột hoặc nhấn để rẽ phải. Thả để trượt trái. Căn thời gian nhấn để giữ trên đường.`,
  },
  'basketball-legends': {
    title: 'Basketball Legends — Bóng Rổ 2 Người',
    description: `Chọn từ các đội huyền thoại và thi đấu trong trận đấu nhanh với đường chuyền siêu hạng, chặn bóng và cú úp rổ. Chơi với máy hoặc thách đấu bạn bè.

Basketball Legends có các cầu thủ hoạt hình với đòn đặc biệt, lấy cảm hứng từ các ngôi sao NBA.`,
    controls: `Người chơi 1: WASD để di chuyển, B để ném, N để ném siêu hạng, M để chặn. Người chơi 2: Phím mũi tên để di chuyển, K để ném, L để ném siêu hạng.`,
  },
  'eggy-car': {
    title: 'Eggy Car — Giữ Thăng Bằng Trứng',
    description: `Lái xe leo đồi với quả trứng mong manh trên nóc. Điều hướng địa hình gồ ghề mà không làm rơi trứng.

Eggy Car biến việc lái xe thành câu đố vật lý chính xác. Quả trứng tuân theo trọng lực và quán tính thực tế.`,
    controls: `Giữ để tăng ga. Thả để lăn tự do. Điều hướng đồi dốc cẩn thận. Lái xa nhất có thể.`,
  },
  'stack-ball': {
    title: 'Stack Ball — Phá Sàn',
    description: `Phá các sàn xoay bằng cách chạm để cho bóng rơi. Phá các sàn màu nhưng tránh sàn đen. Tích luỹ tốc độ để kích hoạt chế độ lửa.

Stack Ball kết hợp hạ cánh xoáy ốc với hiệu ứng vật lý phá huỷ đầy thoả mãn.`,
    controls: `Nhấn và giữ để cho bóng rơi. Thả để dừng. Tránh sàn đen. Phá nhiều sàn liên tiếp để kích hoạt chế độ lửa.`,
  },
  'vex-7': {
    title: 'Vex 7 — Vượt Chướng Ngại Stickman',
    description: `Điều hướng stickman của bạn qua các đường đua chướng ngại tàn khốc với lưỡi dao xoay, gai nhọn và sàn di động. Hơn 10 màn chơi đầy thử thách.

Vex 7 là phần mới nhất trong một trong những sê-ri platformer phổ biến nhất. Tổng cộng hơn 1 tỷ lượt chơi.`,
    controls: `Sử dụng WASD hoặc phím mũi tên để di chuyển và nhảy. Nhấn S để trượt. Nhảy tường. Tránh gai, dao và nguy hiểm.`,
  },
  'tiny-fishing': {
    title: 'Tiny Fishing — Thả Câu và Bắt Cá',
    description: `Thả dây câu và bắt cá bằng cách di chuyển lưỡi câu khi chìm xuống. Chi tiêu tiền để nâng cấp chiều dài dây, tốc độ và thu nhập ngoại tuyến.

Tiny Fishing kết hợp cơ chế nhàn rỗi với câu cá chủ động. Cá huyền thoại ẩn ở dưới 100 mét.`,
    controls: `Nhấp và giữ để thả câu. Di chuyển chuột để bắt cá. Bắt tối đa mỗi lần thả. Chi tiêu thu nhập để nâng cấp.`,
  },
  'gunspin': {
    title: 'GunSpin — Ném Súng Bay Xa',
    description: `Ném khẩu súng và giữ cho nó xoay bằng cách bắn đúng thời điểm. Mỗi phát bắn đẩy súng đi xa hơn. Căn thời gian nhấp để đạt khoảng cách tối đa.

GunSpin kết hợp vật lý đạn đạo với hệ thống nâng cấp nhàn rỗi.`,
    controls: `Nhấp chuột hoặc chạm để bắn. Mỗi phát bắn tạo lực giật đẩy súng đi. Căn thời gian bắn để duy trì độ cao. Thu thập xu để nâng cấp.`,
  },
  'vex-6': {
    title: 'Vex 6 — Vượt Chướng Ngại Stickman',
    description: `Chạy, nhảy, trượt và leo tường qua các đường đua chướng ngại nguy hiểm. Vex 6 tiếp nối sê-ri với các màn chơi mới.

Vex 6 giới thiệu bơi lội với thanh oxy, cưa trên ray và sàn dễ vỡ.`,
    controls: `Sử dụng WASD hoặc phím mũi tên để di chuyển và nhảy. Nhấn S để trượt. Nhảy tường. Tránh gai, cưa và hố.`,
  },
  'burrito-bison': {
    title: 'Burrito Bison — Phóng Bay',
    description: `Đấm, nảy và phóng bản thân qua đám gấu kẹo dẻo. Phóng Burrito Bison từ sàn đấu vật.

Burrito Bison: Launcha Libre cung cấp ba nhân vật đô vật có thể chơi với khả năng đặc biệt riêng. Ban đầu là trò chơi Flash của Juicy Beast Studios.`,
    controls: `Nhấp để phóng khỏi sàn đấu. Nhấp để nảy trên gấu kẹo dẻo. Sử dụng khả năng đặc biệt. Thu thập tiền để nâng cấp.`,
  },
  'ragdoll-hit': {
    title: 'Ragdoll Hit — Đấm Búp Bê Vải',
    description: `Đấm mạnh vào đối thủ búp bê vải và xem sự hỗn loạn dựa trên vật lý. Ngắm, tích lực và đấm để gửi stickman bay.

Ragdoll Hit sử dụng engine vật lý thực tế tính toán lực va chạm và va đập độc lập.`,
    controls: `Nhấp và kéo để ngắm cú đấm. Thả để đấm. Đấm đối thủ vào chướng ngại vật để gây thêm sát thương.`,
  },
  'soccer-random': {
    title: 'Soccer Random — Bóng Đá 2 Người Chơi',
    description: `Trò chơi bóng đá điên rồ nơi luật lệ, sân và cầu thủ thay đổi mỗi hiệp. Ghi bàn với các cầu thủ búp bê vải lúc lắc.

Soccer Random ngẫu nhiên hoá mọi thứ mỗi hiệp — kích thước bóng, số cầu thủ, mặt sân và thậm chí trọng lực.`,
    controls: `Người chơi 1: Nhấn W để đá. Người chơi 2: Nhấn MŨI TÊN LÊN. Ghi 5 bàn để thắng. Sân thay đổi mỗi hiệp.`,
  },
  'super-mario-bros': {
    title: 'Super Mario Bros — Huyền Thoại Phiêu Lưu',
    description: `Trò chơi cuộn ngang huyền thoại. Dẫn Mario qua Vương quốc Nấm, giẫm Goomba, phá gạch và giải cứu Công chúa Peach.

Super Mario Bros ra mắt năm 1985 bởi Nintendo và được coi là trò chơi điện tử có ảnh hưởng nhất mọi thời đại. Được thiết kế bởi Shigeru Miyamoto, bán hơn 40 triệu bản.`,
    controls: `Sử dụng phím mũi tên để di chuyển Mario. Nhấn Z hoặc LÊN để nhảy. Nhấn X để chạy/bắn. Giẫm kẻ thù bằng cách nhảy lên chúng. Thu thập xu và vật phẩm tăng sức mạnh.`,
  },
  'baseball-bros': {
    title: 'Baseball Bros — Bóng Chày Đa Người',
    description: `Bước vào vùng đánh bóng trong trò chơi bóng chày nhanh với cầu thủ hoạt hình và hành động arcade. Ném, đánh và phòng thủ để giành chiến thắng.

Baseball Bros kết hợp cơ chế đơn giản với trò chơi cạnh tranh. Trận đấu nhanh 3 hiệp.`,
    controls: `Nhấp để ném hoặc đánh bóng. Dùng chuột để ngắm. Căn thời gian nhấp để đánh bóng. Sử dụng phím mũi tên cho người phòng thủ.`,
  },
  'baseball-9': {
    title: 'Baseball 9 — Quản Lý Đội Bóng',
    description: `Quản lý đội bóng chày của riêng bạn và thi đấu trong giải đấu và cúp. Tuyển cầu thủ, nâng cấp kỹ năng và dẫn dắt đội.

Baseball 9 kết hợp quản lý đội với hành động trên sân. Tuyển cầu thủ với chỉ số riêng biệt.`,
    controls: `Nhấp để đánh bóng. Ngắm và nhấp để ném. Quản lý đội giữa các trận đấu.`,
  },
  'sprunki-phase-9': {
    title: 'Sprunki Phase 9 — Sáng Tạo Nhạc',
    description: `Tạo bản phối nhạc bằng cách kéo và thả các nhân vật hoạt hình lên sân khấu. Mỗi nhân vật Sprunki thêm một vòng lặp âm thanh khác nhau.

Sprunki Phase 9 là phần thứ chín trong sê-ri sáng tạo nhạc Sprunki, lấy cảm hứng từ Incredibox.`,
    controls: `Kéo nhân vật lên sân khấu để thêm âm thanh. Nhấp để xoá. Thử nghiệm các tổ hợp để tìm hoạt ảnh thưởng.`,
  },
  'sprunki-clicker': {
    title: 'Sprunki Clicker — Game Nhàn Rỗi Âm Nhạc',
    description: `Nhấp để kiếm nhịp và mở khoá nhân vật Sprunki mới. Mỗi nâng cấp thêm âm thanh mới vào tác phẩm của bạn.

Sprunki Clicker kết hợp cơ chế nhàn rỗi-nhấp chuột với vũ trụ âm nhạc Sprunki.`,
    controls: `Nhấp để kiếm nhịp. Chi tiêu nhịp để nâng cấp. Mở khoá nhân vật và gói âm thanh mới.`,
  },
  'sprunki-night-time': {
    title: 'Sprunki Night Time — Phối Nhạc Đêm',
    description: `Tạo giai điệu rùng rợn trong bản phối Sprunki chủ đề ban đêm. Kéo các nhân vật ma quái để tạo lớp nhịp và âm thanh ám ảnh.

Sprunki Night Time trình bày công thức Sprunki với thẩm mỹ tối và ban đêm.`,
    controls: `Kéo nhân vật lên sân khấu để thêm âm thanh. Tìm tổ hợp đặc biệt để mở hoạt ảnh thưởng.`,
  },
  'sprunki-grown-up': {
    title: 'Sprunki Grown Up — Phối Nhạc Trưởng Thành',
    description: `Phiên bản trưởng thành hơn của nhà sáng tạo nhạc Sprunki với âm thanh tinh tế hơn và thiết kế chín chắn. Xây dựng bản nhạc phức tạp.

Sprunki Grown Up có phiên bản trưởng thành của các nhân vật cổ điển với yếu tố âm thanh phức tạp hơn.`,
    controls: `Kéo các nhân vật trưởng thành lên sân khấu. Thử nghiệm các lớp để tạo tác phẩm phong phú hơn.`,
  },
  'sprunki-playground': {
    title: 'Sprunki Playground — Sân Chơi Âm Nhạc',
    description: `Trải nghiệm sandbox Sprunki tối thượng với tất cả nhân vật và âm thanh đã mở khoá ngay từ đầu. Phối và thử nghiệm tự do.

Sprunki Playground loại bỏ mọi rào cản tiến trình và cho truy cập ngay lập tức vào mọi nhân vật và âm thanh.`,
    controls: `Kéo bất kỳ nhân vật nào lên sân khấu. Tạo lớp âm thanh tự do. Sử dụng nút ghi âm để lưu bản phối.`,
  },
  'crazy-chicken-3d': {
    title: 'Crazy Chicken 3D — Bắn Gà Điên',
    description: `Ngắm bắn những con gà điên bay qua cảnh quan 3D trong trò chơi bắn súng arcade này. Nhấp để bắn hạ gà.

Crazy Chicken (Moorhuhn) xuất hiện năm 1999 như một trò chơi quảng cáo và trở thành hiện tượng lan truyền với hơn 10 triệu lượt tải.`,
    controls: `Di chuột để ngắm. Nhấp để bắn. Tìm mục tiêu thưởng ẩn. Gà vàng cho thêm điểm.`,
  },
};
