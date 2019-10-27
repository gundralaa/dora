import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default class CameraComponent extends React.Component {

    static navigationOptions = {
        headerMode: 'none',
        headerVisible: false,
        header: null
    };

    state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    faces : [],
    smile_prob : 0
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleFacesDetected = ({ faces }) => {
      this.setState({ faces });
      this.state.faces.map(this.setSmile)
  }

  setSmile = (face) => this.setState({smile_prob : face.smilingProbability})

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.all,
            minDetectionInterval: 100,
            tracking: true,
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                marginVertical: 100
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> { this.state.smile_prob }</Text>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>

          </Camera>
        </View>
      );
    }
  }
}