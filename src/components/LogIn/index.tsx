import React, { FC, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { LoginForm } from './styled';

export const LogIn: FC = () => {
  const { register, logOut, user } = useContext(UserContext);
  console.log(user);
  return (
    <LoginForm>
      <label htmlFor="">Login</label>
      <input type="text" id="" placeholder="Email" />
      <input type="text" name="" id="" placeholder="Password" />
      <button
        onClick={() => register({ email: 'paf@pro.com', password: '1234' })}
      >
        Login
      </button>
      <button onClick={() => logOut()}>LogOut</button>
    </LoginForm>
  );
};
