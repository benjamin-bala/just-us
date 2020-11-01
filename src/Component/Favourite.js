import React from 'react';
import '../Styles/panel.css';
import {FaHashtag} from 'react-icons/fa'
import {HiPlus} from 'react-icons/hi';

export default function Favourite(){
    return(
        <div className="favorite">
            <div className="favourite__header">
                <h2>favourites</h2>
                <HiPlus size={20} />
            </div>
            <div className="favourite__channels__container">
                <div className="favourite__channel active__channel">
                    <FaHashtag size={20} />
                    <p>The Future?</p>
                </div>
                <div className="favourite__channel">
                    <FaHashtag size={20} />
                    <p>Crypto</p>
                </div>
            </div>
        </div>
    )
}