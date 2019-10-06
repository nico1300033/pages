import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class CircleScreen extends Component {
  render() {
      return (
          <View style={styles.container}>
             <Text style={styles.circleText}>Circles Page</Text>
              <View style={styles.circle1} />
              <View style={styles.circle2} />
              <View style={styles.circle3} />
              <View style={styles.circle4} />
              <View style={styles.circle5} />
              <View style={styles.circle6} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    },

    circleText: {
        fontSize: 35,
        color: "blue",
        marginLeft: 120
    },
    

    circle1: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        marginLeft:30,
        marginTop: 120,
        borderRadius: 100/2
        
    },

    circle2: {
        width: 30,
        height: 30,
        backgroundColor: 'rgb(115, 153, 146)',
        borderRadius: 100/2,
        marginLeft:300,
        marginBottom: -20
    },
    
    circle3: {
        width: 45,
        height: 45,
        backgroundColor: 'rgb(223, 153, 146)',
        borderRadius: 100/2,
        marginLeft: 150,
        marginTop: 70
    },
    
    circle4: {
        width: 85,
        height: 85,
        backgroundColor: '#E8436F',
        borderRadius: 100/2,
        marginLeft: 20,
        marginTop:20
    },
    
    circle5: {
        width: 95,
        height: 95,
        backgroundColor: 'gray',
        borderRadius: 100/2,
        marginLeft: 300,
        marginTop: -350
    },

    circle6: {
        width: 65,
        height: 65,
        backgroundColor: 'black',
        borderRadius: 100/2,
        marginLeft: 200,
        marginTop: 200
    }
});