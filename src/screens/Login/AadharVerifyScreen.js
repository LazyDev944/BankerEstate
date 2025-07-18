import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input/Input';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';

const AadharVerifyScreen = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleVerify = () => {
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Header title="AadharVerify" />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.formContainer}>
              <Text style={styles.title}>Aadhaar Verification</Text>
              <Text style={styles.subtitle}>Please enter your Aadhaar number</Text>
              <Input
                headerText="Aadhaar Number"
                placeholder="Enter Aadhaar Number"
                value={aadhaarNumber}
                onChangeText={setAadhaarNumber}
              />
              <Input
                headerText="One Time Password (OTP)"
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                secureTextEntry
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Resend OTP</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
              <SecondaryButton title="Reject" onPress={() => { console.log("Rejected"); }} />
              <PrimaryButton title="Accept" onPress={handleVerify} />
            </View>            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 16,
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: 16,
    gap:10
  },
});

export default AadharVerifyScreen;
