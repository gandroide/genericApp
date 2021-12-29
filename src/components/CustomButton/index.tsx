import React, { FC } from 'react';
import { Button } from './styled';

interface ICustomButton {
  text: string;
}
export const CustomButton: FC<ICustomButton> = ({ text }) => {
  return <Button>{text}</Button>;
};
