import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  background: #332c2c;
  padding: 20px;
`;

export const Content = styled.ScrollView`
  margin-bottom: ${getBottomSpace() + 65}px;
`;
