import React from 'react';
import '../Styles/chatroom.css';
import {FaHashtag} from 'react-icons/fa';
import Reply from './Reply';
import InputBox from './InputBox';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function ChatRoom({users,userMessage,sendmessage,messages,room}){
    return(
        <div className="chatRoom">
            <div className="chatRoom__header">
                <div className="chatRoom__header__description">
                    <div className="chatRoom__channel__name">
                        <FaHashtag size={30} />
                        <div className="user__count">
                            <span>{room}</span>
                        </div>
                    </div>
                </div>
                <div className="chatRoom__header__settings">
                   {users.length !== 0 || undefined ? `${users.length} active user(s)`: null}
                </div>
            </div>
            <ScrollToBottom className="chatRoom__body" id="scroll">
                <Reply messages={messages}/>
            </ScrollToBottom>
            <div className="chatRoom__footer">
                <InputBox userMessage={userMessage} sendmessage={sendmessage}/>
            </div>
        </div>
    )
}