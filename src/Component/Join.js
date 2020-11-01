import React,{useState} from 'react';
import '../Styles/join.css';
import {Link} from 'react-router-dom';
import Svg from '../svg/chat.svg';
import Footer from './Footer';

export default function Join(){
    const [name,setName] = useState('');
    // const [room,setRoom] = useState('');
    
    return(
        <div className="join">
        <div className="join__sidebar">
                <h2>Connect with people around you</h2>
                <img src={Svg} alt=""/>
            </div>
            <div className="join__body">
                <div className="username">
                    <p>Username</p>
                    <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter your desired username..." />
                </div>
                <div className="submit">
                    <Link onClick={(e) => name === '' ? e.preventDefault() : null} to={`/dashboard?name=${name}&room=Just us`}>Join Us!</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}