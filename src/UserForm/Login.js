import { useNavigate } from 'react-router-dom'
import './Style.css'
import axios from 'axios'
import { useState } from 'react'
function Login(){
const navii =useNavigate()
// const user={
//  email : "",
//  password : ""
// }

const [data,setData]=useState({
    email:"",
    password:""
})

const changeHandle =(e)=>{
    setData({...data,[e.target.name] :e.target.value})
}
const pageNavigate=(e)=>{
    e.preventDefault()
    console.log(data)
    axios.post("http://localhost:5001/api/login",data)
    .then(res=>{console.log(res.data)
        alert(res.data.msg)
    localStorage.setItem("token", res.data.token)
    navii('/logout')
 })
 .catch(err=> console.log(err));
    setData({
     name:"",
     phone:"",
     email:"",
     password:""
    })
    navii('/login')
}

return(
    <>
    <h1>LOGIN</h1>
    <form>
        <label className="Email" htmlFor="email">Email :</label>
        <input className="Email-input" type="email" placeholder="Enter your email" id="email" name="email" value={data.email} onChange={changeHandle}/>  

        <label className="Password" htmlFor="password">Password :</label>
        <input className="Password-input" type="password" placeholder="Enter your password" id="password" name="password" value={data.password} required onChange={changeHandle}/>
        
        <button className="btn2" onClick={pageNavigate}>Submit</button>
    </form>
    </>
    
)

}

    // const [data,setData]=useState({
    //     email:"",
    //     password:""
    // }
    
    // )
    
    // import React, { useState } from "react";
    // import axios from "axios";
    // import '../App.css';
    
    
    // const Register = () => {
    //     const [data, setData] = useState(
    //         {
    //             name: "",
    //             phone: "",
    //             email: "",
    //             password: ""
    //         }
    //     )
    
    //     const handleInput = (event) => {
    //         setData({ ...data, [event.target.name]: event.target.value })
    //     }
    
    // async function handleSubmit(event) {
    //     event.preventDefault()
    //     try{
    //         const dataAxios = await axios.post('https://formdata-api.onrender.com/user/register')
    //         setData({
    //             name: "",
    //             phone:"",
    //             email:"",
    //             password:""
    
    //         })
    //         console.log(dataAxios.data)
    //     }
    //     catch(err){ console.log(err)}
    
    // }
export default Login;