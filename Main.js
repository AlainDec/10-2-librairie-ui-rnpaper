import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

const theme = {
    ...DefaultTheme,
    backgroundColor: 'red',
    colors: {
      ...DefaultTheme.colors,
      primary: 'purple',
      accent: 'yellow',
      text: 'black'
    },
  };

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);