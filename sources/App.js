'use strict'
import React, {Component, Navigator, View, Text, StyleSheet} from "react-native";
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import TabView from './Components/TabView';
import TabIcon from './Components/TabIcon';
import Home from './Components/Home';

export default class App extends  Component{
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />

        <Route name="home" component={Home} title="Home" type="replace"/>
        <Route name="tabbar">
          <Router footer={TabBar} hideNavBar={true} tabBarStyle={{borderTopColor:'#00bb00',borderTopWidth:1,backgroundColor:'white'}}>
            <Route schema="tab" title="Home" component={TabView} hideTabBar={true}/>
          </Router>
        </Route>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});