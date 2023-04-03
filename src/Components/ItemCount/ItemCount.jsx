import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
    console.log("Sumando");
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
    console.log("Restando");
  };

  return (
    <div>
      <h2>{contador}</h2>

      <button onClick={sumar}>+</button>

      <button onClick={restar}>-</button>

      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
