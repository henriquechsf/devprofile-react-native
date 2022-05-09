import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Container } from './styles';

export const UserDetails: React.FC = () => {
  const route = useRoute();

  console.log(route);

  return <Container />;
};
