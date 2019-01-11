import React from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>
            Hello!
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'pink',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
  },
})

AppRegistry.registerComponent("App",() => App)