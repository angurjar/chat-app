import { useState } from "react"



 const ChatInput = ({ onsendMessage }) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventdefault()
        onsendMessage(message)
        setMessage('')
    }

    return (
        <form className='chat-input' onSubmit={handleSubmit}>
            <input type="text" value={message}
                onChange={(e) => setMessage(e.target.value)}
                placholder="type-message"></input>
            <button typeof="submit"> send</button>

        </form>
    )

}
export default ChatInput