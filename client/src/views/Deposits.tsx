import { CircularProgress } from "@mui/material";
import * as React from "react";
import { createDepositResource } from "../queries/fetchDeposits";

const SimpleTable = React.lazy(
  () => import("../components/tables/SimpleTable")
);

export const Deposits = () => {
  const [depositResource, setDepositResource] = React.useState<any>();
  //CREATE HOOK FOR THIS
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition(500);

  React.useEffect(() => {
    const tid = setTimeout(() => {
      startTransition(() => {
        setDepositResource(createDepositResource());
      });
    }, 100);
    return () => clearTimeout(tid);
  }, []);

  return <SimpleTable resource={depositResource} pending={isPending} />;
};
