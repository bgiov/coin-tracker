import * as React from "react";
import { Deposits } from "./Deposits";
import { createLatestPriceResource } from "../queries/fetchLatestPrices";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Portfolio } from "./Portfolio";
import { TopCoin } from "./TopCoins";
import { shadows } from "../styles/shadows/shadow";
//className={shadow.multicolor}
export const Dashboard = () => {
  const shadow = shadows();

  return (
    <React.Suspense fallback={<b>Loading...</b>}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div style={{ textAlign: "center" }}>
              <h1>Portfolio</h1>
            </div>

            <Paper
              elevation={24}
              style={{ padding: 10, textAlign: "center", borderRadius: "12px" }}
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
    </React.Suspense>
  );
};
