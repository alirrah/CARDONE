import ChatHistory from "../chat-history/chat-history.jsx";
import ChatText from "../chat-text/chat-text.jsx";
import "./chat-box.scss";

const ChatBox = () => {
    return (
        <section className='chat-box'>
            <div className='container'>
                <div className='sidebar'>
                    <form>
                        <select>
                            <option value='text message'>متن پیام</option>
                        </select>
                    </form>

                    <ChatHistory/>
                </div>

                <ChatText/>
            </div>
        </section>
    );
}

export default ChatBox;