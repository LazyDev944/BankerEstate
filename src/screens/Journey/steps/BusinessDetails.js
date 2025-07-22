import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';

const BusinessDetails = ({ onCancel, onContinue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Details</Text>
      <View style={styles.buttonContainer}>
            <PrimaryButton
              title={"Continue"} 
              onPress={onContinue} 
            />
            <SecondaryButton title="Cancel" onPress={onCancel} />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    gap:10
  },
  button: {
    backgroundColor: '#EEA815',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default BusinessDetails;
