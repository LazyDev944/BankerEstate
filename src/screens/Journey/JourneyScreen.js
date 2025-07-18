import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const JourneyScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Journey" />
      <Text>Welcome to the Journey Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default JourneyScreen;
