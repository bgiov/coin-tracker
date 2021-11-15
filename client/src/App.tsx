import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme } from "./themes/dark-theme";
import { ThemeProvider } from "@mui/material/styles";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { UnprotectedRoutes } from "./routes/UnprotectedRoutes";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Container from "@mui/material/Container";
import { Home } from "./views/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <UnprotectedRoutes />

          <Container maxWidth="xl">
            <ProtectedRoutes />
          </Container>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
