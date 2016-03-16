/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './sources/App'

class im_here extends Component {
  render(){
    return(
      <App/>
    );
  }
}

AppRegistry.registerComponent('im_here', () => im_here);
