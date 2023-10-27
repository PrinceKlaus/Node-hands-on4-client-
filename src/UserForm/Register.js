import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Style.css'
import { useState } from 'react'

function Register(){
    const navi =useNavigate()
    // const user={
    //     name : "",
    //     phone : "",
    //     email : "",
    //     password : ""
    // }
    const [data,setData]=useState({
        name:"",
        phone:"",
        email:"",
        password:""
})
    
    const changeHandle =(e)=>{
        setData({...data,[e.target.name] :e.target.value})
    }


    const pageNavigate=(e)=>{
       e.preventDefault()
       console.log(data)
       axios.post("http://localhost:5001/api/register",data)
       .then(res=>{console.log(res.data.msg)
        alert(res.data.msg)
       localStorage.setItem("token", res.data.token)
       navi('/login')
    })
    .catch(err=> console.log(err));
       setData({
        name:"",
        phone:"",
        email:"",
        password:""
       })
       navi('/register')
    }

    return(
        <>
        <h1>REGISTER</h1>
        <form>
            <label className="Name" htmlFor="name">Name :</label>
            <input className="Name-input" type="text" placeholder="Enter your name" id="name" name="name" value={data.name} onChange={changeHandle}/> 

            <label className="Phone" htmlFor="phone">Phone :</label>
            <input className="Phone-input" type="number" placeholder="Enter your phone number" id="phone" name="phone" value={data.phone} onChange={changeHandle} required/>

            <label className="Email" htmlFor="email">Email :</label>
            <input className="Email-input" type="email" placeholder="Enter your email" id="email" name="email" value={data.email} onChange={changeHandle}/> 

            <label className="Password" htmlFor="password">Password :</label>
            <input className="Password-input" type="password" placeholder="Enter your password" id="password" name="password" value={data.password} onChange={changeHandle} required/>

            <button className="btn2" onClick={pageNavigate}>Submit</button> 
        </form>
        </>
    )
    // onClick={()=>navi('/login')}
}

export default Register;