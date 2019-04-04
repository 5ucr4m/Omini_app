import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: ${getBottomSpace() + 60}px;
  padding-bottom: ${getBottomSpace()}px;
  background: #e5556e;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;
