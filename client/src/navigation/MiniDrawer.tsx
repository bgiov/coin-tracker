import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Index, RouteNames } from "../types/enum";
import { getIcon } from "../icons/DashboardIconsMap";

import { UseLocation } from "../hooks/UseLocation";
import { ZoomTooltip } from "../components/tooltips/Tooltips";
const drawerWidth = 240;

interface Props {
  children: any;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: "#141E2E",
  backdropFilter: "blur(16px) saturate(98%)",
  WebkitBackdropFilter: "blur(16px) saturate(98%)",
  //backgroundColor: "rgba(9, 27, 42, 0.64)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const MiniDrawer = ({ children }: { children: Props }) => {
  const theme = useTheme();
  const title = UseLocation();
  const [open, setOpen] = React.useState(false);
  const { DEPOSITS, DASHBOARD, PORTFOLIO } = RouteNames;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const indexToRouteMap = {
    [0]: "/" + DASHBOARD,
    [1]: "/" + DEPOSITS,
    [2]: "/" + PORTFOLIO,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer elevation={0} variant="permanent" open={open}>
        <Divider />
        <List
          sx={{
            backgroundColor: "#141E2E",
            backdropFilter: "blur(16px) saturate(98%)",
            WebkitBackdropFilter: "blur(16px) saturate(98%)",
            //backgroundColor: "rgba(9, 27, 42, 0.64)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {[DASHBOARD, DEPOSITS, PORTFOLIO].map((text, index) => (
            <Link
              key={index}
              to={{ pathname: indexToRouteMap[index as Index] }}
              style={{ textDecoration: "none" }}
            >
              <ZoomTooltip title={text}>
                <ListItem>
                  <ListItemIcon>{getIcon(text as RouteNames)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </ZoomTooltip>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
