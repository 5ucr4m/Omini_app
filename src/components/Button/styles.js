import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #e5556e;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  opacity: ${props => (props.loading ? 0.4 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
