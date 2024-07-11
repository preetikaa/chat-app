import Chat from "./components/chat/Chat"
import Detail from "./components/details/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"

const App = () => {

  const user = true;

  return (
    <div className='container'>
    {
      user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
      ) : (<Login/>)
    }
   
    </div>
  )
}

export default App