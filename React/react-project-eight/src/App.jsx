
import './App.css'
import {useEffect, useState} from 'react'
import LoggerComponent from './components/LoggerComponents'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import MultiEffectComponent from './components/MultiEffectComponent'


function App() {
  // const[count, setCount] = useState(0);
  // const[total, setTotal] = useState(1);
  //first -> side-effect fuction
  //second -> clean-up function
  //third -> comma separated dep list

  // //variation: 1
  // //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // //variation: 2
  // //that runs on only first render
  // useEffect(() => {
  //   alert("I will render on only first render");
  // }, [])

  // //variation: 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])

  // //variation: 4
  // //multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total])

  // //variation: 5
  // //is baar let's add a cleanup function
  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert("count is unmounted from UI");
  //   }
  // }, [count])

  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }
  
  return (
   <div>

    {/* <LoggerComponent/> */}
     {/* <TimerComponent/>  */}
     {/* < DataFetcher/> */}
     {/* < ResizeComponent /> */}
     {/* < MultiEffectComponent /> */}

      {/* <button onClick={handleClick}>
        Click me
      </button>
      <br/>
      Count is: {count}

      <br/>
      
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is: {total} */}
   </div>
  )
}

export default App
