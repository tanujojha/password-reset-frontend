import React from 'react'
import "./main.css"
import { Link } from 'react-router-dom'


function Main() {
  return (
    <div className='main'>
        <h1>Welcome to Password Reset Flow</h1>
        <div className='choicediv'>
            <Link to="/register"><button type="button" className='btn btn-lg btn-primary'>Register</button></Link>
            <Link to="/login"><button type="button" className='btn btn-lg btn-primary'>Login</button></Link>
        </div>
    </div>
  )
}

export default Main