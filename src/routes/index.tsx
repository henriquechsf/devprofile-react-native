import React, { FC } from 'react';
import { useAuth } from '../context/AuthContext';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes: FC = () => {
  const { user } = useAuth();

  return user?.id ? <AppRoutes /> : <AuthRoutes />;
};
