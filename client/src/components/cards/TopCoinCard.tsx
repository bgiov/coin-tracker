import Icon from "react-crypto-icons";
import { CoinImage } from "../../functions/dynamicImport";
export default ({ resource }: { resource: any }) => {
  const { balance } = resource.read();

  const data = Object.entries(balance);

  return (
    <>
      {data.map((i) => (
        <>
          <CoinImage name={i[0]} size={["50px", "50px"]} />
          {/* <Icon name={i[0]} size={60} /> */}
        </>
      ))}
    </>
  );
};
