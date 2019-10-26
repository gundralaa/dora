import React from 'react';
import { Text, View } from 'react-native';
import '../shim.js'
import { ElvClient } from "@eluvio/elv-client-js";
import BitmovinPlayer from 'react-native-bitmovin-player';


class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };

    constructor() {
      super();
  
      this.state = {
        player_url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      };

      this._load()
  
    }

    _load = async () => {
      const configUrl = "https://demo.net955210.contentfabric.io/config";
      const client = await ElvClient.FromConfigurationUrl({configUrl});
      const wallet = client.GenerateWallet();
      const mnemonic = wallet.GenerateMnemonic();
      const signer = wallet.AddAccountFromMnemonic({mnemonic});
      
      await client.SetSigner({signer});
      
      const versionHash = "hq__B1WL1oJa9MCiRpWXBmaoHtAwQdgNGKU36vazGDjjg9e8xS7uQADLct8j5NByXG3qnNAVQ7DcTh";
      const availableDRMs = await client.AvailableDRMs();
      
      const playoutOptions = await client.PlayoutOptions({
        versionHash,
        protocols: ["hls"],
        drms: availableDRMs
      });
      this._play(playoutOptions);
      
    };

    _play = (playoutOptions) => {
      const playoutUrl =`${playoutOptions.hls.playoutUrl}&player_profile=hls-js`;
      
      this.setState({
        player_url : playoutUrl
      });
      // Autoplay
    };

    render() {
      const { navigate } = this.props.navigation;
      
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <BitmovinPlayer
            configuration={{
              source: {
                title: 'It works',
                url: this.state.player_url,
              },
            }}
          />
        </View>
      );
    }
  }

export default ProfileScreen;