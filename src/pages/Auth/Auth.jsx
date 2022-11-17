import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'
const Auth = () => {
    return (
        <div className='Auth'>
            <div className='a-left'>
                <img src={Logo} alt="" />
                < div className='Webname'>
                    <h3>Social-media</h3>
                    <h6>Explore the ideas throughout the World</h6>
                </div>

            </div>
         {/* <SignUp/>*/}
 <Login/>
        </div>
    )
}
function SignUp() {
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
               
                    <div>
                   <input type="text" placeholder='FirstName' name="firstname"className='infoInput' />
                   <input type="text"  placeholder='Lastname' name="lastname"className='infoInput' />
                    </div>
                   <div>
                  <input type="text"  placeholder='Username' name="username"className='infoInput' />
                   </div>
                   <div>
                   <input type="password" placeholder='Password'  name="password"className='infoInput' />
                   <input type="password"placeholder=' Confirm Password'   name="Confirm-password"className='infoInput' />
                   </div>
                  
             <div>
                <span style={{fontSize:"12px"}}>Already have an account.LOGIN!</span>
               
             </div>
             <button className='button info-button'type='submit'>Sign up</button>

            </form>
            </div>
    )
}



function Login() {
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
               
                
                  <input type="text"  placeholder='Username' name="username"className='infoInput' />
                 
    
                   <input type="password" placeholder='Password'  name="password"className='infoInput' />
                   
                  
             <div>
                <span style={{fontSize:"12px"}}>Don't have an account.LOGIN!</span>
               
             </div>
             <button className='button info-button'type='submit'>Login</button>

            </form>
            </div>
    )
}
export default Auth
