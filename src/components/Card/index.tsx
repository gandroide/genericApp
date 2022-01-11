import React, { FC } from 'react';
import { IMenu } from '../../interfaces';
import { CardContainer, Img, MenuContainer, Select } from './styled';
interface N {
  data: IMenu;
}
export const Card: FC<N> = data => {
  console.log(data, 'menu');
  return (
    <CardContainer>
      <h2>Menu Title</h2>
      <Img src="../../constants/CardImg.jpg" />
      <MenuContainer>
        <Select name="" id="" placeholder="Seleccione un Plato">
          <option value="valor">{data.data.salad}</option>
          <option value="">{data.data.soup}</option>
          <option value="">{data.data.meet}</option>
          <option value="">{data.data.fish}</option>
          <option value="">{data.data.vegetarian}</option>
        </Select>
        <Select name="" id="" placeholder="Horario">
          <option value="valor">12:00</option>
          <option value="">12:30</option>
          <option value="">13:00</option>
          <option value="">13:30</option>
          <option value="">14:00</option>
          <option value="">14:30</option>
        </Select>
      </MenuContainer>
    </CardContainer>
  );
};
