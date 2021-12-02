import * as React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import RecipeComponent from "./components/RecipeComponent/RecipeComponent";
import ButtonAppBar from "./ButtonAppBar";
import MenuPanel from "./MenuPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserService from "./services/userService";
import AuthContainer from "./components/AuthComponent/AuthContainer";

function App() {
  require("dotenv").config();

    const userService = new UserService()
    const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


    function PrivateRoute ({component: Component, authed, ...rest}) {
        return (
            <Route
                {...rest}
                render={(props) => userService.isAuth() === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
            />
        )
    }

    if (!userService.isAuth()) {
        return <div className='login-page'>

        <AuthContainer />
        </div>
    }

    return (
    <BrowserRouter>
      <div className="App">
          <ButtonAppBar />
        {/*<ButtonAppBar open={open} />*/}

        <Box sx={{ display: "flex"}}>

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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
              <Grid container spacing={3}>
                <Switch>
                  <PrivateRoute exact path="/" component={RecipeComponent} />
                  <PrivateRoute path="/ingredient" component={IngredientComponent} />
                  <PrivateRoute path="/recipe" component={RecipeComponent} />
                  {/*<Route path="/login" component={Login} />*/}
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
