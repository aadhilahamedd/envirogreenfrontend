import React from 'react'
import { loginAPI } from '../Services/allAPI'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [login, setlogin] = useState({ email: "", password: "" })
    console.log(login);

    const navigate = useNavigate()

    const loginApi = async () => {
        const { email, password } = login
        if (email, password) {
            try {
                const newLogin = await loginAPI(login)
                if (newLogin.status == 200) {
                    console.log(newLogin);

                    setlogin({ email: "", password: "" })
                    sessionStorage.setItem("user", JSON.stringify(newLogin.data.user))
                    sessionStorage.setItem("token", newLogin.data.token)

                    if (newLogin.data.user.role == 'admin') {
                        navigate('/admin')
                    } else if (newLogin.data.user.role == 'user') {
                        navigate('/')
                    }
                }
                else {
                    alert(newLogin.response.data)
                }
            }
            catch (err) {
                console.log(err);

            }
        }
        else {
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
                            <h2 className='fw-bold'>Login</h2>
                            <p className='mt-3'>Don't have a account yet? <a href="/account" style={{ textDecoration: "none" }}>Create account</a></p>
                            <input onChange={(e) => setlogin({ ...login, email: e.target.value })} type="email" className='form-control mt-5' placeholder='Email' />
                            <input onChange={(e) => setlogin({ ...login, password: e.target.value })} type="password" className='form-control mt-3' placeholder='Password' />
                            <a className='text-success mt-4' href="/password" style={{ textDecoration: "none" }}>Forgot your password?</a>
                            <button onClick={loginApi} className='btn btn-success mt-5'>SIGN IN</button>
                            <a className='mt-4 my-5' href="/">Return to Store</a>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default Login
