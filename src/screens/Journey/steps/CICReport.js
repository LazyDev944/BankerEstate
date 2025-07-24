import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';

const CICReport = ({ onCancel, onContinue }) => {
  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Applicant Report</Text>
          <View style={styles.cardContent}>
            <Text style={styles.scoringTitle}>Scoring</Text>
            <View style={styles.infoCard}>
              <Text>Score: <Text style={styles.infoValue}>725</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>CMR Score: <Text style={styles.infoValue}>CMR-2</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>DPD Checker: <Text style={styles.infoValue}>N</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>EMI Bounce Check: <Text style={styles.infoValue}>N</Text></Text>
            </View>
            <Text style={styles.scoringTitle}>Existing Exposure</Text>
            <View style={styles.exposureCard}>
              <View style={styles.exposureHeader}>
                <Text style={styles.exposureHeaderTextSmall}>No.</Text>
                <Text style={styles.exposureHeaderText}>Type of Loan</Text>
                <Text style={styles.exposureHeaderText}>EMI</Text>
                <Text style={styles.exposureHeaderText}>Outstanding Amount</Text>
              </View>
              <View style={styles.exposureRow}>
                <Text style={styles.exposureCellSmall}>1</Text>
                <Text style={styles.exposureCell}>Home Loan</Text>
                <Text style={styles.exposureCell}>₹15000</Text>
                <Text style={styles.exposureCell}>₹1200000</Text>
              </View>
              <View style={styles.exposureRow}>
                <Text style={styles.exposureCellSmall}>2</Text>
                <Text style={styles.exposureCell}>Overdraft Facility</Text>
                <Text style={styles.exposureCell}>₹9000</Text>
                <Text style={styles.exposureCell}>₹900000</Text>
              </View>
              <View style={styles.exposureRow}>
                <Text style={styles.exposureCellSmall}>3</Text>
                <Text style={styles.exposureCell}>Auto Loan</Text>
                <Text style={styles.exposureCell}>₹6500</Text>
                <Text style={styles.exposureCell}>₹600000</Text>
              </View>
              <Text style={styles.totalLiability}>
              Total Liability: <Text style={styles.infoValue}>₹27,00,000</Text>
            </Text>
            </View>
           
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Co-Applicant Report</Text>
          <View style={styles.cardContent}>
            <Text style={styles.scoringTitle}>Scoring</Text>
            <View style={styles.infoCard}>
              <Text>Score: <Text style={styles.infoValue}>710</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>CMR Score: <Text style={styles.infoValue}>CMR-3</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>DPD Checker: <Text style={styles.infoValue}>N</Text></Text>
            </View>
            <View style={styles.infoCard}>
              <Text>EMI Bounce Check: <Text style={styles.infoValue}>Y</Text></Text>
            </View>
            <Text style={styles.scoringTitle}>Existing Exposure</Text>
            <View style={styles.exposureCard}>
              <View style={styles.exposureHeader}>
                <Text style={styles.exposureHeaderTextSmall}>No.</Text>
                <Text style={styles.exposureHeaderText}>Type of Loan</Text>
                <Text style={styles.exposureHeaderText}>EMI</Text>
                <Text style={styles.exposureHeaderText}>Outstanding Amount</Text>
              </View>
              <View style={styles.exposureRow}>
                <Text style={styles.exposureCellSmall}>1</Text>
                <Text style={styles.exposureCell}>Personal Loan</Text>
                <Text style={styles.exposureCell}>₹10000</Text>
                <Text style={styles.exposureCell}>₹500000</Text>
              </View>
              <View style={styles.exposureRow}>
                <Text style={styles.exposureCellSmall}>2</Text>
                <Text style={styles.exposureCell}>Credit Card</Text>
                <Text style={styles.exposureCell}>₹5000</Text>
                <Text style={styles.exposureCell}>₹200000</Text>
              </View>
              <Text style={styles.totalLiability}>
                Total Liability: <Text style={styles.infoValue}>₹7,00,000</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.flexHalf}>
          <PrimaryButton title="Continue" onPress={onContinue} />
        </View>
        <View style={styles.flexHalf}>
          <SecondaryButton title="Cancel" onPress={onCancel} />
        </View>
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
  scoringTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoCard: {
    backgroundColor: '#E0E0E0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  infoValue: {
    fontWeight: 'bold',
  },
  exposureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  exposureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#F0F0F0',
  },
  exposureHeaderText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  exposureHeaderTextSmall: {
    fontWeight: 'bold',
    flex: 0.5,
    textAlign: 'center',
  },
  exposureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  exposureCell: {
    flex: 1,
    textAlign: 'center',
  },
  exposureCellSmall: {
    flex: 0.5,
    textAlign: 'center',
  },
  totalLiability: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    backgroundColor:'#F8E5BE',
    textAlign: 'right',
    padding:4
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
  flexHalf: {
    flex: 0.5,
  },
});

export default CICReport;
