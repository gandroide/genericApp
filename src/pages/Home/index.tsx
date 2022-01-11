import React, { FC } from 'react';
import { LogIn } from '../../components/LogIn';
import { HomeContainer } from './styled';

export const Home: FC = () => {
  return (
    <HomeContainer>
      Home
      <LogIn />
    </HomeContainer>
  );
};
