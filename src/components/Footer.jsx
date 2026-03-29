import React from 'react'

function Footer() {
  return (
    <>
      <div className='row bg-primary'>
        <div className="col-lg-4 ms-5 p-5 text-light">
          <h3>About Envirogreen</h3>
          <p className='mt-4'>
            Plant ENVIROGREEN is a unit of PLANT
            ENVIROGREEN PVT. LTD. germinated for a promise to make ‘green and healthy’
            and Provides Cheapest and Best Quality of Plants Online.
          </p>
        </div>
        <div className="col-lg-3 ms-5 p-5 text-light">
          <h3>Get in touch</h3>
          <p className='mt-4'> <span className='fw-bold'> Address:</span>Perumpadappu,Ponnani,Malappuram, <br /> Kerala,India</p>
          <p className='mt-4'> <span className='fw-bold'> Call us for Support:</span>+91-9876543210</p>
          <p className='mt-4'> <span className='fw-bold'> Email:</span>envirogreen@gmail.com</p>
        </div>
        <div className="col-lg-3 ms-5 p-5 text-light">
          <h3>Information</h3>
          <div className="mt-4" style={{lineHeight:"40px"}}>
            <a href="" className='text-light ' style={{textDecoration:"none"}}>Shipping Policy</a><br />
            <a href="" className='text-light ' style={{textDecoration:"none"}}>Privacy Policy</a><br />
            <a href="" className='text-light ' style={{textDecoration:"none"}}>Cancellation Policy</a><br />
            <a href="" className='text-light ' style={{textDecoration:"none"}}>Terms & Conditions</a>
          <p></p>
          <p></p>
          <p></p>
          </div>
        </div>
        <div className="text-center mt-3 my-3 text-light">
         <i className="fa-brands fa-facebook"></i>
         <i className="fa-brands fa-instagram ms-3"></i>
         <i className="fa-brands fa-youtube ms-3"></i>
         <i className="fa-brands fa-twitter ms-3"></i>
          <i className="fa-brands fa-whatsapp ms-3"></i>
        </div>
      </div>
    </>
  )
}

export default Footer
