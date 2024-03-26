import ChatList from "../chat-list/chat-list.jsx";
import './chat-text.scss';

function ChatText() {
    const chat_list = [];
    return (
        <div className={`chat-text ${!chat_list.isEmpty && "empty"}`}>
            {!chat_list.isEmpty ?
                <div>
                    <img src="src/assets/image/empty-chat.webp" alt="empty chat"/>

                    <p>پیامی وجود ندارد</p>

                    <p>برای نمایش پیام ها روی یکی از چت های سمت راست کلیک کنید</p>
                </div> : <ChatList/>}
        </div>
    );
}

export default ChatText;