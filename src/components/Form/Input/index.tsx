import React, { FC } from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';
import { Container } from './styles';

export const Input: FC<TextInputProps> = ({ ...otherProps }) => {
  return (
    <Container placeholderTextColor={theme.colors.gray500} {...otherProps} />
  );
};
