import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import TrackStatus from './components/TrackStatus'
export default function App() {
  const initialStatus = {
    isLoaded: false,
    durationMillis: 0,
    positionMillis: 0,
    shouldPlay: false,
    didJustFinish: false,
  };
  const [soundStatus, setSoundStatus] = useState(initialStatus);
  const soundObject = new Audio.Sound();
  useEffect(() => {
    const getStatus = async () => {
      try {
        const status = await soundObject.getStatusAsync();
        setSoundStatus(status);
      } catch (error) {
        console.log('Error getting sound status', error);
      }
    };

    const loadAndPlayAudio = async () => {
      try {
        await soundObject.loadAsync(require('./assets/music/silent-wood.mp3'));
        await soundObject.playAsync();
        getStatus();
      } catch (error) {
        console.log('Error playing audio', error);
      }
    };

    loadAndPlayAudio();

    const playbackStatusSubscription = soundObject.setOnPlaybackStatusUpdate((status) => {
      setSoundStatus(status);
    });

    return () => {
      playbackStatusSubscription.remove();
      soundObject.unloadAsync();
    };
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TrackStatus soundStatus={soundStatus} />
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
