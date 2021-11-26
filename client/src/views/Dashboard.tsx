import * as React from "react";
import { Deposits } from "./Deposits";
import { createLatestPriceResource } from "../queries/fetchLatestPrices";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Portfolio } from "./Portfolio";
import { TopCoin } from "./TopCoins";
import { shadows } from "../styles/shadows/shadow";
import { cardStyles } from "../styles/main-styles/cardStyles";

//className={shadow.multicolor}
export const Dashboard = () => {
  const cardClasses = cardStyles();
  const shadow = shadows();

  return (
    <Box sx={{ flexGrow: 1, marginTop: -12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Portfolio</h1>
          </div>

          <Paper
            elevation={0}
            // className={cardClasses.card}
            style={{
              padding: 10,
              textAlign: "center",

              backgroundColor: "#141E2E",
              backdropFilter: "blur(16px) saturate(98%)",
              WebkitBackdropFilter: "blur(16px) saturate(98%)",
              //backgroundColor: "rgba(9, 27, 42, 0.64)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Portfolio />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Bread Winners!</h1>
          </div>
          <Paper
            elevation={5}
            style={{
              textAlign: "center",
              padding: 10,
              borderRadius: 20,
              alignItems: "stretch",
            }}
          >
            <TopCoin />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Deposits</h1>
          </div>
          <Paper
            elevation={5}
            style={{
              textAlign: "center",
              padding: 10,
              borderRadius: 20,
              alignItems: "stretch",
            }}
          >
            nothing yet
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Transactions</h1>
          </div>
          <Paper
            elevation={5}
            style={{
              textAlign: "center",
              padding: 10,
              borderRadius: 20,
              alignItems: "stretch",
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
