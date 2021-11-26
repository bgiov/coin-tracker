import { makeStyles } from "@mui/styles";

export const cardStyles = makeStyles({
  card: {
    backdropFilter: "blur(25px) saturate(154%)",
    WebkitBackdropFilter: "blur(100px) saturate(154%)",
    backgroundColor: "rgba(17, 25, 40, 1)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  },
});
