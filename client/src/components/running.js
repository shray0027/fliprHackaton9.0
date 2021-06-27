import React ,{useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

const Running = ()=>{
  const history = useHistory();
  const [userData , setUserData]=useState({});
const getRunningData = async()=>{
  try{
      const res = await fetch("/running",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      });
      const data = await res.json();

      setUserData(data);
      console.log(data,userData);
      if(!res.status===200){
        const error = new Error(res.error);
        window.alert(error);
        throw error;
      }
  }catch(err){
    history.push("/");
      console.log(err);
  }
}
const terminate = async(e)=>{
  e.preventDefault();
  console.log("hello");
}


useEffect(()=>{
  getRunningData();
},[]);

  return (
    <>
      <div className="outer m-5 w-80">
      <h2 className="w-75 my-4 mx-auto ">CURRENT RUNNING MAIL 📨 📪</h2>
       <table className="w-75 my-4 mx-auto">
       <tbody>
       <tr className="w-100">
           <td className="p-5  fs-5 fw-bold">To</td>
           <td>{userData.to}</td>
           </tr>
           <tr>
           <td className="p-5 fs-5 fw-bold">Subject:</td>
           <td>{userData.subject}</td>
           </tr>
           <tr>
             <td className="p-5  fs-5 fw-bold"> Text</td>
             <td >{userData.message}</td>
           </tr>
           <tr>
             <td className="p-5  fs-5 fw-bold">Schedule:</td>
             <td>dhedh2bdeh2jbdh2</td>
           </tr>
       </tbody>

       </table>
       <form method="POST" className="w-75 my-4 mx-auto terminateForm">
          <button onClick={terminate} type="submit" className="redBtn">Terminate</button>
       </form>
    </div>
    </>
  )
}

export default Running;