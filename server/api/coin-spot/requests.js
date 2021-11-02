const coinspot = require("coinspot-api");
const test = require("./coinspot");
const axios = require("axios").default;
const secret = process.env.SECRET; // insert your secret here
const key = process.env.API_KEY; // insert your key here

const readOnlyKey = process.env.READ_ONLY_KEY;
const readOnlySecret = process.env.READ_ONLY_SECRET;
const coinMarketKey = process.env.COIN_MARKET_KEY;

const client = new coinspot(key, secret);
const newClient = new test(readOnlyKey, readOnlySecret);

// client.orders("LTC", function (e, data) {
//   console.log(data);
// });

// client.myorders(function (e, data) {
//   console.log(data);
// });

// client.spot(function (e, data) {
//   console.log(data);
// });

function getDeposits(callback) {
  newClient.deposits({}, (err, res) => {
    return callback(err, res);
  });
}

function getBalance(callback) {
  client.balances(function (err, res) {
    return callback(err, res);
  });
}

module.exports = {
  getBalance: getBalance,
  getDeposits: getDeposits,
};

// client.buy('BTC', 0.3, 529, function(e, data) {
//     console.log(data);
// });

// client.sell('DOGE', 0.3, 0.00024, function(e, data) {
//     console.log(data);
// });
