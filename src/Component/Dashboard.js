import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../Styles/dashboard.css';
import Nav from './Nav';
import Panel from './Panel';
import ChatRoom from './ChatRoom';

let socket;

export default function Dashboard({location}){
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://just-us1.herokuapp.com/';

    useEffect(()=> {
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        
        setName(name);
        setRoom(room);

        socket.emit('join', {name,room},(error) => {
            if(error) {
                alert(error);
              }
        });
    }, [ENDPOINT, location.search])

    useEffect(()=>{
        socket.on('message',(message)=> {
            setMessages([...messages, message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [messages],[users]);

    const sendUserMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message,()=> setMessage(''))
        }
    }
    
    const userMessage = (e) => setMessage(e.target.value);
    const sendmessage = (e) => {
        if(e.key === 'Enter'){
            sendUserMessage(e) 
            e.target.value = '';
            e.target.focus();
        } 
        else return null
    }
    return(
        <div className="dashboard">
            <div className="left-panel">
                <Nav />
                <Panel users={users}/>
            </div>
            <div className="main-content">
                <ChatRoom users={users} room={room} messages={messages} userMessage={userMessage} sendmessage={sendmessage}/>
            </div>
        </div>
    )
}