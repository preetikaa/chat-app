import { useState } from 'react'
import './chatlist.css'


const ChatList = () => {
    const [addMode, setaddMode] = useState(false)
    return (
        <div className="chatlist">
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' />
                    <input type="text" placeholder='Search' />
                </div>
                <img src={addMode ? "./minus.png":'./plus.png'} className='add'
                    onClick={()=> setaddMode(prev=>!prev)}
                />
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png'/>
                <div className='texts'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList;