import React from 'react';
import IconButton from "@mui/material/IconButton";
import {ListItem, ListItemText} from "@material-ui/core";
import Box from "@mui/material/Box";
import {EditRounded} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import IngredientService from "../../services/ingredientService";

function IngredientItem({ingredient, setEditItem, ingredients, setIngredients}) {
    const ingredientService = new IngredientService();


    function handleEdit(id) {
        setEditItem(true);
    }




    return <div>s</div>;
}

export default IngredientItem;