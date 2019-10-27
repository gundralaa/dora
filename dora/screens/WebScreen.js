import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import CameraComponent from './DesisionScreen';
import { Video } from 'expo-av';
const { start_vid } = require('../assets/IMG_3840.mp4');
const { try_again } = require('../assets/IMG_3840.mp4');
const { good_job } =  require('../assets/IMG_3842.mp4');

class WebScreen extends React.Component {
    static navigationOptions = {
        headerMode: 'none',
        headerVisible: false,
        header: null
    };
    constructor(){
      super()
      this.state = {
        videos : [ start_vid,
                    try_again,
                    good_job
         ],

      }
    }
    render() {
      return (
        <Video
        source={require('../assets/IMG_3840.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        style={{ flex: 1 }}
      />
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 65,
      width: 100,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
export default WebScreen;