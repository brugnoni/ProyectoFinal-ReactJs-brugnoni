import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 500,
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 200, backgroundColor: "white" }}
        image={element.img}
        title="imagen"
      />
      <CardContent sx={{ height: 250 }}>
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
