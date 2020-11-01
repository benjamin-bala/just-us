import React from 'react';
import '../Styles/nav.css';
import {FiSearch,FiSettings} from 'react-icons/fi'
import {FaHashtag} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {IoMdNotifications} from 'react-icons/io'

export default function Nav(){
    const setIconText = () => {
        document.querySelector(".icon-text").classList.toggle("show");
    }
    return(
        <div className="nav">
            <div onClick={setIconText} className="icons">
                <FiSearch className="search" size={30} />
                <h3 className="icon-text show">Search</h3>
            </div>
            <div className="icons">
                <FaHashtag size={30} />
                <h3 className="icon-text show">Channels</h3>
            </div>
            <div className="icons">
                <IoMdNotifications size={30} />
                <h3 className="icon-text show">Notifications</h3>
            </div>
            <div className="icons">
                <FiSettings size={30} />
                <h3 className="icon-text show">Settings</h3>
            </div>
            <div className="icons">
                <CgProfile size={30} />
                <h3 className="icon-text show">Profile</h3>
            </div>
        </div>
    )
}