import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button } from '../../components/Form/Button';
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  Title,
  UserAvatar,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import avatarDefault from '../../assets/avatar02.png';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Informe o nome completo'),
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
});

export const UserProfileEdit: React.FC = () => {
  const { user, updateUser } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const { goBack } = useNavigation<ScreenNavigationProp>();

  const handleProfileEdit = async (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
    };

    try {
      const response = await api.put('profile', data);

      updateUser(response.data);

      Alert.alert(
        'Perfil atualizado',
        'Os dados do seu perfil foram atualizados.',
      );

      goBack();
    } catch (error) {
      Alert.alert(
        'Erro ao atualizar',
        'Ocorreu um erro ao atualizar o perfil. Tente novamente.',
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
          <Header>
            <GoBackButton onPress={goBack}>
              <Icon name="chevron-left" />
            </GoBackButton>
            <HeaderTitle>Seu Perfil</HeaderTitle>
            <UserAvatar
              source={
                user.avatar_url ? { uri: user.avatar_url } : avatarDefault
              }
            />
          </Header>

          <Content>
            <Title>Editar dados do perfil</Title>

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

            <Button
              title="Salvar alterações"
              onPress={handleSubmit(handleProfileEdit)}
              disabled={!!errors.name || !!errors.email}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
