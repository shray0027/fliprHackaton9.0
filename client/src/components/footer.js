import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
const Footer = ()=>{
    return (
            <>


<footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>



    <div>
      <NavLink  to="" class="me-4 text-reset">
      <i class="far fa-envelope"></i>
      </NavLink >
      <NavLink  to="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </NavLink >
      <NavLink  to="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </NavLink >
    </div>

  </section>

  

<section>
        <div class="row">
        <div class="col-auto mx-auto">
        <h6 class="text-uppercase fw-bold mb-4 p-1">
            Contact : 
          </h6>
        </div>
        <div class="col-auto mx-auto p-1">
        <p>
            <i class="fas fa-envelope me-3 p-1"></i>
            shrayanand000@gmail.com
          </p>
                </div>
                <div class="col-auto mx-auto p-1">
                <p><i class="fas fa-phone me-3"></i>+91-8800836113</p>
                </div>

  
    
        </div>

  </section>
  <div class="text-center ">
    © 2021 Copyright by SHRAY
  </div>
</footer>

            </>
    )
  }
  
  export default Footer;