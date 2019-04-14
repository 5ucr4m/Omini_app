import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ImageCard,
  ContentCard,
  Description,
  TitleCard,
  MembersCard,
  Button,
} from './styles';

const Card = ({
  source, title, members, onPress,
}) => (
  <Container>
    <ImageCard source={{ uri: source }} />
    <ContentCard>
      <Description>
        <TitleCard>{title}</TitleCard>
        <MembersCard>
          {members === 1 ? '1 inscrito' : `${members} inscritos`}
        </MembersCard>
      </Description>
      <Button onPress={onPress}>
        <Icon name="chevron-right" size={24} color="#fff" />
      </Button>
    </ContentCard>
  </Container>
);

Card.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string.isRequired,
  members: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Card.defaultProps = {
  source: 'http://fajrpolymers.com/wp-content/uploads/2018/02/dummy.png',
  members: 0,
};

export default Card;
