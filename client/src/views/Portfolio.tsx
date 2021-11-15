import * as React from "react";
import { calculateTotalAssets } from "../functions/calculateTotalAssets";
import { createBalanceResource } from "../queries/fetchBalance";
import { createLatestPriceResource } from "../queries/fetchLatestPrices";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";
import StyledComponents from "../styles/buttons/EnterAppButton";
import { actionCreators, State } from "../state";
import { BalanceState, IBalance } from "../types/type";
import { BarGraph } from "../components/charts/BarGraph";
import { LineChart } from "../components/charts/LineChart";

const CoinCard = React.lazy(() => import("../components/cards/CoinCard"));

export const Portfolio = () => {
  const balanceFromReducer = useSelector((state: State) => state.balance);

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
    let total: number = 0;

    const totalFiatArray = data.map((coin: any) =>
      calculateTotalAssets(coin[0], coin[1], prices, priceArray)
    );

    total = totalFiatArray[totalFiatArray.length - 1];

    return (
      <React.Suspense fallback={<b>Loading...</b>}>
        <h1>{total}</h1>
        {/* <BarGraph
          xAxisNameArray={["Eth", "Btc", "Ada"]}
          tickValues={[1, 2, 3]}
        /> */}
        <LineChart />
        {/* <h1>{balanceFromReducer}</h1> */}
        {/* <StyledComponents text={total} /> */}
        {/* <button onClick={() => getBalance()}>check my balance</button> */}
      </React.Suspense>
    );
  }
};
