import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import TestComponent from "./components/TestComponent/TestComponent";
import RecipeComponent from "./components/RecipeComponent/RecipeComponent";

function App() {
  require("dotenv").config();

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/recipe"}>Recipe</Link>
              </li>
              <li>
                <Link to={"/ingredient"}>Ingredient</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={TestComponent} />
            <Route path="/ingredient" component={IngredientComponent} />
            <Route path="/recipe" component={RecipeComponent} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
