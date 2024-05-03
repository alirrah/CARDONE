import chatData from "../../../../assets/fake-data/chat-data.jsx";
import ChatList from "../chat-list/chat-list.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './chat-text.scss';
import URL from "../../../../assets/fake-data/url.jsx";

const ChatText = () => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        setChatList(chatData);
    }, []);

    return (
        <div className={`chat-text ${chatList.length === 0 && "empty"}`}>
            {chatList.length === 0 ?
                <div>
                    <img src="src/assets/image/black&white-logo.webp" alt="empty chat"/>

                    <div className='text'>
                        <p>پیامی وجود ندارد</p>

                        <p className='subtitle'>برای نمایش پیام ها روی یکی از چت های سمت راست کلیک کنید</p>
                    </div>

                    <div>
                        <Link to={`${URL}/create-lead`}>افزودن راهنما</Link>

                        <Link to={`${URL}/create-car`}>افزودن ماشین</Link>

                        <Link to={`${URL}/create-customer`}>افزدون مشتری</Link>
                    </div>
                </div> : <ChatList/>
            }
        </div>
    );
}

export default ChatText;