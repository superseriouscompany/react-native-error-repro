/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';

export default class poop extends Component {
  state = {}

  componentDidMount() {
    NativeModules.Poop.addEvent("dope").then(function(foo) {
      console.log('got promise result', foo);
    }).catch((err) => {
      this.setState({error: err.toString()})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { this.state.error ?
            this.state.error
          :
            "Waiting for error..."
          }
        </Text>
      </View>
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

AppRegistry.registerComponent('poop', () => poop);
