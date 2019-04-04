import styled from 'styled-components/native';

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
  placeholderTextColor: '#fff',
})`
  font-size: 20px;
  margin: 7px 0 17px;
  color: #fff;
  opacity: 0.7;
`;
