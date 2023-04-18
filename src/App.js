import './App.css';
import { Routes, Route } from "react-router-dom";
import ForgotPass from './components/fopa/fopa';
import LinkVerification from './components/linkVerification/linkVerification';
import ChangePassword from './components/chnagePassword/changePassword';
import Main from './components/main/main';
import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/home/home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/forgotpassword' element={<ForgotPass/>}/>
        <Route path='/verify/:id' element={<LinkVerification/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
       </Routes>
    </div>
  );
}

export default App;
