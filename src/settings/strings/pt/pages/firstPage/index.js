import {Platform} from "react-native";

const instructions = Platform.select({
  ios: 'Pressione Cmd+R para recarregar,\n' + 'Cmd+D ou balance para o menu de desenvolvimento',
  android:
    'Aperte R duas vezes para recarregar,\n' +
    'Balance ou pressione o menu do botão para o menu de desenvolvimento',
});

export const FirstPage = {
  title: 'Bem vindo ao React Native',
  welcomeMessage: 'Para começar, edit o arquivo ./src/pages/firstPage/index.js',
  instructions
};
