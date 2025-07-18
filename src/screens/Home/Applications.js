import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Applications = () => (
  <View style={styles.scene}>
    <Text>Applications Content</Text>
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Applications;
