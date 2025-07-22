import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const OnBoardCinCard = () => {
  const navigation = useNavigation();
  const [cinNumber, setCinNumber] = useState('');

  const handleContinue = () => {
    navigation.navigate('Journey');
  };

  return (
    <View style={styles.container}>
      <Header title="Journey" />
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>Customer Onboarding Details</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>
          Please enter your CIN Number to verify your details
          </Text>
          <Input
            headerText="Corporate Identification Number (CIN)"
            placeholder="Enter CIN Number"
            value={cinNumber}
            onChangeText={setCinNumber}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              title={"Continue"} 
              onPress={handleContinue} 
            />
            <SecondaryButton title="Cancel" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  content: {
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
});

export default OnBoardCinCard;
