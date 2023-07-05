import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function TrackStatus ({ soundStatus }) {
    const { isLoaded, durationMillis, positionMillis, shouldPlay, didJustFinish } = soundStatus;
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    const duration = formatTime(durationMillis);
    const position = formatTime(positionMillis);
    const playbackStatus = shouldPlay ? 'Playing' : 'Paused';
    const finishedStatus = didJustFinish ? 'Finished' : '';
  
    return (
      <View>
        {isLoaded ? (
          <Text>
            Duration: {duration} {'\n'}
            Position: {position} {'\n'}
            Playback: {playbackStatus} {'\n'}
            {finishedStatus}
          </Text>
        ) : (
          <Text>Loading track...</Text>
        )}
      </View>
    );
};
