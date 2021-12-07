import * as React from "react";
import {useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "./styles/App.css";
import "./styles/styles.css";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import RecipeComponent from "./components/RecipeComponent/RecipeComponent";
import ButtonAppBar from "./components/Dashboard/ButtonAppBar";
import MenuPanel from "./components/Dashboard/MenuPanel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserService from "./services/userService";
import AuthContainer from "./components/AuthComponent/AuthContainer";
import {Alert, Snackbar} from "@mui/material";
// import Login from "./components/AuthComponent/Login";


// const SnackBarSeverity = {
//     success: 'success',
//     fail: 'error',
//     blue: 'info',
//     orange: 'warning'
// }


function App() {
    require("dotenv").config();

    const userService = new UserService()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [snackBarState, setSnackBarState] = useState({
        open: false,
        message: 'xx',
        severity: 'success'

    })


    function PrivateRoute({component: Component, authed, ...rest}) {
        return (
            <Route
                {...rest}
                render={(props) => userService.isAuth() === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
            />
        )
    }

    if (!userService.isAuth()) {
        return <div className='login-page'>
            <Snackbar anchorOrigin={{vertical: "top", horizontal: "left"}}
                      open={snackBarState.open}>
                <Alert severity={snackBarState.severity} sx={{width: '100%'}}>{snackBarState.message}</Alert>
            </Snackbar>
            <AuthContainer setSnackBar={setSnackBarState}/>
        </div>
    }

    return (
        <BrowserRouter>
            <div className="App">

                {/*Barre horizontale en haut*/}
                <ButtonAppBar/>

                {/*Box qui contient le menu latéral et le container de navigation*/}
                <Box sx={{display: "flex"}}>
                    <MenuPanel open={open} toggleDrawer={toggleDrawer}/>
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
                            padding: '1em'
                        }}>
                        <Container maxWidth="lg" sx={{mt: 3, mb: 4}}>
                            <Grid container spacing={3}>
                                <Switch>
                                    <PrivateRoute exact path="/" component={RecipeComponent}/>
                                    <PrivateRoute path="/ingredient" component={IngredientComponent}/>
                                    <PrivateRoute path="/recipe" component={RecipeComponent}/>
                                    {/*<Route path="/login" component={Login} />*/}
                                </Switch>
                                {/*SnackBar appelé dans Register.js*/}
                                <Snackbar anchorOrigin={{vertical: "top", horizontal: "left"}}
                                          open={snackBarState.open}
                                          message={snackBarState.message}>
                                    <Alert severity={snackBarState.severity}
                                           sx={{width: '100%'}}>{snackBarState.message}</Alert>
                                </Snackbar>
                            </Grid>
                        </Container>
                    </Box>
                </Box>

            </div>
        </BrowserRouter>
    );
}

export default App;
