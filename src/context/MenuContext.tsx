import React, { createContext, FC, useState } from 'react';
import { IMenu } from '../interfaces';

interface IMenuContext {
  menu: IMenu[];
  onSetContext: (onMenu: IMenu[]) => void;
}

const defaultStateValue = [
  {
    salad: '',
    soup: '',
    meet: '',
    fish: '',
    vegetarian: '',
  },
];

export const MenuContext = createContext<IMenuContext>(null);

export const MenuProvider: FC = ({ children }) => {
  const [menu, setMenu] = useState(defaultStateValue);

  const onSetContext = (onMenu: IMenu[]) => {
    setMenu(onMenu);
  };
  return (
    <MenuContext.Provider
      value={{
        menu,
        onSetContext,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
