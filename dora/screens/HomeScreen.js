import React from 'react';
import { Button } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerMode: 'none',
        headerVisible: false,
        header: null
    };
    render() {
      return (
        <Wallpaper>
        <Logo />
        <ButtonSubmit navigation={ this.props.navigation } destination='Userpage'/>
        </Wallpaper>
      );
    }
  }

export default HomeScreen;