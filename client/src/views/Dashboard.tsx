import * as React from "react";
import { Deposits } from "./Deposits";
import { Balance } from "./Balance";
import { createLatestPriceResource } from "../queries/fetchLatestPrices";
import { PriceObject } from "../types/app.types";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Portfolio } from "./Portfolio";
import { TopCoin } from "./TopCoins";

export const Dashboard = () => {
  const [latestPriceResource, setLatestPriceResource] = React.useState<any>();
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition(500);

  React.useEffect(() => {
    const tid = setTimeout(() => {
      startTransition(() => {
        setLatestPriceResource(createLatestPriceResource());
      });
    }, 100);

    return () => clearTimeout(tid);
  }, [startTransition]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",

    color: theme.palette.text.secondary,
    borderRadius: 12,
  }));

  return (
    <React.Suspense fallback={<b>Loading...</b>}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div style={{ textAlign: "center" }}>
              <h1>Portfolio</h1>
            </div>
            <Paper
              elevation={5}
              style={{ textAlign: "center", padding: 10, borderRadius: 20 }}
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
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </React.Suspense>
  );
};
