import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import {mainListItems, secondaryListItems} from "./listItems";
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

export default function MenuPanel(props) {
    const drawerWidth = 240;

    const Drawer = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({theme, open}) => ({
        "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: "border-box",
            ...(!open && {
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up("sm")]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }));

    return (
        <Drawer variant="permanent" open={props.open} sx={{backgroundColor: '#C7ADAD'}}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                    backgroundColor: '#C7ADAD'
                }}
            >
                <IconButton onClick={props.toggleDrawer}>
                    {props.open === true ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </Toolbar>
            <Divider/>
            <List sx={{backgroundColor: '#C7ADAD'}}>{mainListItems}</List>
            <Divider/>
            <List sx={{backgroundColor: '#C7ADAD'}}>{secondaryListItems}</List>
        </Drawer>
    );
}
