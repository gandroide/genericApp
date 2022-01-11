import React, { FC } from 'react';
import { ICustomButton } from '../../interfaces';
import { Button } from './styled';

export const CustomButton: FC<ICustomButton> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};
