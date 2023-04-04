import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import styles from "./Confirmation.module.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div className={styles.orderId}>
        <h2>Gracias por su compra, lo esperamos pronto!</h2>
        <h4>
          El código de tu comprobante es: {orderId} puedes utilizarlo para realizar tu
          seguimiento
        </h4>
        <img src={"https://res.cloudinary.com/dmugld2v3/image/upload/v1680563195/12dfbc671cd53552dad98da3e5e036dc_udg1b4.jpg"} alt="Gracias por realizar tu compra" />
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <h2>${item.price}.-</h2>
                    <h2>Unidades: {item.quantity}</h2>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                    >
                      Quitar del carrito
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <h3>Precio: ${getTotalPrice()}</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  COMPRAR
                </Button>
                <Button onClick={clear} variant="contained">
                  Vaciar Carrito
                </Button>
              </div>
            )}

            <h1>El total es ${getTotalPrice()}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
