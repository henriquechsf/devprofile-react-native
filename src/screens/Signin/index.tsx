import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { Container, Content, Logo, Title } from './styles';
import logo from '../../assets/logo.png';

export const SignIn: FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Logo source={logo} />

          <Title>Faça seu login</Title>

          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />

          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
