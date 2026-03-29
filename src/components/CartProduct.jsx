// import React, { useContext } from 'react'
// import { CartContext } from '../Features/ContextProvider';
// import { totalItem, totalPrice } from '../Features/CartReducer';
// import serverURL from '../Services/serverURL';


// const CartProduct = ({data}) => {
//     console.log(data);
    

//     const {cart,dispatch} = useContext(CartContext)

//     const Increase = (plantname) => {
//         const Index = cart.findIndex( d => d.plantname === plantname)
//         if(cart[Index].quantity < 10) {
//             dispatch({type: "Increase", plantname})
//         }

//     };
//     const Decrease = (plantname) => {
//         const Index = cart.findIndex( d => d.plantname === plantname)
//         if(cart[Index].quantity > 1) {
//             dispatch({type: "Decrease", plantname})
//         }
//     };
//   return (
//     <div>
//       <div className='d-flex justify-content-between'>
//                                 <div>
//                                     <img className='img-fluid' src={`${serverURL}/uploads/${data.image}`}alt="" style={{ width: "100px" }} />
//                                 </div>
//                                 <div>
//                                     <h4>{data.plantname}</h4>
//                                     <p>{data.price}</p>
//                                     <div className='d-flex ms-4 align-items-center justify-content-center'>
//                                         <button className='btn' onClick={()=>Decrease(data.plantname)}><b>-</b></button>
//                                         <button className='btn'>{data.quantity}</button>
//                                         <button className='btn' onClick={()=>Increase(data.plantname)}><b>+</b></button>
//                                         <button className='btn' onClick={()=>dispatch({type: "Remove",plantname: data.plantname})}><i className="fa-solid fa-trash ms-2"></i></button>
//                                     </div>
//                                 </div>
//                                 <div className='justify-content-between'>
//                                     <p>Items:{totalItem(cart)}</p>
//                                     <p>Rs: <br /> <span className='text-success'>{totalPrice(cart)}</span></p>
//                                 </div>
//                             </div>
//                             <hr />
//     </div>
//   )
// }

// export default CartProduct
