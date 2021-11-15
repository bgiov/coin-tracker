import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { calculateTotalAssets } from "../../functions/calculateTotalAssets";
export default ({ pending }: { pending: boolean }) => {
  const theme = useTheme();

  const [assetTotal, setAssetTotal] = React.useState<number>(0);
  // const { balance } = resource.read();
  // const prices = resourcetwo.read();

  // const data = Object.entries(balance);

  // React.useEffect(() => {
  //   data.map((coin: any) =>
  //     setAssetTotal(calculateTotalAssets(coin[0], coin[1], prices))
  //   );
  // }, []);

  return (
    <>
      <h1>${assetTotal}</h1>
    </>
  );
};
