import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data'
import { useContext, useState } from 'react';
// import { Router } from 'react-router-dom';
import Routers from './Router/Router';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const {prodcts} = data;
  const [cartItems, setCartItems] = useState([]);
  // const onAdd = (prodcts) => {
  //   const exist = cartItems.find(x => x.id === prodcts.id );
  //   if(exist){
  //     setCartItems(
  //       cartItems.map(x => 
  //         x.id === prodcts.id ? {...exist, qty: exist.qty + 1} : x
  //       )
  //     );
  //   } else{
  //     setCartItems([...cartItems, { ...prodcts,qty: 1 }]);
  //   }
  // };
  
  // const onRemove = (prodcts) => {
  //   console.log(prodcts)
  //   const exist = cartItems.find((x) => x.id === prodcts.id);
  //   if (exist.qty === 1){
  //     setCartItems(cartItems.filter((x) => x.id !== prodcts.id));
  //   }else {
  //     setCartItems(
  //       cartItems.map(x => 
  //         x.id === prodcts.id ? {...exist, qty: exist.qty - 1} : x
  //       )
  //     );

  //   }
  // };
  
  return (
    <div className='main-container'>
    <Header countCartItems={cartItems.length} />
    <Routers/>
    <Footer />
    </div>
  );
}

export default App;
