import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-primary py-5'>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 text-light">
              <h3 className="fw-bold">About Envirogreen</h3>
              <p className='mt-4 opacity-75'>
                Plant ENVIROGREEN is a unit of PLANT
                ENVIROGREEN PVT. LTD. germinated for a promise to make ‘green and healthy’
                and Provides Cheapest and Best Quality of Plants Online.
              </p>
            </div>
            <div className="col-lg-4 text-light">
              <h3 className="fw-bold">Get in touch</h3>
              <p className='mt-4'> <span className='fw-bold'> Address:</span> Perumpadappu, Ponnani, Malappuram, <br /> Kerala, India</p>
              <p className='mt-2'> <span className='fw-bold'> Call us for Support:</span> +91-9876543210</p>
              <p className='mt-2'> <span className='fw-bold'> Email:</span> envirogreen@gmail.com</p>
            </div>
            <div className="col-lg-4 text-light">
              <h3 className="fw-bold">Information</h3>
              <div className="mt-4" style={{lineHeight:"32px"}}>
                <a href="" className='text-light opacity-75 d-block text-decoration-none'>Shipping Policy</a>
                <a href="" className='text-light opacity-75 d-block text-decoration-none'>Privacy Policy</a>
                <a href="" className='text-light opacity-75 d-block text-decoration-none'>Cancellation Policy</a>
                <a href="" className='text-light opacity-75 d-block text-decoration-none'>Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 pt-4 border-top text-light" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
            <div className="fs-4 mb-3">
              <i className="fa-brands fa-facebook mx-2"></i>
              <i className="fa-brands fa-instagram mx-2"></i>
              <i className="fa-brands fa-youtube mx-2"></i>
              <i className="fa-brands fa-twitter mx-2"></i>
              <i className="fa-brands fa-whatsapp mx-2"></i>
            </div>
            <p className="small opacity-50 mb-0">&copy; 2024 Envirogreen. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
