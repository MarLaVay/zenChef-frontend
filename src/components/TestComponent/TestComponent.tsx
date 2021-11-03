import React from 'react';
import IngredientService from '../../services/ingredientService';
import UserService from '../../services/userService';
import styles from './TestComponent.module.css';

const TestComponent = () => {

  const userService = new UserService();
  const ingredientService = new IngredientService();

  
  const register = () => {
    userService.createUser({userName: "pedro", email: "lito", password: "root"})
  }

  const login = () => {
    userService.login("robert", "Secret");
  }

  const createIngredient = () => {
    ingredientService.create({name: "Courgette"}); 
  }

  const getAllIngredient = () => {
    ingredientService.getAll().then(response => console.log(response))
  }

  const deleteIngredient = () => {
    ingredientService.delete(9); 
  }

  return (
    <div className={styles.TestComponent}>
      <button onClick={login}>Login</button><br/>
      <button onClick={register}>Register</button><br/>
      <button onClick={getAllIngredient}>Get all ingredients</button><br/>
      <button onClick={createIngredient}>Create ingredient</button><br/>
      <button onClick={deleteIngredient}>Delete ingredient</button><br/>
    </div>
  );
}

export default TestComponent;
