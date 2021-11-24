import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Switch, Redirect } from "react-router";

import GlobalStyle from "./styled/GlobalStyle";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const theme = {
  dark: {
    background: "#333842",
    content: "#EAF5FA",
    neon: "#A8EB14",
    lightBlue: "#D8E3E2",
    dark: "#333842",
    light: "#EAF5FA",
    shadow: `rgba(200, 200, 200, 0.3)`,

    nm: "17px",
    md: "19px",
    lg: "23px",
    xl: "37px",
  },
  light: {
    content: "#333842",
    background: "#EAF5FA",
    neon: "#A8EB14",
    lightBlue: "#D8E3E2",
    dark: "#333842",
    light: "#EAF5FA",
    shadow: `rgba(0, 0, 0, 0.3)`,

    nm: "17px",
    md: "19px",
    lg: "23px",
    xl: "37px",
  },
};

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle dark={dark} />
      <NavBar dark={dark} setDark={setDark} />
      <Switch>
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer dark={dark} />
    </ThemeProvider>
  );
}
