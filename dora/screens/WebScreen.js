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
          source={{ uri: this.props.uri}}
          style={{ marginTop: 0 }}
        />
      );
    }
  }

export default WebScreen;