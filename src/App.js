import { BrowserRouter, Link, Switch, Route, RouteProps } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Word from "./components/Word";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Practice</h1>
        <p>
          <Link to="/"> Home </Link>|
          <Link to="/4"> Number </Link>|
          <Link to="/hello"> Word </Link>|
        </p>
        <Switch>
          <Route path="/:word/:color/:bgcolor">
            <Word />
          </Route>
          <Route path="/:number">
            <Number />
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
