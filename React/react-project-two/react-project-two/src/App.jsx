import UserCard from "./components/UserCard"
import sudarshan from "./assets/sudarshan.jpg"
import shivajimaharaj from "./assets/shivajimaharaj.jpg"
import maharana from "./assets/maharana.jpg"


function App() {

  return (
    <div className="container" >
      <UserCard name="Sudarshan" desc="desc1" image={sudarshan} style={{"border-radius":"10px"}}/>
      <UserCard name="chatrapati shivaji maharaj" desc="desc2" image={shivajimaharaj} style={{"border-radius":"10px"}}/>
      <UserCard name="maharana pratap " desc="desc3" image={maharana} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
