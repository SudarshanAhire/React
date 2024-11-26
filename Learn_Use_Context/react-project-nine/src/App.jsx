import {createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step:1  create context
// const UserContext = createContext();
//step:2 wrap all the child inside a provider
//step:3 pass value
//step:4 consumer k ander jake consume karalo

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"sudarshan"});
  const [theme, setTheme] = useState('light');
  return (

    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA/>
      </div>
    </ThemeContext.Provider>


  //  <>
  //   <UserContext.Provider value={user}>
  //     <ChildA />
  //   </UserContext.Provider>
  //  </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
