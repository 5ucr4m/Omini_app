import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 0;
`;
export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: left;
`;
export const Input = styled.TouchableOpacity`
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-width: 1.5px;
  border-style: dashed;
  opacity: 0.5;
  margin: 7px 0 17px;
  padding: 30px;
  border-radius: 5px;
`;

export const ImageLoading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#FFF',
})`
  justify-content: center;
  flex: 1;
  height: 120px;
  border-radius: 5px;
`;
