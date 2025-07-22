// Button with white background
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const SecondaryButton = ({ title, onPress, borderColor = COLORS.black, textColor = COLORS.black }) => (
  <TouchableOpacity style={[styles.button, { borderColor }]} onPress={onPress}>
    <Text style={[styles.text, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  },
});

export default SecondaryButton;
