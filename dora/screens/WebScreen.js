import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class WebScreen extends React.Component {
    static navigationOptions = {
        headerMode: 'none',
        headerVisible: false,
        header: null
    };
    render() {
      return (
        <WebView
          originWhitelist={['*']}
          source={{ uri: 'https://www.youtube.com/embed/FoMlSB6ftQg' }}
          style={{ marginTop: 20 }}
        />
      );
    }
  }

export default WebScreen;