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
        thumnail: "https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/Unicourse%20Project%2Fblog2.jpg?alt=media&token=4b470754-8de9-43ab-8bca-2a7be3fbaf17",
        title: "Config Zsh bằng Oh-my-zsh và P10k trên WSL cực ngầu ✨",
        description: "Hello anh em , thì như blog trước mình có nói rằng mình ko có dùng Ubuntu, nhưng sao lại có...",
        createdAt: "3 ngày trước",
        minutedRead: 4
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
        thumnail: "https://firebasestorage.googleapis.com/v0/b/nha-trang-ntne.appspot.com/o/Unicourse%20Project%2Fblog1.jpg?alt=media&token=b51fb488-5c45-45f5-bb91-28556378c25d",
        title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer",
        description: "Bài viết này sẽ chia sẽ cho các bạn về vài nguồn tài nguyên mình biết, giúp các bạn code Front-end xịn xò hơn",
        createdAt: "10 ngày trước",
        minutedRead: 5
    }
]