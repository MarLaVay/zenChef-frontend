import React, {useEffect, useState} from 'react';
import IngredientService from '../../services/ingredientService';
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';
import {ListItem, ListSubheader} from "@mui/material";
import IngredientSwitch from "./IngredientSwitch";
import IngredientCreateForm from "./IngredientCreateForm";


const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));
const IngredientComponent = () => {

    const ingredientService = new IngredientService();
    const [ingredients, setIngredients] = useState([]);


    function getAllIngredients() {
        ingredientService.getAll().then(response => {
            setIngredients(response);
        })
    }


    useEffect(() => {
        getAllIngredients()
    }, [])


    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid item xs={12} md={5} sx={{m: 'auto'}}>
                <Demo>
                    <List dense={true} >
                        <ListSubheader>
                            <IngredientCreateForm ingredients={ingredients}
                                                  setIngredients={setIngredients}/>
                        </ListSubheader>
                        {ingredients
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((ingredient) =>
                                (
                                    <IngredientSwitch key={ingredient.id} ingredient={ingredient}
                                                      ingredients={ingredients} setIngredients={setIngredients}/>
                                ))}
                    </List>
                </Demo>
            </Grid>
        </Box>
    );
}

export default IngredientComponent;
