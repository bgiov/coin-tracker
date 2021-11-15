import { PriceObject, USD } from "../types/type";

export function calculateTotalAssets(
  coin: string,
  amount: number,
  prices: any,
  priceArray: any[]
) {
  function calculateTotalAssetSum(coin: string, amount: number) {
    let coinName = coin.toUpperCase();
    let price = getCoinPrice(coinName, prices);

    priceArray.push(convertCoinPriceToUS(price, amount));
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    const totalPrice = priceArray.reduce(reducer, priceArray.length - 1);
    return totalPrice;
  }

  return calculateTotalAssetSum(coin, amount);
}

function convertCoinPriceToUS(price: number, amount: number) {
  if (price === undefined) return 0;
  return price * amount;
}

function getCoinPrice(coinName: any, prices: any) {
  const map = createCoinToPriceMap(prices);

  let pricePerCoin = map.get(coinName);

  return pricePerCoin;
}

function createCoinToPriceMap(prices: any) {
  const coinToPriceMap = new Map();

  prices.map((x: PriceObject) => {
    let coin = x.symbol;
    return Object.values(x.quote).map((x: USD) =>
      coinToPriceMap.set(coin, x.price)
    );
  });

  return coinToPriceMap;
}
