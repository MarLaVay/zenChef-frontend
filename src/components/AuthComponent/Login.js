import {useState} from "react";
import {Button, TextField} from "@mui/material";
import UserService from '../../services/userService'
import '../../styles/authPage.css';


function Login() {
    const [inputValue, setInputValue] = useState({
        nameOrEmail: '',
        password: ''
    })


    const handleInput = ({currentTarget}) => {
        const {value, name} = currentTarget
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }



    const handleSubmit = async (e) => {
        const userService = new UserService();
        e.preventDefault() //empeche le changement de page
        userService.login(inputValue.nameOrEmail, inputValue.password)
            .then(success => {
                console.log(success)
                //ici charge la page à nouveau et passe par le Router
                window.location.reload()
            })
            .catch(() => console.log("erreur d'authentification"))
    }

    return (

                    <form onSubmit={handleSubmit} className='sign-up-form cfb'>
                        <h2>Robert, identifie-toi!</h2>
                            <TextField
                                id='nameOrEmail'
                                label='identifiant'
                                name='nameOrEmail'
                                type='text'
                                defaultValue={inputValue.nameOrEmail}
                                onChange={handleInput}
                                // style
                                margin="dense"
                                required={true}
                                size="small"
                                variant="filled"

                            />
                            <TextField
                                id='password'
                                label='mot de passe'
                                name='password'
                                type='password'
                                defaultValue={inputValue.password}
                                onChange={handleInput}
                                // style
                                margin="dense"
                                required={true}
                                size="small"
                                variant="filled"

                            />
                        <div>
                            <Button variant='contained' type='submit'>
                                C'est parti !
                            </Button>
                        </div>
                    </form>
    )
}

export default Login