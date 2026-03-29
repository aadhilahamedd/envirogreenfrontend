import React, { useContext, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../Features/ContextProvider';
import serverURL from '../Services/serverURL';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, setcart } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckout = () => {
        handleClose();
        navigate('/checkout');
    }

    const handleIncrease = (id) => {
        setcart(cart.map(item => item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item))
    }

    const handleDecrease = (id) => {
        setcart(cart.map(item => item._id === id && (item.quantity || 1) > 1 ? { ...item, quantity: (item.quantity || 1) - 1 } : item))
    }

    const handleRemove = (id) => {
        setcart(cart.filter(item => item._id !== id))
    }

    const totalPrice = cart?.reduce((total, item) => total + (Number(item.price) * (item.quantity || 1)), 0) || 0;

    return (
        <>
            <button className='btn text-light' variant="primary" onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i> {cart?.length > 0 && <span className="badge bg-danger ms-1">{cart.length}</span>}
            </button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header className='bg-secondary' closeButton>
                </Offcanvas.Header>
                <Offcanvas.Title className='fw-bold text-center bg-secondary'>Your Cart </Offcanvas.Title>
                <Offcanvas.Body className='text-center bg-secondary'>
                    <div className='d-flex justify-content-between mt-3 rounded'>
                        <p>PRODUCT</p>
                        <p>TOTAL</p>
                    </div>
                    <hr />

                    <div>
                        {
                        cart?.map((pro) => (
                            <div key={pro._id}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img className='img-fluid' src={pro.image?.startsWith('http') ? pro.image : `${serverURL}/uploads/${pro.image}`} alt="" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <h4>{pro.plantname}</h4>
                                        <p>Rs: {pro.price}</p>
                                        <div className='d-flex ms-4 align-items-center justify-content-center'>
                                            <button className='btn' onClick={() => handleDecrease(pro._id)}><b>-</b></button>
                                            <button className='btn'>{pro.quantity || 1}</button>
                                            <button className='btn' onClick={() => handleIncrease(pro._id)}><b>+</b></button>
                                            <button className='btn text-danger' onClick={() => handleRemove(pro._id)}><i className="fa-solid fa-trash ms-2"></i></button>
                                        </div>
                                    </div>
                                    <div className='justify-content-between d-flex align-items-center'>
                                        <p className='mb-0'>Rs: <br /> <span className='text-success fw-bold'>{Number(pro.price) * (pro.quantity || 1)}</span></p>
                                    </div>

                                </div>
                                <hr />
                            </div>
                        ))}
                        
                        {cart?.length === 0 && <p className="mt-5 text-muted">Your cart is empty.</p>}
                    </div>

                    {cart?.length > 0 && (
                        <div className="mt-4">
                            <h4 className="d-flex justify-content-between">
                                <span>Grand Total:</span>
                                <span>Rs: {totalPrice}</span>
                            </h4>
                            <div className="d-flex gap-2 mt-3">
                                <button className='btn btn-danger w-50' onClick={() => setcart([])}>Clear Cart</button>
                                <button className='btn btn-success w-50' onClick={handleCheckout}>Buy Now</button>
                            </div>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart
