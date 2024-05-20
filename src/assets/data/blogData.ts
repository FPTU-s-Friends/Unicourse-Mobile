import { Tags, Blogs } from "../../types"

export const tagsData: Tags = [
    {
        text: "Front-end",
        textColor: "white",
        backgroundColor: "#FF4032"
    },
    {
        text: "Back-end",
        textColor: "white",
        backgroundColor: "#32A852"
    },
    {
        text: "UI / UX",
        textColor: "white",
        backgroundColor: "#007ACC"
    },
    {
        text: "Hỏi đáp",
        textColor: "white",
        backgroundColor: "#16AEF4"
    },
    {
        text: "Khác",
        textColor: "black",
        backgroundColor: "#DED8D8"
    }
]

export const blogsData: Blogs = [
    {
        user: {
            name: "Dev lương 5 chịu",
            avatar: "https://randomuser.me/api/portraits/men/43.jpg",
            role: "Thành viên",
        },
        tags: [
            {
                text: "Front-end",
                textColor: "white",
                backgroundColor: "#FF4032"
            },
            {
                text: "Back-end",
                textColor: "white",
                backgroundColor: "#32A852"
            }
        ],
        _id: "1",
        thumnail: "https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/Unicourse%20Project%2Fblog2.jpg?alt=media&token=4b470754-8de9-43ab-8bca-2a7be3fbaf17",
        title: "Config Zsh bằng Oh-my-zsh và P10k trên WSL cực ngầu ✨",
        description: "Hello anh em , thì như blog trước mình có nói rằng mình ko có dùng Ubuntu, nhưng sao lại có...",
        createdAt: "3 ngày trước",
        minutedRead: 4,
        blogDetail:"<h2 id=\"i-gioi-thieu-so-luoc\" data-appended=\"true\">I. Giới thiệu sơ lược</h2>\n<p style=\"text-align: justify;\">Hello anh em , th&igrave; như&nbsp;<a href=\"https://fullstack.edu.vn/blog/cach-chinh-theme-oh-my-posh-cho-powershell.html\" target=\"_blank\" rel=\"noopener noreferrer\">blog trước</a>&nbsp;m&igrave;nh c&oacute; n&oacute;i rằng m&igrave;nh ko c&oacute; d&ugrave;ng Ubuntu, nhưng sao lại c&oacute; blog n&agrave;y 🤨?</p>\n<p style=\"text-align: justify;\">&Agrave; th&igrave; m&igrave;nh mới c&agrave;i lại Win 10, v&igrave; m&aacute;y m&igrave;nh cũng yếu 😔, m&agrave; ko c&oacute; tiền mua n&ecirc;n m&igrave;nh đ&atilde; c&agrave;i l&ugrave;i về Win10 x&agrave;i cho n&oacute; sướng nha. Chứ đừng c&oacute; n&oacute;i m&igrave;nh bị th&agrave;nh người \"tối cổ \" nha 😫.</p>\n<p style=\"text-align: justify;\">Lại n&oacute;i về trước đ&oacute; nữa, m&igrave;nh đ&atilde; tu luyện th&agrave;nh ph&aacute;p sư WSL nhưng v&igrave; Win11 m&igrave;nh c&agrave;i n&oacute; cứ lag v&agrave; cấu h&igrave;nh ko hợp n&ecirc;n m&igrave;nh c&oacute; th&agrave;nh t&agrave;i cũng đến Tết C&ocirc;ng G&ocirc; mới c&agrave;i nổi. May thay, nhờ c&oacute; anh F8 chỉ c&aacute;ch c&agrave;i tr&ecirc;n Win10 v&agrave; phần v&igrave; m&igrave;nh cũng đang x&agrave;i con Win10 n&ecirc;n m&igrave;nh c&agrave;i thử, ko ngờ lại th&agrave;nh c&ocirc;ng ngo&agrave;i sức tưởng tưởng ! Chắc m&igrave;nh truyền lại c&aacute;i Win10 cho con ch&aacute;u Dev đời sau lu&ocirc;n qu&aacute; 🥰</p>\n<p style=\"text-align: justify;\">H&igrave;nh &agrave;nh của con em WSL sau khi config:</p>\n<p><img src=\"https://files.fullstack.edu.vn/f8-prod/blog_posts/10265/6628df53e25a0.png\" alt=\"image.png\"></p>\n<p><strong>Th&ocirc;i l&ograve;ng v&ograve;ng đủ rồi, h&ocirc;m nay m&igrave;nh sẽ chỉ c&aacute;c bạn t&oacute;m tắt c&aacute;ch setup một em WSL giống m&igrave;nh nh&eacute; 😊</strong></p>\n<h3>Nhớ coi xong like nhiều cho m&igrave;nh nếu c&aacute;c bạn cũng l&agrave;m được nh&eacute; 👍</h3>\n<h2 id=\"ii-hanh-trinh-tu-luyen-wsl\" data-appended=\"true\">II H&agrave;nh tr&igrave;nh tu luyện WSL 😆</h2>\n<h3>Bước 1: C&agrave;i WSL:</h3>\n<p>Hiện nay c&oacute; kh&aacute; nhiều bạn đang d&ugrave;ng Powershell nhưng lại lười config l&ecirc;n một đẳng cấp mới như WSL, v&agrave; người ta lu&ocirc;n c&oacute; c&acirc;u:</p>\n<blockquote>\n<p>Tr&ecirc;n bước đường th&agrave;nh c&ocirc;ng ko c&oacute; dấu ch&acirc;n của kẻ th&ocirc;ng minh, người lười biếng họ ko đi bộ, họ đi bằng &ocirc; t&ocirc;, trực thăng, t&ecirc;n lửa 😂 (Th&aacute;nh Wibu)</p>\n</blockquote>\n<p>Vậy n&ecirc;n m&igrave;nh sẽ gi&uacute;p người lười biếng th&agrave;nh c&ocirc;ng nh&eacute;!</p>\n<p>Coi video n&agrave;y để nắm r&otilde; c&aacute;c bước nh&eacute;!&nbsp;<a href=\"https://fullstack.edu.vn/external-url?continue=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dypvjxw5qBK0\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.youtube.com/watch?v=ypvjxw5qBK0</a></p>\n<p><strong>Anh em nhớ l&agrave; h&atilde;y c&agrave;i Ubuntu hay Debian cho n&oacute; tương th&iacute;ch code của m&igrave;nh nhoa 😘</strong></p>\n<h3>Bước 2: C&agrave;i Zsh:</h3>\n<p>Wait wait! Đợi đ&atilde;, vội chi, vội l&agrave; ch*t đấy!🤣 V&igrave; ch&uacute;ng ta chưa update package của ubuntu n&ecirc;n cần update nha:</p>\n<pre><code>sudo apt update &amp;&amp; sudo apt upgrade\n</code></pre>\n<p>Rồi install lu&ocirc;n build essential để ph&ograve;ng trừ thi&ecirc;n tai cho tương lai gần:</p>\n<pre><code>sudo apt install build-essential\n</code></pre>\n<p>Giờ mới tải Zsh nhoa 😘:</p>\n<pre><code>sudo apt install zsh\n</code></pre>\n<p>C&agrave;i th&ecirc;m một số thứ như Git nh&eacute;:</p>\n<pre><code>sudo apt install git\n</code></pre>\n<p>C&aacute;c bạn copy từng đoạn một c&aacute;c bạn nhớ nhập mật khẩu c&aacute;c bạn v&agrave;o nh&eacute;! Ko th&igrave; toang</p>\n<p>GIờ th&igrave; bắt đầu c&agrave;i đặt Zsh nh&eacute;!</p>\n<h3>3. H&agrave;nh tr&igrave;nh tu luyện Zsh</h3>\n<p>Giờ c&aacute;c bạn h&atilde;y c&agrave;i Oh-my-zsh theo curl nh&eacute;!</p>\n<pre><code>sh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"\n</code></pre>\n<p>C&aacute;c bạn cũng c&oacute; thể c&agrave;i qua wget nữa:</p>\n<pre><code>sh -c \"$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)\"\n</code></pre>\n<p>C&agrave;i xong n&oacute; hỏi g&igrave; c&aacute;c bạn cứ yes hết cho m&igrave;nh nha.</p>\n<h3>Lưu &yacute; quan trọng: C&aacute;c bạn h&atilde;y c&agrave;i 1 c&aacute;i Nerd Font v&agrave; một c&aacute;i theme cho Window Terminal nh&eacute; nếu ko muốn thất bại trong bước tiếp theo</h3>\n<p>Giờ h&atilde;y c&agrave;i Powerlevel10k nh&eacute;:</p>\n<pre><code>git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\n</code></pre>\n<p>rồi c&aacute;c bạn nhập cho m&igrave;nh</p>\n<pre><code>vi ~/.zshrc\n</code></pre>\n<p>H&atilde;y sửa c&agrave;i phần theme nh&eacute;!,<img src=\"https://files.fullstack.edu.vn/f8-prod/blog_posts/10265/6628e592e0ab8.png\" alt=\"image.png\"></p>\n<p>Sau khi xong rồi c&aacute;c bạn load m&agrave;n h&igrave;nh Ubuntu mới l&agrave; sẽ c&oacute; sự kh&aacute;c biệt:</p>\n<p><img src=\"https://files.fullstack.edu.vn/f8-prod/blog_posts/10265/6628e5dabe1b6.png\" alt=\"image.png\"></p>\n<p>L&agrave;m theo y&ecirc;u cầu của n&oacute; l&agrave; sẽ c&oacute; kết quả ngon th&ocirc;i 😋!</p>\n<h3>Bước 3: C&aacute;c config phụ:</h3>\n<p>C&aacute;c bạn h&atilde;y code theo m&igrave;nh nh&eacute;!</p>\n<ol>\n<li>C&agrave;i zsh-autosuggestions:</li>\n</ol>\n<pre><code>git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\n</code></pre>\n<p>Rồi tới zsh-syntax-highlighting</p>\n<pre><code>git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n</code></pre>\n<p>Xong rồi th&igrave; c&aacute;c bạn chỉnh phần plugins=(...) trong ~/.zshrc cho m&igrave;nh nh&eacute;:</p>\n<p><img src=\"https://files.fullstack.edu.vn/f8-prod/blog_posts/10265/6628e752064eb.png\" alt=\"image.png\"></p>\n<h2 id=\"iii-ket-luan\" data-appended=\"true\">III. Kết luận</h2>\n<p>Vậy l&agrave; m&igrave;nh đ&atilde; setup xong 1 em WSL rồi, giờ c&oacute; thể code thỏa th&iacute;ch lu&ocirc;n 😋, m&igrave;nh chức c&aacute;c bạn th&agrave;nh c&ocirc;ng trong việc setup nh&eacute;!</p>",
        likes: 20,
        comments: 5
    },
    {
        user: {
            name: "Cù Trọng Xoay",
            avatar: "https://firebasestorage.googleapis.com/v0/b/unicourse-f4020.appspot.com/o/images%2Fdownload.jpg?alt=media&token=27ffa58c-b776-4f6a-9492-9e48bb71e008",
            role: "Giảng viên",
        },
        tags: [
            {
                text: "Front-end",
                textColor: "white",
                backgroundColor: "#FF4032"
            },
            {
                text: "UI / UX",
                textColor: "white",
                backgroundColor: "#007ACC"
            }
        ],
        _id: "2",
        thumnail: "https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/Unicourse%20Project%2Fblog1.jpg?alt=media&token=b51fb488-5c45-45f5-bb91-28556378c25d",
        title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer",
        description: "Bài viết này sẽ chia sẽ cho các bạn về vài nguồn tài nguyên mình biết, giúp các bạn code Front-end xịn xò hơn",
        createdAt: "10 ngày trước",
        minutedRead: 5,
        blogDetail:"<h3 style='text-align: justify;'><span style='font-size: 12pt;'><span style='font-family: &quot;Segoe UI&quot;;'><span><strong>7 kỹ năng mềm lập trình viên nên có để thành công</strong></span></span></span></h3><p style='text-align: justify;'><span style='font-size: 10pt;'><span style='font-family: &quot;Segoe UI&quot;;'><span><span><em>Để trở thành một lập trình viên giỏi, chúng ta không chỉ cần phải trau dồi kỹ năng chuyên môn mà còn cần trang bị thêm các kỹ năng mềm. Bài viết này sẽ gợi ý đến bạn 9 kỹ năng mềm lập trình viên nên có để trở nên thành công trong nghề.</em></span><br></span></span></span><span><strong>1. Kỹ năng giao tiếp</strong></span></p><p style='text-align: justify;'><span><span>Đây không chỉ là một kỹ năng mềm lập trình viên nên có mà còn là một kỹ năng cần thiết đối với bất kỳ ai. Giao tiếp hiệu quả giúp cho cuộc sống của chúng ta thoải mái, dễ chịu và thuận lợi hơn, kể cả trong công việc và với các mối quan hệ xã hội.</span></span><span>Để có thể giao tiếp hiệu quả, chúng ta có thể lưu ý một số mẹo dưới đây:</span></p><p style='text-align: justify;'>Luôn nói thật rõ ràng và chắc chắn ngay cả trong trường hợp bạn chưa chắc chắn về điều gì đó, bởi tâm lý con người sẽ luôn chú ý, lắng nghe những người nào sở hữu giọng nói tự tin.</p><p style='text-align: justify;'>Bên cạnh việc học nói, hãy học cả cách lắng nghe, vì khi lắng nghe thì ta sẽ học được cách những người khác giao tiếp.</p><p style='text-align: justify;'>Không ngắt lời người khác khi họ đang nói chuyện, hãy để họ có thể truyền đạt được hết tất cả những gì họ muốn nói, sau đó mới nêu lên suy nghĩ của mình.</p><p style='text-align: justify;'><span><strong>2. Kỹ năng làm việc nhóm</strong></span></p><p style='text-align: justify;'><span>Cho dù bạn có làm nghề gì đi chăng nữa thì cũng sẽ có lúc bạn phải làm việc nhóm. Cho nên nếu muốn thành công hơn, bạn cần học cách làm việc tốt với người khác.</span></p><p style='text-align: justify;'>Làm việc nhóm tốt sẽ đem đến cho bạn không chỉ niềm vui trong công việc mà còn là những mối quan hệ. Có thể họ sẽ giúp đỡ bạn trong tương lai.</p><p style='text-align: justify;'>Sự bất đồng quan điểm là điều luôn gặp phải khi làm việc nhóm. Tuy vậy, những quan điểm khác nhau sẽ giúp bạn tìm ra nhiều giải pháp sáng tạo hơn.</p><p style='text-align: justify;'><strong>3. Tư duy mở</strong></p><p style='text-align: justify;'>Khi tâm trí của bạn rộng mở, bạn sẵn sàng chấp nhận những ý tưởng mới cho dù chúng là của bạn hay của người khác. Ngay cả những ý tưởng tồi tệ nhất cũng có thể truyền cảm hứng cho một điều gì đó tuyệt vời nếu bạn sẵn sàng xem xét chúng trước khi loại bỏ chúng.</p><p style='text-align: justify;'>Bạn càng có nhiều ý tưởng, bạn càng có nhiều dự án tiềm năng để thực hiện.</p><p style='text-align: justify;'><span>Mặc dù không phải mọi ý tưởng sẽ thành hình, nhưng bạn không biết điều gì sẽ xảy ra cho đến khi bạn thật sự suy nghĩ kỹ về nó.</span></p><p style='text-align: justify;'>Hãy để tâm trí cởi mở với những ý tưởng mới không chỉ từ nhóm của bạn mà còn từ những người còn lại trong công ty và thậm chí cả khách hàng. Khách hàng là những người sử dụng sản phẩm của bạn, vì vậy họ là những người tốt nhất để cho bạn biết họ cần gì và những gì là hiệu quả.</p><p style='text-align: justify;'><strong>4. Sự kiên nhẫn</strong></p><p style='text-align: justify;'>Sẽ có lúc công việc buộc bạn phải làm việc với những người không phải là lập trình viên. Điều đó có nghĩa là rất có thể bạn phải giải thích lại những khái niệm kỹ thuật hoặc những lý do quyết định của mình bằng ngôn ngữ đơn giản hơn. Một số người sẽ nắm bắt vấn đề được ngay lập tức, một số thì sẽ cần thêm thời gian. Kiên nhẫn với mọi người vào những thời điểm như thế này là điều quan trọng để các nhóm làm việc tốt với nhau.</p><p style='text-align: justify;'>Một số người ngoài ngành sẽ không hiểu được lập trình khó như thế nào hay viết code mất thời gian bao lâu. Cho nên đôi khi họ sẽ có những yêu cầu hơi cao. Hãy dành thời gian để giải thích tại sao nó không đơn giản như họ nghĩ và trả lời tất cả câu hỏi mà họ có. Khi vấn đề được rõ ràng, việc hợp tác với nhau sẽ dễ dàng hơn rất nhiều.</p><p style='text-align: justify;'><strong>5. Khả năng giải quyết vấn đề</strong></p><p style='text-align: justify;'>Hãy nhanh chóng rèn cho mình kỹ năng giải quyết vấn đề bởi vì cách mà bạn xử lý vấn đề sẽ có ảnh hưởng lớn đến cả sự nghiệp của bạn và công ty bạn đang làm việc.</p><p style='text-align: justify;'>Giải quyết vấn đề là kỹ năng quan trọng mà nhà tuyển dụng tìm kiếm ở những nhân viên tương lai, vì vậy bạn càng có nhiều kinh nghiệm trong việc giải quyết vấn đề thì càng lợi thế.</p><p style='text-align: justify;'>Khi tiếp cận một vấn đề mới, hãy luôn nhìn nhận vấn đề đó một cách khách quan, ngay cả khi đó là vấn đề bạn vô tình tạo ra</p><p style='text-align: justify;'>Khi bạn biết chính xác vấn đề là gì, hãy tìm hiểu nguyên nhân gây ra vấn đề. Rất dễ để tìm ra giải pháp khi bạn biết nguyên nhân.</p><p style='text-align: justify;'>Điều quan trọng cần nhớ là cho dù bạn có gây ra vấn đề hay không, bạn không cần phải khắc phục nó một mình. Làm việc với những người trong và ngoài nhóm giúp bạn giải quyết vấn đề nhanh hơn so với làm việc đó một mình.</p><p style='text-align: justify;'><strong>6. Sự trách nhiệm</strong></p><p style='text-align: justify;'>Tự chịu trách nhiệm với những sai lầm của mình. Có thể khó thừa nhận rằng một quyết định của bạn đã tạo ra một kết quả không mong muốn, nhưng điều đó tốt cho bạn và nhân viên của bạn về lâu dài.</p><p style='text-align: justify;'><span>Che giấu sai lầm sẽ mắc lại sai lầm tương tự trong tương lai</span></p><p style='text-align: justify;'>Thay vì phóng lao phải theo lao, hãy thừa nhận trách nhiệm. Sử dụng cơ hội đó để phân tích những gì đã xảy ra, sau đó sử dụng dữ liệu này để khắc phục sự cố và hướng dẫn bạn và đồng nghiệp của bạn cách tránh những sai lầm tương tự.</p><p style='text-align: justify;'><span><strong>7. Kỹ năng quản lý thời gian</strong></span></p><p style='text-align: justify;'>Khi bạn có nhiều việc phải làm, biết cách quản lý thời gian là điều rất quan trọng. Quản lý thời gian hiệu quả cho phép bạn tập trung vào những gì quan trọng nhất và hoàn thành công việc hiệu quả hơn. Không dành sự tập trung hoàn toàn vào một điều gì đó có nghĩa là các task sẽ mất nhiều thời gian hơn để hoàn thành và bạn có nhiều khả năng mắc lỗi hơn. Nếu bạn thường làm nhiều việc, hãy sắp xếp thứ tự ưu tiên cho danh sách việc cần làm của bạn sau đó sử dụng một trong những kỹ thuật được đề cập ở trên để giúp bạn tập trung hơn</p>",
        likes: 10,
        comments: 3
    }
]