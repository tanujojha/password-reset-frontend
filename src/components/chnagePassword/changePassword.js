import React, { useEffect, useState } from 'react';
import "./changePassword.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    
    // const serverUrl = "http://localhost:5000";
    const serverUrl = process.env.REACT_APP_SERVER_URL
    
    const navigate = useNavigate()

    const [showbtn, setShowbtn] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const [cred, setCred] = useState({
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e)=>{
        const value = e.target.value;
        setCred({...cred, [e.target.name]: value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(cred);
        if(cred.password !== cred.confirmPassword){
            alert("Passord is not matching")
        }else{
            const res = await axios.put(`${serverUrl}/auth/changepassword`, cred, {
                headers: {
                    "content-type": "application/json",
                    "user": localStorage.getItem("user")
                }
            });
            
            if(res.status === 200){
                localStorage.clear();
                alert(res.data)
                navigate("/login")
            }
        }
    }

    const handlePassShow = ()=>{
        setShowPass(!showPass)
    }

    useEffect(()=>{
        if(cred.password.length > 0){
            setShowbtn(true)
        }else{
            setShowbtn(false)
        }
    }, [cred.password])


  return (
    <div className='changepass mt-5'>
        <h1>Change Password Page</h1>
        <form method='post' onSubmit={handleSubmit}>
            <div className="chpassinpdiv mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input name='password' value={cred.password} onChange={handleChange} type={showPass ? "text" : "password"} className="form-control" id="password" required autoComplete='off'/>
            </div>
            <div className="chpassinpdiv mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input name='confirmPassword' value={cred.confirmPassword} onChange={handleChange} type={showPass ? "text" : "password"} className="form-control" id="confirmPassword" required autoComplete='off'/>
            </div>
            <div className='showpassbtndiv' style={{display: showbtn ? "block" : "none"}}>
                <button onClick={handlePassShow} type="button" className="btn btn-sm btn-secondary">Show</button>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ChangePassword