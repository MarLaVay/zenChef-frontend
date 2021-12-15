import React from 'react';
import IconButton from "@mui/material/IconButton";
import {ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {EditRounded} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import IngredientService from "../../services/ingredientService";

function IngredientItem({ingredient, setEditItem, ingredients, setIngredients}) {

    const ingredientService = new IngredientService();

    function deleteIngredient(id) {
        ingredientService.delete(id)
            .then(() => {
                    const ingredientsWithoutDeletedOne = ingredients.filter((ingredient) => ingredient.id !== id)
                    setIngredients(ingredientsWithoutDeletedOne)
                }
            )
            .catch((error) => console.log('error response', error));
    }

    function handleEdit() {
        setEditItem(true);
    }


    return (
        <ListItem>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="update"
                            onClick={() => handleEdit()}>
                    <EditRounded fontSize="small"/>
                </IconButton>
                <IconButton edge="end" aria-label="delete"
                            onClick={() => deleteIngredient(ingredient.id)}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </ListItemSecondaryAction>

            <ListItemText
                primary={ingredient.name}
            />
        </ListItem>
    );
}

export default IngredientItem;