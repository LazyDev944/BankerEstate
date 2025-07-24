import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';

const OnboardingConsentScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleAccept = () => {
    navigation.navigate('TermAndCondition');
  };

  return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="OnboardingConsent" />
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <Text style={styles.title}>Onboarding Consent</Text>
            <Text style={styles.subtitle}>
              Company Name has initiated a loan application that requires your approval to proceed.
            </Text>
            <Text style={styles.bodyText}>
              As an Applicant, your consent is needed to continue the application process. Please review the details and confirm your approval.
            </Text>

            <Text style={styles.sectionTitle}>Relationship Officer Details</Text>
            <View style={styles.roDetailsContainer}>
              <Text style={styles.roDetailText}>RO Name: Varun Kumar</Text>
              <Text style={styles.roDetailText}>Mobile Number: 8709567849</Text>
              <Text style={styles.roDetailText}>Date: 27/09/2024</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={[styles.checkboxWrapper, isChecked && styles.checkboxWrapperChecked]}
                onPress={toggleCheckbox}
              >
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                  {isChecked && <Text style={styles.checkboxTick}>✔</Text>}
                </View>
                <Text style={styles.checkboxText}>
                  I, the Applicant, hereby provide my explicit consent for procuring my credit information from the bureaus registered under the Credit Information Companies (Regulation) Act 2005 during the onboarding process and on a continuous basis from time to time in line with applicable policies of the Company.
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <SecondaryButton title="Reject" borderColor={COLORS.red} textColor={COLORS.red}  onPress={() => { console.log("Rejected"); }} />
              <PrimaryButton title="Accept" backgroundColor={COLORS.green} onPress={handleAccept} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    alignItems: 'left',
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
    color: COLORS.black,
    marginBottom: 16,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 16,
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  roDetailsContainer: {
    backgroundColor: COLORS.lightGray,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  roDetailText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 4,
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 12,
    // backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxWrapperChecked: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    // padding: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  checkboxTick: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: 16,
    gap:10
  },
});

export default OnboardingConsentScreen;
