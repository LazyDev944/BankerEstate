import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/Button/PrimaryButton';
import SecondaryButton from '../../components/Button/SecondaryButton';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const UdyamFetchedDetailCard = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('OnboardCIN');
  };

  return (
    <View style={styles.container}>
      <Header title="Journey" />
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>Udhyam Fetched Details</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>
          We have fetched these details form your Udhyam please verify and continue
          </Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoHeader}>Fetched Udhyam Details</Text>
            <View style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Udyam Registration Number (URN):</Text>
                <Text style={styles.infoValue}>UDYAM-DL-08-0047283</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Entity Name:</Text>
                <Text style={styles.infoValue}>RK Enterprises</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Date of Incorporation:</Text>
                <Text style={styles.infoValue}>27/05/2016</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Type of Enterprise:</Text>
                <Text style={styles.infoValue}>MICRO</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Type of Organisation:</Text>
                <Text style={styles.infoValue}>Private Limited Company</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Major Activity:</Text>
                <Text style={styles.infoValue}>Services</Text>
              </View>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoHeader}>Fetched GST Details</Text>
            <View style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>GSTIN:</Text>
                <Text style={styles.infoValue}>09AAACH7409R1ZZ</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>State:</Text>
                <Text style={styles.infoValue}>Haryana</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Status:</Text>
                <Text style={styles.infoValue}>Active</Text>
              </View>
            </View>
          </View>

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
  infoContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'column', // Change to column to prevent text overflow
    marginBottom: 5,
  },
  infoTitle: {
    fontSize: 14,
    color: '#888', // Grey color for titles
  },
  infoValue: {
    fontSize: 16,
    color: '#000', // Black color for values
    // fontWeight: 'bold',
  },
});

export default UdyamFetchedDetailCard;
