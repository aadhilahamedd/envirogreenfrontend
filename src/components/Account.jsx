import React from 'react'
import { newRegisterAPI } from '../Services/allAPI'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Account() {

    const [regsiter,setregister]=useState({name:"",email:"",password:""})
    console.log(regsiter);

    const navigate=useNavigate()

    
    const regsiterApi=async()=>{
        const {name,email,password}=regsiter
       if(name && email && password){
         try{
            const newRegister=await newRegisterAPI(regsiter)
            if(newRegister.status==200){
                navigate("/login")
                setregister({name:"",email:"",password:""})
            }
            else{
                alert(newRegister.response.data)
            }
        }
        catch(err){
            console.log(err);
            
        }
       }
       else{
        alert('please fill the form completly')
       }
    }

    return (
        <>
            <div className='' style={{ backgroundImage: `url(${'https://t4.ftcdn.net/jpg/11/78/60/83/360_F_1178608304_3n9i0zfCiPTR4d2EYokw767KgvCHS2FN.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}>
                <div className='row'>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 ">
                        <div className='card shadow rounded mt-5 p-5 bg-secondary my-5' style={{ maxWidth: '500px', margin: '20px auto' }}>
                            <h2 className='fw-bold'>Create Account</h2>
                            <a href="/login" className='ms-2 mt-1' style={{textDecoration:"none"}}>Sign In</a>
                            <input value={regsiter.name} onChange={(e)=>setregister({...regsiter,name:e.target.value})} type="text" className='form-control mt-4' placeholder='Name' />
                            <input value={regsiter.email} onChange={(e)=>setregister({...regsiter,email:e.target.value})} type="email" className='form-control mt-3' placeholder='Email' />
                            <input value={regsiter.password} onChange={(e)=>setregister({...regsiter,password:e.target.value})} type="password" className='form-control mt-3' placeholder='Password' />
                            <button onClick={regsiterApi} className='btn btn-success mt-5'>CREATE</button>
                            <a className='mt-4 my-5' href="/">Return to Store</a>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default Account
