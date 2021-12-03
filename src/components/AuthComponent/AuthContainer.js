import {useState} from "react";
import Login from "./Login";
import Register from "./Register";
import "../../styles/authPage.css"
import Grid from "@mui/material/Grid";
import {withStyles} from "@material-ui/core";
import {Box} from "@mui/material";

const styleSheet = theme => ({
        root: {
            [theme.breakpoints.down('sm')]: {
                'width': '100%',
                'flex-direction': 'column',
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'flex-wrap': 'wrap'

            },
            [theme.breakpoints.up('sm')]:
                {
                    'width':'50%',
                    'height':'80vh',
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'position': 'relative'
                }
            ,
        }
    })
;

function AuthContainer({classes}) {
    const [welcome, setWelcome] = useState(false);


    function setBannerClass() {
        const classArr = ['banner-side cfb']
        // const classArr = ['cfb']
        if (welcome) classArr.push('send-right')

        return classArr.join(' ')
    }

    function setFormClass() {
        const classArr = ['form-side cfb']
        // const classArr = ['cfb']
        if (welcome) classArr.push('send-left')

        return classArr.join(' ')
    }

    return (
        <Grid className={classes.root}>
            <Box className={setBannerClass()}>
                {welcome ?
                    <h2>Bienvenue chef !</h2> :
                    <h2>Content de vous revoir, chef !</h2>
                }
                <button onClick={() => setWelcome(!welcome)}>
                    {welcome ? "Me connecter" : "Créer un compte"}
                </button>
            </Box>
            <Box  alignItems='center' justify='center' className={setFormClass()}>
                {welcome ?
                    <Register/> : <Login/>
                }
            </Box>
        </Grid>
    )

}

export default withStyles(styleSheet)(AuthContainer);