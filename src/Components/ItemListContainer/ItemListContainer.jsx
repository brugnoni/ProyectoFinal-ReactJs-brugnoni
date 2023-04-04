import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebaseConfig";
import { CircularProgress } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;

    if (id) {
      const q = query(itemsCollection, where("category", "==", id));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [id]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
