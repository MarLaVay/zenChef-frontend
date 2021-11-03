import React from 'react';
import IngredientService from '../../services/ingredientService';
import styles from './IngredientComponent.module.css';

const IngredientComponent = () =>{ 
  
  const ingredientService = new IngredientService();

  const createIngredient = () => {
    ingredientService.create({name: "Courgette"}); 
  }

  const updateIngredient = () => {
    ingredientService.update({id:8, name: "Toto"}); 
  }

  const getAllIngredient = () => {
    ingredientService.getAll().then(response => console.log(response))
  }

  const deleteIngredient = () => {
    ingredientService.delete(9); 
  }
  
  return (
  <div className={styles.IngredientComponent}>
    <button onClick={getAllIngredient}>Get all ingredients</button><br/>
      <button onClick={createIngredient}>Create ingredient</button><br/>
      <button onClick={updateIngredient}>Update ingredient</button><br/>
      <button onClick={deleteIngredient}>Delete ingredient</button><br/>
  </div>
  );
}

export default IngredientComponent;
