import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: FC<ButtonProps> = ({ title, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};
