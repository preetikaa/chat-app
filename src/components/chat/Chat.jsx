import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { useState, useRef, useEffect } from 'react'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'

const Chat = () => {
    const[open, setOpen] = useState(false)
    const[text, setText] = useState("")
    const[chat, setChat] = useState()

    const {currentUser} = useUserStore()
    const {chatId, user} = useChatStore()



    const handleEmoji = (e) => {
        setText((prev)=>prev + e.emoji)
        setOpen(false)
    }

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:'smooth'})
    },[])

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', chatId), (res)=>{
            setChat(res.data())
        })
        return () => {
            unSub()
        }
    },[chatId])

    const handleSend = async () => {
        if(text === "") return;

        try {
            await updateDoc(doc(db,"chats",chatId),{
                messages:arrayUnion({
                    senderId: currentUser.id,
                    text,
                    createdAt: new Date(),
                })
            })

            const userIDs = [currentUser.id, user.id]

            userIDs.forEach(async(id)=>{

                const userChatsRef = doc(db,'userchats', id)
                const userChatsSnapshot = await getDoc(userChatsRef)
    
                if(userChatsSnapshot.exists()){
                    const userChatsData = userChatsSnapshot.data()
    
                    const chatIndex = userChatsData.chats.findIndex(c=>c.chatId === chatId)
    
                    userChatsData.chats[chatIndex].lastMessage = text
                    userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false
                    userChatsData.chats[chatIndex].updatedAt = Date.now()
    
                    await updateDoc(userChatsRef,{
                        chats: userChatsData.chats,
    
                    })
                }
            })

        } catch (error) {
            console.log(error);
            
            
        }

    }
    
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
            {chat?.messages?.map(message=>(
                <div className='message own' key={message?.createdAt}>
                    <div className='texts'>
                        {message.img && <img src={message.img}/>}
                        <p>{message.text}</p>
                        {/* <span>{message}</span> */}
                    </div>
                </div>
            ))
            }
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
                <button className='sendButton' onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Chat;

