import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Category() {
 
    return (
      
        <div className='row ps-5 py-5 bg-secondary'>
            <h2 className='text-center my-5'>Categories</h2>
            <div className="col-lg-4">
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.palasa.co.in/cdn/shop/articles/15_Top_Indoor_Plants_That_are_Perfect_for_Small_Spaces.jpg?v=1694781533"/>
      <Card.Body>
        <Card.Title>Indoor Plants</Card.Title>
        <a href="/Indoor Plants"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/YGj54nDauQYAgLW9Rw5c2h-1024-80.jpg" />
      <Card.Body>
        <Card.Title>Cactus</Card.Title>
        <a href="/Cactus"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4 ">
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://nurserylive.com/cdn/shop/files/ChatGPTImageJul10_2025_05_41_57PM_b408bbbc-c6c8-4fd1-9aa3-c627d8cd807b.png?v=1752813240" />
      <Card.Body>
        <Card.Title>Outdoor Plants</Card.Title>
        <a href="/Outdoor Plants"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
            </div>
            <div className='row mt-5'>
                <div className="col-lg-4">
                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://florastore.com/cdn/shop/files/4513132_Productimage_02_SQ_1024x1024.jpg?v=1751966341" />
      <Card.Body>
        <Card.Title>Adeniums</Card.Title>
        <a href="/Adeniums"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
                </div>
                <div className="col-lg-4">
                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://aqualeafaquatics.com/cdn/shop/products/a_10bundle.jpg?v=1617041482" />
      <Card.Body>
        <Card.Title>Aquatic Plants</Card.Title>
        <a href="/aquaticPlants"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
                </div>
                <div className="col-lg-4">
                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGbITvXByHaokmzfRQujLVmOzbqg6Lwu94A&s" />
      <Card.Body>
        <Card.Title>Air-Purifying Plants</Card.Title>
        <a href="/airPurifyingPlants"><Button variant="primary">Shop Now</Button></a>
      </Card.Body>
    </Card>
                </div>
            </div>
        </div>

    )
}

export default Category
