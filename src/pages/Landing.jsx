import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className='row bg-secondary g-0 align-items-center'>
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className='p-4 p-md-5 mt-lg-5 ms-lg-5'>
                        <div style={{ fontFamily: "Roboto" }}>
                            <h1 className='fw-bold text-primary'>Refresh Your Home,</h1>
                            <h1 className='fw-bold text-dark'>Start Planting!</h1>
                        </div>
                        <p className='mt-3 my-3 text-muted'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae ratione consequatur illum dolor dolores deserunt doloremque corrupti officiis vero dolorum numquam cupiditate commodi minus molestiae iusto itaque, est voluptatibus?
                        </p>
                        <Link to={'/viewAll'}>
                            <button className='btn border-2 border-primary fw-bold px-4 py-2 text-primary hover-bg-primary'>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div id='img' className="col-lg-6 order-1 order-lg-2">
                    <img 
                        src="/images/hero-plant.png" 
                        alt="Hero Plant" 
                        style={{ width: "100%", height: "500px", objectFit: "cover" }} 
                    />
                </div>
            </div>

            {/* Best Sellers Section */}
            <div className="container py-5">
                <h2 className='my-5 text-center fw-bold'>Our Best Sellers</h2>
                <div className='row g-4 justify-content-center'>
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card className="h-100 shadow-sm border-0" style={{ width: '100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src="https://plantorbit.com/cdn/shop/files/white-Photoroom_-_2025-08-07T230132.587.jpg?v=1754588117&width=533" style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className='text-center d-flex flex-column'>
                                <Card.Title className="fs-6 fs-md-5 fw-bold">Cactus</Card.Title>
                                <div className="text-warning mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <Card.Text className="fw-bold mt-auto text-success">
                                    From Rs.99.00
                                </Card.Text>
                                <Link to={'/viewAll'} className="mt-2 text-decoration-none">
                                    <Button variant="primary" size="sm" className="w-100 rounded-pill">Check Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card className="h-100 shadow-sm border-0" style={{ width: '100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src="/images/frosty-fern.png" style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className='text-center d-flex flex-column'>
                                <Card.Title className="fs-6 fs-md-5 fw-bold">Frosty Fern</Card.Title>
                                <div className="text-warning mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <Card.Text className="fw-bold mt-auto text-success">
                                    From Rs.129.00
                                </Card.Text>
                                <Link to={'/viewAll'} className="mt-2 text-decoration-none">
                                    <Button variant="primary" size="sm" className="w-100 rounded-pill">Check Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card className="h-100 shadow-sm border-0" style={{ width: '100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src="https://florastore.com/cdn/shop/files/1711701_Atmosphere_04_SQ_MJ.jpg?v=1755163489&width=1080" style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className='text-center d-flex flex-column'>
                                <Card.Title className="fs-6 fs-md-5 fw-bold">Monstera</Card.Title>
                                <div className="text-warning mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <Card.Text className="fw-bold mt-auto text-success">
                                    From Rs.199.00
                                </Card.Text>
                                <Link to={'/viewAll'} className="mt-2 text-decoration-none">
                                    <Button variant="primary" size="sm" className="w-100 rounded-pill">Check Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <Card className="h-100 shadow-sm border-0" style={{ width: '100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src="https://www.urbanplant.in/cdn/shop/files/Marble_Queen_Money_Plant.jpg?v=1753960409" style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className='text-center d-flex flex-column'>
                                <Card.Title className="fs-6 fs-md-5 fw-bold">Money Plant</Card.Title>
                                <div className="text-warning mb-2 small">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <Card.Text className="fw-bold mt-auto text-success">
                                    From Rs.69.00
                                </Card.Text>
                                <Link to={'/viewAll'} className="mt-2 text-decoration-none">
                                    <Button variant="primary" size="sm" className="w-100 rounded-pill">Check Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <Link to={'/ViewAll'}>
                        <Button variant="outline-dark" className='fw-bold px-5 rounded-pill'>View All Products</Button>
                    </Link>
                </div>
            </div>

            {/* Care Tips Section */}
            <div className='row g-0 bg-dark text-light align-items-center'>
                <div className="col-lg-6">
                    <img 
                        src="/images/care-tips.png" 
                        alt="Care Tips" 
                        style={{ width: "100%", height: "450px", objectFit: "cover" }} 
                        className="shadow" 
                    />
                </div>
                <div className="col-lg-6 p-4 p-md-5">
                    <h3 className="fw-bold mb-4 text-success">Care Tips</h3>
                    <div className="lh-lg" style={{ opacity: 0.9 }}>
                        <p>1. After receiving the plants open the box 📦 as soon as possible.</p>
                        <p>2. Air dry the plants for 2-3 hours in fresh air.</p>
                        <p>3. Plant in well drained soil (30% sand + 30% soil + 20% vermicompost + 20% perlite).</p>
                        <p>4. Water plants after 2-3 days and avoid direct sunlight for newly planted succulents for at least 10 days.</p>
                        <div className="mt-4 p-3 bg-secondary bg-opacity-25 rounded border-start border-success border-4">
                            <p className="fw-bold mb-0 text-success">Note:</p>
                            <p className="mb-0 small">Always water succulents when the top layer of soil feels dry at the roots, rather than on the leaves.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
