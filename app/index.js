import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert, Button, Image, StyleSheet, Platform } from 'react-native';


export default function App() {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
      };
  return (

    <View style={styles.wrapper} >

      <Text style={styles.textWrapper}>
        <Text>
          welcome to
        </Text>
        <Text> </Text>
        <Text style={styles.compName}>UKPEME</Text>
      </Text>

      <TouchableOpacity
        style={[styles.toggleContainer, isToggled ? styles.toggleOn : styles.toggleOff]}
        onPress={handleToggle}
      >

        <View style={[styles.toggleButton, isToggled ? styles.buttonOn : styles.buttonOff]} />

        <Text style={styles.toggleText}>
          On
        </Text>
        <Text style={styles.toggleText}>
          Off
        </Text>

      </TouchableOpacity>
      
    </View>

  );
}

const styles = StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#74040',
      width: 80,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      position: 'relative',
    },
    toggleOn: {
      backgroundColor: '#4caf50',
    },
    toggleOff: {
      backgroundColor: '#ff2400',
    },
    toggleButton: {
      height: 30,
      width: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      elevation: 2,
    },
    buttonOn: {
      left: 40,
      backgroundColor: 'white',
    },
    buttonOff: {
      left: 10,
      backgroundColor: 'white',
    },
    toggleText: {
      color: 'white',
      fontSize: 14,
      justifyContent: "space-between",
      flexDirection: "row"
    },
    wrapper: {
        paddingHorizontal: "2%",
      paddingTop: "40%",
      alignItems: "center",
      height: "100%",
      width: "100%"
    },
    textWrapper: {
      fontSize: 40,
      paddingBottom: 60,
      textAlign: "center",
    },
    compName: {
      color: "#ff2400"
    }
  });
