import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const HomeNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        color="transparent"
        position="static"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Righteous", color: "#E3697D" }}
          >
            boodle
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
