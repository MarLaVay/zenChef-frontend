import {useState} from "react";
import {Button, TextField} from "@mui/material";
import UserService from "../../services/userService";

function Register() {
    const [inputValue, setInputValue] = useState({
        userName: '',
        email: '',
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


    function handleSubmit(e) {
        const userService = new UserService()
        e.preventDefault()
        userService.createUser(inputValue)
            .then(r => {
                alert("Votre compte : " + r.userName + r.email )
                console.log("submit Register.js", r)
            })
            .catch(error => console.log("ya une erreur :" , error))
    }

    return (
        <div className='form-comp cfb'>
            <form onSubmit={handleSubmit} className='sign-up-form cfb'>
                <h2>Robert, identifie-toi!</h2>
                <div className='sign-up-form-input'>
                    <TextField
                        id='userName'
                        label='Votre nom'
                        name='userName'
                        type='text'
                        defaultValue={inputValue.userName}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        // style
                        margin="normal"
                        required={true}
                        size="medium"
                        variant="filled"

                    />
                    <TextField
                        id='email'
                        label='Votre e-mail'
                        name='email'
                        type='text'
                        defaultValue={inputValue.email}
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

export default Register