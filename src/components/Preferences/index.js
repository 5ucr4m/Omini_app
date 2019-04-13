import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import PreferencesActions from '../../store/ducks/preferences';

import {
  Container,
  Title,
  PreferenceItem,
  CheckBoxItem,
  PreferenceTitle,
} from './styles';

class Preferences extends Component {
  componentDidMount() {
    const { initUserPreferences, ResetPreferences } = this.props;
    const init = initUserPreferences || [];
    ResetPreferences(init);
  }

  render() {
    const {
      preferences,
      title,
      selectedPreferences,
      OnChangePreferences,
    } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        {preferences.map(preference => (
          <PreferenceItem key={preference.id}>
            <CheckBoxItem
              marked={!!selectedPreferences.includes(preference.id)}
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
  selectedPreferences: PropTypes.arrayOf(PropTypes.number).isRequired,
  ResetPreferences: PropTypes.func.isRequired,
  initUserPreferences: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string,
};

Preferences.defaultProps = {
  title: 'Preferências',
};

const mapStateToProps = state => ({
  preferences: state.preferences.list,
  selectedPreferences: state.preferences.selectedPreferences,
});

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
