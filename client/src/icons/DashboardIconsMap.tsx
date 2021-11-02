import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { RouteNames } from "../types/enum";

export const getIcon = (iconIdentifier: RouteNames) => {
  const { DEPOSITS, DASHBOARD, PORTFOLIO } = RouteNames;

  const iconsByStringIdentifier = new Map([
    [DEPOSITS, <AccountBalanceIcon />],
    [DASHBOARD, <DashboardIcon />],
    [PORTFOLIO, <LocalAtmIcon />],
  ]);
  return iconsByStringIdentifier.get(iconIdentifier) || iconIdentifier;
};
