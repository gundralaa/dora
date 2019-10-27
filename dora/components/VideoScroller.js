import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions , Text} from 'react-native';
import { WebView } from 'react-native-webview';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class VideoScroller extends Component{
    constructor(){
        super()
        this.state = {
            videos : [
                {'url' : 'https://www.youtube.com/embed/KRntP-q_R9s', 'id' : 1},
                {'url' : 'https://www.youtube.com/embed/bdPZ2Cu1vNU', 'id' : 2},
                {'url' : 'https://www.youtube.com/embed/bRTb33PS-qs', 'id' : 3},
                {'url' : 'https://www.youtube.com/embed/5tALTJYkqaw', 'id' : 4},
                {'url' : 'https://www.youtube.com/embed/vkEOOLlkMUQ', 'id' : 5}
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
          <ScrollView 
            ref={(scrollView) => { this.scrollView = scrollView; }}
            style={styles.container}
            //pagingEnabled={true}
            horizontal= {true}
            decelerationRate={0}
            snapToInterval={width - 20}
            snapToAlignment={"center"}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
              }}>
                  {
                      this.state.videos.map((item, index) => (
                        <TouchableOpacity key = {item.id} onPress={() => navigate('Webview', {'uri' : item.url})}>
                            <View style = {styles.view} pointerEvents='none'>
                                <WebView
                                    originWhitelist={['*']}
                                    source={{ uri: item.url }}
                                />   
                            </View>
                        </TouchableOpacity>
                     ))
                  }
          </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
    },
    view: {
      marginTop: 100,
      width: width - 30,
      margin: 10,
      height: height - 200,
      borderRadius: 10,
      //paddingHorizontal : 30
    },
});