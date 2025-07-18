import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input/Input';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../../components/Button/PrimaryButton';

const LoginScreen = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Logging in...");
    // Add your login logic here
    navigation.navigate('OnboardingConsent');
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Header title="Login" />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.formContainer}>
              <Text style={styles.title}>Relationship Officer Log In</Text>
              <Text style={styles.subtitle}>Kindly provide Log in Id and Password to Log In</Text>
              <Input
                headerText="Login ID"
                placeholder="Enter Login ID"
                value={loginId}
                onChangeText={setLoginId}
              />
              <Input
                headerText="Password"
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
              <PrimaryButton title="Log In" onPress={handleLogin} />
            </View>
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
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
