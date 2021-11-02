import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme } from "./themes/dark-theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes } from "./routes/Routes";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="xl">
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
