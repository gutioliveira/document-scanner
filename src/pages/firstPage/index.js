import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  PermissionsAndroid,
  TouchableWithoutFeedback,
} from 'react-native';

import DocumentScanner from 'react-native-document-scanner';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class FirstPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      granted: Platform.OS === 'ios',
    };
  }

  permissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.warn('You can use the camera');
      } else {
        console.warn('Camera permission denied');
      }
      const granted2 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (
        granted === PermissionsAndroid.RESULTS.GRANTED &&
        granted2 === PermissionsAndroid.RESULTS.GRANTED
      ) {
        this.setState({ granted: true });
      } else {
        console.warn('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      // this.scanner.capture();
      this.permissions();
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.hide && this.state.granted && (
          <DocumentScanner
            style={{ flex: 1 }}
            ref={ref => (this.scanner = ref)}
            useBase64={Platform.OS === 'ios'}
            saveInAppDocument={false}
            onPictureTaken={data => {
              console.log('onP312ictur312eTaken', data.croppedImage);
              this.setState({ hide: false, image: data.croppedImage });
            }}
            noGrayScale
            quality={1.0}
            onRectangleDetect={({ stableCounter, lastDetectionType }) => {
              // this.setState({ stableCounter, lastDetectionType })
              console.warn('onRectangleDetect');
            }}
            detectionCountBeforeCapture={5}
            detectionRefreshRateInMS={50}
          />
        )}
        {!this.state.hide && this.state.granted && (
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ hide: true });
            }}
          >
            <Image
              style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
              source={{ uri: `data:image/jpeg;base64,${this.state.image}` }}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}
