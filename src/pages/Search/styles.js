import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background: #2b2828;
  padding: 30px;
`;

export const MeetupList = styled.FlatList`
  margin-top: 20px;
  margin-bottom: ${getBottomSpace() + 35}px;
`;

export const InputContainerSearch = styled.View`
  flex-direction: row;
  width: 100%;
  background: #3f3939;
  border-radius: 5px;
  opacity: 0.8;
  justify-content: center;
`;

export const InputIcon = styled(Icon)`
  color: #8e8e93;
  font-size: 20px;
  padding: 10px 0 10px 10px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#8e8e93',
})`
  flex: 1;
  font-size: 15px;
  padding: 10px;
  letter-spacing: 0;
  color: #fff;
  font-family: 'Helvetica';
`;
