import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@mui/material";
export const ProtectedRoute = ({
  component: Component,
  path: Path,
  layout: Layout,
  ...args
}: any) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Route
      {...args}
      render={(props) => {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  ) : (
    <CircularProgress />
  );
};
