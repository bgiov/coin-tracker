import * as React from "react";
import { calculateTotalAssets } from "../functions/calculateTotalAssets";
import { createBalanceResource } from "../queries/fetchBalance";
import { createLatestPriceResource } from "../queries/fetchLatestPrices";

const CoinCard = React.lazy(() => import("../components/cards/CoinCard"));

export const Balance = () => {
  const [balanceResource, setBalanceResource] = React.useState<any>();
  const [latestPriceResource, setLatestPriceResource] = React.useState<any>();

  //CREATE HOOK FOR THIS
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition(500);

  React.useEffect(() => {
    const tid = setTimeout(() => {
      startTransition(() => {
        setBalanceResource(createBalanceResource());
        setLatestPriceResource(createLatestPriceResource());
      });
    }, 100);
    return () => clearTimeout(tid);
  }, [startTransition]);

  if (balanceResource === undefined) {
    return null;
  } else {
    const { balance } = balanceResource.read();
    const prices = latestPriceResource.read();
    const data = Object.entries(balance);
    const priceArray: number[] = [];

    const totalFiatArray = data.map((coin: any) =>
      calculateTotalAssets(coin[0], coin[1], prices, priceArray)
    );
    let total = totalFiatArray[totalFiatArray.length - 1];

    return (
      <React.Suspense fallback={<b>Loading...</b>}>
        <h1>help</h1>
        {/* <h1>{totalFiat}</h1> */}
        {/* <CoinCard pending={isPending} /> */}
      </React.Suspense>
    );
  }
};
