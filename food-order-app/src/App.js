import { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContext/cart-context-provider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <CartContextProvider>
      {showCart && <Cart closeCart={toggleShowCart} />}
      <Header showCart={toggleShowCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
