import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/checkbox';

const CoApplicant = ({ onCancel, onContinue }) => {
  const [applicantIncomeAmount, setApplicantIncomeAmount] = React.useState('');
  const [applicantUploadBankStatement, setApplicantUploadBankStatement] = React.useState(true);

  const [coApplicants, setCoApplicants] = React.useState([
    { id: 1, pan: '', name: '', mobileNumber: '' },
  ]);

  const handleAddCoApplicant = () => {
    setCoApplicants((prev) => [
      ...prev,
      { id: prev.length + 1, pan: '', name: '', mobileNumber: '' },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setCoApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id ? { ...applicant, [field]: value } : applicant
      )
    );
  };

  const handleSendConsentLink = (id) => {
    const applicant = coApplicants.find((applicant) => applicant.id === id);
    console.log('Sending consent link for:', applicant);
    // Add logic to send consent link
  };

  const handleDeleteCoApplicant = (id) => {
    setCoApplicants((prev) => prev.filter((applicant) => applicant.id !== id));
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.checkboxWrapper}>
          <View>
            <Text>Do you want to add Co- Applicant</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              label="Yes"
              isChecked={applicantUploadBankStatement}
              onPress={() => setApplicantUploadBankStatement(true)}
            />
            <Checkbox
              label="No"
              isChecked={!applicantUploadBankStatement}
              onPress={() => setApplicantUploadBankStatement(!applicantUploadBankStatement)}
            />
          </View>
        </View>
        {coApplicants.map((applicant) => (
          <View key={applicant.id} style={styles.card}>
            <View style={styles.cardHeaderContainer}>
              <Text style={styles.cardHeader}>Co-Applicant {applicant.id}</Text>
              <TouchableOpacity onPress={() => handleDeleteCoApplicant(applicant.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContent}>
              <Text style={{ fontWeight: 'bold' }}>Income Details</Text>
              <Input
                headerText="PAN"
                placeholder="Enter PAN"
                value={applicant.pan}
                onChangeText={(value) => handleInputChange(applicant.id, 'pan', value)}
              />
              <Input
                headerText="Name"
                placeholder="Enter Name"
                value={applicant.name}
                onChangeText={(value) => handleInputChange(applicant.id, 'name', value)}
              />
              <Input
                headerText="Mobile Number"
                placeholder="Enter Mobile Number"
                value={applicant.mobileNumber}
                onChangeText={(value) => handleInputChange(applicant.id, 'mobileNumber', value)}
              />
              <PrimaryButton
                title="Send Consent Link"
                onPress={() => handleSendConsentLink(applicant.id)}
              />
            </View>
          </View>
        ))}
        <View style={{width: '100%', marginBottom: 16}}>
        <SecondaryButton title="+ Add Co-Applicant" borderType={'dashed'} onPress={handleAddCoApplicant} />
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
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    marginRight: 15,
    textDecorationLine: 'underline',
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
    backgroundColor:'#fff',
    flex:1,
    width: '100%',
    marginBottom: 16,
  },
});

export default CoApplicant;
