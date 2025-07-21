import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../constants/colors';

const Input = ({ placeholder, value, onChangeText, headerText, ...props }) => (
  <View style={styles.container}>
    {headerText && <Text style={styles.headerText}>{headerText}</Text>}
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerText: {
    fontSize: 14,
    color: COLORS.darkGray,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    width: '100%',
  },
});

export default Input;
