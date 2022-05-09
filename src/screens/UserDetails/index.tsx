import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { IUser } from '../../model/user';
import { api } from '../../services/api';
import avatarDefault from '../../assets/avatar02.png';
import {
  Container,
  Content,
  ContentTitle,
  EmailData,
  Emailtitle,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  NameData,
  Nametitle,
  UserAvatar,
  UserDetailAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { useAuth } from '../../context/AuthContext';

interface RouteParams {
  userId: string;
}

interface ScreenNavigationProp {
  goBack: () => void;
}

export const UserDetails: React.FC = () => {
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser);

  const route = useRoute();
  const { userId } = route.params as RouteParams;

  const { user } = useAuth();

  const { goBack } = useNavigation<ScreenNavigationProp>();

  React.useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    };

    loadUser();
  }, [userId]);

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" />
        </GoBackButton>
        <HeaderTitle>Usuários</HeaderTitle>
        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
      </Header>
      <Content>
        <ContentTitle>Detalhes do usuário</ContentTitle>
        <UserDetailAvatar
          source={
            userDetails.avatar_url
              ? { uri: userDetails.avatar_url }
              : avatarDefault
          }
        />

        <UserNameDetail>
          <Nametitle>NAME</Nametitle>
          <NameData>{userDetails.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <Emailtitle>EMAIL</Emailtitle>
          <EmailData>{userDetails.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  );
};
