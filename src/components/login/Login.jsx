import './login.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../lib/firebase"
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';

const Login = () => {

  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  });

  const handleAvatar = (e) => {
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = e =>{
    e.preventDefault();
  } 

  const handleRegister = async e =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const {username, email, password} = Object.fromEntries(formData)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      let imgURL = "";
      if (avatar.file) {
        imgURL = await upload(avatar.file); 
      }

      const userDoc = {
        username,
        email,
        avatar: imgURL, 
        id: res.user.uid,
        blocked: [],
      };

      await setDoc(doc(db, 'users', res.user.uid), userDoc);

      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: []
      });

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='password' name='password' />
            <button>Sign in</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
      <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file">
              <img src={avatar.url || './avatar.png'}/>          
              Upload an image</label>
            <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar} />
            <input type="text" placeholder='Username' name='username' />
            <input type="text" placeholder='Email' name='email' />
            <input type="password" placeholder='password' name='password' />
            <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
