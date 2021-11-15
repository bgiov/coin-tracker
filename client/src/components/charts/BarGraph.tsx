import * as React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
];

export const BarGraph = ({
  xAxisNameArray,
  tickValues,
}: {
  xAxisNameArray: string[];
  tickValues: number[];
}) => {
  console.log(xAxisNameArray);
  return (
    <VictoryChart
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      domainPadding={20}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={tickValues}
        tickFormat={xAxisNameArray}
      />

      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};
