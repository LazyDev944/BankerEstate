import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import Input from '../../../components/Input/Input';

const LoanDetails = ({ onCancel, onContinue }) => {
  const [loanAmount, setLoanAmount] = React.useState('');
  const [securities, setSecurities] = React.useState([{ id: Date.now() }]);

  const addSecurity = () => {
    setSecurities([...securities, { id: Date.now() }]);
  };

  const removeSecurity = (id) => {
    setSecurities(securities.filter((security) => security.id !== id));
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <Text style={styles.title}>Loan Details</Text> */}
        {/* New Cards Section */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Loan Offer</Text>
          <View style={styles.cardContent}>
            <Input
              headerText="Loan Amount Required"
              placeholder="Enter Loan Amount"
              value={loanAmount}
              onChangeText={setLoanAmount}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Collateral</Text>
          <View style={styles.cardContent}>
            {securities.map((security) => (
              <View key={security.id} style={styles.securityCard}>
                <Input
                  headerText="Type of Security"
                  placeholder="Enter type of security"
                />
                <Input
                  headerText="Security Description"
                  placeholder="Enter security description"
                />
                <Input
                  headerText="Address"
                  placeholder="Enter address"
                />
                <Input
                  headerText="Estimated Value (INR)"
                  placeholder="Enter estimated value"
                />
                <Input
                  headerText="Type of Ownership"
                  placeholder="Enter type of ownership"
                />
                <View style={styles.securityActions}>
                  <View style={styles.flexHalf}>
                    <PrimaryButton
                      title="Submit"
                      onPress={() => console.log('Submit security', security.id)}
                    />
                  </View>
                  <View style={styles.flexHalf}>
                    <SecondaryButton
                      title="Remove"
                      onPress={() => removeSecurity(security.id)}
                    />
                  </View>
                </View>
              </View>
            ))}
            <SecondaryButton title="+ Add Security" onPress={addSecurity} />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Remarks</Text>
          <View style={styles.cardContent}>
            <Input
              headerText="Note"
              placeholder="Enter"
              value={loanAmount}
              onChangeText={setLoanAmount}
            />
          </View>
        </View>
        {/* End of New Cards Section */}
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
    paddingBottom: 80, // Add padding to avoid overlap with buttons
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF', // Optional: Add background color
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
});

export default LoanDetails;
