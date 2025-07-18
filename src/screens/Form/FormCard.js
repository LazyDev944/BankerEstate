import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';

const FormCard = ({ fields, onSubmit }) => {
  return (
    <View style={styles.card}>
      {fields.map((field, index) => (
        <Input
          key={index}
          placeholder={field.placeholder}
          value={field.value}
          onChangeText={field.onChangeText}
        />
      ))}
      <PrimaryButton title="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    margin: 16,
  },
});

export default FormCard;
