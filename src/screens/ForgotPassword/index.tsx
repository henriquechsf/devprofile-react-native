import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
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
import { api } from '../../services/api';

interface ScreenNavigationProp {
  goBack(): void;
  navigate(screen: string): void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
});

export const ForgotPassword: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleForgotPassword = async (form: IFormInputs) => {
    const data = {
      email: form.email,
    };

    try {
      await api.post('password/forgot', data);

      Alert.alert(
        'E-mail enviado',
        'Você receberá um e-mail com as instruções para redefinição de senha.',
      );

      navigate('ResetPassword');
    } catch (error) {
      Alert.alert(
        'Erro no envio de e-mail',
        'Ocorreu um erro ao enviar o e-mail. Tente novamente.',
      );
    }
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
            <Title>Esqueci minha senha</Title>

            <InputControl
              placeholder="E-mail"
              control={control}
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />

            <Button
              title="Enviar"
              onPress={handleSubmit(handleForgotPassword)}
            />
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
