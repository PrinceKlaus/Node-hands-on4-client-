import { BrowserRouter,Routes, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import './Style.css';
import Logout from "./Logout";
import Home from "./Home";
// import Home from "./Home";

function Routing(){
    return(
        <>
       <BrowserRouter>
       <div id="nav">
       <NavLink to='/'>HOME</NavLink>
       <NavLink to='/register'>REGISTER</NavLink>
       <NavLink to='/login'>LOGIN</NavLink>
       <NavLink to='/logout'>LOGOUT</NavLink>
       </div>
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
       </Routes>
       </BrowserRouter>
        </>
    )
}

export default Routing;