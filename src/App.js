import React, { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)
  const showCartHandler = () => { setCartIsVisible(true) }
  const hideCartHandler = () => { setCartIsVisible(false) }

  const [checkoutIsVisible, setCheckoutIsVisible] = useState(false)
  const showCheckout = () => { 
    setCheckoutIsVisible(true) 
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn")

    if(storedLoginInfo === "1"){
      setIsLoggedIn(true)
    }
  })
  const loginHandler = (email, password) => { 
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true) 
  }
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn") 
    setIsLoggedIn(false) 
  }

  return (
    <React.Fragment>
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      <CartContextProvider>
        {!checkoutIsVisible && <main>
          {cartIsVisible && <Cart onHideCart={hideCartHandler} onShowCheckout={showCheckout}/>}
          {isLoggedIn && <Products/>}
        </main>}
        <Header onShowCart={showCartHandler} showCartButton={isLoggedIn} onLogout={logoutHandler}></Header>
      </CartContextProvider>
      {checkoutIsVisible && <Checkout/>}
    </React.Fragment>
  );
}

export default App;
