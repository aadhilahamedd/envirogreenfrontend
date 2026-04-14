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
            <div className='d-flex align-items-center justify-content-center' style={{ 
                backgroundImage: `url(${'https://t4.ftcdn.net/jpg/11/78/60/83/360_F_1178608304_3n9i0zfCiPTR4d2EYokw767KgvCHS2FN.jpg'})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: 'calc(100vh - 100px)', 
                width: '100%',
                padding: '20px 0'
            }}>
                <div className="container">
                    <div className='row justify-content-center mx-0'>
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                            <div className='card shadow rounded p-4 p-md-5 bg-secondary text-primary' style={{ maxWidth: '450px', margin: '0 auto' }}>
                                <h2 className='fw-bold text-center mb-1'>Login</h2>
                                <div className="text-center mb-4">
                                    <p className='small'>Don't have an account yet? <a href="/account" style={{ textDecoration: "none" }}>Create account</a></p>
                                </div>
                                <div className="form-group">
                                    <input onChange={(e) => setlogin({ ...login, email: e.target.value })} type="email" className='form-control mt-4 py-2' placeholder='Email Address' />
                                    <input onChange={(e) => setlogin({ ...login, password: e.target.value })} type="password" className='form-control mt-3 py-2' placeholder='Password' />
                                </div>
                                <div className="text-end mt-2">
                                    <a className='text-success small' href="/password" style={{ textDecoration: "none" }}>Forgot password?</a>
                                </div>
                                <button onClick={loginApi} className='btn btn-success fw-bold py-2 mt-4 rounded-pill w-100'>SIGN IN</button>
                                <div className="text-center mt-4">
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

export default Login
