import Header from "./Components/Layout/Header";
import { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart';
//import { Fragment } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart]= useState(false);

   const cartIsVisible=()=>
   {
     setShowCart(true);
   }

   const cartNotVisible =()=>
   {
     setShowCart(false);
   }
  return (
    <CartProvider>
      { showCart && <Cart onCartNotVisible={cartNotVisible} onClose={cartNotVisible}/>}
      <Header onCartVisible={cartIsVisible}/>
      <main>
      <Meals/>
      </main>
      
    </CartProvider>
  );
}

export default App;