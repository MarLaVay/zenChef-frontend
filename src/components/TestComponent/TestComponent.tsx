import React from 'react';
import IngredientService from '../../services/ingredientService';
import UserService from '../../services/userService';
import styles from './TestComponent.module.css';

const TestComponent = () => {

  const userService = new UserService();
  const ingredientService = new IngredientService();
  const login = () => {
    userService.login("robert", "Secret");
  }

  const createIngredient = () => {
    ingredientService.create({name: "Courgette"}); 
  }

  const register = () => {
    userService.createUser({userName: "pedro", email: "lito", password: "root"})
  }

  return (
    <div className={styles.TestComponent}>
      <button onClick={login}>Login</button><br/>
      <button onClick={register}>Register</button><br/>
      <button onClick={createIngredient}>Create ingredient</button><br/>
    </div>
  );
}

export default TestComponent;
