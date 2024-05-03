import historyData from "../../../../assets/fake-data/history-data.jsx";
import ChatItem from "../chat-item/chat-item.jsx";
import {useEffect, useState} from "react";
import "./chat-history.scss";

const ChatHistory = () => {
    const [history, setHistory] = useState([]);
    const [activeID, setActiveID] = useState(-1);
    let currentDate = null;

    useEffect(() => {
        setHistory(historyData);
    }, []);

    const changeActiveID = (ID) => {
        setActiveID(ID);
    }

    return (
        <div className='chat-history'>
            {history.map((item, index) => {
                if (item.date !== currentDate) {
                    currentDate = item.date;

                    return (
                        <>
                            <div className='date'>
                                <p>{currentDate}</p>
                            </div>

                            <ChatItem key={index} data={item} activeID={activeID} changeID={changeActiveID}/>
                        </>
                    );
                } else {
                    return (
                        <ChatItem key={index} data={item} activeID={activeID} changeID={changeActiveID}/>
                    );
                }
            })}
        </div>
    );
}

export default ChatHistory;