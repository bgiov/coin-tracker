import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Icon from "react-crypto-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { PriceObject, USD } from "../../types/type";

export default ({ resource, pending }: { resource: any; pending: boolean }) => {
  const theme = useTheme();

  const prices = resource.read();

  const getPricePerCoin = (x: USD) => {
    return Object.values(x).map((x: USD) => x.price);
  };

  return (
    <Grid container spacing={2}>
      {prices.map((x: PriceObject) => (
        <Grid item xs={3} key={x.id}>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {x.name}
                </Typography>
                <Typography> {getPricePerCoin(x.quote)}</Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  {theme.direction === "rtl" ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === "rtl" ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </Box>
            </Box>

            <Icon name={x.symbol.toLocaleLowerCase()} size={50} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
