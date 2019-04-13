import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, ButtonText } from './styles';

const Button = ({ title, onPress, loading }) => (
  <Container onPress={loading ? null : onPress}>
    {loading ? <ActivityIndicator size="small" color="#fff" /> : <ButtonText>{title}</ButtonText>}
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
