import { auth } from '../../lib/firebase';
import './detail.css'

const Detail = () => {
    return (
        <div className = 'detail'>
            <div className = 'user'>
                <img src='./avatar.png'/>
                <h2>Jane</h2>
                <p>Minim eu laboris anim mollit.</p>
            </div>
            <div className = 'info'>
                <div className = 'option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div>   
                <div className = 'option'>
                    <div className='title'>
                        <span>Privacy & help</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div> 
                <div className = 'option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img src='./arrowDown.png'/>
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                                <span>photo_2024.png</span>
                            </div>
                            <img src='./download.png' className='icon'/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                                <span>photo_2024.png</span>
                            </div>
                            <img src='./download.png' className='icon'/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                                <span>photo_2024.png</span>
                            </div>
                            <img src='./download.png' className='icon'/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                                <span>photo_2024.png</span>
                            </div>
                            <img src='./download.png' className='icon'/>
                        </div>
                    </div>
                </div> 
                <div className = 'option'>
                    <div className='title'>
                        <span>Shared files</span>
                        <img src='./arrowUp.png'/>
                    </div>
                </div>  
                <button>Block User</button>     
                <button className='logout' onClick={()=>auth.signOut()}>Logout</button>     
            </div>
        </div>
    )
}

export default Detail;