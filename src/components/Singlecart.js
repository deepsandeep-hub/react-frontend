import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';


const Singlecart = (props) => {
  const { id } = useParams();
  const { prodcts } = props;
  
  console.log(prodcts);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [info, setInfo] = useState("")
  const userData = localStorage.getItem(`user-${id}`)
            // console.log(userData)
            const user = userData && JSON.parse(userData)

//   const getName = (e) => {
//     setName(e.target.value)
//   }
//   const getEmail = (e) => {
//     setEmail(e.target.value)
//   }
//   console.log(name)
//   console.log(email)
  
  return (
    <div className="product-grid-area">
      {prodcts.map((card) => {
        if(card.id === id){
            const plotBooked = () => {
                props.getUserDetails({
                    name, email ,id
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Your plot - ${card.name} has been booked successfully`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                  setInfo(name)
              }
            return (
                <div>
                  <img className="small" src={card.image} alt={card.name}
                  style={{
                    height: '400px',
                    width: '50%'
                  }}></img>
                  <h3 className="product-grid-item-title">{card.name}</h3>
                  <div className="product-grid-item-price">Rs. {card.price} per sq foot</div>
                  {
                    card.bookingStatus === "BOOKED" ? <button onClick={plotBooked} className="product-grid-item-price">Book Plot</button> : 
                    <button onClick={plotBooked} className="product-grid-item-price" disabled>SOLD OUT</button>
                  }
                 
                  <TextField id="outlined-basic" label="Name" variant="outlined" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
                  <TextField id="outlined-basic" label="Email ID" variant="outlined" placeholder="Email ID" onChange={(e) => {setEmail(e.target.value)}}/>
                 
                </div>
              );
        }
      })}
    </div>
  );
};

export default Singlecart;
