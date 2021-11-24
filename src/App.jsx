import { ThemeProvider } from "styled-components";
import { Route, Switch, Redirect } from "react-router";

import GlobalStyle from "./styled/GlobalStyle";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const theme = {
  bgDark: "#333842",
  bgLight: "#EAF5FA",
  neon: "#A8EB14",
  lightBlue: "#D8E3E2",

  nm: "17px",
  md: "19px",
  lg: "23px",
  xl: "37px",
};

export default function App() {
  const dark = false;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle dark={dark} />
      <NavBar dark={dark}/>
      <Switch>
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}
