import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Informe o nome completo'),
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup.string().required('Informe a senha'),
});

export const SignUp: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });
  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>

            <InputControl
              placeholder="Nome completo"
              control={control}
              name="name"
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputControl
              placeholder="E-mail"
              control={control}
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <InputControl
              placeholder="Senha"
              control={control}
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />

            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>

      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
