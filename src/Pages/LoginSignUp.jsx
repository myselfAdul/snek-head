import React from 'react'
import './CSS/LoginSignUp.scss'

const LoginSignUp = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <input type="text" placeholder='Phone number' />
          <input type="text" placeholder='Address' />
        </div>

        <button>Continue</button>
        <p className="login-signup-login">Already Have an account? <span>Log in Here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the term & policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
