import {useState} from "react";
import {Button, TextField} from "@mui/material";
import UserService from '../services/userService'

function Login() {
    const [inputValue, setInputValue] = useState({
        nameOrEmail: '',
        password: ''
    })

    //TODO question pourquoi const et pas function ?
    const handleInput = ({currentTarget}) => {
        const {value, name} = currentTarget
        setInputValue({
            //TODO chercher ce qu'est spread operator
            ...inputValue,
            [name]: value
        })
    }


    function handleBlur() {
        // if (!inputValue.includes('@')) {
        //     alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        // }
    }


    const handleSubmit = async (e) => {
        const userService = new UserService()
        e.preventDefault() //empeche le changement de page
            userService.login(inputValue.nameOrEmail, inputValue.password)
                .then(success => alert("authentification réussie"))//TODO redirect
                .catch(failureCallback => alert("erreur d'authentification"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Robert, identifie-toi !</div>
            <div>
                <TextField
                id='nameOrEmail'
                label='identifiant'
                name='nameOrEmail'
                type='text'
                onChange={handleInput}
                onBlur={handleBlur}
                />
                <TextField
                id='password'
                label='mot de passe'
                name='password'
                type='password'
                onChange={handleInput}
                />
            </div>
            <div>
                <Button variant='contained' color='primary' type='submit'>
                    Login
                </Button>
            </div>
        </form>
    )
}

export default Login