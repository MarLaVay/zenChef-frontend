import React from 'react';
import UserService from '../../services/userService';
import styles from './TestComponent.module.css';

const TestComponent = () => {

  const userService = new UserService();
 
  const register = () => {
    userService.createUser({userName: "pedro", email: "lito", password: "root"})
  }

  const login = () => {
    userService.login("robert", "Secret");
  }

  return (
    <div className={styles.TestComponent}>
      <button onClick={login}>Login</button><br/>
      <button onClick={register}>Register</button><br/>
    </div>
  );
}

export default TestComponent;
