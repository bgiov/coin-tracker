function fetchLatestPrices() {
  return fetch("/api/latest_prices").then((res) => res.json());
}
export const createLatestPriceResource = () => {
  let status = "pending";
  let result: "";

  const suspender = fetchLatestPrices().then(
    (prices) => {
      status = "ok";
      result = prices.data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "ok":
          return result;
      }
    },
  };
};
