import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import FirstPage from './src/pages/firstPage'
import { SETTINGS } from "./src/settings";

const createApp = (page) => {
  return page;
};


function registerScreens() {
  Navigation.registerComponent(SETTINGS.pageKeys.firstPage, () => createApp(FirstPage));
};

registerScreens();

const animations = Platform.OS === 'ios';

Navigation.events().registerAppLaunchedListener(() => {
  const topBar = {
    animate: false,
    visible: false,
    drawBehind: true,
  };

  const bottomTabs = {
    visible: false,
    animate: false,
  };

  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    animations: {
      push: {
        enable: animations,
        waitForRender: true,
      },
      showModal: {
        enable: animations,
        waitForRender: true,
      },
      pop: {
        enable: animations,
      },
    },
    topBar,
    bottomTabs,
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            // bottomTabs: {
            //   id: SETTINGS.pageKeys.homeBottomTabs.tabId,
            //   children: homeBottomTabs.map(item => ({
            //     component: {
            //       name: item.key,
            //       options: {
            //         bottomTab: {
            //           icon: item.icon,
            //         },
            //       },
            //     },
            //   })),
            // },
            component: {
              name: SETTINGS.pageKeys.firstPage,
              options: {
                topBar,
              },
            },
          },
        ],
      },
    },
  });
});

const App = () => null;

export default App;
