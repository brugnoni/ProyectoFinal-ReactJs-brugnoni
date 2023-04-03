import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

import CartContextProvider from "./context/CartContext";
import FormCheckout from "./Components/FormCheckout/FormCheckout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/formulario" element={<FormCheckout />} />

          <Route path="*" element={<h1> Ingrese un URL válido </h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
