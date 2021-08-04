import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
