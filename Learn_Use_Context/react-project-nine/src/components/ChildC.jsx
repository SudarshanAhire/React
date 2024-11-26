import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
  return (
    <div>
      {theme}
    </div>
  )
}

export default ChildC
