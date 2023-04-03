import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./ItemCount.module.css";

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
    <div className={styles["container-btn"]}>
      <h2>Cantidad: {contador}</h2>
      <div className={styles.btns}>
        <Button variant="outlined" onClick={restar}>
          -
        </Button>
        <Button variant="contained" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
        <Button variant="outlined" onClick={sumar}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
