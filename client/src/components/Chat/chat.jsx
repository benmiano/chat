import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './chat.css';
import InfoBar from "../Infobar/infobar";
import Input from "../Input/input";
import Messages from "../Messages/messages";

let socket;

function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let pageLocation;
    const ENDPOINT = "http://localhost:5000";



    useEffect(() => {
        // get name and room from url
        const urlParams = new URLSearchParams(window.location.search);
        pageLocation = urlParams;
        const { name, room } = Object.fromEntries(urlParams.entries());
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit("join", { name, room }, () => {

        });

        // on leaving chat
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [ENDPOINT, pageLocation]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    // function for sending message
    const sendMessage = (event) => {
        event.preventDefault();

        if (message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages);

    return (
        <div className = 'outerContainer'>
            <div className = 'container'>
                <InfoBar room = {room}/>
                <Messages messages = {messages} name = {name} />
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage} />
            </div>
        </div>)
}
export default Chat;