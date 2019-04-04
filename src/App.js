import React, { Component } from 'react';

import Routes from './routes';
import NavigationService from './services/navigation';

class App extends Component {
  registerService = ref => {
    NavigationService.setTopLevelNavigator(ref);
  };

  render() {
    return <Routes ref={this.registerService} />;
  }
}

export default App;
