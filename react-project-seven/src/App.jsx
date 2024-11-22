
import './App.css'

function App() {

  function handleClick(){
    alert("I Am Clicked");
  }

  function handleMouseOver(){
    alert("para ke upar mouse lekar aaye ho");
  }

  function handleInputChange(e){
    // console.log("value change ho rahi hai");
    console.log("Value till now : ", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("From submit kar du kya");
  }

  return (
    <div>
      
      {/* <button onClick={()=> alert("button click hau hai")}>
        Click me
      </button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver = {handleMouseOver} style={{border:"1px solid black"}, {color:"red"}}>
        I am para
      </p> */}

      {/* <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
