import React from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ICredentials): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FC<IProps> = ({ children }) => {
  const signIn = async ({ email, password }: ICredentials) => {
    try {
      const response = await api.post('sessions', { email, password });
      console.log(response);
    } catch (error) {
      // throw new Error(error as string);
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer o login, verifique as credenciais.',
      );
    }
  };

  return (
    <AuthContext.Provider value={{ name: 'Name Provider', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
