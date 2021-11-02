import Icon from "react-crypto-icons";

export default ({ resource }: { resource: any }) => {
  const { balance } = resource.read();

  const data = Object.entries(balance);

  return (
    <>
      {data.map((i) => (
        <>
          <Icon name={i[0]} size={60} />
        </>
      ))}
    </>
  );
};
