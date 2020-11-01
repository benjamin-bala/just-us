import React from 'react';
import '../Styles/inputbox.css';


export default function InputBox({userMessage,sendmessage}){
    return(
        <div className="inputbox">
            <input type="text" onChange={userMessage} onKeyPress={sendmessage} placeholder="Type a message..." />
        </div>
    )
}