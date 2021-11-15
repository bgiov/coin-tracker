import * as React from "react";
import { makeStyles } from "@mui/styles";

export const shadows = makeStyles({
  multicolor: {
    padding: 10,
    textAlign: "center",
    borderRadius: "12px",
    WebkitBoxShadow:
      //     /* offset-x | offset-y | blur-radius | spread-radius | color */
      "2px 2px 2px 2px #ff8080, -9px 5px 15px 5px #ffe488,\n    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,\n    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,\n    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0)",
  },
});
