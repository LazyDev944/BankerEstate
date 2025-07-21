import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import OnBoardCustomer from '../../components/Popup/OnBoardCustomer';

const Dashboard = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    const OnboardNewCustomer = () => {
        setVisible(true);
        console.log("Onboarding new customer...");
    };

    const onSendConsent = (data) => {
        console.log("Consent data sent:", data);
        setVisible(false);
        // Here you would typically send the data to your backend or API
        navigation.navigate('OnboardingConsent');

    };
    return (
  <ScrollView style={styles.container}>
  <OnBoardCustomer visible={visible} onClose={()=>setVisible(false)} onSendConsent={onSendConsent} />
    <Text style={styles.header}>Welcome to your Dashboard</Text>
    <PrimaryButton title="Onboard New Customer" onPress={OnboardNewCustomer} color="#007BFF" />
    <View style={styles.cardsContainer}>
      {Array.from({ length: 8 }).map((_, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardHeader}>TOTAL APPLICATION</Text>
          <Text style={styles.cardValue}>48</Text>
          <Text style={styles.cardGreenText}>Up by 20%</Text>
          <Text style={styles.cardContent}>vs previous year</Text>
        </View>
      ))}
    </View>
  </ScrollView>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardsContainer: {
    marginTop: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  cardGreenText: {
    fontSize: 14,
    color: 'green',
    marginBottom: 4,
  },
  cardContent: {
    fontSize: 12,
    color: '#555',
  },
});

export default Dashboard;
