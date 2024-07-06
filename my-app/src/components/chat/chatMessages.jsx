
 const ChatMessages=({messages})=>{
    return(
        <div className='chat-message'>
           { messages.map((messages,index)=>(
            <div key={index} className='message'>
                <strong>{messages.user}</strong>{messages.text}
            </div>

           ))}

        </div>
    )

 }

 export default ChatMessages