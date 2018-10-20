import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tinder from './Tinder.js';

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {

  render() {
    
      return (
          <Tinder style={{flex: 1}} />        
      );
    
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
