import { useEffect, useState } from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/details/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {currentUser, fetchUserInfo} = useUserStore()


  // const {currentUser, isLoading, fetchUserInfo} = useUserStore()
  const {chatId} = useChatStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
      setIsLoading(false);

    })
    return ()=>{
      unSub();
    }
  },[fetchUserInfo])

  if(isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className='container'>
    {
      currentUser ? (
        <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Detail/>}
        </>
      ) : (<Login/>)
    }
   
    </div>
  )
}

export default App