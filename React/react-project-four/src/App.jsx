import {useState} from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0);

    function handleClick(){
      setCount(count + 1);
    }

  return (
    <div>

      <Button incrementCount={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="sudarshan ahire">
        <h1>My name is sudarshan</h1>
        <p>I'm very consistent for my course</p>
        <p>for complete the course</p>
      </Card> */}
    </div>
  )
}

export default App
