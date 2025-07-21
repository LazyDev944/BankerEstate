import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';

const OnBoardPanCard = ({ onContinue }) => {
  const [panNumber, setPanNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isRegisteredWithMSME, setIsRegisteredWithMSME] = useState(false);
  const [udyamNumber, setUdyamNumber] = useState('');

  const handleContinueWithoutMSME = () => {
    // Logic for continuing without MSME registration
    console.log("Continuing without MSME registration");
  };

  const handleContinue = () => {
    if (!showAdditionalFields) {
      setShowAdditionalFields(true);
    } else {
      if (!isRegisteredWithMSME) {
        handleContinueWithoutMSME();
      } else {
        onContinue({ panNumber, mobileNumber, isRegisteredWithMSME, udyamNumber });
      }
      setPanNumber('');
      setMobileNumber('');
      setIsRegisteredWithMSME(true);
      setUdyamNumber('');
      setShowAdditionalFields(false);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>Customer Onboarding Details</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Please enter your Business PAN Number to verify your details
          </Text>
          <Input
            headerText="PAN"
            placeholder="Enter PAN Number"
            value={panNumber}
            onChangeText={setPanNumber}
            editable={!showAdditionalFields}
          />
          {showAdditionalFields && (
            <>
              <Text style={styles.boldText}>Are you Registered with MSME?</Text>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => setIsRegisteredWithMSME(true)}
                >
                  {isRegisteredWithMSME === true ? <Image
                    source={require('../../assets/Filled.png')}
                    style={styles.checkboxIcon}
                  /> : <Image
                  source={require('../../assets/Empty.png')}
                  style={styles.checkboxIcon}
                />}
                  <Text style={styles.checkboxLabel}>Yes, I am Registered</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => setIsRegisteredWithMSME(false)}
                >
                  {isRegisteredWithMSME === false ? <Image
                    source={require('../../assets/Filled.png')}
                    style={styles.checkboxIcon}
                  /> : <Image
                  source={require('../../assets/Empty.png')}
                  style={styles.checkboxIcon}
                />}
                  <Text style={styles.checkboxLabel}>No, I am not</Text>
                </TouchableOpacity>
              </View>
             {isRegisteredWithMSME ? <Input
                headerText="Udyam Registration Number"
                placeholder="Enter Udyam Registration Number"
                value={udyamNumber}
                onChangeText={setUdyamNumber}
              /> : <View style={styles.notRegisteredContainer}>
                <View style={styles.notRegisteredHeader}>
                  <Image source={require('../../assets/Validation.png')} style={styles.checkboxIcon} />
                <Text>Not registered with MSME yet?</Text>
                </View>
                <Text style={styles.notRegisteredDescription}>
                Registering with MSME gives your business access to various government schemes and benefits.
                </Text>
                <Text style={styles.registerLink}>Click here to register on Udyam Portal</Text>
                </View>}
            </>
          )}
          <View style={styles.buttonContainer}>
            <PrimaryButton 
              title={isRegisteredWithMSME ? "Continue" : "Continue without MSME"} 
              onPress={handleContinue} 
            />
            <SecondaryButton title="Cancel" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 20,
    width: '100%',
  },
  closeIcon: {
    padding: 5,
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
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer:{
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  closeIconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  notRegisteredContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notRegisteredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  notRegisteredDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  registerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default OnBoardPanCard;
