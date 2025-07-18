import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import FormCard from './FormCard';

const FormTypeA = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', name);
  };

  return (
    <View>
      <Header title="Form A" />
      <FormCard
        fields={[{ placeholder: 'Name', value: name, onChangeText: setName }]}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

export default FormTypeA;
