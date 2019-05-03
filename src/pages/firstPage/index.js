import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { SETTINGS } from "../../settings";

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class FirstPage extends Component<Props> {
  render() {

    console.warn(SETTINGS);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{SETTINGS.FirstPage.title}</Text>
        <Text style={styles.instructions}>{SETTINGS.FirstPage.welcomeMessage}</Text>
        <Text style={styles.instructions}>{SETTINGS.FirstPage.instructions}</Text>
      </View>
    );
  }
}
