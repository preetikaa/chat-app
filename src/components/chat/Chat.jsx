import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { useState, useRef, useEffect } from 'react'

const Chat = () => {
    const[open, setOpen] = useState(false)
    const[text, setText] = useState("")


    const handleEmoji = (e) => {
        setText((prev)=>prev + e.emoji)
        setOpen(false)
    }

    const endRef = useRef(null)
    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:'smooth'})
    },[])
    
    

    console.log(text)
    return (
        <div className = 'chat'>
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.png'/>
                    <div className='texts'>
                        <span>Jane</span>
                        <p>Lorem ipsum, sit amet.</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='./phone.png'/>
                    <img src='./video.png'/>
                    <img src='./info.png'/>
                </div>
            </div>
            <div className='center'>
                <div className='message own'>
                    <div className='texts'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Natus quis quae qui! Sint asperiores vero nobis 
                        deserunt aperiam iusto repellendus, optio impedit eius, 
                        reprehenderit dolorum nihil magnam alias, odit quam. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                <img src='./avatar.png'/>
                    <div className='texts'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Natus quis quae qui! Sint asperiores vero nobis 
                        deserunt aperiam iusto repellendus, optio impedit eius, 
                        reprehenderit dolorum nihil magnam alias, odit quam. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Natus quis quae qui! Sint asperiores vero nobis 
                        deserunt aperiam iusto repellendus, optio impedit eius, 
                        reprehenderit dolorum nihil magnam alias, odit quam. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                <img src='./avatar.png'/>
                    <div className='texts'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Natus quis quae qui! Sint asperiores vero nobis 
                        deserunt aperiam iusto repellendus, optio impedit eius, 
                        reprehenderit dolorum nihil magnam alias, odit quam. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <img src='https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Natus quis quae qui! Sint asperiores vero nobis 
                        deserunt aperiam iusto repellendus, optio impedit eius, 
                        reprehenderit dolorum nihil magnam alias, odit quam. </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src='./img.png'/>
                    <img src='./camera.png'/>
                    <img src='./mic.png'/>
                </div>
                <input type='text' placeholder='Type a message...' value={text} onChange={e=>setText(e.target.value)} />
                <div className='emoji'>
                    <img src='./emoji.png' onClick = {()=>setOpen(prev=>!prev)}/>
                    <div className='picker'>
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat;