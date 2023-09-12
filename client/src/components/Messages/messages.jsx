import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/message';
import './messages.css';

// shows chat area and all messages
const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className = "messages">
            {messages.map((message, i) => <div key={i}>
                <Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages;