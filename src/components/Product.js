import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
// import image from ".";
import data from "../data";

export default function Product(props) {
  const { prodcts, onAdd, onRemove, option, key } = props;
  console.log(prodcts);
  // console.log(data.prodcts)

  const plotsArray = data.prodcts;
  const navigate = useNavigate();
  // console.log(plotsArray);

  return (
    <div className="product-parent">
      <div className="product-grid-area">
        {plotsArray && plotsArray.length > 0
          ? plotsArray.map((i) => {
              let image = i.image;
              let title = i.name;
              let price = i.price;
              return (
                <div className="product-grid-item">
                  <img className="product-grid-item-image" src={image} />
                  <p className="product-grid-item-title">{title}</p>
                  <p className="product-grid-item-price">{price}</p>
                  <button
                    onClick={() => {
                      navigate(`Singlecart/${i.id}`);
                    }}
                  >
                    Show this Plot
                  </button>
                </div>
              );
            })
          : "No Data"}
      </div>

      {/* <img className='product-content' src={prodcts.image} alt={prodcts.name}></img>
        <h3>{prodcts.name}</h3>


        <div>Rs. {prodcts.price} per sq foot</div> */}
      {/* <label for="area">Choose Area:</label>
        <select name="area" id="area">
        <option value="select">Select</option>
        <option value="small">1 Acre</option>
        <option value="medium">2 Acres</option>
        <option value="large">3 Acres</option>
        <option value="extra large">5 Acres</option>
        </select> */}

      {/* <div>
        <Link to={`/Singlecart/${props.prodcts.id}`}><button onClick={() => onAdd(prodcts)} className='add'>
          <h3>Show this Plot</h3>
        </button>
        </Link> */}

      {/* <button onClick={() => onRemove(prodcts)} className='remove'>
          -
        </button> */}
      {/* </div> */}
    </div>
  );
}
