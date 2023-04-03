import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ element }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.cardMedia}
        image={element.img}
        title="imagen"
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body2" component="div" align="center">
          {element.description}
        </Typography>
        <Typography variant="body" component="div" align="center">
          ${element.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${element.id}`}>
          <Button size="small" variant="contained" color="primary">
            + Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
