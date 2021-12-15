import React, {useEffect, useState} from 'react';
import IngredientService from '../../services/ingredientService';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';
import {ListItem, ListItemText} from "@mui/material";
import {EditRounded} from "@mui/icons-material";
import IngredientForm from "./IngredientForm";


const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));
const IngredientComponent = () => {

    const ingredientService = new IngredientService();
    const [ingredients, setIngredients] = useState([]);
    const [editItem, setEditItem] = useState(false)


    function updateIngredient() {
        ingredientService.update({id: 91, name: "Toto"}).then(r => console.log(r));
    }

    function getAllIngredients() {
        ingredientService.getAll().then(response => {
            setIngredients(response);
        })
    }

    function deleteIngredient(id) {
        ingredientService.delete(id)
            .then(() => {
                    const ingredientsWithoutDeletedOne = ingredients.filter((ingredient) => ingredient.id !== id)
                    setIngredients(ingredientsWithoutDeletedOne)
                }
            )
            .catch((error) => console.log('error response', error));
    }

    useEffect(() => {
        getAllIngredients()
    }, [])


    function handleEdit(id) {
        setEditItem(true);
    }

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid item xs={12} md={5}>
                <Demo>
                    <List dense={true}>
                        <ListItem><IngredientForm ingredients={ingredients} setIngredients={setIngredients} /></ListItem>
                        {ingredients
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((ingredient) =>
                                (
                                    <ListItem key={ingredient.id} secondaryAction={
                                        <Box>
                                            <IconButton edge="end" aria-label="update"
                                                        onClick={() => handleEdit(ingredient.id)}>
                                                <EditRounded fontSize="small"/>
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete"
                                                        onClick={() => deleteIngredient(ingredient.id)}>
                                                <DeleteIcon fontSize="small"/>
                                            </IconButton>
                                        </Box>
                                    }>
                                        <ListItemText
                                            primary={ingredient.name}
                                        />
                                    </ListItem>
                                ))}
                    </List>
                </Demo>
            </Grid>
        </Box>
    );
}

export default IngredientComponent;
