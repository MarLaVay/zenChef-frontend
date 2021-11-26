import * as React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import TestComponent from "./components/TestComponent/TestComponent";
import RecipeComponent from "./components/RecipeComponent/RecipeComponent";
import ButtonAppBar from "./ButtonAppBar";
import MenuPanel from "./MenuPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  require("dotenv").config();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{ display: "flex" }}>
          <ButtonAppBar open={open} />

          <MenuPanel open={open} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Switch>
                  <Route exact path="/" component={TestComponent} />
                  <Route path="/ingredient" component={IngredientComponent} />
                  <Route path="/recipe" component={RecipeComponent} />
                </Switch>
              </Grid>
            </Container>
          </Box>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
