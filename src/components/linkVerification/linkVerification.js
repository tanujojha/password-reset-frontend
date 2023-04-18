import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";



function LinkVerification() {

    // const serverUrl = "http://localhost:5000";
    const serverUrl = process.env.REACT_APP_SERVER_URL
    const navigate = useNavigate()

    const {id} = useParams()
    const linkToken = id;

    const sendVerificationLink = async ()=>{
        try {

            const res = await axios.post(`${serverUrl}/auth/verifylink`, {linkToken: linkToken},{
                headers: {"content-type":"application/json"}
            })
            console.log(res);
            if(res.status === 200){
                localStorage.setItem("user", res.data.userEmail)
                navigate("/changepassword")
            }else{
                alert("You are not Authorized")
                navigate("/forgotpassword")
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        sendVerificationLink();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

  return (
    <div className='mt-5'>
        <CircularProgress/>
    </div>
  )
}

export default LinkVerification