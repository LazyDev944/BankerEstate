import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const PrimaryButton = ({ title, onPress, backgroundColor = COLORS.black }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default PrimaryButton;
