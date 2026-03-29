import React, { useEffect, useState, useContext } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Card, Button } from 'react-bootstrap';
import { viewAllAPI } from '../Services/allAPI';
import serverURL from '../Services/serverURL';
import { CartContext, addResponseContext, editResponseContext } from '../Features/ContextProvider';

function ViewAll() {
  const [open, setOpen] = useState(false);
  const [allPlants, setAllPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const { cart, setcart, searchKey } = useContext(CartContext);
  const { addResponse } = useContext(addResponseContext);
  const { editResponse } = useContext(editResponseContext);

  const viewAllPlant = async () => {
    try {
      const response = await viewAllAPI();
      if (response.status === 200) {
        setAllPlants(response.data);
      } else {
        alert("Data not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    viewAllPlant();
  }, [addResponse, editResponse]);

  const handleAddToCart = (data) => {
    const isExisting = cart.find(item => item._id === data._id);
    if (isExisting) {
      setcart(cart.map(item => item._id === data._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item));
    } else {
      setcart([...cart, { ...data, quantity: 1 }]);
    }
  };

  // Filter based on category and searchKey
  const filteredPlants = allPlants.filter(plant => {
    const matchesSearch = (plant.plantname || "").toLowerCase().includes((searchKey || "").toLowerCase());
    const matchesCategory = selectedCategory === "All" || (plant.category || "").toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Indoor Plants", "Outdoor Plants", "Cactus", "Adeniums", "Aquatic Plants", "Air-Purifying Plants"];

  return (
    <>
      <div className='row container-fluid'>
        <div className="col-lg-3 p-5 mt-5">
          <div className=''>
            <h5>Filter by Category:</h5>
            <hr />
            <div>
              <button className='btn dropdown-toggle w-100 text-start border bg-light'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {selectedCategory}
              </button>
              <Collapse in={open}>
                <div id="example-collapse-text" className='mt-2 ps-3 border-start'>
                  {categories.map((cat, idx) => (
                    <div key={idx} className="mb-2">
                        <span 
                            className={`text-dark shadow-sm bg-light py-1 px-3 rounded w-100 fs-6`} 
                            style={{ cursor: "pointer", textDecoration: selectedCategory === cat ? "underline" : "none", fontWeight: selectedCategory === cat ? "bold" : "normal" }}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setOpen(false);
                            }}
                        >
                            {cat}
                        </span>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
            <hr />
          </div>
        </div>
        
        <div className="col-lg-9 p-3 mt-5">
            <h2 className='text-center mb-5'>{selectedCategory === "All" ? "All Plants" : selectedCategory} {searchKey && ` - Searching for "${searchKey}"`}</h2>
            
            {filteredPlants.length === 0 ? (
                <div className='text-center mt-5 w-100'>
                    <h4 className='text-muted'>No plants found matching the selected filters.</h4>
                </div>
            ) : (
                <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
                    {filteredPlants.map((data) => (
                        <div className="m-3" key={data._id || data.plantname}>
                            <Card className='shadow-sm border-0' style={{ width: '16rem', height: "100%" }}>
                                <Card.Img 
                                    style={{ height: "220px", objectFit: "cover" }} 
                                    variant="top" 
                                    src={data.image?.startsWith('http') ? data.image : `${serverURL}/uploads/${data.image}`} 
                                />
                                <Card.Body className='text-center d-flex flex-column'>
                                    <Card.Title className='fw-bold mb-1'>{data.plantname}</Card.Title>
                                    <small className='text-muted mb-3 d-block'>{data.category}</small>
                                    <p className='text-success fs-5 fw-bold mt-auto mb-3'>Rs: {data.price}</p>
                                    <Button variant="success" className="w-100 rounded-pill" onClick={() => handleAddToCart(data)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </>
  )
}

export default ViewAll;
