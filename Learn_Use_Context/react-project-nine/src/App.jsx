import {createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step:1  create context
const UserContext = createContext();
//step:2 wrap all the child inside a provider
//step:3 pass value
//step:4 consumer k ander jake consume karalo

function App() {
  const [user, setUser] = useState({name:"sudarshan"});
  
  return (
   <>
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
   </>
  )
}

export default App
export {UserContext}
