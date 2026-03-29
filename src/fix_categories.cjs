const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');

const configurations = [
    { file: 'IndoorPlants.jsx', name: 'Indoor Plants', categoryMatch: 'indoor plants' },
    { file: 'OutdoorPlants.jsx', name: 'Outdoor Plants', categoryMatch: 'outdoor plants' },
    { file: 'Cactus.jsx', name: 'Cactus', categoryMatch: 'cactus' },
    { file: 'Adeniums.jsx', name: 'Adeniums', categoryMatch: 'adeniums' },
    { file: 'AquaticPlants.jsx', name: 'Aquatic Plants', categoryMatch: 'aquatic plants' },
    { file: 'AirPurifyingPlants.jsx', name: 'Air-Purifying Plants', categoryMatch: 'air-purifying plants' },
];

const template = (componentName, title, categoryMatch) => `import React, { useEffect, useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { viewAllAPI } from '../Services/allAPI';
import serverURL from '../Services/serverURL';
import { CartContext, addResponseContext, editResponseContext } from '../Features/ContextProvider';

function ${componentName}() {
    const [viewPlant, setViewplant] = useState([]);
    const { cart, setcart } = useContext(CartContext);
    const { addResponse } = useContext(addResponseContext);
    const { editResponse } = useContext(editResponseContext);

    const handleAddToCart = (data) => {
        const isExisting = cart.find(item => item._id === data._id);
        if (isExisting) {
            setcart(cart.map(item => item._id === data._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item));
        } else {
            setcart([...cart, { ...data, quantity: 1 }]);
        }
    };

    const viewAllPlant = async () => {
        try {
            const response = await viewAllAPI();
            if (response.status === 200) {
                // Filter specifically for this category
                const filtered = response.data.filter(plant => 
                    (plant.category || "").toLowerCase().includes("${categoryMatch}")
                );
                setViewplant(filtered);
            } else {
                console.log("Data not found");
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        viewAllPlant();
    }, [addResponse, editResponse]);

    return (
        <div className='row py-5 p-5 w-100'>
            <h2 className='text-center my-5 pe-5 me-5'>${title}</h2>
            
            {viewPlant.length === 0 ? (
                <div className='text-center mt-5 w-100'>
                    <h4 className='text-muted'>No ${title} found in the database.</h4>
                </div>
            ) : (
                <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
                    {viewPlant.map((data) => (
                        <div className="m-3" key={data._id || data.plantname}>
                            <Card className='shadow-sm border-0' style={{ width: '16rem', height: "100%" }}>
                                <Card.Img 
                                    style={{ height: "220px", objectFit: "cover" }} 
                                    variant="top" 
                                    src={data.image?.startsWith('http') ? data.image : \`\${serverURL}/uploads/\${data.image}\`} 
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
    );
}

export default ${componentName};
`;

configurations.forEach(config => {
    const filePath = path.join(dir, config.file);
    const componentName = config.file.replace('.jsx', '');
    const content = template(componentName, config.name, config.categoryMatch);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${config.file}`);
});
