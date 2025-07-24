import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const PrimaryButton = ({ title, onPress, backgroundColor = COLORS.black, disabled = false }) => (
  <TouchableOpacity
    style={[
      styles.button,
      { backgroundColor },
      disabled && styles.disabledButton,
    ]}
    onPress={!disabled ? onPress : null}
    activeOpacity={disabled ? 1 : 0.7}
  >
    <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 4,
    width: '100%',
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: COLORS.gray, // Assuming COLORS.gray exists for disabled text color
  },
});

export default PrimaryButton;
