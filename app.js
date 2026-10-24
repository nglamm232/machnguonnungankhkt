// DỮ LIỆU ĐẦY ĐỦ 10 BÀI HỌC ĐÃ SỬA KÈM TÊN FILE ÂM THANH (.MP3) CHUẨN XÁC
const LESSONS_DATA = [
  {
    id: 1,
    title: "Lời chào và làm quen",
    titleNung: "Cậư Tóong Them Cúc quẹn",
    desc: "Làm quen với các câu xưng hô, chào hỏi xã giao thường nhật của người Nùng An.",
    vocab: [
      { word: "Chào", vi: "Chào", eg: "Chào giạ (Cháu chào bà)", audio: "Chào.mp3" },
      { word: "Lớp tọoc slâư", vi: "Lớp học", eg: "Học sày lớp tọoc slâư", audio: "Lớp tọoc slâư.mp3" },
      { word: "Dậu Lậư", vi: "Ở đâu", eg: "Mứng dậu lậư? (Bạn ở đâu?)", audio: "Dậu lậư.mp3" },
      { word: "Mạnh rềng", vi: "Khỏe mạnh", eg: "Giạ mạnh rềng (Bà khỏe mạnh)", audio: "Mạnh rềng.mp3" },
      { word: "Cúc quẹn", vi: "Làm quen", eg: "Rạu cúc quẹn (Chúng mình làm quen)", audio: "Cúc quen.mp3" },
      { word: "Cạm ơn", vi: "Cảm ơn", eg: "Cạm ơn mứng lai", audio: "Cạm ơn.mp3" },
      { word: "Tù Sọi", vi: "Giúp đỡ", eg: "Tù sọi tê giạ (Giúp đỡ ông bà)", audio: "Tù sọi.mp3" },
      { word: "Tê , giạ", vi: "Ông/bà", eg: "Tê giạ cại cú (Ông bà của tôi)", audio: "giạ.mp3" }
    ],
    dialogue: [
      { speaker: "Lương", nung: "Chào Mai! Ngòn nấy mứng bấu pây chợ Phin náu á? Cú hen mứng dân dậu thân ràn giạ.", vi: "Chào Mai! Sáng nay cậu không đi chợ Phiên à? Mình thấy cậu đứng trước sân cùng bà." },
      { speaker: "Mai", nung: "Chào Lương! Ngòn nấy cú dậu ràn sọi giạ tí vịck. À, nấy là giạ cú.", vi: "Chào Lương! Hôm nay mình ở nhà giúp bà một chút. À, đây là bà mình." },
      { speaker: "Lương", nung: "Lương chào giạ, giạ rềng bấu?", vi: "Cháu chào bà! Bà khỏe không ạ?" },
      { speaker: "Bà", nung: "Giạ rềng, cạm ơn Lương.", vi: "Bà khỏe, cảm ơn cháu." },
      { speaker: "Mai", nung: "Giạ ời, nấy là Lương, pan hạc sày lớp them Mai dậu Trường Tiểu học Trần Phú.", vi: "Bà ơi, đây là Lương, bạn học cùng lớp với cháu ở Trường Tiểu học Trần Phú." },
      { speaker: "Bà", nung: "Chào lan Lương! Sloóng lan tù sày tọoc slâư đây nớ! Cậy sọi tê giạ, cô mí them!", vi: "Chào cháu Lương! Hai cháu cùng nhau học thật tốt nhé, nhớ giúp đỡ ông bà, bố mẹ nữa." },
      { speaker: "Lương", nung: "Vâng ạ! Lương cạm ơn giạ. Lương sẹ cộ găng tọoc thẹt giọi.", vi: "Vâng ạ! Cháu cảm ơn bà. Cháu sẽ cố gắng học thật tốt ạ." }
    ],
    tf: [
      { q: "Lương líu hen Mai dân tọi ná thân ràn sày giạ cại cú háu hắt lọm", ans: true, exp: "Lương nhìn thấy Mai đứng trước sân nhà cùng với bà của mình vào buổi sáng." },
      { q: "Ngòn nấy Mai pây chợ Phin hắt lọm them bạn Lương dậu đâư bán", ans: false, exp: "Hôm nay Mai đi chợ phiên buổi sáng cùng với bạn Lương ở ngay tại bản (Sai, Mai ở nhà giúp bà)." },
      { q: "Giạ cại Mai nàu sloóng lan thúc tù sày tọoc thẹt đây them sọi gia đình", ans: true, exp: "Bà của Mai nhắc nhở hai bạn phải cùng nhau học tập thật tốt và giúp đỡ gia đình." }
    ],
    quizzes: [
      { q: "Lương đạ líu hen pấu lậư dân dậu them Mai tọi ná Thân ràn háu hắt lọm?", opts: ["A. Cô, mí cại Mai", "B. Giạ cại Mai", "C. Thày cô giáo", "D. Bạn bè sày lớp"], correct: 1 },
      { q: "Pằn mưng ngằn nấy Mai bó pây chợ Phin lúm mọi Pấu?", opts: ["A. Vị Mai hó dậu nắc", "B. Vị Mai dậu ràn sọi giạ tí lé", "C. Vị Mai thúc pây tằng ràn tường tọoc Slâư", "D. Vị bân tóc hung bó oc nọc đáy"], correct: 1 },
      { q: "Lương them Mai là pạn hạc sày lớp dậu Trường Tiểu học lậư?", opts: ["A. Trường Tiểu học Trần Phú", "B. Trường Tiểu học Lục Yên", "C. Trường Tiểu học Tân Lĩnh", "D. Trường Tiểu học Bắc Hoa"], correct: 0 },
      { q: "Giạ thặng slóong pấu Lương them Mai cáo mụng lúc Tù nhàng?", opts: ["A. Thúc chịu hó pây chợ Phin lọm", "B. Tù sày tọoc slâư đây them sọi gia đình", "C. Thúc dậu ràn chụng sọi giạ", "D. Bó đáy pây cúc sằm chay pấu tọoc"], correct: 1 },
      { q: "Lương đạ ọc tha ná hẹn lâư lúc đáy giạ cại Mai tằm tóong them thặng?", opts: ["A. Bợ bó ró cáng mựng", "B. Sláy Pây cúc sằm luôn , bó túp", "C. Bó rạy câư slôn cai bùn kẹ", "D. Cạm ơn giạ them cộ găng tọoc thẹt giọi"], correct: 3 }
    ],
    matchWords: [
      { nung: "Chào (Chào)", vi: "Lời nói hoặc hành động thể hiện sự lịch sự khi gặp gỡ." },
      { nung: "Pâu pan (Bạn)", vi: "Người cùng học chung một lớp hoặc chơi thân thiết với nhau." },
      { nung: "Chợ Phin (Chợ Phiên)", vi: "Phiên chợ họp định kỳ theo ngày của đồng bào vùng cao." },
      { nung: "Mạnh rềng (Khỏe mạnh)", vi: "Trạng thái cơ thể tốt, không bị ốm đau hay mệt mỏi." },
      { nung: "Giạ (Bà)", vi: "Người phụ nữ sinh thành ra bố hoặc mẹ của mình." }
    ],
    scrambles: [
      { vi: "Cháu chào bà ạ.", words: ["Bà", "ạ", "Lan", "chào"], ans: "Lan chào bà ạ" },
      { vi: "Hai cháu cùng nhau học tốt nhé.", words: ["Nhau", "lan", "đê", "cùng", "Soóng", "học", "ná"], ans: "Soóng lan cùng nhau học đê ná" },
      { vi: "Hôm nay ở nhà mình giúp bà chút.", words: ["Dậu", "cú", "bà", "hôm", "nay", "làn", "giúp", "ý"], ans: "Hôm nay dậu làn cú giúp bà ý" }
    ],
    rewrites: [
      { vi: "Cháu chào bà ạ!", ans: "Lan chào giạ", hint: "Lan chào..." },
      { vi: "Cháu tên là Lương.", ans: "Lan mình là Lương", hint: "Lan mình..." },
      { vi: "Nhà cháu ở bản Bắc Hoa.", ans: "Lan dậu bán Bắc Hoa", hint: "dậu bán..." },
      { vi: "Cháu đi học chữ ở trường.", ans: "Lan pây tọoc slâư dậu ràn tường", hint: "pây tọoc slâư..." },
      { vi: "Cháu rất thích đi học.", ans: "Lan rất ại pây tọoc slâư", hint: "rất ại..." },
      { vi: "Cháu rất thích nói tiếng Nùng.", ans: "Lan rất ại cáng cậư Nòng", hint: "cáng cậư Nòng" },
      { vi: "Bà mời cháu vào nhà ngồi.", ans: "Giạ mời lan hắn ràn nặng", hint: "hắn ràn nặng" },
      { vi: "Hôm nay cháu đi học cùng bạn.", ans: "Ngòn nấy lan pây tọoc slâư them bạn", hint: "them bạn" },
      { vi: "Bà tươi vui chào cháu Lương.", ans: "Giạ rìu rọong chào lan Lương", hint: "rìu rọong" },
      { vi: "Cháu học được nhiều chữ mới ở trường.", ans: "Lan tọoc đáy lai slâư dậu ràn tường ang lai", hint: "lai slâư" },
      { vi: "Bà hỏi nhà cháu ở đâu.", ans: "Giạ cham ràn lan dậu lậư?", hint: "cham ràn" },
      { vi: "Cháu học chữ ở trường rất là vui.", ans: "Lan tọoc slâư dậu ràn tường ang lai", hint: "ang lai" },
      { vi: "Chào bà, cháu đi học về rồi.", ans: "Chào giạ, lan pây tọoc slâư ma léo", hint: "ma léo" },
      { vi: "Cháu ở nhà giúp bà và rất thích đi học.", ans: "Lan dậu ràn sọi giạ sẹm ại pây tọoc slâư", hint: "sẹm ại" },
      { vi: "Cháu rất thích nói tiếng Nùng.", ans: "Lan ai cáng Nòng", hint: "cáng Nòng" }
    ]
  },
  {
    id: 2,
    title: "Giới thiệu bản thân",
    titleNung: "Giới thiệu bản thân",
    desc: "Cách xưng tên, tuổi, quê quán và giới thiệu bản thân bằng tiếng Nùng An.",
    vocab: [
      { word: "Mình", vi: "Tên", eg: "Mứng mình hén lậư? (Cậu tên gì?)", audio: "Mình.mp3" },
      { word: "Pây", vi: "Tuổi", eg: "Pây nấy sịp slậư pây (Năm nay 14 tuổi)", audio: "Pây.mp3" },
      { word: "Ràn", vi: "Nhà", eg: "Ràn cú dậu bán (Nhà tôi ở bản)", audio: "Ràn.mp3" },
      { word: "Gia đình", vi: "Gia đình", eg: "Sọi gia đình (Giúp gia đình)", audio: "Gia đình.mp3" },
      { word: "Bạn bè", vi: "Bạn bè", eg: "Tù sày bạn bè", audio: "bạn bè.mp3" },
      { word: "Ại", vi: "Sở thích", eg: "Cú ại líu (Tôi thích xem)", audio: "Ại.mp3" },
      { word: "Tom tợc", vi: "Quê hương", eg: "Tom tợc Lục Yên", audio: "Quê hương.mp3" },
      { word: "Ràn tường", vi: "Trường học", eg: "Pây ràn tường (Đến trường)", audio: "Ràn tường.mp3" }
    ],
    dialogue: [
      { speaker: "Minh", nung: "Sâư Lan bấu? Ngòn nấy mứng sẹm ọc nà sọi gia đình á?", vi: "Lan đấy à? Hôm nay cậu cũng ra ruộng giúp gia đình à?" },
      { speaker: "Lan", nung: "Cú chẳng sọi mí xôông á. À, rạu tù nhàng cấy pày, rạu bó sằng ró mình. Mứng mình hén lậư.", vi: "Mình vừa phụ mẹ xong. À, chúng mình gặp nhau mấy lần rồi mà mình chưa biết tên cậu. Cậu tên gì?" },
      { speaker: "Minh", nung: "Cú mình Minh, pây nấy sịp slậư pây. Lấy mứng?", vi: "Mình tên Minh, năm nay mười bốn tuổi. Còn cậu?" },
      { speaker: "Lan", nung: "Cú là Lan, sém sịp slây Pây. Ràn cú dậu bợng pắi kha kìu, cặn toong na cai bán.", vi: "Mình là Lan, cũng mười bốn tuổi. Nhà mình ở phía bên kia con suối, gần khu ruộng của bản." },
      { speaker: "Minh", nung: "À, hén là ràn mứng dậu cặn nấy. Ngòn lâư mứng hám cúc sằm nở.", vi: "À, vậy là nhà cậu ở gần đây. Hôm nào có dịp mình sang chơi nhé!" },
      { speaker: "Lan", nung: "Đáy, slầy nấy pây ràn ló, bó mầy giạ cú dậu nàn thọi tắng hắu.", vi: "Được! Giờ về thôi, không bà tớ ở nhà lại chờ cơm mất." }
    ],
    tf: [
      { q: "Minh them Lan Tù nhàng hắu hắt lọm lúc pây cần ron tằng ràn tường tọoc slâư.", ans: false, exp: "Minh và Lan gặp nhau ngoài ruộng khi đi giúp gia đình, không phải trên đường đến trường." },
      { q: "Tằng Minh them Lan pây nấy săm sịp slây Pây, Tù sày cáng có cần hằn nà.", ans: true, exp: "Cả Minh và Lan năm nay đều 14 tuổi và cùng trò chuyện bên bờ ruộng." },
      { q: "Ràn cại Lan dậu bơng pái kha khúi căn nà cại bán.", ans: true, exp: "Nhà của Lan nằm ở ngay phía bên kia con suối gần khu ruộng của bản." }
    ],
    quizzes: [
      { q: "Minh them Lan tù nhàng dậu lậư đâư sụ cáng có lúc đang cúc mựng?", opts: ["A. Dậu ràn tường dậu xạ Tân Lĩnh", "B. Dậu ràn văn hoá cai bán", "C. Dậu nóc nà lúc pây sọi cần ràn", "D. Dậu chợ Phin trang xá"], correct: 2 },
      { q: "Lúc đáy cham mình, bạn Lan đạ hồi mình là cáo mưng?", opts: ["A. Bạn cú là Hoa", "B. Bạn cú là Lan", "C. Bạn cú là Mây", "D. Bạn cú là Hương"], correct: 1 },
      { q: "Lúm cậư giới thiệu cai sloóng pấu, tằng Minh them Lan pây nấy cấy lai pây?", opts: ["A. Sịp pây", "B. Sịp nhấy pây", "C. Sịp Slam pây", "D. Sịp Slậy pây"], correct: 3 },
      { q: "Ràn cai Lan dậu ạm lậư dậu đâư cậư cáng có?", opts: ["A. Dậu bợng pái kha khúi, căn nà", "B. Dậu hềm ràn cại Minh dậu đâư bán", "C. Dậu trang Xạ Lục Yên", "D. Cắn hềm ràn tường cai bán"], correct: 0 },
      { q: "Pằn mựng đâư lúc cáng có, Lan thọi vối vàng rô pây ràn sày Minh?", opts: ["A. Vì bân tóc", "B. Vì Lao giạ dậu ràn tắng hắu", "C. Vì Thúc Pây ràn cúc bài tập ma ràn", "D. Vì mí hẹo pât ràn mầy víc"], correct: 1 }
    ],
    matchWords: [
      { nung: "Mình (Tên)", vi: "Từ dùng để gọi xưng hoặc phân biệt người này với người khác." },
      { nung: "Pây (Tuổi)", vi: "Khoảng thời gian tính bằng năm kể từ khi sinh ra cho đến hiện tại." },
      { nung: "Dậu ràn (Nhà ở)", vi: "Nơi gia đình quây quần sinh sống và gắn bó hằng ngày." },
      { nung: "Gia đình (Gia đình)", vi: "Tập hợp những người thân thiết cùng chung sống dưới một mái nhà." },
      { nung: "Tom tớc (Quê hương)", vi: "Nơi chốn sinh ra, gắn liền với bản quán và người thân." }
    ],
    scrambles: [
      { vi: "Tên Minh là năm nay mười bốn tuổi.", words: ["Mình Minh", "là", "Pây nấy", "Sịp slây", "Pây"], ans: "Mình Minh là Pây nấy Sịp slây Pây" },
      { vi: "Nhà Lan ở phía kia cạnh con suối.", words: ["Ràn Lan", "dậu", "bơng Kén", "hềm", "kha khíu"], ans: "Ràn Lan dậu bơng Kén hềm kha khíu" },
      { vi: "Hôm nào có dịp mình sang chơi nhé!", words: ["Ngòn lâư", "mầy dịp", "cú", "hàm cúc sằm", "nớ"], ans: "Ngòn lâư mầy dịp cú hàm cúc sằm nớ" }
    ],
    rewrites: [
      { vi: "Lan đấy à?", ans: "Lan nấy á?", hint: "Lan nấy..." },
      { vi: "Hôm nay cậu cũng ra ruộng à?", ans: "Ngòn nấy mứng sem ọc nà á.", hint: "sem ọc nà" },
      { vi: "Mình vừa phụ mẹ xong.", ans: "Cú chắng sọi mí xôông.", hint: "sọi mí" },
      { vi: "Chúng mình gặp nhau mấy lần rồi?", ans: "Rau tù nhàng cấy pày léo?", hint: "cấy pày" },
      { vi: "Mình chưa biết tên cậu.", ans: "Cú bó sằng ro mình mứng.", hint: "bó sằng ro" },
      { vi: "Cậu tên là gì?", ans: "Mứng mình cáo mựng?", hint: "cáo mựng" },
      { vi: "Mình tên là Minh.", ans: "Mình cú là Minh.", hint: "Mình cú" },
      { vi: "Năm nay mình mười bốn tuổi.", ans: "Pây nây cú sịp Slậy Pây.", hint: "sịp Slậy" },
      { vi: "Còn cậu thì sao?", ans: "Lấy mứng hẹn lâư?", hint: "hẹn lâư" },
      { vi: "Nhà mình ở phía bên kia con suối.", ans: "Ràn cú dậu bợng Pại Kha Khúi Kẹn.", hint: "Kha Khúi" },
      { vi: "Nhà gần khu ruộng của bản.", ans: "Ràn cú dậu bợng cắn nà cại bán", hint: "cắn nà" },
      { vi: "Nhà cậu ở gần đây phải không?", ans: "Ràn dậu căn nấy bấu?", hint: "căn nấy" },
      { vi: "Hôm nào có dịp mình sang chơi nhé!", ans: "Ngòn lậư đáy dậu cú hám cúc sằm nớ!", hint: "hám cúc sằm" },
      { vi: "Được chứ, giờ về thôi cậu.", ans: "Đáy bấu, Slầy Pây ràn ló.", hint: "Slầy Pây" },
      { vi: "Không bà ở nhà lại chờ cơm mất.", ans: "Bó mầy giạ dậu ràn Thọi tắng hắu.", hint: "tắng hắu" }
    ]
  },
  {
    id: 3,
    title: "Gia đình và người thân",
    titleNung: "Gia đình them hùn ràn",
    desc: "Từ ngữ về các thành viên gia đình, kính trọng ông bà và giữ gìn câu hát Phưn.",
    vocab: [
      { word: "Tê, Kẹ", vi: "Ông", eg: "Tê đang lận có (Ông đang kể chuyện)", audio: "Tê, kẹ.mp3" },
      { word: "Ché", vi: "Chị gái", eg: "Ché Mai ời", audio: "Ché.mp3" },
      { word: "Núng slai", vi: "Em trai", eg: "Núng slai cham ché", audio: "Núng slai.mp3" },
      { word: "Ràn", vi: "Gia đình", eg: "Ràn đầm ấm", audio: "Ràn2.mp3" },
      { word: "Hùn ràn", vi: "Người thân", eg: "Tù sày hùn ràn", audio: "Hùn ràn.mp3" },
      { word: "Lan nọi", vi: "Cháu nội", eg: "Lan nọi cại tê", audio: "Lan nọi.mp3" },
      { word: "Pan", vi: "Thế hệ", eg: "Pan lăng (Thế hệ sau)", audio: "Pan.mp3" },
      { word: "Cậy tạo", vi: "Ký ức", eg: "Cậy tạo ngày trước", audio: "Cậy tạo.mp3" }
    ],
    dialogue: [
      { speaker: "Núng slai", nung: "Núng bạo ché Mai ời, tê đang lận có mựng dé?", vi: "Chị Mai ơi, ông đang kể chuyện gì vậy?" },
      { speaker: "Mai", nung: "Tê đang lận hấư pây núng rạu ráy câư hẹo Phưn cại hùn nòng rạu.", vi: "Ông đang kể cho chị em mình nghe về những câu hát Phưn của người Nùng đấy." },
      { speaker: "Tê", nung: "Ngòn cọn Tê hay đáy rạy các có, ché đâư bán hẹo Phưn háu ngòn đây.", vi: "Ngày trước, ông thường nghe các anh chị trong bản hát Phưn vào những dịp vui. Những câu hát rất hay và ý nghĩa." },
      { speaker: "Núng slai", nung: "Tê ời, tê rọ hẹo bấu?", vi: "Ông ơi, ông có biết hát không ạ?" },
      { speaker: "Tê", nung: "Rọ dế, lúc lấy ụn, tê săm đáy slôn hẹo Phưn Them Các Kẹ đâư bán.", vi: "Biết chứ! Khi còn trẻ, ông cũng từng học hát từ các cụ trong bản." },
      { speaker: "Mai", nung: "Tê ời, tê hẹo hấư bọn lan ráy cậư nứng đáy bấu?", vi: "Ông ơi, ông hát cho chúng cháu nghe một câu được không ạ?" },
      { speaker: "Tê", nung: "Đáy dế, các lan tù sày rạy Thêm giợ cậư Phưn cại hùn nòng rạu nớ.", vi: "Được chứ. Các cháu hãy cùng nghe và giữ gìn những câu hát của người Nùng mình nhé." }
    ],
    tf: [
      { q: "Cong tê đang lận hấư Mai them nưng bạo ma cậư Phưn truyền thống.", ans: true, exp: "Người ông đang kể cho Mai và em trai nghe về những câu hát Phưn truyền thống." },
      { q: "Ngòn cọn lúc lấy ụn, tê bó đáy hạc hèo sày hùn kẹ đâư bán", ans: false, exp: "Khi còn trẻ, ông đã từng học hát từ các cụ cao niên trong bản." },
      { q: "Tê nàu các lan tù sày ray Them ro các giợ cậư Phưn cai hùn nòng.", ans: true, exp: "Ông nhắc nhở các cháu hãy cùng nghe và biết cách giữ gìn câu hát của người Nùng." }
    ],
    quizzes: [
      { q: "Đâư cậư có núng slai cham ché Mai vịc mựng?", opts: ["A. Tê đang lận có cao mựng dè?", "B. Ngòn nấy ché pây lậư", "C. Cấy slầy chí rau Pây nìn", "D. Pân lậư đang dân dậu Pắc tâu xạ"], correct: 0 },
      { q: "Tê đang lận có hấư slóóng pây nưng ma câự hèo lậư cại hùn nòng?", opts: ["A. Cậư hát ú nùng", "B. Cậư hèo Phưn truyền thống", "C. Điệu múa sạp đây lai", "D. Những làn điệu lượn khắp cọi"], correct: 1 },
      { q: "Rừng cậư cại kẹ ngòn mớ kẹ đáy rạy pấu lự hèo phưn hắu các dịp đây?", opts: ["A. Học sinh đâư lớp", "B. Cô giáo dậu trường", "C. Có, ché đâư bán", "D. Hùn dậu bán bợng hềm"], correct: 2 },
      { q: "Đáy lan bạo cham, kè đạ cáng cáo mựng ma khả năng hèo cại rạu?", opts: ["A. Tê bó rọ hẹo", "B. Tê chị ró ráy rọ", "C. Tê ro hát dế", "D. Ngòn sọc tê hẹo hấư ray"], correct: 2 },
      { q: "Sụ thưng cáng có thầy tê thặng các lan cáo mựng rất quan trọng them ý nghĩa?", opts: ["A. Thúc tọoc slâư thẹt giọi", "B. Thúc ọc tọong soi hùn ràn", "C. Giợ cậư Phưn hùn nòng", "D. Thúc Pây nìn lọm chụng rọong hận lọm"], correct: 2 }
    ],
    matchWords: [
      { nung: "Tê, Kẹ (Ông)", vi: "Người sinh ra bố hoặc mẹ, là bậc cao niên đáng kính trong nhà." },
      { nung: "Ràn (Gia đình)", vi: "Tập hợp những người thân thiết cùng chung sống dưới một mái nhà." },
      { nung: "Hùn ràn (Người thân)", vi: "Những người có quan hệ họ hàng, máu mủ hoặc gắn bó ruột thịt." },
      { nung: "Lan (Cháu)", vi: "Người thuộc thế hệ nhỏ tuổi hơn trong gia đình đối với ông bà, cha mẹ." },
      { nung: "Pan (Thế hệ)", vi: "Nhóm những người cùng chung khoảng thời gian sinh sống và độ tuổi." }
    ],
    scrambles: [
      { vi: "Ông đang kể chuyện gì vậy?", words: ["Tê", "đang", "lận có", "mưng", "nỏ"], ans: "Tê đang lận có mưng nỏ" },
      { vi: "Nghe những câu hát Phưn của người Nùng.", words: ["Rạy", "cậư hẹo", "Phưn", "dậu", "hùn Nòng"], ans: "Rạy cậư hẹo Phưn dậu hùn Nòng" },
      { vi: "Cháu hãy giữ những câu hát đẹp!", words: ["Lan", "giợ", "nhưng", "cậư hẹo", "đây"], ans: "Lan giợ nhưng cậư hẹo đây" }
    ],
    rewrites: [
      { vi: "Chị Mai ơi!", ans: "Ché mai ời.", hint: "Ché mai" },
      { vi: "Ông đang kể chuyện gì vậy?", ans: "Tê đang lận có mựng?", hint: "lận có" },
      { vi: "Ông đang kể chuyện cho nghe.", ans: "Tê đang lận có hấư ray.", hint: "hấư ray" },
      { vi: "Đó là câu hát Phưn của người Nùng.", ans: "Nấy là cậư hèo Phưn cai hùn nòng.", hint: "hèo Phưn" },
      { vi: "Ngày trước ông nghe ai hát?", ans: "Ngòn cọn ní tê rạy Pấu lậư hẹo?", hint: "Pấu lậư" },
      { vi: "Ông nghe các anh chị trong bản hát.", ans: "Tê rạy các có, ché đâư bán hẹo.", hint: "các có, ché" },
      { vi: "Vào những dịp vui của bản.", ans: "Hắu nhưng dịp vịc đây cại bán.", hint: "vịc đây" },
      { vi: "Những câu hát rất hay và ý nghĩa.", ans: "Nhựng cậư hát rất đây them ý nghĩa.", hint: "rất đây" },
      { vi: "Ông ơi, ông có biết hát không?", ans: "Tê ời, tê rọ hẹo bấu?", hint: "rọ hẹo" },
      { vi: "Ông biết chứ!", ans: "Tê nọ dế!", hint: "nọ dế" },
      { vi: "Khi còn trẻ ông cũng học hát.", ans: "Lúc lấy un tê sặm học hẹo Phưn.", hint: "lấy un" },
      { vi: "Học hát từ các cụ trong bản.", ans: "Hạc Them hùn Kẹ đâư bán.", hint: "hùn Kẹ" },
      { vi: "Ông hát cho chúng cháu nghe nhé.", ans: "Tê hẹo hấư bon lan ráng nớ.", hint: "bon lan" },
      { vi: "Các cháu hãy cùng nghe ông hát.", ans: "Các lan tù sùng rạng tê hẹo.", hint: "tù sùng" },
      { vi: "Hãy cùng nhau giữ gìn câu hát.", ans: "Tù sày giơ gìn câư hẹo Phưn.", hint: "giơ gìn" }
    ]
  },
  {
    id: 4,
    title: "Bạn bè và giao tiếp hằng ngày",
    titleNung: "Bạn bè them giao tiếp hằng ngòn",
    desc: "Giao tiếp bạn bè, rủ nhau đi lễ hội đền Đại Cại và chơi ném còn.",
    vocab: [
      { word: "Truyền thống", vi: "Truyền thống", eg: "Nét đẹp truyền thống", audio: "Truyền thống.mp3" },
      { word: "Cáng có", vi: "Giao tiếp / Trò chuyện", eg: "Rạu cáng có", audio: "cáng có.mp3" },
      { word: "Cuối tuần", vi: "Cuối tuần", eg: "Cuối tuần pây hội", audio: "Cuối tuần.mp3" },
      { word: "Lễ hội", vi: "Lễ hội", eg: "Lễ hội đền Tái Cại", audio: "Lễ hội.mp3" },
      { word: "Văn hóa", vi: "Văn hóa", eg: "Văn hóa Nòng", audio: "văn hoá.mp3" },
      { word: "Cúc sằm", vi: "Trò chơi dân gian", eg: "Cúc sằm tức tọm", audio: "Trò chơi dân gian.mp3" },
      { word: "Đò Tén", vi: "Trang phục", eg: "Đò tén truyền thống", audio: "Đò tén.mp3" },
      { word: "Hẹn nhàng", vi: "Hẹn gặp", eg: "Hẹn nhàng dậu hội", audio: "hẹn nhàng.mp3" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Lan ời, mứng đáy pây hội đền Tái Cại dậu Tân Lĩnh bó sằng?", vi: "Lan ơi, cậu đã từng đi Lễ hội đền Đại Cại ở Tân Lĩnh chưa?" },
      { speaker: "Lan", nung: "Bó sằng, cú đáy rạy cáng hội nấy mầy lai cáo cúc sằm Them văn nghệ rất đông.", vi: "Chưa, nhưng mình nghe nói lễ hội này có nhiều trò chơi dân gian và hoạt động văn nghệ rất vui." },
      { speaker: "Mai", nung: "Hen Tuần nấy pây rừng cú nớ! Cú lấy ai líu lai tiết mục văn hóa cai hùn Nòng.", vi: "Vậy cuối tuần này đi cùng mình nhé! Mình còn muốn xem các tiết mục mang nét văn hóa của người Nùng." },
      { speaker: "Lan", nung: "Đáy dế! Cú sằm ai rọ văn hoá Nòng, nhất là hèo phưn Them Pú rạ.", vi: "Được chứ! Mình rất thích tìm hiểu văn hóa Nùng, nhất là những làn điệu dân gian và trang phục truyền thống." },
      { speaker: "Mai", nung: "Đây lai! Cạm ơn mứng đạ pây sày cú. À, cậy Pây lóm, cú lấy ai cúc sàm Tức tọm.", vi: "Tuyệt quá! Cảm ơn bạn đã đi cùng mình. À, nhớ đến sớm nhé, mình còn muốn tham gia trò chơi ném còn." },
      { speaker: "Lan", nung: "Nhất định nớ, Hẹn nhàng mứng dậu hội Tái Cại.", vi: "Nhất định rồi. Hẹn gặp bạn ở Lễ hội đền Đại Cại!" }
    ],
    tf: [
      { q: "Mai sặu Lan sày Pây hội đền Tái Cại dậu Tân Lĩnh nắn cuối Tuần.", ans: true, exp: "Mai rủ Lan cùng đi tham gia Lễ hội đền Đại Cại ở Tân Lĩnh vào dịp cuối tuần." },
      { q: "Lan đụ pây hội đền Tái Cại lai pày cọn đáy Mai sặu pây sày.", ans: false, exp: "Lan chưa từng đi Lễ hội đền Đại Cại trước đó." },
      { q: "Mai Thăng Lan cậy Tằng lọm Slóong pấu Tù sày Tức Tọm.", ans: true, exp: "Mai dặn Lan nhớ đến sớm để hai người cùng tham gia trò chơi ném còn." }
    ],
    quizzes: [
      { q: "Đâư sụ cáng có Mai sạu Lan pây líu cao mưng dậ Xạ Tân Lĩnh?", opts: ["A. Hội đền Tái Cại", "B. Phin chợ ngòn ching", "C. Hội thi thể thao cui ràn Tường", "D. Giao lưu văn nghệ đâư bán"], correct: 0 },
      { q: "Lan Lấn rau đạ pây hội đền Tái Cại bó sằng?", opts: ["A. Pây léo Them vui vẻ lai", "B. Bó sằng Pây nhưng đáy rạy tằng", "C. Pây sày hùn ràn tắm con", "D. Bó ró tắc tí mà lễ hội"], correct: 1 },
      { q: "Mai ai Them Lan líu các Tiết mục Tầư nét văn hón Pấu lậư?", opts: ["A. Văn hóa hùn Kêu", "B. Văn hóa cai hùn Nòng", "C. Văn hóa cai hùn Tày", "D. Văn hóa cai hùn Sạ"], correct: 1 },
      { q: "Ngoài việc xem văn nghệ, Lan còn rất thích tìm hiểu thêm những điều gì?", opts: ["A. Các món cân đặc sản cai địa Phương", "B. Làn điệu xíu mớ them cân tén", "C. Cách đăm háu nà cần ráy", "D. Cậư có cúc pằn cai ngôi đền"], correct: 1 },
      { q: "Lăng sú cáng có, Mai Thăng Lan cáo mựng chung Tù Sày Pây hội?", opts: ["A. Cây tầư lứng them pú nít", "B. Cây pây lóm lấy tức tọm", "C. Tầư đò cân pây rừng", "D. Sặu them lai bạn sày pây"], correct: 1 }
    ],
    matchWords: [
      { nung: "Bạn bè (Bạn bè)", vi: "Những người có mối quan hệ gắn bó, thân thiết và chia sẻ với nhau." },
      { nung: "Cáng có (Giao tiếp)", vi: "Hoạt động trao đổi thông tin, trò chuyện qua lại giữa người với người." },
      { nung: "Lễ hội (Lễ hội)", vi: "Sự kiện văn hóa cộng đồng diễn ra với nhiều hoạt động vui chơi, nghi lễ." },
      { nung: "Văn hóa (Văn hóa)", vi: "Những giá trị tinh thần, truyền thống lâu đời được lưu truyền lại." },
      { nung: "Đò tén (Trang phục)", vi: "Quần áo và các đồ mặc truyền thống đặc trưng của dân tộc." }
    ],
    scrambles: [
      { vi: "Bạn đi Lễ hội đền Đại Cại chưa?", words: ["Ban", "pây", "Lễ hội", "đền Tái Cại", "bó sằng"], ans: "Ban pây Lễ hội đền Tái Cại bó sằng" },
      { vi: "Mình đi cùng cuối tuần này nhé!", words: ["Nớ", "pây sày", "thưng", "tuần nấy", "nớ"], ans: "Nớ pây sày thưng tuần nấy nớ" },
      { vi: "Mình muốn đi chơi ném còn.", words: ["Cú", "soòng pây", "lĩu", "còn"], ans: "Cú soòng pây lĩu còn" }
    ],
    rewrites: [
      { vi: "Lan ơi!", ans: "Lan ời!", hint: "Lan ời" },
      { vi: "Cậu đi hội đền chưa?", ans: "Mứng Pây hội đền bó Sằng?", hint: "bó Sằng" },
      { vi: "Lễ hội đền Đại Cại ở Tân Lĩnh.", ans: "Lễ hội đền Tái Cại Tân Lĩnh.", hint: "đền Tái Cại" },
      { vi: "Mình chưa đi bao giờ.", ans: "Cú bó sằng Pây Tắc pày.", hint: "Tắc pày" },
      { vi: "Lễ hội có nhiều trò chơi vui.", ans: "Lễ hội mầy lai Trò cúc sằm đây.", hint: "cúc sằm" },
      { vi: "Cuối tuần này đi cùng mình nhé.", ans: "Cuối Tuần nấy pây sày cú nớ!", hint: "pây sày" },
      { vi: "Mình muốn xem văn hóa người Nùng.", ans: "Cú ai líu văn hóa hùn Nòng.", hint: "ai líu" },
      { vi: "Được chứ, mình rất thích.", ans: "Đáy dế, cú săm ai.", hint: "săm ai" },
      { vi: "Thích tìm hiểu làn điệu dân gian.", ans: "Thích chàm lĩu các điệu hẹo phưn.", hint: "hẹo phưn" },
      { vi: "Thích cả trang phục truyền thống.", ans: "Thích cà pú vạ truyền thống.", hint: "pú vạ" },
      { vi: "Tuyệt quá, cảm ơn bạn nhiều.", ans: "Đê lai, ló ơn láu tòng lai.", hint: "Đê lai" },
      { vi: "Nhớ đến sớm nhé cậu.", ans: "Mứng cậy pây tằng lọm nớ.", hint: "tằng lọm" },
      { vi: "Mình rất mong được tham gia lễ hội cùng bạn.", ans: "Cú sày pây lĩu hội cùng láu tòng.", hint: "sày pây" },
      { vi: "Chúng mình có thể cùng xem các tiết mục văn nghệ.", ans: "Bon cú đắc cùng lĩu văn nghệ.", hint: "lĩu văn nghệ" },
      { vi: "Mình nghe nói lễ hội còn có nhiều hoạt động thú vị.", ans: "Cú láy vạ lễ hội còn mầy lai trò lĩu đê.", hint: "lĩu đê" }
    ]
  },
  {
    id: 5,
    title: "Số đếm và thời gian",
    titleNung: "Số kẹ them ngòn slầy",
    desc: "Đếm số, hẹn giờ và tìm hiểu lịch sử chợ đá quý miền đất Ngọc Lục Yên.",
    vocab: [
      { word: "Ngòn slầy", vi: "Thời gian", eg: "Ngòn slầy quý giá", audio: "Ngòn slầy.mp3" },
      { word: "Số kẹ", vi: "Số đếm", eg: "Tọoc số kẹ", audio: "Số kẹ.mp3" },
      { word: "Ngòn", vi: "Ngày", eg: "Ngòn nấy (Hôm nay)", audio: "Ngòn.mp3" },
      { word: "Tuần", vi: "Tuần", eg: "Tuần nấy (Tuần này)", audio: "Tuần.mp3" },
      { word: "Đưn", vi: "Tháng", eg: "Đưn nấy (Tháng này)", audio: "Đưn.mp3" },
      { word: "Pây", vi: "Năm", eg: "Pây 1989", audio: "Pây.mp3" },
      { word: "Chợ Thin quậy", vi: "Chợ đá quý", eg: "Chợ thin quậy Lục Yên", audio: "Chợ thin quậy.mp3" },
      { word: "Lán pàn", vi: "Phát triển", eg: "Chợ phát triển lai", audio: "Lán pòn.mp3" }
    ],
    dialogue: [
      { speaker: "Minh", nung: "An ời, Rau tù hẹn lúc pẹt giờ dậu chợ thin quậy Lục Yên nớ!", vi: "An ơi, mình hẹn nhau lúc 8 giờ ở Chợ đá quý Lục Yên nhé?" },
      { speaker: "An", nung: "Đáy! Cú sẹm ại líu khón thin đô màu sắc bày hai dậu chợ.", vi: "Được! Mình muốn xem những viên đá đủ màu sắc được bày bán ở chợ." },
      { speaker: "Minh", nung: "Mứng ró nghề thin quậy dậu Lục Yên tắm khoạng pây 1984 bấu?", vi: "Bạn có biết nghề đá quý ở Lục Yên bắt đầu phát triển từ khoảng năm 1989 không?" },
      { speaker: "An", nung: "Ro, Tằng khoạng 1991-1992, chợ thin quậy phát triển lai.", vi: "Có, đến khoảng 1991–1992, chợ đá quý đã phát triển rất mạnh." },
      { speaker: "Minh", nung: "Hén rạu pây tằng lọm nớ, cú lấy ại líu pâu thợ cúc chẹng thin quậy.", vi: "Vậy mình đến sớm nhé, mình còn muốn xem những người thợ làm tranh đá quý." },
      { speaker: "An", nung: "Hen pây ló, cú ại líu tắm kẹn “miền đất Ngọc” cúc pằn các tác phậm hẹn lậư.", vi: "Vậy đi thôi, mình muốn tận mắt xem “miền đất Ngọc” tạo nên những tác phẩm ấy như thế nào." }
    ],
    tf: [
      { q: "Cú them An tù hẹn nhàng háu lúc pẹt giờ lọm dậu chợ thin quậy.", ans: true, exp: "Minh và An hẹn gặp nhau vào lúc 8 giờ sáng tại khu Chợ đá quý Lục Yên." },
      { q: "Nghề thin quậy dậu Lục Yên phát triển tắm pây 1980.", ans: false, exp: "Nghề đá quý ở Lục Yên bắt đầu phát triển từ khoảng năm 1989." },
      { q: "An ại líu nhựng pấu thợ cúc chẹng thin quậy dậu miền đất Ngọc.", ans: true, exp: "An rất muốn tận mắt xem những người thợ làm tranh đá quý tại miền đất Ngọc." }
    ],
    quizzes: [
      { q: "Minh them An hẹn tù nhàng dậu chợ thin quậy háu cấy giờ?", opts: ["A. Hắu 7 giờ lọm ngòn nấy", "B. Hắu 8 giờ dậu khu chợ", "C. Hắu 9 giờ dậu ràn văn hóa", "D. Hắu 10 giờ dậu ngã Slám bán"], correct: 1 },
      { q: "An muốn đến chợ đá quý để xem những viên đá có đặc điểm gì nổi bật?", opts: ["A. Nhựng khón thin mầy hình lạc", "B. Nhựng khón thin đô màu sắc", "C. Nhựng khón thin quậy hiếm nhất", "D. Nhựng khón thin hung lai"], correct: 1 },
      { q: "Minh nhắc đến mốc thời gian khoảng năm nào là lúc nghề đá quý bắt đầu phát triển?", opts: ["A. Khoạng pây 1985", "B. Khoạng pây 1989", "C. Khoạng pây 1995", "D. Khoạng pây 2000"], correct: 1 },
      { q: "Vào giai đoạn nào thì chợ đá quý Lục Yên đã phát triển rất mạnh mẽ?", opts: ["A. Khoạng pây 1991-1992", "B. Khoạng pây 1993-1994", "C. Khoạng pây 1995-1996", "D. Khoạng pây 1997-1998"], correct: 0 },
      { q: "An ại líu chen thu “miền đất Ngọc” cúc pằn dóng mựng dậu chợ?", opts: ["A. Cạo đò cúc bằng ngằn", "B. Nhựng cheng thin quậy đây", "C. Nhựng đò điêu khắc bằng máy", "D. Các loại ná đa tắm mầư"], correct: 1 }
    ],
    matchWords: [
      { nung: "Ngòn slầy (Thời gian)", vi: "Khoảng thời gian cụ thể hoặc độ dài diễn ra các hoạt động hằng ngày." },
      { nung: "Chợ thin quậy (Chợ đá quý)", vi: "Nơi diễn ra các hoạt động mua bán, trao đổi các loại đá quý tự nhiên." },
      { nung: "Màu slắc (Màu sắc)", vi: "Sắc thái phong phú, đa dạng của các vật thể nhìn thấy bằng mắt." },
      { nung: "Lán pàn (Phát triển)", vi: "Sự lớn mạnh, vươn lên và mở rộng của một ngành nghề hay địa phương." },
      { nung: "Chẹng thin quậy (Tranh đá quý)", vi: "Loại hình tranh nghệ thuật độc đáo được ghép từ những mảnh đá quý." }
    ],
    scrambles: [
      { vi: "Hẹn nhau lúc 8 giờ ở Chợ đá quý Lục Yên!", words: ["Tù hẹn", "hắn 8 slầy", "dậu", "Chợ Thin quậy", "Lục Yên"], ans: "Tù hẹn hắn 8 slầy dậu Chợ Thin quậy Lục Yên" },
      { vi: "Quý Lục Yên phát triển từ khoảng năm 1989.", words: ["Quậy Lục Yên", "Pẹ Pàn", "Tắm", "Khoạng Pây", "1989"], ans: "Quậy Lục Yên Pẹ Pàn Tắm Khoạng Pây 1989" }
    ],
    rewrites: [
      { vi: "An ơi!", ans: "An ời!", hint: "An ời" },
      { vi: "Hẹn nhau lúc 8 giờ nhé.", ans: "Tù hẹn háu 8 giờ nớ.", hint: "háu 8 giờ" },
      { vi: "Gặp nhau ở chợ đá quý.", ans: "Tù nhàng dậu chợ Thin quậy.", hint: "chợ Thin quậy" },
      { vi: "Chợ đá quý ở Lục Yên.", ans: "Chợ Thin quậy dậu Lục Yên.", hint: "dậu Lục Yên" },
      { vi: "Mình muốn xem những viên đá.", ans: "Cú ại líu nhựng Khón Thin quậy.", hint: "Khón Thin" },
      { vi: "Đá có đủ các màu sắc đẹp.", ans: "Thin mầy lai màu sắc đảy.", hint: "màu sắc" },
      { vi: "Đá được bày bán ở chợ.", ans: "Thin đáy bày dậu Chợ.", hint: "bày dậu Chợ" },
      { vi: "Cậu có biết nghề đá quý không?", ans: "Mứng ro nghề Thin quậy bấu?", hint: "ro nghề" },
      { vi: "Nghề đá quý phát triển từ khi nào?", ans: "Nghề Thin quậy Pé Pàn tắm lúc lậư?", hint: "Pé Pàn" },
      { vi: "Bắt đầu từ khoảng năm 1989.", ans: "Tắm Khoạng Pây 1989.", hint: "Pây 1989" },
      { vi: "Chợ phát triển rất mạnh sau đó.", ans: "Hám lằng chợ Pé Pàn lai.", hint: "Hám lằng" },
      { vi: "Mình muốn đến chợ thật sớm.", ans: "Cú ại tằng chợ Thẹt Lọm.", hint: "Thẹt Lọm" },
      { vi: "Muốn xem thợ làm tranh đá quý.", ans: "Ai lìu Thợ cúc chẹng Thin quậy.", hint: "chẹng Thin" },
      { vi: "Miền đất Ngọc Lục Yên đẹp quá.", ans: "Miền Đất Ngọc Lục Yên đây lai.", hint: "đây lai" },
      { vi: "Vậy chúng ta đi thôi nào.", ans: "Hẹn rau tù sày pây ló.", hint: "pây ló" }
    ]
  },
  {
    id: 6,
    title: "Cân Cắt (Ăn uống)",
    titleNung: "Cân Cắt",
    desc: "Ẩm thực truyền thống: bánh chưng đen, xôi ngũ sắc, cá suối và rau rừng.",
    vocab: [
      { word: "Phắng đăm", vi: "Bánh chưng đen", eg: "Sớ phắng đăm", audio: "Phăng đăm.mp3" },
      { word: "Hắu nắng ngọ slắc", vi: "Xôi ngũ sắc", eg: "Cân hắu nắng ngọ slắc", audio: "hắn nắng ngọ slắc.mp3" },
      { word: "Pa khúi", vi: "Cá suối", eg: "Món pa khúi", audio: "Pa khúi.mp3" },
      { word: "Nòng", vi: "Măng", eg: "Nòng đong pha", audio: "Nòng.mp3" },
      { word: "Phắc đong", vi: "Rau rừng", eg: "Phắc đong ngon", audio: "Phắc đong.mp3" },
      { word: "Nó mâu bán", vi: "Thịt lợn bản", eg: "Nó mâu bán thơm", audio: "Nó mâu bán.mp3" },
      { word: "Ton hắn", vi: "Bữa cơm", eg: "Ton hắn đâư ràn cạc", audio: "Ton hắn.mp3" },
      { word: "Món cân", vi: "Món ăn", eg: "Món cân truyền thống", audio: "Món câu.mp3" }
    ],
    dialogue: [
      { speaker: "Lan", nung: "Ngòn nấy tằng sằng cú, mứng sớ phăng đăm nớ! Nấy là phắng đặc biệt cại hùn Nòng An.", vi: "Hôm nay đến nhà mình, cậu thử bánh chưng đen nhé! Đây là món bánh rất đặc biệt của người Nùng An." },
      { speaker: "Mai", nung: "Phắng mầy màu đăm thẹt lạc! Nọc phăng đăm, hùn Nòng An lấy mầy cáo mựng ngon.", vi: "Bánh có màu đen thật lạ! Ngoài bánh chưng đen, người Nùng An còn có món gì ngon nữa?" },
      { speaker: "Lan", nung: "Mầy hắu nắng ngọ Slắc, nó mâu bán, pa khúi, cạy tớn them các dong phắc, nòng cại đong pha.", vi: "Có xôi ngũ sắc, thịt lợn bản, cá suối, gà rừng và những món rau, măng của núi rừng." },
      { speaker: "Mai", nung: "Rạy hắu rừ lai, cú ại cân tọn hắn lúm hẹn nấy, vờ mầy món ngon, vờ đáy nặng đâư ràn cạc rạy mọi pấu lận có.", vi: "Nghe hấp dẫn quá! Mình thích những bữa cơm như thế này, vừa có món ngon, vừa được ngồi trong nhà sàn nghe mọi người kể chuyện." },
      { speaker: "Lan", nung: "Hẹn pây lăng ma bán cú nớ, lây lai dọng cân them cậư có ma hùn Nòng An đang tằng mứng ma ra.", vi: "Vậy lần sau về bản với mình nhé, còn nhiều món ăn và câu chuyện về người Nùng An đang chờ cậu khám phá!" }
    ],
    tf: [
      { q: "Phắng đăm là món cân đặc biệt cại hùn Nòng An.", ans: true, exp: "Bánh chưng đen là món bánh đặc biệt của người Nùng An." },
      { q: "Lan lận có them Mai lai món cân từ đong pha.", ans: true, exp: "Lan giới thiệu với Mai nhiều món ăn từ núi rừng." },
      { q: "Mai bó ại nhựng ton hắu cân dậu đâư ràn cạc.", ans: false, exp: "Mai rất thích những bữa cơm được ngồi trong nhà sàn nghe mọi người kể chuyện." }
    ],
    quizzes: [
      { q: "Lan mời Mai sớ món cân lậư lúc tằng rằng rạu?", opts: ["A. Hắn nắng ngọ slắc", "B. Phắng đăm", "C. Pa khúi", "D. Cạy tớn"], correct: 1 },
      { q: "Rừng Lan, hùn Nòng An lấy mầy nhựng món câu lậư?", opts: ["A. Phở, bánh cuốn và nem.", "B. Pa pẹ, cụng them pau", "C. Hắu nắng ngọ slắc", "D. Bánh mì, nó mò và xúc xích."], correct: 2 },
      { q: "Mai hen hẹn lậư lúc rạy Lan lận món câu?", opts: ["A. Buồn và thất vọng.", "B. Ngạc nhiên và thích thú.", "C. Lo lắng và sợ hãi.", "D. Không quan tâm."], correct: 1 },
      { q: "Mai ại cáo mựng đâư món cân ton hắu đáy cáng tằng?", opts: ["A. Mầy lai món cân hiện tại", "B. Đáy cại cân", "C. Vờ cân vờ đáy ray lận có", "D. Đáy pây chợ Phin"], correct: 2 },
      { q: "Lăn ại Mai cúc mựng hắu pày lăng?", opts: ["A. Sày Lan hắu bán", "B. Sày Lan pây chợ", "C. Sày Lan hắu thành phố", "D. Sày Lan pây tằng ràn tường"], correct: 0 }
    ],
    matchWords: [
      { nung: "Phắng đăm (Bánh chưng đen)", vi: "Món bánh truyền thống có màu đen, gắn với văn hóa người Nùng An." },
      { nung: "Hắu nắng ngọ slắc (Xôi ngũ sắc)", vi: "Món xôi nhiều màu sắc, thường xuất hiện trong những dịp đặc biệt của đồng bào." },
      { nung: "Pa Khúi (Cá suối)", vi: "Loại cá sinh sống trong các con suối, thường được chế biến trong bữa cơm bản." },
      { nung: "Nòng (Măng)", vi: "Loại thực phẩm lấy từ những cây tre, nứa non và được chế biến thành món ăn." },
      { nung: "Phắc đong (Rau rừng)", vi: "Những loại rau tự nhiên được người dân hái từ núi rừng." }
    ],
    scrambles: [
      { vi: "Bánh chưng đen là món ăn truyền thống của người Nùng An.", words: ["Phắng đăm", "hẹn món câu", "truyền thống", "cai hùn", "Nòng An"], ans: "Phắng đăm hẹn món câu truyền thống cai hùn Nòng An" },
      { vi: "Mai rất thích những bữa cơm trong nhà sàn.", words: ["Mai", "rất ại", "nhựng tọn cân", "đâư vàn cại"], ans: "Mai rất ại nhựng tọn cân đâư vàn cại" },
      { vi: "Lần sau cậu về bản với mình nhé.", words: ["Pày lăn", "mứng", "háu bán", "them các", "nớ"], ans: "Pày lăn mứng háu bán them các nớ" }
    ],
    rewrites: [
      { vi: "Hôm nay cậu thử bánh chưng đen nhé!", ans: "Ngòn nấy mứng sợ phăng đăm nớ!", hint: "phăng đăm" },
      { vi: "Đây là món bánh rất đặc biệt của người Nùng An.", ans: "Nấy là món câu đặc biệt cại hùn Nòng An.", hint: "món câu" },
      { vi: "Bánh có màu đen thật lạ!", ans: "Phắng mầy màu đăm thẹt lạc.", hint: "màu đăm" },
      { vi: "Người Nùng An còn có món gì ngon nữa?", ans: "Hùn Nòng An lấy cạo mựng ngon them?", hint: "ngon them" },
      { vi: "Có xôi ngũ sắc và cá suối.", ans: "Mầy hắn nắng ngọ slắc them pa khúi.", hint: "pa khúi" },
      { vi: "Món ăn này rất hấp dẫn.", ans: "Món cân nấy rất hấp dẫn.", hint: "rất hấp dẫn" },
      { vi: "Mình thích những bữa cơm như thế này.", ans: "Cú ại nhựng tọn hắu hen nấy.", hint: "tọn hắu" },
      { vi: "Bữa cơm có nhiều món ăn ngon.", ans: "Tọn hắu mầy lai món ngon.", hint: "lai món ngon" },
      { vi: "Mình thích ngồi trong nhà sàn.", ans: "Cú ại nặng đâư ràn cạc.", hint: "nặng đâư" },
      { vi: "Mọi người thường kể chuyện trong bữa cơm.", ans: "Mọi pấu hay lận có đâư tọn cân.", hint: "lận có" },
      { vi: "Người Nùng An có nhiều món ăn truyền thống.", ans: "Hùn Nòng An mầy lai món cân truyền thống.", hint: "món cân" },
      { vi: "Rau và măng được lấy từ núi rừng.", ans: "Phắc Them Nòng đáy au dậu đâư đong pha.", hint: "đong pha" },
      { vi: "Lần sau cậu về bản với mình nhé!", ans: "Pây lăng mứng ma bán them cú nớ!", hint: "ma bán" },
      { vi: "Còn nhiều món ăn đang chờ cậu khám phá.", ans: "Lấy lai món cân đang tắng mứng khám phá.", hint: "khám phá" },
      { vi: "Mình rất thích những món ăn truyền thống của người Nùng An.", ans: "Cú rất ại món cân truyền thống cại hùn Nòng An.", hint: "rất ại" }
    ]
  },
  {
    id: 7,
    title: "Đi chợ – mua bán",
    titleNung: "Pây chợ - hai slấu",
    desc: "Cách hỏi giá, mặc cả và chọn mua khăn thổ cẩm thủ công truyền thống.",
    vocab: [
      { word: "Căn truyền thống", vi: "Khăn truyền thống", eg: "Bâư căn truyền thống", audio: "Căn truyền thống.mp3" },
      { word: "Cúc bặng mầư", vi: "Làm thủ công", eg: "Căn cúc bặng mầư", audio: "Cúc bặng mầư.mp3" },
      { word: "Giạ", vi: "Giá", eg: "Giạ cấy lai? (Giá bao nhiêu?)", audio: "Giụ.mp3" },
      { word: "Sấư", vi: "Mua", eg: "Núng sấư căn (Em mua khăn)", audio: "sấư.mp3" },
      { word: "Hai", vi: "Bán", eg: "Pấu hai (Người bán)", audio: "Hai.mp3" },
      { word: "Bợt giạ", vi: "Bớt giá", eg: "Bợt giạ tí lé", audio: "Bợt giụ.mp3" },
      { word: "Họ", vi: "Gói", eg: "Ché họ hấư núng", audio: "Họ.mp3" },
      { word: "Cúc quà", vi: "Làm quà", eg: "Au pây cúc quà", audio: "Cúc quà.mp3" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ché ời, bâu căn nấy đây quạ! Nấy sấ ư căn truyền thống cại hùn Nòng An bấu?", vi: "Chị ơi, chiếc khăn này đẹp quá! Đây có phải khăn truyền thống của người Nùng An không ạ?" },
      { speaker: "Pấu bán", nung: "Sấư lố, căn nấy đáy cục bằng mầư, núng ại líu kị hơn bấu?", vi: "Đúng rồi, khăn được làm thủ công, em có muốn xem kỹ hơn không?" },
      { speaker: "Mai", nung: "Ai dế, bâư căn nấy giạ cấy lai, ché?", vi: "Có ạ! Chiếc khăn này giá bao nhiêu, chị?" },
      { speaker: "Pấu bán", nung: "Bâư nấy giạ pạc xin lé.", vi: "Chiếc này giá một trăm nghìn đồng." },
      { speaker: "Mai", nung: "Núng sâư sloóng bâư chí ché bớt hấư núng đáy bấu?", vi: "Nếu em mua hai chiếc thì chị có thể bớt một chút được không ạ?" },
      { speaker: "Pấu bán", nung: "Đáy dé, sloóng bâư ché au pạc pẹp sịp xin nớ!", vi: "Được chứ, hai chiếc chị lấy một trăm tám mươi nghìn nhé!" },
      { speaker: "Mai", nung: "Hẹn ché họ hấư nùng sloóng bấư, núng ại au pây ràn cúc quà them giợ tạo nét đây cại hùn Nòng An.", vi: "Vậy chị gói giúp em hai chiếc, em muốn mang về làm quà và giữ lại một chút nét đẹp của người Nùng An." }
    ],
    tf: [
      { q: "Bâư căn Mai líu hen là căn truyền thống cại hùn Nòng An.", ans: true, exp: "Chiếc khăn Mai nhìn thấy là khăn truyền thống của người Nùng An." },
      { q: "Pấu hai nàu bâư căn đáy cúc bặng mầư them mầy giạ pạc xin xìn.", ans: true, exp: "Người bán nói chiếc khăn được làm thủ công và có giá một trăm nghìn đồng." },
      { q: "Mai sâư sloóng bâư căn giạ sloóng pạc xin xìn.", ans: false, exp: "Mai mua hai chiếc khăn được bớt giá còn một trăm tám mươi nghìn đồng." }
    ],
    quizzes: [
      { q: "Mai ại món đồ lậư dậu chợ?", opts: ["A. En táy lé", "B. Bâư căn", "C. Sùng pú", "D. Tọi hài"], correct: 1 },
      { q: "Bâư căn đáy cúc hẹn lậư?", opts: ["A. Cúc bặng máy", "B. Au kẹn đui ma", "C. Cúc bặng mầư", "D. Cúc từ nhựa"], correct: 2 },
      { q: "Một chiếc khăn có giá bao nhiêu?", opts: ["A. Pẹt sịp xin mòn", "B. Pạc xin mòn", "C. Pạc pẹt sịp xin", "D. Slóng pạc xin"], correct: 1 },
      { q: "Mai muốn mua bao nhiêu chiếc khăn?", opts: ["A. Bâư Toọc", "B. Sloóng bâư", "C. Slám bâư", "D. Slậy bâư"], correct: 1 },
      { q: "Pằn mựng mai ại sấư căn?", opts: ["A. Hai tạo hấư pấu đui", "B. Chụng dụng pây toọc slẩu", "C. Chụng pây ràn cúc quà", "D. Chụng tặng háư pấu hai"], correct: 2 }
    ],
    matchWords: [
      { nung: "Căn truyền thống (Khăn truyền thống)", vi: "Một loại khăn mang nét đặc trưng trong trang phục và văn hóa Nùng An." },
      { nung: "Cúc bặng mầư (Làm thủ công)", vi: "Cách làm sản phẩm bằng đôi tay và các phương pháp truyền thống." },
      { nung: "Bợt giạ (Bớt giá)", vi: "Giảm một phần số tiền phải trả khi mua một món đồ." },
      { nung: "Họ (Gói)", vi: "Dùng giấy hoặc vật liệu phù hợp để bao bọc một món đồ." },
      { nung: "Cúc quà (Làm quà)", vi: "Mua hoặc chuẩn bị một món đồ để tặng cho người khác." }
    ],
    scrambles: [
      { vi: "Khăn này có phải truyền thống của người Nùng An không?", words: ["Bâư căn nấy", "sấư căn truyền thống", "cại hùn Nòng An", "bấu"], ans: "Bâư căn nấy sấư căn truyền thống cại hùn Nòng An bấu" },
      { vi: "Chị ơi, chiếc khăn này giá bao nhiêu?", words: ["Ché ời", "bâư căn nấy", "giạ táu lặư"], ans: "Ché ời bâư căn nấy giạ táu lặư" },
      { vi: "Em muốn mua hai chiếc khăn làm quà.", words: ["Núng ại", "sấư sloóng bâư căn", "cúc quà"], ans: "Núng ại sấư sloóng bâư căn cúc quà" }
    ],
    rewrites: [
      { vi: "Chiếc khăn này đẹp quá!", ans: "Bâư căn đây quạ!", hint: "Bâư căn" },
      { vi: "Đây có phải khăn truyền thống của người Nùng An không?", ans: "Nấy sậư căn truyền thống cại hùn Nòng An bấu?", hint: "sậư căn" },
      { vi: "Khăn được làm thủ công.", ans: "Căn cúc bặng mầư.", hint: "cúc bặng mầư" },
      { vi: "Chiếc khăn này giá bao nhiêu?", ans: "Bâư căn nầy giạ cấy lai?", hint: "giạ cấy lai" },
      { vi: "Em muốn mua hai chiếc khăn.", ans: "Núng ại slấư sloóng bâư căn.", hint: "sloóng bâư" },
      { vi: "Chị có thể bớt một chút được không?", ans: "Ché bợt hấư núng tí lé đáy bấu?", hint: "bợt hấư" },
      { vi: "Hai chiếc khăn giá một trăm tám mươi nghìn đồng.", ans: "Sloóng bấư căn giạ pạc nứng pẹt sịp xin.", hint: "pẹt sịp xin" },
      { vi: "Chị gói giúp em hai chiếc nhé!", ans: "Ché họ sọi núng sloong bâư nớ!", hint: "họ sọi" },
      { vi: "Em muốn mang chiếc khăn này về làm quà.", ans: "Núng ại au căn nấy pây ràn cúc quà.", hint: "cúc quà" },
      { vi: "Chiếc khăn này có nét đẹp truyền thống.", ans: "Bâư căn nấy mầy cạo đây truyền thống.", hint: "cạo đây" },
      { vi: "Em rất thích chiếc khăn này.", ans: "Núng rất ại bâư căn nấy.", hint: "rất ại" },
      { vi: "Chị cho em xem kỹ hơn được không?", ans: "Ché hấư núng líu kỵ đáy bấu?", hint: "líu kỵ" },
      { vi: "Em muốn mua thêm một chiếc nữa.", ans: "Núng ại sâự bâư lé them.", hint: "lé them" },
      { vi: "Những chiếc khăn này được làm rất đẹp.", ans: "Cao căn nấy đáy cúc rất đây.", hint: "đáy cúc" },
      { vi: "Em muốn giữ lại một chút nét đẹp của người Nùng An.", ans: "Núng ại giợ tạo căn đây cai hùn Nòng an tí le.", hint: "giợ tạo" }
    ]
  },
  {
    id: 8,
    title: "Nhà cửa – sinh hoạt",
    titleNung: "Ràn giáo – sinh hoạt",
    desc: "Không gian kiến trúc nhà sàn, gian bếp lửa và nét sinh hoạt sum vầy đầm ấm.",
    vocab: [
      { word: "Ràn cạc", vi: "Nhà sàn", eg: "Ràn cạc hùn Nòng", audio: "Ràn cạc.mp3" },
      { word: "Lay", vi: "Cầu thang", eg: "Hấn lay (Lên cầu thang)", audio: "Lay.mp3" },
      { word: "Họng bếp", vi: "Gian bếp", eg: "Họng bếp ràn cú", audio: "Rạng bếp.mp3" },
      { word: "Pẹc phầy", vi: "Bếp lửa", eg: "Nặng pẹc phầy", audio: "Pẹc phầy.mp3" },
      { word: "Sinh hoạt", vi: "Sinh hoạt", eg: "Kẹn sinh hoạt", audio: "Sinh hoạt.mp3" },
      { word: "Tù sày", vi: "Quây quần", eg: "Tù sày bên bếp lửa", audio: "tù sày.mp3" },
      { word: "Tiếp hẹc", vi: "Tiếp khách", eg: "Kẹn tiếp hẹc", audio: "Tiếp hẹc.mp3" },
      { word: "Cáng có", vi: "Trò chuyện", eg: "Nặng cáng có", audio: "càng có.mp3" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ràn mứng đây lai! Chắng hấn kìn lay đạ hen hôm mùi hắu từ bếp lẹo.", vi: "Nhà cậu đẹp quá! Vừa bước lên cầu thang đã nghe mùi cơm thơm từ bếp rồi." },
      { speaker: "Lan", nung: "Ừ, nấy là bếp cại ràn cú. Sọp lắp, tằng ràn thường tù sày dậu péc phầy.", vi: "Ừ, đây là gian bếp của nhà mình. Buổi tối, cả nhà thường quây quần bên bếp lửa." },
      { speaker: "Mai", nung: "Hen lấy bợng kẹn chụng cáo mựng?", vi: "Thế còn gian bên này dùng để làm gì?" },
      { speaker: "Lan", nung: "Nấy là kèn tằng ràn sinh hoạt them tiếp hẹc. Mọi pấu dậu nấy cần ràn cáng có.", vi: "Đây là nơi cả nhà sinh hoạt và tiếp khách. Mọi người thường ngồi đây uống nước, trò chuyện." },
      { speaker: "Mai", nung: "Cú ại nhất là nặng pẹc phầy, vờ tháu vờ đáy ráy có.", vi: "Mình thích nhất là ngồi bên bếp lửa, vừa ấm vừa được nghe mọi người kể chuyện." },
      { speaker: "Lan", nung: "Hẹn pây lăng ma cúc sằm, cú sẹ lận có hấư mứng rạy ma bán cú.", vi: "Vậy lần sau đến chơi, mình sẽ kể cho cậu nghe nhiều chuyện thú vị về bản mình." }
    ],
    tf: [
      { q: "Mai khen ràn cại Lan rất đây.", ans: true, exp: "Mai khen ngôi nhà của Lan rất đẹp." },
      { q: "Tằng hắm, tằng ràn Lan hay nắng hềm pẹc phầy.", ans: true, exp: "Buổi tối, gia đình Lan thường quây quần bên bếp lửa." },
      { q: "Họng bợng hềm đáy dụng chấ ư cân them sắp bum cân hắu.", ans: false, exp: "Gian bên cạnh được dùng để sinh hoạt và tiếp khách, không phải nấu ăn." }
    ],
    quizzes: [
      { q: "Mai hen slui mưng lúc dạm hấn lay?", opts: ["A. Mùi ra", "B. Mùi hắu hôm", "C. Mùi ọn", "D. Mùi péng"], correct: 1 },
      { q: "Buổi tối, gia đình Lan thường làm gì bên bếp lửa (péc phầy)?", opts: ["A. To ọc bài", "B. Cúc cong", "C. Quây quần", "D. Pây nìn"], correct: 2 },
      { q: "Gian bên cạnh được dùng để làm gì?", opts: ["A. Sinh hoạt them tiếp hec", "B. Chấư cân them lứng túi", "C. Nìn them chại chọc", "D. Chụng dô đò cúc nà"], correct: 0 },
      { q: "Mọi người thường làm gì ở gian sinh hoạt?", opts: ["A. Đăm máy them cún cọ tù sứng", "B. Cân nắm them cáng có", "C. Chấư háư them cúc péng", "D. Tắm thoọc them máy pú rạ"], correct: 1 },
      { q: "Mai thích nhất điều gì khi đến nhà Lan?", opts: ["A. Đáy pền hấn lay", "B. Đáy súp mừi hấn", "C. Đáy nặng pec phầy ráy lấn có", "D. Đáy nìn đâư ràn"], correct: 2 }
    ],
    matchWords: [
      { nung: "Ràn cạc (Nhà sàn)", vi: "Ngôi nhà được dựng cao hơn mặt đất, mang nét đặc trưng của nhiều dân tộc miền núi." },
      { nung: "Họng bếp (Gian bếp)", vi: "Nơi trong nhà được sử dụng để nấu ăn và chuẩn bị bữa cơm." },
      { nung: "Pẹc phầy (Bếp lửa)", vi: "Nơi tạo ra hơi ấm và thường gắn với sinh hoạt gia đình." },
      { nung: "Tù sày (Quây quần)", vi: "Cùng ngồi gần nhau, tạo nên không khí gia đình ấm áp." },
      { nung: "Tiếp hẹc (Tiếp khách)", vi: "Hoạt động đón tiếp những người đến thăm nhà." }
    ],
    scrambles: [
      { vi: "Nhà của cậu đẹp quá!", words: ["Ràn cại", "mứng", "đây", "quạ"], ans: "Ràn cại mứng đây quạ" },
      { vi: "Buổi tối cả nhà thường quây quần bên bếp lửa.", words: ["Hắm lắp", "tằng ràn", "thường tù sày", "dậu hềm phầy"], ans: "Hắm lắp tằng ràn thường tù sày dậu hềm phầy" },
      { vi: "Mọi người thường ngồi đây uống nước và trò chuyện.", words: ["Mọi pấu", "thường nặng nấy", "cân nắm", "them cáng có"], ans: "Mọi pấu thường nặng nấy cân nắm them cáng có" }
    ],
    rewrites: [
      { vi: "Nhà cậu đẹp quá!", ans: "Ràn mứng đây quạ!", hint: "Ràn mứng" },
      { vi: "Đây là gian bếp của nhà mình.", ans: "Nấy là họng bếp ràn cú.", hint: "họng bếp" },
      { vi: "Buổi tối, cả nhà thường quây quần bên bếp lửa.", ans: "Hặm, tằng ràn nặng hềm pec phây.", hint: "nặng hềm" },
      { vi: "Gian bên này dùng để làm gì?", ans: "Họng bếp nấy chụng cúc mựng?", hint: "chụng cúc" },
      { vi: "Đây là nơi cả nhà sinh hoạt và tiếp khách.", ans: "Nấy là kẹn tằng ràn sinh hoạt them tiếp hẹc.", hint: "tiếp hẹc" },
      { vi: "Mọi người thường ngồi đây uống nước.", ans: "Mọi pấu thường nặng nấy cân nặm.", hint: "cân nặm" },
      { vi: "Mọi người thường trò chuyện ở đây.", ans: "Mọi pấu thường cáng có dậu nấy.", hint: "cáng có" },
      { vi: "Mình thích ngồi bên bếp lửa.", ans: "Cú ại nặng căn péc phầy.", hint: "căn péc" },
      { vi: "Bếp lửa vừa ấm vừa gần gũi.", ans: "Péc phầy vờ thắn vờ tù cặn.", hint: "Péc phầy" },
      { vi: "Mình thích nghe mọi người kể chuyện.", ans: "Cú ại rạy mọi pấu lận có.", hint: "lận có" },
      { vi: "Nhà sàn là nơi sinh hoạt của gia đình.", ans: "Ràn cạc là kẹn sinh hoạt tằng ràn.", hint: "kẹn sinh hoạt" },
      { vi: "Gian bếp có mùi cơm rất thơm.", ans: "Dấu bếp mầy mùi háư hôm.", hint: "mùi háư hôm" },
      { vi: "Lần sau cậu đến chơi nhé!", ans: "Pày lăng mứng ma cúc sằm nớ!", hint: "cúc sằm" },
      { vi: "Mình sẽ kể cho cậu nghe nhiều chuyện thú vị.", ans: "Cú sẹ lấn hấư mứng rạy lai có đây lai.", hint: "lai có đây" },
      { vi: "Mình rất thích không khí ấm áp trong ngôi nhà này.", ans: "Cú rất ại không khí tháu rẹm đâư en ràn nấy.", hint: "không khí" }
    ]
  },
  {
    id: 9,
    title: "Hỏi đường – chỉ đường",
    titleNung: "Cham ron – Nhìn ron",
    desc: "Cách hỏi đường, chỉ hướng đi thẳng, rẽ trái đến nhà văn hóa thôn Làng Già.",
    vocab: [
      { word: "Cham ron", vi: "Hỏi đường", eg: "Hấư cú cham ron", audio: "Cham ron.mp3" },
      { word: "Pây dàu", vi: "Đi thẳng", eg: "Cợ pây dàu ron nấy", audio: "Pây dầu.mp3" },
      { word: "Pớc bợng Slúi", vi: "Rẽ trái", eg: "Tằng kìu pợc bợng slúi", audio: "Pớc bợng slúi.mp3" },
      { word: "Kìu", vi: "Cây cầu", eg: "En kìu ý (Cầu nhỏ)", audio: "Kìu.mp3" },
      { word: "Xe đạp", vi: "Xe đạp", eg: "Pây xe đạp", audio: "Xe đạp.mp3" },
      { word: "Ron pây", vi: "Đường đi", eg: "Ron nấy pây ngại", audio: "Pây ron.mp3" },
      { word: "Ràn văn hóa", vi: "Nhà văn hóa", eg: "Ràn văn hóa Bán Già", audio: "Ràn văn hoá.mp3" },
      { word: "Sinh hoạt", vi: "Sinh hoạt", eg: "Mọi pấu ma sinh hoạt", audio: "Sinh hoạt.mp3" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Mứng ời, hấư cú cham ron pây tằng ràn văn hóa thôn Bán Già!", vi: "Cậu ơi, cho mình hỏi đường đến nhà văn hóa thôn Làng Già với!" },
      { speaker: "Lan", nung: "Mứng cợ pây dàu ron nấy, tằng en kiù ý pợc bợng slúi nớ.", vi: "Cậu cứ đi thẳng con đường này, đến cây cầu nhỏ thì rẽ trái nhé." },
      { speaker: "Mai", nung: "Dậu nấy tằng kẹn chay bâư? Cú pây xe đạp đáy bâư.", vi: "Từ đây đến đó có xa không? Mình đi xe đạp có được không?" },
      { speaker: "Lan", nung: "Đáy dế, chị tặm sịp phút rọ. Ron náy pây săm ngại.", vi: "Được chứ, chỉ khoảng mười phút thôi. Đường này cũng khá dễ đi." },
      { speaker: "Mai", nung: "À, cú líu hen léo! Pài sái mọi pấu ma kẹn sinh hoạt sậư bâư?", vi: "À, mình thấy rồi! Chiều nay mọi người cũng đến đó sinh hoạt phải không?" },
      { speaker: "Lan", nung: "Ừ, ngòn nấy mầy buổi sinh hoạt cại bán, mứng pây vại mọi pấu đang tằng.", vi: "Ừ, hôm nay có buổi sinh hoạt của bản đấy. Cậu đi nhanh lên, mọi người đang chờ!" }
    ],
    tf: [
      { q: "Mai cham Lan ron pây tằng ràn văn hóa thôn Bán Già.", ans: true, exp: "Mai hỏi Lan đường đến nhà văn hóa thôn Làng Già." },
      { q: "Lan nhìn hấư Mai pợ c bợng quà tằng kìu ý.", ans: false, exp: "Lan hướng dẫn Mai rẽ trái (pợc bợng slúi), không phải rẽ phải." },
      { q: "Mai sắm pây xe đạp tằng ràn văn hóa khoạng sịp phút.", ans: true, exp: "Mai có thể đi xe đạp đến nhà văn hóa trong khoảng mười phút." }
    ],
    quizzes: [
      { q: "Mai ại pây tằng lậư?", opts: ["A. Ràn tường", "B. Ràn văn hóa thôn Bán Già", "C. Chợ Phin", "D. Ràn Lan"], correct: 1 },
      { q: "Mai cúc mựng lúc pày tằng kìu ý?", opts: ["A. Pợp bợng quà", "B. Pây dàu", "C. Pợp bợng slúi", "D. Pặn tạo"], correct: 2 },
      { q: "Mai dự định đi đến nhà văn hóa bằng phương tiện gì?", opts: ["A. Xe máy", "B. Ô tô", "C. Xe đạp", "D. Pây kha"], correct: 2 },
      { q: "Từ chỗ Mai đứng đến nhà văn hóa mất khoảng bao lâu?", opts: ["A. Há phút", "B. Sịp phút", "C. Nhấy sịp phút", "D. Slám sịp phút"], correct: 1 },
      { q: "Chiều hôm đó mọi người đến nhà văn hóa để làm gì?", opts: ["A. Hai sấư", "B. Cân", "C. Sinh hoạt", "D. Tọoc slâư"], correct: 2 }
    ],
    matchWords: [
      { nung: "Cham ron (Hỏi đường)", vi: "Hỏi người khác để biết cách đi đến một địa điểm." },
      { nung: "Pây dàu (Đi thẳng)", vi: "Di chuyển theo hướng phía trước, không đổi hướng." },
      { nung: "Pợp bợng slúi (Rẽ trái)", vi: "Đổi hướng sang phía bên trái khi đang di chuyển." },
      { nung: "Ràn văn hóa (Nhà văn hóa)", vi: "Nơi cộng đồng tổ chức các hoạt động văn hóa và sinh hoạt chung." },
      { nung: "Sinh hoạt (Sinh hoạt)", vi: "Hoạt động tập thể được tổ chức cho mọi người trong bản." }
    ],
    scrambles: [
      { vi: "Cho mình hỏi đường đến nhà văn hóa với!", words: ["Hấư cú", "cham ron", "tằng", "ràn văn hóa", "sày"], ans: "Hấư cú cham ron tằng ràn văn hóa sày" },
      { vi: "Cậu cứ đi thẳng con đường này nhé.", words: ["Mứng cợ", "pây dàu", "kha ron nấy", "nớ"], ans: "Mứng cợ pây dàu kha ron nấy nớ" },
      { vi: "Đến cây cầu nhỏ thì rẽ trái nhé.", words: ["Tằng en kìu ý", "chí", "pợc bợng slúi", "nớ"], ans: "Tằng en kìu ý chí pợc bợng slúi nớ" }
    ],
    rewrites: [
      { vi: "Cậu ơi, cho mình hỏi đường với!", ans: "Mứng ời, hấư cú cham ron!", hint: "cham ron" },
      { vi: "Nhà văn hóa thôn Làng Già ở đâu?", ans: "Ràn văn hóa Bán Già dậu lậư?", hint: "dậu lậư" },
      { vi: "Cậu cứ đi thẳng con đường này nhé.", ans: "Mứng cậư pây giàu ron nấy nớ.", hint: "pây giàu" },
      { vi: "Đến cây cầu nhỏ thì rẽ trái.", ans: "Tằng tìu kìu ý chí pợc bợng slúi.", hint: "pợc bợng" },
      { vi: "Từ đây đến đó có xa không?", ans: "Từ nấy pây tằng ken té chay bâư?", hint: "chay bâư" },
      { vi: "Mình đi xe đạp có được không?", ans: "Cú pây xe đạp đáy bâư?", hint: "xe đạp" },
      { vi: "Đường này khá dễ đi.", ans: "Ron nấy pây ngại rọ.", hint: "ngại rọ" },
      { vi: "Chỉ khoảng mười phút thôi.", ans: "Chỉ khoạng sịp phút rọ.", hint: "sịp phút" },
      { vi: "Mình thấy nhà văn hóa rồi.", ans: "Cú hen ràn văn hóa leo.", hint: "hen ràn" },
      { vi: "Chiều nay mọi người đến đó sinh hoạt phải không?", ans: "Ngòn nấy mọi pấu pây tằng kẹn sinh hoạt sậư bâư?", hint: "kẹn sinh hoạt" },
      { vi: "Hôm nay có buổi sinh hoạt của bản.", ans: "Ngòn nấy mầy buổi sinh hoạt cại bán.", hint: "cại bán" },
      { vi: "Mọi người đang chờ ở nhà văn hóa.", ans: "Mọi pấu đang tăng dậu ràn văn hóa.", hint: "đang tăng" },
      { vi: "Cậu đi nhanh lên nhé!", ans: "Mứng pây vại hấn nớ!", hint: "vại hấn" },
      { vi: "Nhà văn hóa ở gần cây cầu nhỏ.", ans: "Ràn văn hóa dậu cặn en kìu ý.", hint: "cặn en kìu" },
      { vi: "Mình sẽ đi xe đạp đến đó.", ans: "Cú sẹ pây xe đạp tằng kẹn.", hint: "sẹ pây" }
    ]
  },
  {
    id: 10,
    title: "Trường học – thầy cô – bạn bè",
    titleNung: "Ràn tường – Thầy Cô – Bạn bè",
    desc: "Ý thức giữ gìn, trân trọng và truyền lại bản sắc văn hóa Nùng An cho mai sau.",
    vocab: [
      { word: "Văn hóa", vi: "Văn hóa", eg: "Văn hóa quê hương", audio: "văn hoá.mp3" },
      { word: "Quê hương", vi: "Quê hương", eg: "Tom tợc quê hương", audio: "Quê hương.mp3" },
      { word: "Pú vạ", vi: "Trang phục", eg: "Pú vạ truyền thống", audio: "Đò tén.mp3" },
      { word: "Cậư cáng", vi: "Tiếng nói", eg: "Cậư cáng hùn Nòng", audio: "Cậư cáng.mp3" },
      { word: "Ràn cạc", vi: "Nhà sàn", eg: "Ràn cạc truyền thống", audio: "Ràn cạc.mp3" },
      { word: "Làn điệu dân gian", vi: "Làn điệu dân gian", eg: "Điệu sli, điệu then", audio: "làn điệu dân gian.mp3" },
      { word: "Phong tục", vi: "Phong tục", eg: "Phong tục đâư bán", audio: "Phong tục.mp3" },
      { word: "Giợ", vi: "Gìn giữ", eg: "Giợ văn hóa", audio: "giữ gìn.mp3" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ngòn nấy thầy nàu lớp rau mầy hoạt động mựng?", vi: "Hôm nay thầy nói lớp mình sẽ có hoạt động gì vậy?" },
      { speaker: "Lan", nung: "Thầy nàu tù sày tìm hiểu ma văn hóa quê hương, đặc biệt là nét đây cại đồng bào Nòng dậu xạ Lục Yên.", vi: "Thầy bảo chúng mình cùng tìm hiểu về văn hóa quê hương, đặc biệt là những nét đẹp truyền thống của đồng bào Nùng tại xã Lục Yên." },
      { speaker: "Mai", nung: "Đây quạ! Cú ại tìm hiểu ma pú rạ, cậư cáng them các món cân truyền thống.", vi: "Hay quá! Mình muốn tìm hiểu về trang phục, tiếng nói và những món ăn truyền thống." },
      { speaker: "Lan", nung: "Lấy cú ại ra ma ràn cạc, các làn điệu dân gian them phong tục đâư bán.", vi: "Còn mình muốn tìm hiểu về nhà sàn, các làn điệu dân gian và những phong tục trong bản." },
      { speaker: "Mai", nung: "Thầy lấy thặng rau cáo mựng them bấư?", vi: "Thầy còn dặn chúng mình điều gì nữa không?" },
      { speaker: "Lan", nung: "Thầy nàu văn hóa chị đáy giợ khi rạu ro trân trọng them slôn tạo hấư pại lăng.", vi: "Thầy bảo văn hóa chỉ được gìn giữ khi chúng mình biết trân trọng và tiếp tục truyền lại cho thế hệ sau." },
      { speaker: "Mai", nung: "Hẹn rau tù sày cúc bài lận có ma văn hóa bón rau nớ!", vi: "Vậy chúng mình cùng làm một bài giới thiệu về văn hóa quê mình nhé!" }
    ],
    tf: [
      { q: "Lớp cại Mai them Lan sẹ ra ma văn hóa quê hương.", ans: true, exp: "Lớp của Mai và Lan sẽ tìm hiểu về văn hóa quê hương." },
      { q: "Mai ại ra ma ràn cạc them các làn điệu dân gian.", ans: false, exp: "Mai muốn tìm hiểu về trang phục, tiếng nói và món ăn; Lan mới tìm hiểu nhà sàn." },
      { q: "Thầy nàu các bạn trân trọng them truyền tạo văn hóa hấư pại lăng.", ans: true, exp: "Thầy nhắc các bạn cần trân trọng và truyền lại văn hóa cho thế hệ sau." }
    ],
    quizzes: [
      { q: "Lớp cại Mai them Lan sẹ ra ró ma cáo mựng?", opts: ["A. Thiên nhiên tom tớc", "B. Văn hóa tom tớc", "C. Lịch sử ràn tường", "D. Hoạt động thể thao"], correct: 1 },
      { q: "Mai ại ra ró những nội dung mựng?", opts: ["A. Pú vạ, cậư cáng them món cân truyền thống.", "B. Ràn cạc, làn điệu dân gian them phong tục.", "C. Thể thao, âm nhạc và hội họa.", "D. Sẹc, máy tính, công nghệ."], correct: 0 },
      { q: "Lan ại ra ró ma nhựng nội dung lậư?", opts: ["A. Pú vạ them món cân.", "B. Ràn cạc, làn điệu dân gian them phong tục.", "C. Ràn tường them bạn bè.", "D. Chợ them hoạt động hai sấư."], correct: 1 },
      { q: "Rừng cậư thày, văn hóa đáy thìn giợ lúc lậư?", opts: ["A. Lúc mọi pấu ro trân trọng them truyền tạo.", "B. Lúc mọi pấu chi ra ró ma văn hóa.", "C. Cúc văn hóa Nòng an hấn mạng.", "D. Lúc mọi pấu tổ chức lai hoạt động."], correct: 0 },
      { q: "Mai them Lan ại tù sày cúc mựng?", opts: ["A. Shí bài văn hóa ràn tường.", "B. Cúc bài lấn cá lé ma văn hóa quê rạu.", "C. Tổ chức buổi tham quan lé.", "D. Cúc bài lận có ma món cân."], correct: 1 }
    ],
    matchWords: [
      { nung: "Văn hóa (Văn hóa)", vi: "Những giá trị, lối sống và nét đẹp được hình thành trong cộng đồng." },
      { nung: "Đò tén (Trang phục)", vi: "Những cách ăn mặc đặc trưng của một cộng đồng hoặc dân tộc." },
      { nung: "Câư cáng (Tiếng nói)", vi: "Ngôn ngữ được sử dụng trong giao tiếp hằng ngày của một cộng đồng." },
      { nung: "Phong tục (Phong tục)", vi: "Những thói quen và tập quán được lưu truyền trong đời sống cộng đồng." },
      { nung: "Gìn giợ (Gìn giữ)", vi: "Bảo vệ và duy trì những giá trị tốt đẹp qua nhiều thế hệ." }
    ],
    scrambles: [
      { vi: "Chúng mình cùng tìm hiểu văn hóa quê hương nhé.", words: ["Rau sày", "ra ró", "văn hóa quê hương", "nớ"], ans: "Rau sày ra ró văn hóa quê hương nớ" },
      { vi: "Mai muốn tìm hiểu về trang phục truyền thống.", words: ["Mai ại", "ra ró", "ma pú rạ", "truyền thống"], ans: "Mai ại ra ró ma pú rạ truyền thống" },
      { vi: "Văn hóa cần chúng ta biết trân trọng và gìn giữ.", words: ["Văn hóa", "cần rạu", "rọ", "trân trọng", "them gìn giự"], ans: "Văn hóa cần rạu rọ trân trọng them gìn giự" }
    ],
    rewrites: [
      { vi: "Hôm nay lớp mình có hoạt động gì vậy.", ans: "Ngòn nấy lớp rau mầy cáo mựng hẹn.", hint: "lớp rau" },
      { vi: "Chúng mình cùng tìm hiểu về văn hóa quê hương nhé!", ans: "Rau tù sày ra ró ma văn hóa quê hương nớ!", hint: "ra ró" },
      { vi: "Mình muốn tìm hiểu về trang phục truyền thống.", ans: "Cú ại ra ró ma pú rạ truyền thống.", hint: "pú rạ" },
      { vi: "Mình muốn tìm hiểu về tiếng nói của người Nùng.", ans: "Cú ại ra ró ma cậư cáng cai hùn Nòng.", hint: "cậư cáng" },
      { vi: "Những món ăn truyền thống rất thú vị.", ans: "Nhựng món cân truyền thống đây lai.", hint: "đây lai" },
      { vi: "Mình muốn tìm hiểu về nhà sàn.", ans: "Cú ại ra ró mà ràn cạc.", hint: "ràn cạc" },
      { vi: "Mình thích các làn điệu dân gian.", ans: "Cú ại các làn điệu dân gian.", hint: "làn điệu" },
      { vi: "Trong bản có nhiều phong tục truyền thống.", ans: "Đâư bán mầy lai phong tục truyền thống.", hint: "đâư bán" },
      { vi: "Thầy muốn chúng mình tìm hiểu về văn hóa quê hương.", ans: "Thầy ại rau ra ró ma văn hóa quê hương.", hint: "Thầy ại" },
      { vi: "Văn hóa quê hương rất đáng trân trọng.", ans: "Văn hóa quê hương rất đáy trân trọng.", hint: "đáy trân trọng" },
      { vi: "Chúng mình cần biết gìn giữ văn hóa.", ans: "Rạu thúc ro gìn giợ văn hóa.", hint: "gìn giợ" },
      { vi: "Văn hóa cần được truyền lại cho thế hệ sau.", ans: "Văn hóa cần đáy slôn tạo hấư pái lăng.", hint: "slôn tạo" },
      { vi: "Chúng mình cùng làm một bài giới thiệu nhé!", ans: "Rau tù sày cúc bài giới thiệu nứng nớ!", hint: "cúc bài" },
      { vi: "Mình muốn giới thiệu văn hóa quê mình.", ans: "Rạu ại giới thiệu văn hóa cại quê hương rạu.", hint: "quê hương rạu" },
      { vi: "Chúng mình hãy cùng nhau gìn giữ những nét đẹp truyền thống.", ans: "Rau tù sày gìn giợ nhựng nét đây truyền thống.", hint: "nét đây" }
    ]
  }
];

let currentLessonId = 1;
let selectedColA = null;
let matchedPairs = 0;
let allFlashcards = [];
let currentCardIndex = 0;
let activeAudioPlayer = null;

window.addEventListener('DOMContentLoaded', () => {
  initHomeLessonGrid();
  initSidebar();
  loadLesson(1);
  initFlashcards();
  initDictionary();
  initScrollEffects();

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openDictModal();
    }
    if (e.key === 'Escape') {
      closeDictModal();
    }
  });
});

/* HÀM PHÁT ÂM THANH MP3 TỰ ĐỘNG DÒ ĐƯỜNG DẪN */
function playWordAudio(audioFileName, wordLabel, cardEl) {
  if (!audioFileName) return;

  if (activeAudioPlayer) {
    activeAudioPlayer.pause();
    activeAudioPlayer.currentTime = 0;
  }

  document.querySelectorAll('.vocab-card').forEach(c => c.classList.remove('playing-audio'));
  if (cardEl) cardEl.classList.add('playing-audio');

  // Thử phát trực tiếp ở thư mục gốc trước, nếu không thấy sẽ tự động tìm trong thư mục "Âm thanh từ vựng/"
  const primaryPath = encodeURI(audioFileName);
  const fallbackFolder = encodeURI(`Âm thanh từ vựng/${audioFileName}`);

  const audio = new Audio(primaryPath);
  activeAudioPlayer = audio;

  showToast(`Đang phát: ${wordLabel}`);

  audio.play().catch(() => {
    const backupAudio = new Audio(fallbackFolder);
    activeAudioPlayer = backupAudio;
    backupAudio.play().catch(() => {
      showToast(`Chưa tìm thấy file: ${audioFileName}`);
    });
    backupAudio.onended = () => {
      if (cardEl) cardEl.classList.remove('playing-audio');
    };
  });

  audio.onended = () => {
    if (cardEl) cardEl.classList.remove('playing-audio');
  };
}

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (scrollTop > 350) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function adjustStoryFont(storyId, change) {
  const storyEl = document.getElementById(storyId);
  if (!storyEl) return;
  const currentSize = parseFloat(window.getComputedStyle(storyEl, null).getPropertyValue('font-size'));
  const newSize = currentSize + (change * 1.5);
  if (newSize >= 15 && newSize <= 25) {
    storyEl.style.fontSize = newSize + 'px';
  }
}

function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  const navMap = {
    'home': 0,
    'lessons': 1,
    'flashcards': 2,
    'library': 3,
    'videos': 4,
    'stories': 5,
    'culture': 6
  };
  const navItems = document.querySelectorAll('.nav-item');
  if (navItems[navMap[viewName]]) {
    navItems[navMap[viewName]].classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchBookTab(bookKey, bookUrl, btnEl) {
  document.querySelectorAll('.book-tab-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  const iframe = document.getElementById('library-iframe');
  if (iframe) iframe.src = bookUrl;
  showToast(`Đang mở: ${btnEl.innerText.trim()}`);
}

function switchVideo(num, fileName, title, desc) {
  const player = document.getElementById('player-screen');
  const source = document.getElementById('video-source');
  
  source.src = fileName;
  player.load();
  player.play().catch(() => {});

  document.getElementById('now-playing-title').innerText = title;
  document.getElementById('now-playing-desc').innerText = desc;

  document.querySelectorAll('.video-item-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-v${num}`).classList.add('active');

  showToast(`Đang chiếu: ${title}`);
}

function initHomeLessonGrid() {
  const container = document.getElementById('home-lesson-grid');
  container.innerHTML = LESSONS_DATA.map(l => `
    <div class="lesson-card" onclick="selectLessonAndOpen(${l.id})">
      <div>
        <span class="lesson-num">Bài ${l.id}</span>
        <h4>${l.title}</h4>
        <p>${l.desc}</p>
      </div>
      <div class="lesson-card-footer">
        <span><i class="fa-solid fa-volume-high"></i> Có phát âm chuẩn</span>
        <span style="color: var(--secondary); font-weight: 800;"><i class="fa-solid fa-arrow-right"></i> Vào học</span>
      </div>
    </div>
  `).join('');
}

function initSidebar() {
  const container = document.getElementById('lesson-sidebar-items');
  container.innerHTML = LESSONS_DATA.map(l => `
    <div class="lesson-list-item ${l.id === 1 ? 'active' : ''}" id="sidebar-item-${l.id}" onclick="loadLesson(${l.id})">
      <i class="fa-solid fa-bookmark" style="font-size: 0.8rem;"></i>
      <span>Bài ${l.id}: ${l.title}</span>
    </div>
  `).join('');
}

function selectLessonAndOpen(id) {
  switchView('lessons');
  loadLesson(id);
}

function loadLesson(id) {
  currentLessonId = id;
  const lesson = LESSONS_DATA.find(l => l.id === id) || LESSONS_DATA[0];

  document.querySelectorAll('.lesson-list-item').forEach(item => item.classList.remove('active'));
  const activeSidebarItem = document.getElementById(`sidebar-item-${id}`);
  if (activeSidebarItem) activeSidebarItem.classList.add('active');

  document.getElementById('current-lesson-badge').innerText = `Bài ${lesson.id}`;
  document.getElementById('current-lesson-title').innerText = `${lesson.title} (${lesson.titleNung})`;
  document.getElementById('current-lesson-desc').innerText = lesson.desc;

  switchLessonTab('tab-vocab');

  renderVocabSection(lesson.vocab);
  renderDialogueSection(lesson.dialogue);
  renderTFSection(lesson.tf);
  renderQuizSection(lesson.quizzes);
  renderMatchSection(lesson.matchWords);
  renderScrambleSection(lesson.scrambles);
  renderRewriteSection(lesson.rewrites);
}

function switchLessonTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(tp => tp.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
  if (clickedBtn) clickedBtn.classList.add('active');
}

function renderVocabSection(vocabList) {
  const container = document.getElementById('vocab-grid-container');
  container.innerHTML = vocabList.map(v => `
    <div class="vocab-card" onclick="playWordAudio('${v.audio}', '${v.word}', this)">
      <div class="vocab-head-row">
        <div class="vocab-word">${v.word}</div>
        <button class="vocab-audio-btn" onclick="event.stopPropagation(); playWordAudio('${v.audio}', '${v.word}', this.closest('.vocab-card'))">
          <i class="fa-solid fa-volume-high"></i> Nghe
        </button>
      </div>
      <div class="vocab-meaning">Nghĩa: ${v.vi}</div>
      <div class="vocab-example">Ví dụ: ${v.eg}</div>
    </div>
  `).join('');
}

function renderDialogueSection(dialogueList) {
  const container = document.getElementById('dialogue-container');
  container.innerHTML = dialogueList.map(d => `
    <div class="dialogue-bubble">
      <div class="speaker-avatar">${d.speaker.charAt(0)}</div>
      <div class="bubble-body">
        <div class="speaker-name">${d.speaker}</div>
        <div class="bubble-nung">${d.nung}</div>
        <div class="bubble-vi vi-text">${d.vi}</div>
      </div>
    </div>
  `).join('');
}

function toggleTranslation(show) {
  document.querySelectorAll('.vi-text').forEach(el => {
    el.style.display = show ? 'block' : 'none';
  });
}

function renderTFSection(tfList) {
  const container = document.getElementById('tf-container');
  container.innerHTML = tfList.map((item, idx) => `
    <div class="quiz-card" id="tf-card-${idx}">
      <div class="quiz-question">${idx + 1}. ${item.q}</div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-light opt-tf-btn" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkTF(${idx}, true, ${item.ans})">
          <i class="fa-solid fa-check"></i> Đúng (Đ)
        </button>
        <button class="btn btn-light opt-tf-btn" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkTF(${idx}, false, ${item.ans})">
          <i class="fa-solid fa-xmark"></i> Sai (S)
        </button>
      </div>
      <div class="quiz-explanation" id="tf-exp-${idx}">
        <strong>Giải thích:</strong> ${item.exp}
      </div>
    </div>
  `).join('');
}

function checkTF(qIdx, userVal, correctVal) {
  const card = document.getElementById(`tf-card-${qIdx}`);
  const exp = document.getElementById(`tf-exp-${qIdx}`);
  const buttons = card.querySelectorAll('.opt-tf-btn');

  buttons.forEach(b => b.disabled = true);
  if (userVal === correctVal) {
    showToast("Chính xác! Bạn đã ghi điểm.");
    card.style.border = "2px solid var(--success)";
    triggerConfetti();
  } else {
    showToast("Chưa đúng rồi! Hãy xem giải thích.");
    card.style.border = "2px solid var(--error)";
  }
  exp.style.display = "block";
}

function renderQuizSection(quizList) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = quizList.map((q, qIdx) => `
    <div class="quiz-card" id="mc-card-${qIdx}">
      <div class="quiz-question">Câu ${qIdx + 1}: ${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, optIdx) => `
          <div class="opt-btn" onclick="checkQuizOpt(${qIdx}, ${optIdx}, ${q.correct}, this)">
            <span>${opt}</span>
            <i class="fa-regular fa-circle"></i>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function checkQuizOpt(qIdx, optIdx, correctIdx, btnEl) {
  const card = document.getElementById(`mc-card-${qIdx}`);
  const allOpts = card.querySelectorAll('.opt-btn');

  allOpts.forEach(o => o.style.pointerEvents = 'none');

  if (optIdx === correctIdx) {
    btnEl.classList.add('correct');
    btnEl.querySelector('i').className = 'fa-solid fa-circle-check';
    showToast("Câu trả lời hoàn toàn chính xác!");
    triggerConfetti();
  } else {
    btnEl.classList.add('wrong');
    btnEl.querySelector('i').className = 'fa-solid fa-circle-xmark';
    allOpts[correctIdx].classList.add('correct');
    allOpts[correctIdx].querySelector('i').className = 'fa-solid fa-circle-check';
    showToast("Đáp án viền xanh là đáp án đúng.");
  }
}

function renderMatchSection(pairList) {
  selectedColA = null;
  matchedPairs = 0;
  const colA = document.getElementById('match-col-a');
  const colB = document.getElementById('match-col-b');

  colA.innerHTML = '';
  colB.innerHTML = '';

  const shuffledB = [...pairList].sort(() => Math.random() - 0.5);

  pairList.forEach(p => {
    const itemA = document.createElement('div');
    itemA.className = 'match-card';
    itemA.innerText = p.nung;
    itemA.dataset.key = p.nung;
    itemA.onclick = () => selectColA(itemA);
    colA.appendChild(itemA);
  });

  shuffledB.forEach(p => {
    const itemB = document.createElement('div');
    itemB.className = 'match-card';
    itemB.innerText = p.vi;
    itemB.dataset.matchKey = p.nung;
    itemB.onclick = () => selectColB(itemB);
    colB.appendChild(itemB);
  });
}

function selectColA(el) {
  if (el.classList.contains('matched')) return;
  document.querySelectorAll('#match-col-a .match-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedColA = el;
}

function selectColB(el) {
  if (!selectedColA || el.classList.contains('matched')) return;
  if (el.dataset.matchKey === selectedColA.dataset.key) {
    el.classList.add('matched');
    selectedColA.classList.remove('selected');
    selectedColA.classList.add('matched');
    selectedColA = null;
    matchedPairs++;
    showToast("Ghép nối chính xác!");
    if (matchedPairs === 5) {
      triggerConfetti();
      showToast("Xuất sắc! Bạn đã nối đúng toàn bộ.");
    }
  } else {
    showToast("Chưa đúng cặp từ, thử lại nhé!");
    selectedColA.classList.remove('selected');
    selectedColA = null;
  }
}

function renderScrambleSection(scrambles) {
  const container = document.getElementById('scramble-container');
  container.innerHTML = scrambles.map((sc, sIdx) => {
    const shuffledWords = [...sc.words].sort(() => Math.random() - 0.5);
    return `
      <div class="scramble-box" id="scramble-box-${sIdx}">
        <div class="target-meaning"><strong>Câu cần ghép:</strong> "${sc.vi}"</div>
        <div class="answer-dropzone" id="dropzone-${sIdx}"></div>
        <div class="word-pool" id="pool-${sIdx}">
          ${shuffledWords.map(w => `
            <span class="word-chip" onclick="moveChip(this, ${sIdx})">${w}</span>
          `).join('')}
        </div>
        <div style="margin-top: 12px; display: flex; gap: 8px;">
          <button class="btn btn-light" style="font-size: 0.85rem; border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkScramble(${sIdx}, '${sc.ans}')">
            <i class="fa-solid fa-check"></i> Kiểm tra
          </button>
          <button class="btn btn-light" style="font-size: 0.85rem; border: 1.5px solid var(--border); color: var(--text-title);" onclick="resetScramble(${sIdx})">
            <i class="fa-solid fa-rotate-left"></i> Làm lại
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function moveChip(chip, sIdx) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const pool = document.getElementById(`pool-${sIdx}`);

  if (chip.parentElement.id === `dropzone-${sIdx}`) {
    pool.appendChild(chip);
  } else {
    dropzone.appendChild(chip);
  }
}

function checkScramble(sIdx, expectedAns) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const chips = Array.from(dropzone.querySelectorAll('.word-chip'));
  const userAns = chips.map(c => c.innerText.trim()).join(' ');

  if (userAns.toLowerCase() === expectedAns.toLowerCase()) {
    showToast("Tuyệt vời! Bạn ghép đúng câu.");
    dropzone.style.borderColor = "var(--success)";
    triggerConfetti();
  } else {
    showToast("Thứ tự chưa đúng, hãy thử lại.");
    dropzone.style.borderColor = "var(--error)";
  }
}

function resetScramble(sIdx) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const pool = document.getElementById(`pool-${sIdx}`);
  const chips = Array.from(dropzone.querySelectorAll('.word-chip'));
  chips.forEach(c => pool.appendChild(c));
  dropzone.style.borderColor = "#94a3b8";
}

function renderRewriteSection(rewrites) {
  const container = document.getElementById('write-container');
  container.innerHTML = rewrites.map((rw, rIdx) => `
    <div class="write-task">
      <div style="font-size: 0.95rem; font-weight: 800;">Câu ${rIdx + 1}: ${rw.vi}</div>
      <div class="write-input-group">
        <input type="text" class="write-input" id="write-input-${rIdx}" placeholder="Nhập câu tiếng Nùng An...">
        <button class="btn btn-light" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="toggleHint(${rIdx})">
          <i class="fa-regular fa-lightbulb"></i> Gợi ý
        </button>
        <button class="btn btn-primary" onclick="checkRewrite(${rIdx}, '${rw.ans}')">
          Kiểm tra
        </button>
      </div>
      <div class="hint-text" id="hint-${rIdx}"><strong>Gợi ý:</strong> ${rw.hint} | <strong>Đáp án chuẩn:</strong> ${rw.ans}</div>
    </div>
  `).join('');
}

function toggleHint(rIdx) {
  const hint = document.getElementById(`hint-${rIdx}`);
  hint.style.display = hint.style.display === 'block' ? 'none' : 'block';
}

function checkRewrite(rIdx, correctAns) {
  const input = document.getElementById(`write-input-${rIdx}`);
  const cleanUser = input.value.trim().replace(/[.?!]/g, '').toLowerCase();
  const cleanTarget = correctAns.trim().replace(/[.?!]/g, '').toLowerCase();

  if (cleanUser === cleanTarget && cleanUser !== '') {
    showToast("Chính xác tuyệt đối!");
    input.style.borderColor = "var(--success)";
    triggerConfetti();
  } else {
    showToast("Chưa đúng, hãy bấm nút Gợi ý nhé!");
    input.style.borderColor = "var(--error)";
  }
}

function initFlashcards() {
  allFlashcards = [];
  LESSONS_DATA.forEach(l => {
    l.vocab.forEach(v => {
      allFlashcards.push({
        lessonId: l.id,
        word: v.word,
        vi: v.vi,
        eg: v.eg,
        audio: v.audio
      });
    });
  });
  currentCardIndex = 0;
  updateFlashcardView();
}

function updateFlashcardView() {
  if (allFlashcards.length === 0) return;
  const card = allFlashcards[currentCardIndex];
  const cardBox = document.getElementById('flashcard-box');
  cardBox.classList.remove('flipped');

  document.getElementById('fc-badge').innerText = `Bài ${card.lessonId}`;
  document.getElementById('fc-word').innerText = card.word;
  document.getElementById('fc-meaning').innerText = card.vi;
  document.getElementById('fc-example').innerText = `Ví dụ: ${card.eg}`;
  document.getElementById('fc-counter').innerText = `${currentCardIndex + 1} / ${allFlashcards.length}`;
}

function playCurrentFlashcardAudio() {
  if (allFlashcards.length === 0) return;
  const card = allFlashcards[currentCardIndex];
  playWordAudio(card.audio, card.word, null);
}

function flipCard() {
  document.getElementById('flashcard-box').classList.toggle('flipped');
}

function nextCard() {
  if (currentCardIndex < allFlashcards.length - 1) {
    currentCardIndex++;
    updateFlashcardView();
  } else {
    showToast("Đã xem hết thẻ!");
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateFlashcardView();
  }
}

function shuffleFlashcards() {
  allFlashcards.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  updateFlashcardView();
  showToast("Đã xáo trộn kho thẻ!");
}

function markCardMastered() {
  showToast(`Đã thuộc từ: "${allFlashcards[currentCardIndex].word}"`);
  triggerConfetti();
  nextCard();
}

function filterFlashcards(lessonVal) {
  if (lessonVal === 'all') {
    initFlashcards();
  } else {
    const id = parseInt(lessonVal);
    allFlashcards = [];
    const lesson = LESSONS_DATA.find(l => l.id === id);
    if (lesson) {
      lesson.vocab.forEach(v => {
        allFlashcards.push({
          lessonId: lesson.id,
          word: v.word,
          vi: v.vi,
          eg: v.eg,
          audio: v.audio
        });
      });
    }
    currentCardIndex = 0;
    updateFlashcardView();
  }
}

let dictionaryData = [];

function initDictionary() {
  dictionaryData = [];
  LESSONS_DATA.forEach(l => {
    l.vocab.forEach(v => {
      dictionaryData.push({ nung: v.word, vi: v.vi, lesson: l.id, audio: v.audio });
    });
  });
}

function openDictModal() {
  document.getElementById('dict-modal').classList.add('open');
  const input = document.getElementById('dict-search-input');
  input.focus();
  handleDictSearch(input.value);
}

function closeDictModal(e) {
  if (!e || e.target.id === 'dict-modal' || e.target.classList.contains('kbd-shortcut')) {
    document.getElementById('dict-modal').classList.remove('open');
  }
}

function handleDictSearch(query) {
  const q = query.trim().toLowerCase();
  const resultsContainer = document.getElementById('dict-results-container');
  
  const filtered = dictionaryData.filter(item => 
    item.nung.toLowerCase().includes(q) || item.vi.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Không tìm thấy từ tương ứng.</div>`;
    return;
  }

  resultsContainer.innerHTML = filtered.map(item => `
    <div class="dict-result-item" onclick="playWordAudio('${item.audio}', '${item.nung}', null)">
      <div>
        <strong style="color: var(--primary-dark); font-size: 1.05rem;"><i class="fa-solid fa-volume-high" style="color: var(--secondary); margin-right: 6px;"></i>${item.nung}</strong>
        <span style="color: var(--text-muted); font-size: 0.9rem; margin-left: 8px;">— ${item.vi}</span>
      </div>
      <span style="font-size: 0.75rem; background: var(--secondary-light); color: var(--primary); padding: 3px 10px; border-radius: 6px; font-weight: 800;">Bài ${item.lesson}</span>
    </div>
  `).join('');
}

function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#f59e0b', '#14b8a6', '#ef4444', '#7c3aed', '#10b981'];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12 - 3,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (alive) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  render();
}

function showToast(msg) {
  const toast = document.getElementById('toast-notify');
  document.getElementById('toast-text').innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}