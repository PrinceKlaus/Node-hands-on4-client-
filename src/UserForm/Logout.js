import axios from "axios";
import { useEffect } from "react"
import './Style.css'
import { useNavigate } from "react-router-dom"

function Logout(){
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
    console.log(token)

    useEffect(()=>{
    // const token=localStorage.getItem("token")
    if(token){
        axios.get("http://localhost:5001/",{headers:{
            "authorization": `Bearer ${token}`}})  //req.headers["authorization"]
    .then(res=>console.log(res.data))
    }
    else{
        navigate("/login")
    }
    },[token,navigate]);

    const handleClick=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
    return(
        <>
        <button id="logout" onClick={handleClick}>LOGOUT</button>
        </>
    )
}

export default Logout;