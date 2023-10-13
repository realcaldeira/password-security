import React from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  AddButton,
  Icon,
  BackButton,
  Title,
} from './styles';

interface HeaderProps {
  user?: string;
}

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation();

  function handleAddPass() {
    navigate("RegisterLoginData");
  }

  return (
    <Container
      // hasUserData={!!user}
      style={{
        ...(user
          ? {
            backgroundColor: '#1967FB'
          }
          : {
            backgroundColor: '#FFFFFF'
          })
      }}
    >
      {user ? (
        <>
          <AboutUser>

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user}</BoldText>
              </HelloMessage>

              <SecondaryMessage>
                Sinta-se seguro aqui
              </SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <AddButton onPress={()=>navigate("RegisterLoginData")}>
            <Icon
              name="plus"
              color="#FFFFFF"
              size={24}
            />
          </AddButton>
        </>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon
              name="chevron-left"
              color="#1967FB"
              size={28}
            />
          </BackButton>

          <Title>Cadastro de senha</Title>
        </>
      )}
    </Container>
  );
}