import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ChatList from "../chat-list/chat-list.jsx";
import chatData from "../../../../assets/fake-data/chat-data.jsx";
import Url from "../../../../assets/fake-data/url.jsx";
import Image from "../../../../assets/image/black&white-logo.webp";
import "./chat-text.scss";

const ChatText = () => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        setChatList(chatData);
    }, []);

    return (
        <div className={`chat-text ${chatList.length === 0 && "empty"}`}>
            {chatList.length === 0 ?
                <div>
                    <img src={Image} alt="empty chat"/>

                    <div className='text'>
                        <p>پیامی وجود ندارد</p>

                        <p className='subtitle'>برای نمایش پیام ها روی یکی از چت های سمت راست کلیک کنید</p>
                    </div>

                    <div>
                        <Link to={`${Url}/create-lead`}>افزودن راهنما</Link>

                        <Link to={`${Url}/create-car`}>افزودن ماشین</Link>

                        <Link to={`${Url}/create-customer`}>افزدون مشتری</Link>
                    </div>
                </div> : <ChatList/>
            }
        </div>
    );
}

export default ChatText;