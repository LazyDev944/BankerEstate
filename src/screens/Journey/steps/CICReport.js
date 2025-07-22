import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/checkbox';

const CICReport = ({ onCancel, onContinue }) => {
  const [applicantIncomeAmount, setApplicantIncomeAmount] = React.useState('');
  const [applicantUploadBankStatement, setApplicantUploadBankStatement] = React.useState(true);

  const [coApplicantIncomeAmount, setCoApplicantIncomeAmount] = React.useState('');
  const [coApplicantUploadBankStatement, setCoApplicantUploadBankStatement] = React.useState(true);

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <Text style={styles.title}>Loan Details</Text> */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Applicant Report</Text>
          <View style={styles.cardContent}>

          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Co-Applicant Report</Text>
          <View style={styles.cardContent}>
        
          
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.flexHalf}><PrimaryButton title={"Continue"} onPress={onContinue} /></View>
        <View style={styles.flexHalf}><SecondaryButton title="Cancel" onPress={onCancel} /></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    backgroundColor: '#F8E5BE',
    borderColor: '#F8E5BE',
    borderWidth: 1,
    marginBottom: 16,
    width: '100%',
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  cardContent: {
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
  },
  securityCard: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    backgroundColor: '#F9F9F9',
  },
  securityActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  flexHalf: {
    flex: 0.5,
  },
  uploadContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#F8E5BE',
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  uploadTitle: {
    fontWeight: 'bold',
  },
  uploadDescription: {
    textAlign: 'center',
    marginBottom: 10,
  },
  checkboxWrapper: {
    borderWidth: 1,
    borderColor: '#F8E5BE',
    padding: 8,
  },
});

export default CICReport;
