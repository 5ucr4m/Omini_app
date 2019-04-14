import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import {
  Container,
  Content,
  HorizontalContent,
  Label,
  CardContainer,
} from './styles';

import meetupActions from '../../store/ducks/meetup';

const Dashboard = ({
  navigation,
  meetups,
  subscriptions,
  recommendation,
  selectMeetup,
}) => (
  <Fragment>
    <Container>
      <Content>
        <Label>Inscrições</Label>
        <HorizontalContent>
          {subscriptions.map(meetup => (
            <CardContainer key={`subscription-${meetup.id}`}>
              <Card
                title={meetup.title}
                members={meetup.subscriptions}
                source={meetup.image_url}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
        <Label>Próximos Meetups</Label>
        <HorizontalContent>
          {meetups.map(meetup => (
            <CardContainer key={`next-${meetup.id}`}>
              <Card
                title={meetup.title}
                members={meetup.subscriptions}
                source={meetup.image_url}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
        <Label>Recomendados</Label>
        <HorizontalContent>
          {recommendation.map(meetup => (
            <CardContainer key={`recommendation-${meetup.id}`}>
              <Card
                title={meetup.title}
                members={meetup.subscriptions}
                source={meetup.image_url}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
      </Content>
    </Container>
    <TabBar />
  </Fragment>
);

Dashboard.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  selectMeetup: PropTypes.func.isRequired,
  meetups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subscriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  recommendation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Dashboard.navigationOptions = {
  title: 'Início',
  headerLeft: null,
};

const mapStateToProps = state => ({
  subscriptions: state.meetups.data.subscription,
  meetups: state.meetups.data.meetups,
  recommendation: state.meetups.data.recommendation,
});

const mapDispatchToProps = dispatch => bindActionCreators(meetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
