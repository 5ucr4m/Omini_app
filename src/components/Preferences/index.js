import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import PreferencesActions from '../../store/ducks/preferences';

import {
  Container, Title, PreferenceItem, CheckBoxItem, PreferenceTitle,
} from './styles';

class Preferences extends Component {
  componentDidMount() {
    const { PreferencesRequest } = this.props;
    PreferencesRequest();
  }

  render() {
    const {
      preferences, title, userPreferences, OnChangePreferences,
    } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        {preferences.map(preference => (
          <PreferenceItem key={preference.id}>
            <CheckBoxItem
              marked={!!userPreferences.includes(preference.id)}
              onPress={() => OnChangePreferences(preference.id)}
            />
            <PreferenceTitle>{preference.description}</PreferenceTitle>
          </PreferenceItem>
        ))}
      </Container>
    );
  }
}

Preferences.propTypes = {
  preferences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
  OnChangePreferences: PropTypes.func.isRequired,
  userPreferences: PropTypes.arrayOf(PropTypes.number).isRequired,
  PreferencesRequest: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Preferences.defaultProps = {
  title: 'Preferências',
};

const mapStateToProps = state => ({
  preferences: state.preferences.list,
  userPreferences: state.preferences.userPreferences,
});

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
