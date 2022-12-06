import React from "react";
import Product from "./Product";
import "./Main.css";

export default function Main(props) {
  const { prodcts, onAdd, onRemove, ButtonExample } = props;
  console.log(prodcts)
  return (
    <main className='main-content'>
         <h2>Farm Plots</h2>
        <div className = 'product-content'>
            {prodcts.map((prodcts) => (
                <Product key={prodcts.id} prodcts={prodcts} onAdd={onAdd} onRemove={onRemove} ButtonExample={ButtonExample}></Product>
            ))}
        </div>
    </main>
/* <div><Product/></div> */
    // <main >
    //   <h2>Farm Plots</h2>
    //   <div >
    //     {prodcts.map((prodcts) => (
    //       <Product
    //         key={prodcts.id}
    //         prodcts={prodcts}
    //         onAdd={onAdd}
    //         onRemove={onRemove}
    //         ButtonExample={ButtonExample}
    //       ></Product>
    //     ))}
    //   </div>
    // </main>
  );
}
