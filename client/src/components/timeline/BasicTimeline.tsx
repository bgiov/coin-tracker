import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
//import { useStyles } from "../../styles/home-styles/styles";
import walletLogo from "../../assets/images/timeline/wallet-dynamic-premium.png";
import chartLogo from "../../assets/images/timeline/chart-dynamic-premium.png";
import fileLogo from "../../assets/images/timeline/file-text-dynamic-premium.png";
import HotelIcon from "@mui/icons-material/Hotel";
import { FeatureCard } from "../cards/FeatureCard";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(90deg)",
    textAlign: "center",
  },
  timelineContentContainer: {
    textAlign: "left",
  },
  timelineContent: {
    display: "inline-block",
    textAlign: "center",
    minWidth: 400,
    //padding: 100,

    borderRadius: "9px",
    borderBottomLeftRadius: "0px",
    borderTopLeftRadius: "0px",
    backgroundColor: "transparent",
    borderBottomColor: "#E3697D",
    borderBottomStyle: "solid",
    borderBottomRightRadius: 0,

    borderLeftColor: "#E3697D",
    borderLeftStyle: "double",
    WebkitMaskImage:
      "radial-gradient(circle 10px at 0 0, transparent 0, transparent 20px, black 21px)",
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
    margin: 100,
  },
});

export const BasicTimeline = () => {
  //const homeStyles = useStyles();
  const classes = useStyles();
  const width = "100px";
  const height = "100px";
  return <Paper className={classes.timelineContent}></Paper>;
};
