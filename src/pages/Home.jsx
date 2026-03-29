import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import serverURL from '../Services/serverURL';
import { Link } from 'react-router-dom';

function Home() {
    const { cart, setcart } = useContext(CartContext);
    const totalPrice = cart?.reduce((total, item) => total + (Number(item.price) * (item.quantity || 1)), 0) || 0;

    const handleIncrease = (id) => {
        setcart(cart.map(item => item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item))
    }

    const handleDecrease = (id) => {
        setcart(cart.map(item => item._id === id && (item.quantity || 1) > 1 ? { ...item, quantity: (item.quantity || 1) - 1 } : item))
    }

    const handleRemove = (id) => {
        setcart(cart.filter(item => item._id !== id))
    }

    return (
        <div className="container mt-5 pt-5 mb-5" style={{ minHeight: "60vh" }}>
            <h2 className="text-center mb-5 fw-bold">Your Selected Items</h2>
            
            {cart?.length === 0 ? (
                <div className="text-center mt-5">
                    <h4 className="text-muted mb-4">Your cart is currently empty.</h4>
                    <Link to="/viewall" className="btn btn-success rounded-pill px-4 py-2">Start Shopping</Link>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-8">
                        <div className="table-responsive shadow-sm rounded border p-3">
                            <table className="table align-middle text-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((pro) => (
                                        <tr key={pro._id}>
                                            <td>
                                                <img 
                                                    className="img-fluid rounded" 
                                                    src={pro.image?.startsWith('http') ? pro.image : `${serverURL}/uploads/${pro.image}`} 
                                                    alt={pro.plantname} 
                                                    style={{ width: "80px", height: "80px", objectFit: "cover" }} 
                                                />
                                            </td>
                                            <td className="fw-bold">{pro.plantname}</td>
                                            <td>Rs. {pro.price}</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="btn btn-sm btn-outline-secondary px-2 py-0" onClick={() => handleDecrease(pro._id)}>-</button>
                                                    <span className="mx-3">{pro.quantity || 1}</span>
                                                    <button className="btn btn-sm btn-outline-secondary px-2 py-0" onClick={() => handleIncrease(pro._id)}>+</button>
                                                </div>
                                            </td>
                                            <td className="text-success fw-bold">Rs. {Number(pro.price) * (pro.quantity || 1)}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(pro._id)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="shadow-sm rounded border p-4 bg-light">
                            <h4 className="fw-bold border-bottom pb-3 mb-4">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Total Items:</span>
                                <span>{cart.length}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fs-5 fw-bold">Total Price:</span>
                                <span className="text-success fs-5 fw-bold">Rs. {totalPrice}</span>
                            </div>
                            <button className="btn btn-success w-100 mb-3 rounded-pill">Proceed to Checkout</button>
                            <button className="btn btn-outline-danger w-100 rounded-pill" onClick={() => setcart([])}>Clear Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
