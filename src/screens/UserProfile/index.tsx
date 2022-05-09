import { useNavigation } from '@react-navigation/native';
import React from 'react';
import avatarDefault from '../../assets/avatar02.png';
import {
  Container,
  Content,
  EmailData,
  Emailtitle,
  GoBackButton,
  Header,
  HeaderTitle,
  HeaderTop,
  Icon,
  NameData,
  Nametitle,
  PhotoButton,
  PhotoContainer,
  UserAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Form/Button';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton onPress={goBack}>
            <Icon name="chevron-left" />
          </GoBackButton>
          <HeaderTitle>Seu Perfil</HeaderTitle>
        </HeaderTop>

        <PhotoContainer>
          <UserAvatar
            source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
          />
          <PhotoButton>
            <Icon name="camera" />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <UserNameDetail>
          <Nametitle>NAME</Nametitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <Emailtitle>EMAIL</Emailtitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>
      </Content>

      <Button title="Editar dados do perfil" onPress={() => {}} />
      <Button title="Trocar senha" onPress={() => {}} />
    </Container>
  );
};
