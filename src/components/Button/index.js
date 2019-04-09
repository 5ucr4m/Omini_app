import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

const Button = ({ title, onPress, loading }) => (
  <Container onPress={loading ? null : onPress} loading={loading}>
    <ButtonText loading>{loading ? 'carregando...' : title}</ButtonText>
  </Container>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
