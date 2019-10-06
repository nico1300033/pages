import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



export default class OpenScreen extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.text}>Welcome to the Shapes App, where you can see squares, circles, and triangles.</Text>
              <Button  onPress = {
                  () =>
                  this.props.navigation.navigate('Tabs')
              }
              title="Continue"
              color = "orange"
              ></Button>

          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'orange',
        paddingBottom: 50,
        textAlign: 'center',
        width: 320,
        fontSize: 20       
    }

});