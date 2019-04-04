import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: #332c2c;
  padding: 30px;
`;

export const Content = styled.ScrollView`
  margin-bottom: ${getStatusBarHeight() + 45}px;
`;
export const Label = styled.Text`
  font-family: 'Helvetica-bold';
  font-size: 16px;
  color: #fff;
  margin-bottom: 15px;
`;

export const CardContainer = styled.View`
  width: ${width * 0.7}px;
  margin-right: 20px;
`;

export const HorizontalContent = styled.ScrollView.attrs({
  horizontal: true,
})``;
