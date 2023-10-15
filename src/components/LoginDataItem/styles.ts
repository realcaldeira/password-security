import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${RFValue(25)}px;
  background-color: white;
  min-height: 100px;
  align-items: center;
  border-radius: 5px;
  padding-left: ${RFValue(25)}px;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs({
  size: 24,
})`
  margin-right: 20px;
  opacity: 0.6;
`;

export const PassData = styled.View`
  max-width: 243px;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-size: ${RFValue(15)}px;
  color: #888D97;
`;

export const Password = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #5429CC;
`;

export const LoginData = styled.View`
  max-width: 243px;
`;

export const BoldTitle = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-size: ${RFValue(15)}px;
  color: #3D434D;
`;

export const Email = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #888D97;
`;
