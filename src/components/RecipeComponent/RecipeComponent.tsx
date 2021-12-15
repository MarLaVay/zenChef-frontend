import styles from './RecipeComponent.module.css';



function RecipeComponent({...props}) {

    return (
        <div className={styles.RecipeComponent}>
            <ul>
                {props.recipes.map((recipe:any) =>
                    <li key={recipe.id}>{recipe.title}
                        <ul>
                            {recipe.quantityDTOList.map((quantity:any) =>
                            <li key={quantity.id}>{quantity.number}{quantity.measuringUnit} {quantity.ingredientDTO.name}</li>
                            )}
                        </ul>
                    </li>)}
            </ul>
        </div>
    )
}

export default RecipeComponent;
