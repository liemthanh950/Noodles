/**
 * @format
 */

import {AppRegistry} from 'react-native';
import home from './presentations/HomeScreen';
import information from './presentations/InformationScreen';
import Done from './presentations/DoneScreen';
import Outof from './presentations/OutofScreen';
import error from './presentations/ErrorScreen';
import {name as appName} from './app.json';
import Don from './presentations/DoneScreen';
AppRegistry.registerComponent(appName, () => information);
