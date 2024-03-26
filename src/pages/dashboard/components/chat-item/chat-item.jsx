import "./chat-item.scss";

function ChatItem(props) {
    const clickHandling = () => {
        props.changeID(props.data.id);
    }

    return (
        <button className={`chat-item ${props.data.id === props.activeID ? 'active' : ''}`} onClick={clickHandling}>
            <div className={`profile ${props.data.online ? "online" : "offline"}`}></div>

            <div>
                <div>
                    <div className='time'>
                        <p>از {props.data.form}</p>

                        <p>{props.data.time}</p>
                    </div>

                    <div className='title'>
                        <b className={props.data.unread !== 0 ? 'unread' : ''}>{props.data.title}</b>
                        {props.data.unread !== 0 && <p>{props.data.unread}</p>}
                    </div>
                </div>

                <p className='subtitle'>{props.data.subtitle}</p>
            </div>
        </button>
    );
}

export default ChatItem;