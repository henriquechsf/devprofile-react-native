import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { Container, Content, Title } from './styles';

export const SignUp: FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Crie sua conta</Title>
          <Input placeholder="Nome completo" />
          <Input placeholder="Senha" />
          <Input placeholder="Senha" />

          <Button title="Criar conta" />
        </Content>
      </Container>
    </ScrollView>
  );
};
