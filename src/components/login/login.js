import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import { useFormik } from 'formik';
import axios from "axios"



function Login() {

    // const serverUrl = "http://localhost:5000"
    const serverUrl = process.env.REACT_APP_SERVER_URL

  const [showbtn, setShowbtn] = useState(false);          // state to show/hide show btn in password field
  const [showClicked, setShowClicked] = useState(false)   // state to show/hide password
    
  const navigate = useNavigate();
  
  
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit: async(values)=>{
    //   console.log(values);
      const res = await axios.post(`${serverUrl}/auth/login`, values, {
        headers: {"content-type": "application/json"}
      });
      if(res.status===200){
        localStorage.setItem("user", res.data.user)
        navigate("/home")
      }
    }
  })

    
  // function to show/hide show password btn in password
  const handelShow = ()=>{
    setShowClicked(!showClicked)
  }

  // show btn when password length > 0
  useEffect(()=>{
    if(formik.values.password.length > 0){
      setShowbtn(true)
    }else{
      setShowbtn(false)
    }
  },[formik.values.password])

 
  return (
    <div className='form-signin'>
        <form className='' onSubmit = {formik.handleSubmit}>
              <h1 className="h3 mb-3 fw-bold">Login</h1>

              <div className="form-floating">
                <input value={formik.values.email} onChange = {formik.handleChange} name="email" type="email" className="form-control col-lg-12" id="floatingInput" required autoComplete="off"/>
                <label className='floatingLabel' htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating ">
                <input value={formik.values.password} onChange = {formik.handleChange} name="password" type={showClicked ? "text" : "password"} className="form-control" id="floatingPassword" minLength="0" required autoComplete="off" />
                <button style={showbtn ? {display: "block"} : {display: "none"}} onClick={handelShow} className="showbtn" type="button" name="showpassbtn">show</button>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className = "signinbtn d-flex justify-content-center">
                <button value = "signinbtn" name="signinbtn" className="w-10 btn btn-lg bg-info mt-4" type="submit">Sign in</button>
              </div>
        </form>

        <Link className="fpa mt-2" to="/forgotpassword">Forgot Password</Link>        

        <div className="mt-3 mb-3 d-flex justify-content-center">
            <Link className="fpa" to="/register">Create Account</Link>
        </div>
    </div>
  )
}

export default Login