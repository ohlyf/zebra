import {AppRegistry, Platform, UIManager} from 'react-native';
import App from './App';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    console.log('enable android animation');
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {rootTag: document.getElementById('root')});
