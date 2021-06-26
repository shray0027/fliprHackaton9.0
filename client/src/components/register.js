import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = ()=>{
  return (
      <>
      <div className="upper">
      <div class="signup-form">
                <form action="" method="post" >
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text form-control">
                                <i class="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text form-control">
                            <i class="fas fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text form-control">
                            <i class="fas fa-key"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control" name="cpassword" placeholder="Confirm Password" required="required" />
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div class="text-center">Already have an account? <NavLink to="/">Login here</NavLink></div>
                </form>
            </div>
      </div>
           

        </>

  )
}

export default Register;