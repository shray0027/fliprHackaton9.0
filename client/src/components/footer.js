import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
const Footer = ()=>{
    return (
            <>


<footer className="text-center text-lg-start bg-light text-muted">

  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>



    <div>
      <NavLink  to="" className="me-4 text-reset">
      <i class="far fa-envelope"></i>
      </NavLink >
      <NavLink  to="" className="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </NavLink >
      <NavLink  to="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </NavLink >
    </div>

  </section>

  

<section>
        <div className="row">
        <div className="col-auto mx-auto">
        <h6 className="text-uppercase fw-bold mb-4 p-1">
            Contact : 
          </h6>
        </div>
        <div className="col-auto mx-auto p-1">
        <p>
            <i className="fas fa-envelope me-3 p-1"></i>
            shrayanand000@gmail.com
          </p>
                </div>
                <div className="col-auto mx-auto p-1">
                <p><i className="fas fa-phone me-3"></i>+91-8800836113</p>
                </div>

  
    
        </div>

  </section>
  <div className="text-center ">
    © 2021 Copyright by SHRAY
  </div>
</footer>

            </>
    )
  }
  
  export default Footer;