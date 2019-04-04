import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from './styles';

const ButtonIcon = ({ onPress }) => (
  <Button onPress={onPress}>
    <Icon name="person-outline" size={24} color="#fff" />
  </Button>
);

ButtonIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ButtonIcon;
