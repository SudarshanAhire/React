import { useForm } from "react-hook-form"

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label>First Name: </label>
        <input {...register('firstName')}/>
      </div>
      <br/>
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName')}/>
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input {...register('lastName')}/>
      </div>
      <br/>
    </form>
  )
}

export default App
