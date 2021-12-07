import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import CssBaseline from "@mui/material/CssBaseline";
import UserService from "../../services/userService";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    )
        ;
}

export default function ButtonAppBar(props) {

    const userService = new UserService();

    function handleLogOut() {
        userService.logout();
        window.location.replace("/")
    }

    return (
        <div>
            {/*<AppBar position="absolute" open={props.open}>*/}
            <AppBar position="sticky" sx={{backgroundColor: '#BF8686'}}>
                <CssBaseline/>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2, backgroundColor: '#BF8686'}}
                    >
                        <HomeIcon/>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                        <Button color="inherit" onClick={handleLogOut}>Déconnecter</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
