import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-family: 'Helvetica-bold';
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 14px;
`;

export const PreferenceItem = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
export const CheckBoxItem = styled.TouchableOpacity`
  background: ${props => (props.marked ? '#e5556e' : '#826565')};
  width: 22px;
  height: 22px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const PreferenceTitle = styled.Text`
  font-family: 'Helvetica';
  font-size: 18px;
  color: #fff;
`;
