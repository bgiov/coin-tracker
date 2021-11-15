import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Fade } from "@mui/material";
import { stringToImgMap } from "../../dictionaries/stringToImgMap";
import { HomeCoinNames } from "../../types/enum";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
  },
  paper: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
}));

export const FadeCarousel = ({ dataArray }: { dataArray: string[] }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [carouselData, setCarousel] = React.useState(dataArray[0]);

  const fadeTime = 3000;

  useEffect(() => {
    var count = 0;
    // Interval Fade
    setInterval(() => {
      setChecked((prev) => !prev);
    }, fadeTime);
    // Interval Change Data
    setInterval(() => {
      if (count == dataArray.length - 1) {
        count = 0;
      } else count++;
      setCarousel(dataArray[count]);
    }, fadeTime * 2);
  }, []);

  return (
    <div className={classes.root}>
      <Fade
        style={{ backgroundColor: "transparent" }}
        in={checked}
        timeout={{
          enter: fadeTime * 3,
          exit: fadeTime * 3,
        }}
      >
        <img
          src={stringToImgMap[carouselData as HomeCoinNames]}
          height={500}
          width={500}
        />
      </Fade>
    </div>
  );
};

export default FadeCarousel;
