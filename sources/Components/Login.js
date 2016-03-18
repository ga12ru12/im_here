'use strict'
import React, {Text, Component, StyleSheet, View, Image, TextInput} from 'react-native';
import ButtonRounded from "./Widgets/Button";

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/logo_short.png')}
        />
        <Text style={styles.welcome}>
          I'm here
        </Text>
        <Text style={styles.instructions}>
          Share location with partners
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          keyboardType={'phone-pad'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <ButtonRounded
          text="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 150,
    paddingLeft: 50,
    paddingRight: 50,
  },
  logo: {
    width: 46,
    height: 105,
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    color: '#EF524D',
    marginBottom: 25,
    fontFamily: "Times New Roman",
  },
  instructions: {
    textAlign: 'center',
    color: '#8E8E8E',
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "sans-serif",
  },
});