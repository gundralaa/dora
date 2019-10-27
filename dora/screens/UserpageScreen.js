import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native';
import { StyleSheet, Image, Dimensions } from 'react-native';
import VideoScroller from '../components/VideoScroller';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';

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
        <Wallpaper>
          <View style={styles.block}/>
          <View style={styles.container}>
            <VideoScroller navigation={ this.props.navigation }/>
          </View>
          <View style={styles.block}/>
        </Wallpaper>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    block: {
      backgroundColor: '#ffdb58'
    }

  });

export default UserpageScreen;