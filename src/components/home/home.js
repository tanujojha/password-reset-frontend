import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();
    
    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(!user || user === null){
            navigate("/login")
        }
        console.log("test");
        
    }, [navigate])

    const handleLogout = ()=>{
        localStorage.clear()
        navigate("/")
    }

  return (
    <div className='home'>
        <h1>Welcome to the Home Page of the App</h1>
        <button onClick={handleLogout} type="button" className='btn btn-lg btn-primary'>Logout</button>
    </div>
  )
}

export default Home