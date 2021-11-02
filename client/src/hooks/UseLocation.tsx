import { useLocation } from "react-router";

export const UseLocation = () => {
  const location = useLocation();
  return location.pathname.substring(1);
};
