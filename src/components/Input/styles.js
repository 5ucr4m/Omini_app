import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  padding: 10px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: left;
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: colors.placeHolderText,
})`
  font-size: 20px;
  margin: 7px 0 17px;
  color: #fff;
`;
