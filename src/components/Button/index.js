import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const Button = ({ title, onPress }) => (
  <Container onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </Container>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
