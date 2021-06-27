import React from 'react'
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

const Running = ()=>{

  return (
    <>
      <div className="outer m-5 w-80">
      <h2>Currently running job 📨 📪</h2>
       <table className="w-75 my-4 mx-auto table-bordered table">
         <tr className="w-100">
           <td className="p-5  fs-5 fw-bold">To</td>
           <td>cdcbjhwb</td>
           </tr>
           <tr>
           <td className="p-5 fs-5 fw-bold">Subject:</td>
           <td>xhabssdjbckjsdncjsdnc</td>
           </tr>
           <tr>
             <td className="p-5  fs-5 fw-bold"> Text</td>
             <td >You can also use arrays to specify a list of acceptable values, and the Range object to specify a range of start and end values, with an optional step parameter. For instance, this will print a message on Thursday, Friday, Saturday, and Sund
             You can also use arrays to specify a list of acceptable values, and the Range object to specify a range of start and end values, with an optional step parameter. For instance, this will print a message on Thursday, Friday, Saturday, and Sunday at 5pm:
             You can also use arrays to specify a list of acceptable values, and the Range object to specify a range of start and end values, with an optional step parameter. For instance, this will print a message on Thursday, Friday, Saturday, and Sunday at 5pm:ay at 5pm:</td>
           </tr>
       </table>
    </div>
    </>
  )
}

export default Running;