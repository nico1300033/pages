import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class TriangleScreen extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.triangleText}>Triangles Page</Text>
              <View style={styles.triangle1} />
              <View style={styles.triangle2} />
              <View style={styles.triangle3} />
              <View style={styles.triangle4} />
              <View style={styles.triangle5} />
              <View style={styles.triangle6} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    triangleText: {
        fontSize: 35,
        color: "blue",
        marginLeft: 100
    },
    

    triangle1: {
        width: 100,
        height: 100,
        marginLeft:10,
        marginTop: 180,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FF6C49'
        
    },

    triangle2: {
        width: 30,
        height: 30,
        marginLeft:150,
        marginTop: -150,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgb(115, 153, 146)',
        rotation: 180
        
    },
    
    triangle3: {
        width: 45,
        height: 45,
        marginLeft: 150,
        marginTop: 70,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: 'transparent',
        borderTopColor: 'rgb(223, 153, 146)'
    },
    
    triangle4: {
        width: 25,
        height: 25,
        marginLeft: 20,
        marginTop:20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#E8436F'
    },
    
    triangle5: {
        width: 95,
        height: 95,
        marginLeft: 300,
        marginTop: -350,
        rotation: 90,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray'

    },

    triangle6: {
        width: 65,
        height: 65,
        backgroundColor: 'black',
        marginLeft: 200,
        marginTop: 120,
        rotation: -90,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'black'
    }
});