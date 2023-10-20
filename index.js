/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {io} from 'socket.io-client';
const baseUrl =
  Platform.OS === 'android'
    ? 'http://192.168.39.129:3000'
    : 'http://192.168.39.129:3000';
export const socket = io(baseUrl);
AppRegistry.registerComponent(appName, () => App);
