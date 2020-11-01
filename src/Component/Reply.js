import React from 'react';
import {CgProfile} from 'react-icons/cg';
import '../Styles/reply.css';
import ReactEmoji from 'react-emoji';

export default function Reply({messages}){
    return(
        messages.map((item => {
            return(
                <div key={Math.random()} className="reply">
                    <CgProfile size={30}/>
                    <div className="reply__message">
                        <div className="reply__message__header">
                            <h3>{item.user}</h3>
                        </div>
                        <p>{ReactEmoji.emojify(item.text)}</p>
                    </div>  
                </div>
            )
            
        }))
        
    )
}