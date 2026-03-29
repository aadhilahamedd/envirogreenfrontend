import React from 'react'

function Password() {
  return (
    <>
       <div className='' style={{ backgroundImage: `url(${'https://t4.ftcdn.net/jpg/11/78/60/83/360_F_1178608304_3n9i0zfCiPTR4d2EYokw767KgvCHS2FN.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}>
                <div className='row py-5 pt-5'>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 ">
                        <div className='card shadow rounded mt-5 p-5 bg-secondary my-5' style={{ maxWidth: '500px', margin: '20px auto' }}>
                            <h3 className='fw-bold'>Reset your password</h3>
                            <p className='mt-3'>We will send you an email to reset your password</p>
                            <input type="email" className='form-control mt-4' placeholder='Email' />
                            <button className='btn btn-success mt-5'>SUBMIT</button>
                            <a className='mt-4 my-3' href="/login" style={{textDecoration:"none"}}>Cancel</a>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
    </>
  )
}

export default Password
