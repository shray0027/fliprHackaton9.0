import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

const Create = ()=>{
  return (
      <>
          <div className="upper">
                <div className="signup-form create-form">
               
                  <form action="/create" method="POST">
                  <div className="row">
                  <h2>Create mail</h2>
                  </div>
                  <div className="row">
                              <div className="col-lg-6  col-md-12">
                                
                                  <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To :</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                  </div>
                                  <div class="mb-3">
                                        <label for="exampleFormControlTextarea2" class="form-label">Subject :</label>
                                        <input type="text" class="form-control" id="exampleFormControlTextarea2" />
                                  </div>
                                  <div class="mb-3">
                                              <label for="exampleFormControlTextarea1" class="form-label">Text :</label>
                                              <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" col="3"></textarea>
                                  </div>`
                                </div>
                      <div className="col-lg-6 col-md-12">
                              <div className="row ">
                              <label for="exampleFormControlTextarea1" class="form-label">Schedule :</label>
                              <select className="form-select" aria-label="Default select example">
                                <option value="1">Mail after every 60 seconds</option>
                                <option value="2">Mail at particular day every week</option>
                                <option value="3">Mail at particular date every month</option>
                                <option value="4">Mail at particular date every year</option>
                              </select>
                              </div>
                                    <div className="row my-4" >
                                    <label for="exampleFormControlTextarea1" class="form-label">Day :</label>
                                    <select name="month" className="form-select">
                                        <option value="01">Sunday</option>
                                        <option value="02">Monday</option>
                                        <option value="03">Tuesday</option>
                                        <option value="04">Wednesday</option>
                                        <option value="05">Thursday</option>
                                        <option value="06">Friday</option>
                                        <option value="07">Saturday</option>
                                    </select> 
                                    </div>
                                    <div className="row my-2">
                                    <label for="exampleFormControlTextarea1" class="form-label">Date :</label>
                                    <select name="date" className="form-select">
                                          <option value="01">1</option>
                                          <option value="02">2</option>
                                          <option value="03">3</option>
                                          <option value="04">4</option>
                                          <option value="05">5</option>
                                          <option value="06">6</option>
                                          <option value="07">7</option>
                                          <option value="08">8</option>
                                          <option value="09">9</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                          <option value="13">13</option>
                                          <option value="14">14</option>
                                          <option value="15">15</option>
                                          <option value="16">16</option>
                                          <option value="17">17</option>
                                          <option value="18">18</option>
                                          <option value="19">19</option>
                                          <option value="20">20</option>
                                          <option value="21">21</option>
                                          <option value="22">22</option>
                                          <option value="23">23</option>
                                          <option value="24">24</option>
                                          <option value="25">25</option>
                                          <option value="26">26</option>
                                          <option value="27">27</option>
                                          <option value="28">28</option>
                                          <option value="29">29</option>
                                          <option value="30">30</option>
                                          <option value="31">31</option>
                                    </select>    
                                    </div>
                                    <div className="row my-2" >
                                    <label for="exampleFormControlTextarea1" class="form-label">Month :</label>
                                    <select name="month" className="form-select">
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select> 
                                    </div>
                                    <div className="row my-2">
                                    <label for="exampleFormControlTextarea1" class="form-label">Time :</label>
                                    <select name="time" className="form-select">
                                          <option value="0">00:00</option>
                                          <option value="01">01:00</option>
                                          <option value="02">02:00</option>
                                          <option value="03">03:00</option>
                                          <option value="04">04:00</option>
                                          <option value="05">05:00</option>
                                          <option value="06">06:00</option>
                                          <option value="07">07:00</option>
                                          <option value="08">08:00</option>
                                          <option value="09">09:00</option>
                                          <option value="10">10:00</option>
                                          <option value="11">11:00</option>
                                          <option value="12">12:00</option>
                                          <option value="13">13:00</option>
                                          <option value="14">14:00</option>
                                          <option value="15">15:00</option>
                                          <option value="16">16:00</option>
                                          <option value="17">17:00</option>
                                          <option value="18">18:00</option>
                                          <option value="19">19:00</option>
                                          <option value="20">20:00</option>
                                          <option value="21">21:00</option>
                                          <option value="22">22:00</option>
                                          <option value="23">23:00</option>
                                          <option value="24">24:00</option>
                                    </select>  
                                    </div>
                              </div>
                      </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                          <button type="submit" className="btn btn-primary ">Send</button>
                    </div>
                 
                  </form>
                </div>
          </div>
      </>
  )
}

export default Create;