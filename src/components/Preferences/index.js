import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, PreferenceItem, CheckBoxItem, PreferenceTitle,
} from './styles';

const Preferences = ({ preferences, title }) => (
  <Container>
    <Title>{title}</Title>
    {preferences.map(preference => (
      <PreferenceItem key={preference}>
        <CheckBoxItem />
        <PreferenceTitle>{preference}</PreferenceTitle>
      </PreferenceItem>
    ))}
  </Container>
);

Preferences.propTypes = {
  preferences: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

Preferences.defaultProps = {
  title: 'Preferências',
};

export default Preferences;
