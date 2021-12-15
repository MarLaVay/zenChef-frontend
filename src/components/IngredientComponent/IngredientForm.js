import React, {useState} from 'react';
import {FormControl, Input, InputAdornment, InputLabel} from "@material-ui/core";
import SaveIcon from '@mui/icons-material/Save';
import IconButton from "@mui/material/IconButton";
import IngredientService from "../../services/ingredientService";

function IngredientForm({ingredients, setIngredients}) {

    const initialState = {
        name: ''
    }
    const [inputValue, setInputValue] = useState(initialState)

    const handleInput = ({currentTarget}) => {
        const {value, name} = currentTarget
        setInputValue({
            [name]: value
        })
    }

    function handleSubmit(e) {
        const ingredientService = new IngredientService();
        e.preventDefault()
        ingredientService.create(inputValue)
            .then(response => {
                setIngredients([...ingredients, response])
            })
        setInputValue(initialState)
    }

    return (
        <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
            <InputLabel htmlFor="ingrName">Nouvel ingrédient</InputLabel>
            <Input
                id="ingrName"
                name="name"
                type='text'
                aria-label="Nom du nouvel ingrédient"
                size="small"
                variant="standard"
                width="100%"
                value={inputValue.name}
                onChange={handleInput}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="save new ingredient"
                            variant="outlined"
                            onClick={handleSubmit}
                        ><SaveIcon fontSize="small" color="secondary"/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>

    );
}

export default IngredientForm;