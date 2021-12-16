import {StatusBar} from 'react-native';
import React from 'react';
import Navigating from './presentations/Navigating';
export default function App() {
  StatusBar.setHidden(false, 'none');
  return <Navigating />;
}
