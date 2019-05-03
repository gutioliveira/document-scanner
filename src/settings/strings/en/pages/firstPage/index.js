import {Platform} from "react-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const FirstPage = {
  title: 'Welcome to React Native',
  welcomeMessage: 'To get started, edit the file ./src/pages/firstPage/index.js',
  instructions
};
