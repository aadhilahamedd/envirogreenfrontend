import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Landing() {
    return (
        <>
            <div className='row bg-secondary'>
                <div className="col-lg-6 ">
                    <div className='p-5 ms-5 mt-5'>
                        <div style={{ fontFamily: "Roboto" }}>
                            <h1 className='fw-bold text-primary'>Refresh Your Home,</h1>
                            <h1 className='fw-bold'>Start Planting!</h1>
                        </div>
                        <p className='mt-3 my-3'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae ratione consequatur illum dolor dolores deserunt doloremque corrupti officiis vero dolorum numquam cupiditate commodi minus molestiae iusto itaque, est voluptatibus?
                        </p>
                        <Link to={'/viewAll'}><button className='btn broder border-dark fw-bold'>Shop Now</button></Link>
                    </div>

                </div>
                <div id='img' className="col-lg-6">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1747251018-screenshot-2025-05-14-at-3-29-40-pm-6824ef2c945db.png?crop=0.952xw:0.804xh;0.0240xw,0.154xh&resize=980:*" alt="" style={{ width: "100%", height: "500px" }} />
                </div>
                <div >
                    <h2 className='my-5 text-center'>Our Best Seller</h2>
                    <div className='row container ms-5 p-4'>
                        <div className="col-lg-3">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://plantorbit.com/cdn/shop/files/white-Photoroom_-_2025-08-07T230132.587.jpg?v=1754588117&width=533" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Cactus</Card.Title>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                    <Card.Text>
                                        From Rs.99.00
                                    </Card.Text>
                                    <Link to={'/viewAll'}><button className='btn btn-primary' variant="primary">Check Now</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://www.gertens.com/media/catalog/product/cache/552aa5ee50ba4e27dfcb5fa3e4dca5ac/f/e/fern-frosty-4in.jpg" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Frosty Fern</Card.Title>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <Card.Text>
                                        From Rs.129.00
                                    </Card.Text>
                                    <Link to={'/viewAll'}><button className='btn btn-primary' variant="primary">Check Now</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://florastore.com/cdn/shop/files/1711701_Atmosphere_04_SQ_MJ.jpg?v=1755163489&width=1080" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Monstera Deliciosa</Card.Title>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <Card.Text>
                                        From Rs.199.00
                                    </Card.Text>
                                    <Link to={'/viewAll'}><button className='btn btn-primary' variant="primary">Check Now</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://www.urbanplant.in/cdn/shop/files/Marble_Queen_Money_Plant.jpg?v=1753960409" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Money Plant</Card.Title>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <Card.Text>
                                        From Rs.69.00
                                    </Card.Text>
                                    <Link to={'/viewAll'}><button className='btn btn-primary' variant="primary">Check Now</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div>
                         <div className='text-center my-4'>
                        <Link to={'/ViewAll'}><button className='btn broder border-dark fw-bold'>View All</button></Link>
                    </div>
                    </div>
                    <div>
                    
                </div>
                </div>
                <div className='row p-5 bg-dark'>
                    <div className="col-lg-6">
                        
                            <img src="https://www.bloomspace.com.au/wp-content/uploads/adobestock_408763091-768x512.jpeg" alt="" style={{ width: "100%", height: "500px" }} />
                        
                    </div>
                    <div className="col-lg-6 text-light mt-5 p-5">
                    
                                <h3>Care tips</h3>
                                <p className='mt-4'>
                                    1. After recieveing the plants open the box 📦 as soon as possible.
                                    2. ⁠Air dry the plants for 2-3 hours on fresh air .
                                    <br />
                                    3. ⁠Plant in well drained soil . ( 30%sand + 30% soil + 20% vermicompost + 20% perlite ) .
                                    <br />
                                    4. ⁠Water plants after 2-3 days and don’t give direct sunlight to newly planted succulents for at least 10 days
                                    <br />
                                    <br />
                                    .
                                    <br />
                                    Note: Always water succulents when top layer of soil feels dry in roots of plant rather than leaves 
                                </p>                                   
                    </div>
                </div>
          </div>
        </>
    )
}

export default Landing
