import React, { createContext, FC, useReducer } from 'react';

// interface IUserProps {
//   userData: {
//     user: string;
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     avatar: string;
//   };
//   userLunches: {
//     id: number;
//     userId: number;
//     choice: string;
//     hour: string;
//     day: string[];
//   };
// }

// const defaultUserContextValue = [
//   {
//     userData: {
//       user: '',
//       id: 0,
//       name: '',
//       email: '',
//       password: '',
//       avatar: '??',
//     },
//   },
//   {
//     userLunches: {
//       id: 0,
//       userId: 0,
//       choice: '',
//       hour: '',
//       day: ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     },
//   },
// ];

interface IUserProps {
  counter: number;
}

const defaultUserContextValue = {
  counter: 0,
};

type AddAction = {
  type: 'ADD';
  payload: number;
};

type SubAction = {
  type: 'SUB';
  payload: number;
};

type Actions = AddAction | SubAction;

const reducer = (state: IUserProps, action: Actions) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case 'SUB':
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};

export const UserContext = createContext<IUserProps>(null);

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultUserContextValue);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;
