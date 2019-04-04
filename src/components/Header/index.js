import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, LeftIcon, Title, RightIcon,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <LeftIcon />
    <Title>{title}</Title>
    <RightIcon />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
