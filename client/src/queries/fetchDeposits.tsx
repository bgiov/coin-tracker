function fetchDeposits() {
  return fetch("/api/deposits").then((res) => res.json());
}
export const createDepositResource = () => {
  let status = "pending";
  let result: "";

  const suspender = fetchDeposits().then(
    (deposits) => {
      status = "ok";
      result = deposits;
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
