import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../components/Product";
import Main from "../components/Main";
import Header from "../components/Header";
import Basket from "../components/Basket";
import data from "../data";
import Singlecart from "../components/Singlecart";
import AdminDashboard from "../components/AdminDashboard";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Routers = () => {
  const { prodcts } = data;
  const [cartItems, setCartItems] = useState([]);
  const [userDeatils, setUserDetails] = useState();

  const onAdd = (prodcts) => {
    const exist = cartItems.find((x) => x.id === prodcts.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === prodcts.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...prodcts, qty: 1 }]);
    }
  };

  const onRemove = (prodcts) => {
    console.log(prodcts);
    const exist = cartItems.find((x) => x.id === prodcts.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== prodcts.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === prodcts.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getUserDetails = (data) => {
    let dat = JSON.stringify(data);
    setUserDetails(data);
    localStorage.setItem(`user-${data.id}`, dat);
  };

  return (
    <div className="container-body">
      <Router>
      <Sidebar/>
        <Routes>
        <Route exact path="/" element={<Product />} />
          {/* <Route
            exact
            path="/"
            element={
              <Main onAdd={onAdd} onRemove={onRemove} prodcts={prodcts} />
            }
          /> */}
          <Route exact path="Product" element={<Product />} />
          {/* <Route
            path="Basket"
            element={
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            }
          /> */}
          <Route
            exact
            path="Header"
            element={<Header countCartItems={cartItems.length} />}
          />
          <Route
            exact
            path="Singlecart/:id"
            element={
              <Singlecart prodcts={prodcts} getUserDetails={getUserDetails} />
            }
          />
          <Route
            exact
            path="AdminDashboard"
            element={<AdminDashboard userDeatils={userDeatils} />}
          />

        </Routes>
     

      </Router>
    </div>
  );
};

export default Routers;
