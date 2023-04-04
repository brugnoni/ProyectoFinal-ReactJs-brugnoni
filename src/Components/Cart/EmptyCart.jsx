import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <div className="empty-cart">
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    </div>
  );
};

export default EmptyCart;
