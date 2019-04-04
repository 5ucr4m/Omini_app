import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Meetup from './pages/Meetup';
import NewMeetup from './pages/NewMeetup';

import ButtonIcon from './components/ButtonIcon';

const Routes = createStackNavigator(
  {
    Dashboard,
    NewMeetup,
    SignIn,
    Search,
    Meetup,
    Profile,
    Preferences,
    SignUp,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Default',
      headerStyle: {
        backgroundColor: '#e5556e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <ButtonIcon onPress={() => navigation.navigate('Profile')} />,
      headerBackTitle: null,
    }),
  },
);

export default createAppContainer(Routes);
