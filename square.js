import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class SquareScreen extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.squareText}>Squares Page</Text>
              <View style={styles.square1} />
              <View style={styles.square2} />
              <View style={styles.square3} />
              <View style={styles.square4} />
              <View style={styles.square5} />
              <View style={styles.square6} />
          </View>
      );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      
    },

    squareText: {
        fontSize: 35,
        color: "blue",
        marginLeft: 100
    },
    

    square1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginLeft:50,
        marginTop: 120
        
    },

    square2: {
        width: 30,
        height: 30,
        backgroundColor: 'green',
        marginLeft:300,
        marginBottom: -20
    },
    
    square3: {
        width: 15,
        height: 15,
        backgroundColor: 'brown',
        marginLeft: 150,
        marginTop: 70
    },
    
    square4: {
        width: 25,
        height: 25,
        backgroundColor: 'orange',
        marginLeft: 20,
        marginTop:20
    },
    
    square5: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        marginLeft: 300,
        marginTop: -350
    },

    square6: {
        width: 200,
        height: 200,
        backgroundColor: 'black',
        marginLeft: 200,
        marginTop: 200
    }

});