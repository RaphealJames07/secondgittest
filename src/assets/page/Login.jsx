import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='loginPage'>
      <input type="text" placeholder=' username...' />
      <input type="text" placeholder=' password'/>

      <button>Enter</button>
    </div>
  )
}

export default Login
