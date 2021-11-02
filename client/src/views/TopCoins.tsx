import * as React from "react";
import { createBalanceResource } from "../queries/fetchBalance";

const TopCoinCard = React.lazy(() => import("../components/cards/TopCoinCard"));

export const TopCoin = () => {
  const [balanceResource, setBalanceResource] = React.useState<any>();

  //CREATE HOOK FOR THIS
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition(500);

  React.useEffect(() => {
    const tid = setTimeout(() => {
      startTransition(() => {
        setBalanceResource(createBalanceResource());
      });
    }, 100);
    return () => clearTimeout(tid);
  }, [startTransition]);

  if (balanceResource === undefined) {
    return null;
  } else
    return (
      <React.Suspense fallback={<b>Loading...</b>}>
        <TopCoinCard resource={balanceResource} />
      </React.Suspense>
    );
};
