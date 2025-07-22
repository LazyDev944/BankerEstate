import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Checkbox = ({ label, onPress, isChecked }) => {
  return (
    <TouchableOpacity style={styles.checkboxRow} onPress={onPress}>
      {isChecked ? (
        <Image source={require('../../assets/Filled.png')} style={styles.checkboxIcon} />
      ) : (
        <Image source={require('../../assets/Empty.png')} style={styles.checkboxIcon} />
      )}
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000',
  },
});

export default Checkbox;
