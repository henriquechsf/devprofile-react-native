import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Container, Content, Title } from './styles';

export const SignIn: FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu login</Title>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </Content>
      </Container>
    </ScrollView>
  );
};
