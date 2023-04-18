import React, { useState } from 'react';
import "./fopa.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function ForgotPass() {

  // const serverUrl = `http://localhost:5000`;
  const serverUrl = process.env.REACT_APP_SERVER_URL

  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const sendFopaLink = async (e)=>{
    e.preventDefault()
    const cred = {email}
    
    try {

      const res = await axios.post(`${serverUrl}/auth/fopa`, cred, {
        headers: {'content-type': 'application/json'}
      })
      
      if(res.status === 200){
        alert(res.data + " Check your Spam");
        navigate("/login")
      }
      
    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <div className='fopa'>
        <h1>Forgot Password Page</h1>
        <form method='post' onSubmit={sendFopaLink}>
            <div className="fpainpdiv mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required autoComplete='off'/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ForgotPass