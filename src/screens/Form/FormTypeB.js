import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import FormCard from './FormCard';

const FormTypeB = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', email);
  };

  return (
    <View>
      <Header title="Form B" />
      <FormCard
        fields={[{ placeholder: 'Email', value: email, onChangeText: setEmail }]}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

export default FormTypeB;
