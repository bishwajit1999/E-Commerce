import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' /> 
        <input type="text" placeholder='Email Adderss'/>
        <input type="text" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have a account? <span>Login here</span></p>
      <div className="loginsignup-agree">
           <input type="checkbox" name='' id='' />
           <p>By continue I agree to term of use & privacy policy</p>
      </div>
     </div>
    </div>
  )
}

export default LoginSignup
