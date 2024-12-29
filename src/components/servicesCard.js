import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia } from "@mui/material";

export default function ActionAreaCard({ card }) {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardMedia component="img" alt={card.id} image={card.icon} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
