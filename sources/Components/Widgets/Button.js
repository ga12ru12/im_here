'use strict';

import React, {Component, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class Button extends Component {
  render() {
    return(
      <TouchableHighlight
        style={styles.button}
        underlayColor="#2A7BBC"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }

}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2C6EA2',
    padding: 8,
    borderColor: 'transparent',
    borderWidth:2,
    alignSelf: 'center',
    borderRadius: 5,
    width: 250,
    height: 45,
    marginTop: 18
  },

  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18
  }
});