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
            <div className='d-flex align-items-center justify-content-center' style={{ 
                backgroundImage: `url(${'https://t4.ftcdn.net/jpg/11/78/60/83/360_F_1178608304_3n9i0zfCiPTR4d2EYokw767KgvCHS2FN.jpg'})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: 'calc(100vh - 100px)', // Account for navbar/footer
                width: '100%',
                padding: '20px 0'
            }}>
                <div className="container">
                    <div className='row justify-content-center mx-0'>
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                            <div className='card shadow rounded p-4 p-md-5 bg-secondary text-primary' style={{ maxWidth: '450px', margin: '0 auto' }}>
                                <h2 className='fw-bold text-center mb-0'>Create Account</h2>
                                <div className="text-center mb-4">
                                    <a href="/login" className='small' style={{textDecoration:"none"}}>Already have an account? Sign In</a>
                                </div>
                                <div className="form-group">
                                    <input value={regsiter.name} onChange={(e)=>setregister({...regsiter,name:e.target.value})} type="text" className='form-control mt-4 py-2' placeholder='Full Name' />
                                    <input value={regsiter.email} onChange={(e)=>setregister({...regsiter,email:e.target.value})} type="email" className='form-control mt-3 py-2' placeholder='Email Address' />
                                    <input value={regsiter.password} onChange={(e)=>setregister({...regsiter,password:e.target.value})} type="password" className='form-control mt-3 py-2' placeholder='Password' />
                                </div>
                                <button onClick={regsiterApi} className='btn btn-success fw-bold py-2 mt-4 rounded-pill'>CREATE ACCOUNT</button>
                                <div className="text-center mt-4 mb-2">
                                    <a className='text-muted small text-decoration-none' href="/"><i className="fa-solid fa-arrow-left me-2"></i>Return to Store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
