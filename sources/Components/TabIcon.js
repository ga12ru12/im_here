'use strict'
import React, {Text, Component} from 'react-native';

export default class TabIcon extends Component{
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}