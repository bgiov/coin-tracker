import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

export const LineChart = () => {
  const styles = getStyle();
  return (
    <VictoryLine
      height={200}
      style={styles.lineTwo}
      labels={({ datum }) => datum.time}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      data={[
        { x: 1, y: 2, time: "Apr 2021" },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 4 },
        { x: 6, y: 6, time: "Nov 2021" },
      ]}
    />
  );
};

const getStyle = () => {
  const BLUE_COLOR = "#00a3de";
  return {
    lineTwo: {
      data: {
        stroke: BLUE_COLOR,
        strokeWidth: 4.5,
      },
      labels: {
        fill: "#fff",
      },
    },
  };
};
