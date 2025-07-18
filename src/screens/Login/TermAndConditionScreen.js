import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';

const TermAndConditionScreen = () => {
  const navigation = useNavigation();

  const handleAccept = () => {
    console.log("Accepted");
    navigation.navigate('AadharVerify');
  };

  return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="OnboardingConsent" />
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Text style={styles.subtitle}>
            Please read the document carefully before paying the onboarding Fees
            </Text>
            <View style={styles.roDetailsContainer}>
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
  roDetailsContainer: {
    backgroundColor: COLORS.lightGray,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    minHeight: 300,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: 16,
    gap: 10,
  },
});

export default TermAndConditionScreen;
