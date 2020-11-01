import React from 'react';
import '../Styles/panel.css';
import {FaHashtag} from 'react-icons/fa'

export default function Channels(){
    return(
        <div className="channels">
            <div className="channels__header">
                <h2>Channel(s)</h2>
            </div>
            <div className="channels__container">
                <div className="channel active__channel">
                    <FaHashtag size={20} />
                    <p>The Future?</p>
                </div>
                <div className="channel">
                    <FaHashtag size={20} />
                    <p>Crypto</p>
                </div>
                <div className="channel">
                    <FaHashtag size={20} />
                    <p>Some of us</p>
                </div>
                <div className="channel">
                    <FaHashtag size={20} />
                    <p>The crew</p>
                </div>
                <div className="channel">
                    <FaHashtag size={20} />
                    <p>Loosers</p>
                </div>
            </div>
        </div>
    )
}