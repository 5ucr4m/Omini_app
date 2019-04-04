import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import { Container, Button } from './styles';

const TabBar = () => (
  <Container>
    <Button onPress={() => NavigationService.navigate('NewMeetup')}>
      <Icon name="add-box" size={24} color="#fff" />
    </Button>
    <Button onPress={() => NavigationService.navigate('Dashboard')}>
      <Icon name="home" size={24} color="#fff" />
    </Button>
    <Button onPress={() => NavigationService.navigate('Search')}>
      <Icon name="search" size={24} color="#fff" />
    </Button>
  </Container>
);

export default TabBar;
