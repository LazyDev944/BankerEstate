import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Header from '../../components/Header';
import BusinessDetails from './steps/BusinessDetails';
import CoApplicant from './steps/CoApplicant';
import CICReport from './steps/CICReport';
import FinancialDetails from './steps/FinancialDetails';
import LoanDetails from './steps/LoanDetails';

const JourneyScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Business Details', 'Co-Applicant', 'CIC Report', 'Financial Details', 'Loan Details'];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <BusinessDetails onCancel={() => setCurrentStep(0)} onContinue={handleNextStep} />;
      case 1:
        return <CoApplicant onCancel={() => setCurrentStep(0)} onContinue={handleNextStep} />;
      case 2:
        return <CICReport onCancel={() => setCurrentStep(0)} onContinue={handleNextStep} />;
      case 3:
        return <FinancialDetails onCancel={() => setCurrentStep(0)} onContinue={handleNextStep} />;
      case 4:
        return <LoanDetails onCancel={() => setCurrentStep(0)} onContinue={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Journey" />
      <View style={styles.referenceContainer}>
        <Text style={styles.referenceLabel}>Application Reference Number</Text>
        <Text style={styles.referenceValue}>DFW8362920P</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.stepText}>{steps[currentStep]}</Text>
        <View style={styles.checkpointsContainer}>
          <View style={styles.lineContainer}>
            <View
              style={[
                styles.line,
                { backgroundColor: currentStep > 0 ? '#28A745' : '#D3D3D3' },
                { width: `${(currentStep / (steps.length - 1)) * 100}%` },
              ]}
            />
          </View>
          {steps.map((step, index) => (
            <View key={index} style={styles.checkpointWrapper}>
              <View
                style={[
                  styles.checkpoint,
                  {
                    backgroundColor: index < currentStep ? '#28A745' : index === currentStep ? '#EEA815' : '#D3D3D3',
                  },
                ]}
              >
                <Text
                  onPress={() => setCurrentStep(index)} // Added onPress handler
                  style={index < currentStep ? styles.tick : null}
                >
                  {index < currentStep ? '✔' : index + 1}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      {renderStepComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 70,
    backgroundColor: '#FFFFFF',
    // borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  checkpointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 64,
  },
  lineContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#D3D3D3',
    zIndex: -1,
  },
  line: {
    height: 2,
    position: 'absolute',
    left: 0,
    backgroundColor: '#EEA815',
  },
  checkpointWrapper: {
    alignItems: 'center',
  },
  checkpoint: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 16,
    backgroundColor: '#EEA815',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  referenceContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 2,
    padding: 10,
  },
  referenceLabel: {
    color: 'grey',
  },
  referenceValue: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default JourneyScreen;
