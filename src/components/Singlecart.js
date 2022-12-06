import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import './singlecart.css'


const Singlecart = (props) => {
  const { id } = useParams();
  const { prodcts } = props;

  console.log(prodcts);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const userData = localStorage.getItem(`user-${id}`);
  // console.log(userData)
  const user = userData && JSON.parse(userData);

  const [open, setOpen] = useState(false);

  //   const getName = (e) => {
  //     setName(e.target.value)
  //   }
  //   const getEmail = (e) => {
  //     setEmail(e.target.value)
  //   }
  //   console.log(name)
  //   console.log(email)
  const handlepopup = () =>{
    setOpen(true);
  }

  return (
    <div className="product-grid-area">
      {prodcts.map((card) => {
        if (card.id === id) {
          const plotBooked = () => {
            props.getUserDetails({
              name,
              email,
              id,
            });
            setOpen(false)
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Plot  - ${card.name} has been booked successfully by ${name}`,
              showConfirmButton: false,
              timer: 2000,
            });
            
            setInfo(name);
          };
          return (
            <div>
              <img
                className="small"
                src={card.image}
                alt={card.name}
                style={{
                  height: "400px",
                  width: "80%",
                }}
              ></img>
              <h3 className="product-grid-item-title">{card.name}</h3>
              <div className="product-grid-item-price">
                Rs. {card.price} per sq foot
              </div>
              {card.bookingStatus === "BOOKED" ? (
                <button
                  // onClick={plotBooked}
                  onClick={handlepopup}
                  className="product-grid-item-price"
                >
                  Book Plot
                </button>
              ) : (
                <button
                  onClick={plotBooked}
                  className="product-grid-item-price"
                  disabled
                >
                  SOLD OUT
                </button>
              )}

              {/* <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email ID"
                variant="outlined"
                placeholder="Email ID"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}

              <Dialog className="mui-dialog-box"
                open={open}
                // onClose={handleClose}
                style={{
                  padding: "20px",
                  margin: "20px",
                  display: "flex",
                  alignItems: "center",
                  // alignSelf: "center",
                  marginLeft: "40%",
                  marginTop: "100px"
                  // backgroundColor: "#ddd"
                }}
              >
                {/* <DialogTitle>Subscribe</DialogTitle> */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",

                    gap: "10px",
                  }}
                >
                  {/* <label>username</label>
                  <input type="text" style={{ padding: "20px" }} /> */}
                  <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
                </div>
                <div style={{ padding: "20px" }}>
                  {/* <label>password</label>
                  <input type="text" style={{ padding: "20px" }} /> */}
              <TextField
                id="outlined-basic"
                label="Email ID"
                variant="outlined"
                placeholder="Email ID"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
                </div>
                <button className="book-plot-final-btn"
                  // style={{
                  //   display: "flex",
                  //   width: "fit-content",
                  //   alignSelf: "center",
                  //   marginBottom: "40px"
                  // }}
                  onClick={plotBooked}
                >
                  submit
                </button>
              </Dialog>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Singlecart;
