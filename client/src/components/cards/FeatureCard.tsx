import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export const FeatureCard = ({
  image,
  title,
  subColor,
  subtitle,
  subSize,
  onHover,
}: {
  image: string;
  title: string;
  subtitle: string;
  subColor?: string;
  subSize?: string;
  onHover?: boolean;
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 500,
        backgroundColor: "transparent",
        overflow: "visible",

        textAlign: "center",
        borderRadius: "8px",

        "&:hover": {
          boxShadow: "-1px 10px 29px 0px rgba(227,105,125,0.8)",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="440"
          sx={{
            height: 300,
            width: 300,
            transition: "transform .2s",
            "&:hover": {
              transform: "scale(1.3)",
            },
          }}
          image={image}
          alt={image}
        />
      </div>
      <CardContent>
        <Typography
          style={{ color: subColor ?? "", fontSize: subSize ? "40px" : "18px" }}
          gutterBottom
          variant={"h5"}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
