function fetchBalance() {
  return fetch("/api/balance").then((res) => res.json());
}

export const createBalanceResource = () => {
  let status = "pending";
  let result: "";

  const suspender = fetchBalance().then(
    (balance) => {
      status = "ok";
      result = balance;
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
          return JSON.parse(result);
      }
    },
  };
};
