import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native';
import { StyleSheet, Image, Dimensions } from 'react-native';
import VideoScroller from '../components/VideoScroller';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

class UserpageScreen extends React.Component {
    static navigationOptions = {
      headerMode: 'none',
      headerVisible: false,
      header: null
    };

    render() {
      return (

        <View style={styles.container}>
          <VideoScroller navigation={ this.props.navigation }/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {},
  });

export default UserpageScreen;