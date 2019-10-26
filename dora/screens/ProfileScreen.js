import React from 'react';
import { Text, View } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello, world!</Text>
        </View>
      );
    }
  }

export default ProfileScreen;