import { Router, Location } from "@reach/router";
// VIEWS
import Home from './views/Home';
import Kontakt from './views/Kontakt';
import Produkter from "./views/Produkter";
// COMPONENTS
import NavBar from "./components/NavBar";
// CONTEXT
import ThemeProvider from "./contexts/ThemeProvider";
import ThemeContextProvider from "./contexts/ThemeContext";
// STYLE
import GlobalStyle from "./style/Global";
import Produkt from "./views/Produkt";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Location>
            {({ location }) => <NavBar location={location} />}
          </Location>
            <Router>
              <Home path="/" />
              <Kontakt path="kontakt" />
              <Produkter path="produkter" />
              <Produkt path="produkt" />
            </Router>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
