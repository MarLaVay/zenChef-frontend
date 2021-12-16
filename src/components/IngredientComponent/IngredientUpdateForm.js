import React, {useState} from 'react';
import IngredientService from "../../services/ingredientService";
import {FormControl, Input, InputAdornment} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

function IngredientUpdateForm({ingredients, setIngredients, currentIngredient, setEditItem}) {

    const [inputValue, setInputValue] = useState(currentIngredient)

    const handleInput = ({currentTarget}) => {
        const {value, name} = currentTarget
        setInputValue({
            [name]: value
        })
    }

    function handleSubmit(e) {
        const ingredientService = new IngredientService();
        e.preventDefault()
        ingredientService.update({id: currentIngredient.id, name: inputValue.name})
            .then(response => {
                const ingredientsFiltered = ingredients.filter((ingredient) => ingredient.id !== response.id)
                setIngredients([...ingredientsFiltered, response])
                setEditItem(false)
            })
    }

    function handleCancel() {
        setInputValue(currentIngredient)
        setEditItem(false)
    }

    return (
        <FormControl sx={{m: 1, width: '100%'}} variant="standard">
            <Input
                id={"ingrName"+inputValue.id}
                name="name"
                type='text'
                aria-label="change ingredient name"
                size="small"
                variant="standard"
                width="100%"
                value={inputValue.name}
                onChange={handleInput}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="save changes"
                            variant="outlined"
                            onClick={handleSubmit}
                        ><SaveIcon fontSize="small" color="secondary"/>
                        </IconButton>
                        <IconButton
                            aria-label="cancel"
                            variant="outlined"
                            onClick={handleCancel}
                        ><CancelIcon fontSize="small" color="secondary"/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>

    );
}

export default IngredientUpdateForm;