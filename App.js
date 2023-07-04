import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const handlePlay = () => {
    console.log('Button clicked!');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePlay}>
        <AntDesign name="play" size={50} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
