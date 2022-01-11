import React, { createContext, FC, useReducer } from 'react';
interface IUserProps {
  userData: {
    user: string;
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
  };
  userLunches: {
    id: number;
    userId: number;
    choice: string;
    hour: string;
    day: string[];
  };
  isLogged: boolean;
}

const usarData = {
  id: 1,
  email: 'filipe@teste.com',
  name: 'Filipe',
  avatar: '',
  token: '',
};

interface IUserContext {
  user: IUserProps;
  register: ({ email, password }: { email: string; password: string }) => void;
  logOut: () => void;
}

const defaultUserContextValue = {
  userData: {
    user: '',
    id: 0,
    name: '',
    email: '',
    password: '',
    avatar: '??',
  },
  userLunches: {
    id: 0,
    userId: 0,
    choice: '',
    hour: '',
    day: ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  isLogged: false,
};

enum AuthActionTypes {
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type RegisterAction = {
  type: AuthActionTypes.REGISTER;
  payload: {
    email: string;
    password: string;
  };
};

type LoginAction = {
  type: 'addUserLunches';
  payload: {};
};

type LogOutAction = {
  type: AuthActionTypes.LOGOUT;
  payload: {};
};

const registerUser = (
  state: IUserProps,
  payload: { email: string; password: string },
) => {
  try {
    return {
      ...state,
      userData: {
        ...state.userData,
        ...usarData,
      },
      isLogged: true,
    };
  } catch (e) {
    return state;
  }
};

const logOutUser = () => {
  return defaultUserContextValue;
};

type Actions = RegisterAction | LoginAction | LogOutAction;

const reducer = (state: IUserProps, action: Actions) => {
  switch (action.type) {
    case AuthActionTypes.REGISTER:
      return registerUser(state, action.payload);

    case 'addUserLunches':
      return {
        ...state,
        userLunches: state.userLunches,
      };
    case AuthActionTypes.LOGOUT:
      return logOutUser();

    default:
      return state;
  }
};

export const UserContext = createContext<IUserContext>(null);

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultUserContextValue);

  const register = ({ email, password }: { email: string; password: string }) =>
    dispatch({ type: AuthActionTypes.REGISTER, payload: { email, password } });

  const logOut = () => dispatch({ type: AuthActionTypes.LOGOUT, payload: {} });

  return (
    <UserContext.Provider value={{ user: state, register, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
