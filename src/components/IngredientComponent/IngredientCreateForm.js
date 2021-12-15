import React, {useState} from 'react';
import IngredientService from "../../services/ingredientService";
import {FormControl, Input, InputAdornment, InputLabel} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

function IngredientCreateForm({ingredients, setIngredients}) {

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
        <FormControl sx={{m: 1, border: "1px"}} variant="standard" fullWidth={true}>
            <InputLabel htmlFor="ingrName">Nouvel ingrédient</InputLabel>
            <Input
                id="ingrName"
                name="name"
                type='text'
                aria-label="Nom du nouvel ingrédient"
                size="small"
                variant="outlined"
                value={inputValue.name}
                onChange={handleInput}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="save new ingredient"
                            variant="outlined"
                            onClick={handleSubmit}
                        >
                            <SaveIcon fontSize="small" color="secondary"/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default IngredientCreateForm;