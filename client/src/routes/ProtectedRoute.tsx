import { Route } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  path: Path,
  layout: Layout,
  ...args
}: any) => {
  return (
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
  );
};
