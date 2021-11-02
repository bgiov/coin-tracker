require("dotenv").config();
const express = require("express");
const axios = require("axios");

const coinspot = require("./api/coin-spot/requests");
const PORT = process.env.PORT || 3001;
const app = express();

const coinMarketCapConfig = {
  method: "GET",
  url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "3",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_KEY,
  },
  json: true,
  gzip: true,
};

app.get("/api/balance", (req, res) => {
  coinspot.getBalance(function (err, result) {
    console.log(result);
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/api/deposits", (req, res) => {
  coinspot.getDeposits(function (err, result) {
    console.log(result);
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/api/latest_prices", (req, res) => {
  axios(coinMarketCapConfig)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then((response) => res.json(response));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
