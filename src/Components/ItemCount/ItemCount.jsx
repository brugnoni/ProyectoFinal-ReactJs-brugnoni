import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./ItemCount.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";

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
      <h2 className={styles["title"]}>Cantidad: {contador}</h2>
      <div className={styles["btns"]}>
        <Button className={styles["btn"]} variant="outlined" onClick={restar}>
          -
        </Button>

        <Button
          className={(styles["btn"], "container-cart")}
          variant="contained"
          onClick={() => onAdd(contador)}
        >
          <BsFillCartCheckFill
            style={{
              fontSize: "2rem",
              color: "#e1d4c7",
            }}
          />
        </Button>
        <Button className={styles["btn"]} variant="outlined" onClick={sumar}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
