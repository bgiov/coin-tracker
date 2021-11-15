import { makeStyles } from "@mui/styles";
//import background from "../../assets/images/home-images/background.svg";
import background from "../../assets/images/background1.jpg";

export const useStyles = makeStyles({
  root: {
    //backgroundImage: `url(${background})`,
    backgroundImage:
      "linear-gradient(180deg, rgba(59,36,67,1) 17%, rgba(19,23,31,1) 28%, rgba(19,23,31,1) 75%)",
    backgroundPosition: "center",
    height: "auto",
  },

  typography: {
    color: "#8D7FD1",
    fontFamily: "Armata",
  },
  color: {
    backgroundColor: "#E3697D",
  },
  subheading: {
    color: "#79797A",
  },
  gold: {
    fontSize: "150px",
    fontWeight: "bold",
    backgroundImage:
      "linear-gradient(\n    to right,\n    #462523 0,\n    #cb9b51 22%,\n    #f6e27a 45%,\n    #f6f2c0 50%,\n    #f6e27a 55%,\n    #cb9b51 78%,\n    #462523 100%\n  )",
    color: "transparent",
    WebkitBackgroundClip: "text",
  },
});
