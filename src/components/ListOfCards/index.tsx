import React, { FC, useEffect, useState } from 'react';
import { Card } from '../Card';
import { data } from '../../data/data';
import { CardListContainer } from './styled';
import { IMenu } from '../../interfaces';

interface IFetchData {
  menu: IMenu[];
}
export const ListOfCards: FC = () => {
  const [fetchData, setFetchData] = useState<IFetchData>();
  useEffect(() => {
    const timer = setTimeout(() => {
      setFetchData(data);
    }, 2000);
  }, []);
  console.log(fetchData);
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
