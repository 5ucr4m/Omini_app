import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const NavLink = ({ text, onPress }) => (
  <Container onPress={onPress}>
    <Text>{text}</Text>
  </Container>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavLink;
