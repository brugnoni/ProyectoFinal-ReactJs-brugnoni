import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
      <h2 style={{ fontFamily: "roboto" }}>Cantidad: {contador}</h2>
      <div className="btns">
        <Button variant="outlined" onClick={sumar}>
          +
        </Button>
        <Button
          style={{ fontFamily: "roboto" }}
          variant="contained"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
        <Button variant="outlined" onClick={restar}>
          -
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
