import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import uploadActions from '../../store/ducks/upload';

import { Container, Label, Input, ImageLoading } from './styles';

class InputImage extends Component {
  state = {
    loading: false,
    image_url: null,
  };
  componentDidMount() {}

  handleChooseImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, async file => {
      if (file.uri) {
        this.setState({ loading: true });
        this.props.uploadRequest(file);
      }
    });
  };

  render() {
    return (
      <Container>
        <Label>Imagem</Label>
        {!this.state.loading ? (
          <Input onPress={this.handleChooseImage}>
            <Icon name="camera-alt" size={24} color="#fff" />
          </Input>
        ) : (
          <ImageLoading />
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(uploadActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(InputImage);
