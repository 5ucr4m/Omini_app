import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button } from './styles';

const TabBar = () => (
  <Container>
    <Button>
      <Icon name="add-box" size={24} color="#fff" />
    </Button>
    <Button>
      <Icon name="home" size={24} color="#fff" />
    </Button>
    <Button>
      <Icon name="search" size={24} color="#fff" />
    </Button>
  </Container>
);

export default TabBar;
