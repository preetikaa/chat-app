import './userinfo.css'

const Userinfo = () => {
    return (
        <div className = 'userinfo'>
            <div className = "user">
                <img src='./avatar.png'/>
                <h2>JOHN</h2>
            </div>
            <div className = "icons">
                <img src='./more.png' />
                <img src='./video.png' />
                <img src='./edit.png' />
            </div>
        </div>
    )
}

export default Userinfo;