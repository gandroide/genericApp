import React, { FC, useEffect, useState, useContext } from 'react';
import { Card } from '../Card';
import { data } from '../../data/data';
import { CardListContainer } from './styled';
import { IMenu } from '../../interfaces';
import { UserContext } from '../../context/UserContext';

interface IFetchData {
  menu: IMenu[];
}

export const ListOfCards: FC = () => {
  const [fetchData, setFetchData] = useState<IFetchData>();
  const { register, user } = useContext(UserContext);
  useEffect(() => {
    register({ email: 'alguma', password: 'outra' });
  }, []);

  console.log(user);
  return (
    <CardListContainer>
      {fetchData?.menu.map((i, key) => (
        <li key={key}>
          <Card data={i} />
        </li>
      ))}
    </CardListContainer>
  );
};
