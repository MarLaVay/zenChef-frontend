import React, {useState} from 'react';
import IngredientItem from "./IngredientItem";
import IngredientUpdateForm from "./IngredientUpdateForm";

function IngredientSwitch({ingredient, ingredients, setIngredients}) {
    const [editItem, setEditItem] = useState(false)


    return (
        editItem ? <IngredientUpdateForm ingredients={ingredients}
                                         setIngredients={setIngredients}
                                         currentIngredient={ingredient}
                                         setEditItem={setEditItem}/>
            : <IngredientItem ingredient={ingredient} ingredients={ingredients} setIngredients={setIngredients} setEditItem={setEditItem} />
    );
}

export default IngredientSwitch;