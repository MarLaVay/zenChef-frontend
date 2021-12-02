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


    function handleBlur() {
        // if (!inputValue.includes('@')) {
        //     alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        // }
    }


    const handleSubmit = async (e) => {
        const userService = new UserService();
        e.preventDefault() //empeche le changement de page
        userService.login(inputValue.nameOrEmail, inputValue.password)
            .then(success => {
                //ici charge la page à nouveau et passe par le Router
                window.location.reload()
            })
            .catch(failureCallback => console.log("erreur d'authentification"))
    }

    return (
        <div className='form-comp cfb'>
            <form onSubmit={handleSubmit} className='sign-up-form cfb'>
                <h2>Robert, identifie-toi!</h2>
                <div className='sign-up-form-input'>
                    <TextField
                        id='nameOrEmail'
                        label='identifiant'
                        name='nameOrEmail'
                        type='text'
                        defaultValue={inputValue.nameOrEmail}
                        onChange={handleInput}
                        onBlur={handleBlur}
                      // style
                        margin="normal"
                        required={true}
                        size="medium"
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
                        margin="normal"
                        required={true}
                        size="medium"
                        variant="filled"

                    />
                </div>
                <div>
                    <Button variant='contained'  type='submit'>
                        C'est parti !
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login