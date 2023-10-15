import React from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  AboutUser,
  Wrapper,
  TextContainer,
  HelloMessage,
  BoldText,
  AddButton,
  Icon,
  BackButton,
  Title,
  Text
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
            backgroundColor: '#5429CC'
          }
          : {
            backgroundColor: '#FFFFFF'
          })
      }}
    >
      {user ? (
        <Wrapper>
          <AboutUser>

            <TextContainer>
              <HelloMessage>
                Olá, <BoldText>{user}</BoldText>
              </HelloMessage>

            </TextContainer>
          </AboutUser>

          <AddButton onPress={()=>navigate("RegisterLoginData")}>
            <Text>Nova senha</Text>
          </AddButton>
        </Wrapper>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon
              name="chevron-left"
              color="#5429CC"
              size={28}
            />
          </BackButton>

          <Title>Cadastro de senha</Title>
        </>
      )}
    </Container>
  );
}