import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, InputField } from './styles';

const Input = ({ label, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <InputField {...rest} />
  </Container>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
