import React, { useState } from "react";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del nombre
    if (userData.name.length < 4 ){
      setError("Por favor, ingrese un nombre válido, mínimo 4 caracteres");
      return;
    }

    // Validación del email
    if (!userData.email.includes("@")) {
      setError("Por favor, ingrese un email válido, recuerde utilizar @");
      return;
    }

    // Validación del teléfono
    if (!/^\d+$/.test(userData.phone)) {
      setError("Por favor, ingrese un número de teléfono válido, recuerde que solo puede contener números.");
      return;
    }

    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => {
        setError(
          "Error al guardar la orden. Por favor, inténtalo de nuevo más tarde."
        );
        console.log(err);
      });

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity }).catch(
        (err) => {
          setError(
            "Error al actualizar el stock. Por favor, inténtalo de nuevo más tarde."
          );
          console.log(err);
        }
      );
      return product;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <button type="submit">Comprar</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default FormCheckout;