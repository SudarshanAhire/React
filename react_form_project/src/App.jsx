import { useForm } from "react-hook-form"

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register('firstName',{required:true})}/>
      </div>
      <br/>
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName', {required: true})}/>
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input {...register('lastName', {required:true})}/>
      </div>
      <br/>
      <input type='Submit'/>
    </form>
  )
}

export default App
