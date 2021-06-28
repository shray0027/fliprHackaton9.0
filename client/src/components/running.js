import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css"

const Running = ()=>{
  const [mails,setMails] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch('/running', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data.currentRequest);
    setMails(data.currentRequest);
  };
  const terminate= async (e)=>{
    e.preventDefault();
    const res = await fetch('/running',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      }
      
  });
  const data = await res.json();
  }
  return (
    <>
      <div className="outer m-5 w-80">
      <h2 className="w-75 my-4 mx-auto ">CURRENT RUNNING MAIL 📨 📪</h2>
       <table className="w-75 my-4 mx-auto">
       <tbody>
 
       <tr className="w-100 first">
           <td className="p-5  fs-5 fw-bold">To</td>
           <td>{mails.to}</td>
           </tr>
           <tr className="w-100 second">
           <td className="p-5 fs-5 fw-bold">Subject:</td>
           <td>{mails.subject}</td>
           </tr>
           <tr className="w-100 third">
             <td className="p-5  fs-5 fw-bold"> Text</td>
             <td >{mails.message}</td>
           </tr>
           <tr className="w-100 four">
             <td className="p-5  fs-5 fw-bold">Schedule:</td>
             <td>dhedh2bdeh2jbdh2</td>
           </tr>
       </tbody>

       </table>
       <form method="POST" className="w-75 my-4 mx-auto terminateForm">
            <input name="el" value="1" className="hidden" />
          <button  type="submit" onClick={terminate} className="redBtn">Terminate</button>
       </form>
    </div>
    </>
  )
}

export default Running;