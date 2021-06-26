import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = ()=>{
  return (
    <>
    <div className="upper">
             <div class="login-form">
    <form action="/login" method="post">
        <h2 class="text-center">Log in</h2>   
        <div class="form-group">
        	<div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text form-control">
                        <span class="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" class="form-control" name="username" placeholder="Username" required="required"/>				
            </div>
        </div>
		<div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text form-control">
                        <i class="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary login-btn btn-block">Log in</button>
        </div>

		<div class="or-seperator"><i>or</i></div>
        <p class="text-center">Login with google</p>
        <div class="text-center social-btn">
			  <NavLink to="/" class="btn btn-danger"><i class="fa fa-google"></i> Google</NavLink>
        </div>
    </form>
    <p class="text-center text-muted small">Don't have an account? <NavLink to="/register">Sign up here!</NavLink></p>
    </div>
    </div>
   </>
     
  )
}

export default Login;