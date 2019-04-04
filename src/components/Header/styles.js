import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: ${getStatusBarHeight() + 70}px;
  padding-top: ${getStatusBarHeight()}px;
  background: #e5556e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LeftIcon = styled.TouchableOpacity``;
export const Title = styled.Text`
  font-family: 'Helvetica-bold';
  color: #fff;
  font-size: 18px;
`;
export const RightIcon = styled.TouchableOpacity``;
