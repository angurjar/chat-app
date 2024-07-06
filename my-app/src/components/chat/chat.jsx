
import React, { useEffect, useState } from 'react';
import ChatHeader from './chatHeader';
import Chatmessages from './chatMessages';
import ChatInput from './chatInput';
import { getMessages, sendMessage } from '../../services/chatService';

 const Chat = () => {
    //fetch data from use  useeffect
    const [message, setMessage] = useState([])

    useEffect(() => {
        getMessages().then(fetchmessage => {
            setMessage(fetchmessage)
        })
        /// get new message use websocket
        const socket = new WebSocket('ws://localhost:4000')
        socket.onmessage = (event) => {
            const newmessage = JSON.parse(event.data)

            setMessage(premessage => [...premessage, newmessage])
        }
        return () => {
            socket.close()
        }
    },
        [])


        const handleSendmessage=(Textmessage)=>{
            sendMessage(Textmessage).then(newmessage=>{
setMessage(premessage=>[...premessage,newmessage])
            })

        
        }
    return (
        <div className='chat'>
            <ChatHeader />

    <Chatmessages message={message} />
<ChatInput onSendMessage={handleSendmessage}/>
        </div>
    )
}

export default Chat