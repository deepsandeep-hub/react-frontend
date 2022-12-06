// import React from "react";

// export default function Basket(props) {
//   const { cartItems, onAdd, onRemove } = props;
//   const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty * 5, 0);
//   const taxPrice = itemPrice * 0.14;
//   const shippingPrice = itemPrice > 1199 ? 0 : 100;
//   const totalPrice = itemPrice + taxPrice + shippingPrice;
//   return (
//     <>
//       <aside className="block col-1">
//         <h2>Your Cart</h2>
//         <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
//         {cartItems.map((item) => (
//           <div key={item.id} className="row">
//             <div className="itemname">
//               <img className="cartimage" src={item.image}></img>
//               <p>{item.name}</p>
//             </div>
//             <div className="col-2">
//               <button onClick={() => onAdd(item)} className="add">
//                 +
//               </button>
//               <button onClick={() => onRemove(item)} className="remove">
//                 -
//               </button>
//             </div>
//             <div className="col-2 text-right">
//               {item.qty} x Rs.{item.price.toFixed(2)}
//             </div>
//           </div>
//         ))}
//         {cartItems.length !== 0 && (
//           <>
//             <hr></hr>
//             <div className="row">
//               <div className="col-2">Booking Amount</div>
//               <div className="col-1">Rs.{itemPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">ServiceTax</div>
//               <div className="col-1">Rs.{taxPrice.toFixed(2)}</div>
//             </div>
//             {/* <div className='row'>
//                 <div className='col-2'>Shipping Price</div>
//                 <div className='col-1'>Rs.{shippingPrice.toFixed(2)}</div>
//             </div> */}
//             <div className="row">
//               <div className="col-2">
//                 <strong>Total Price</strong>
//               </div>
//               <div className="col-1">
//                 <strong>Rs.{totalPrice.toFixed(2)}</strong>
//               </div>
//             </div>
//             <hr />
//             <div className="row">
//               <button onClick={() => alert("Implement Checkout")}>
//                 CheckOut
//               </button>
//             </div>
//           </>
//         )}
//       </aside>
//     </>
//   );
// }
