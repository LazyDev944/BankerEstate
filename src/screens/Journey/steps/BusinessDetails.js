import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import Input from '../../../components/Input/Input';
import Checkbox from '../../../components/Checkbox/checkbox';

const BusinessDetails = ({ onCancel, onContinue }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [sisterConcerns, setSisterConcerns] = React.useState([
    {
      id: 1,
      name: "ABC Enterprises",
      pan: "ABFPR4589G",
      address: "123 Industrial Area, Sector 45, Faridabad, Haryana - 121003",
    },
  ]);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const handleAddSisterConcern = () => {
    const newId = sisterConcerns.length + 1;
    setSisterConcerns([
      ...sisterConcerns,
      {
        id: newId,
        name: "",
        pan: "",
        address: "",
      },
    ]);
  };

  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Promoter Details</Text>
          <View style={styles.cardContent}>
            <View style={styles.promoterCard}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>S.No:</Text>
                <Text style={styles.detailValue}>01</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name of Promoter:</Text>
                <Text style={styles.detailValue}>Ritik Chauhan</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date of Birth:</Text>
                <Text style={styles.detailValue}>30-05-1975</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Age:</Text>
                <Text style={styles.detailValue}>47</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Aadhaar Number:</Text>
                <Text style={styles.detailValue}>5933689667779</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>PAN:</Text>
                <Text style={styles.detailValue}>GUFWH5690F</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Address:</Text>
                <Text style={styles.detailValue}>
                  House No-A-1229, NEAR NEELAM GARMENTS, POILCE CHOWKI ROAD, DABUA COLONY, Faridabad, PO: Faridabad NIT, DIST: Faridabad, Haryana - 121001
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Action:</Text>
                <View style={styles.actionButton}>
                  <PrimaryButton title="Send Consent Link" />
                </View>
              </View>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                label="There is no other proprietor of the entity other than the details entered."
                onPress={handleCheckboxPress}
                isChecked={isChecked}
              />
            </View>
            <PrimaryButton title={"Submit"} onPress={() => {}} />
          </View>
        </View>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Sister Concern Details</Text>
            <View style={styles.cardContent}>
            {sisterConcerns.map((concern, index) => (
              <View style={styles.promoterCard}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>S.No:</Text>
                  <Text style={styles.detailValue}>{index + 1}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Name of Sister Concern:</Text>
                  <Text style={styles.detailValue}>{concern.name || "Enter Name"}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>PAN:</Text>
                  <Text style={styles.detailValue}>{concern.pan || "Enter PAN"}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Address:</Text>
                  <Text style={styles.detailValue}>{concern.address || "Enter Address"}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Action:</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSisterConcerns(sisterConcerns.filter((_, i) => i !== index));
                    }}
                  >
                    <Text style={{ color: 'red', textDecorationLine: 'underline' }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
             <View style={{ width: "100%", marginBottom: 16, paddingHorizontal: 10 }}>
          <SecondaryButton
            title="+ Add Sister Concern"
            borderType={"dashed"}
            onPress={handleAddSisterConcern}
          />
        </View>
              {sisterConcerns?.length > 0 && <View style={styles.checkboxContainer}>
                <Checkbox
                  label="The details of the sister concern are accurate and complete."
                  onPress={handleCheckboxPress}
                  isChecked={isChecked}
                />
              </View>}
              {sisterConcerns?.length > 0 && <PrimaryButton title={"Submit"} onPress={() => {}} />}
            </View>
          </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.flexHalf}>
          <PrimaryButton title={"Continue"} onPress={onContinue} />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkboxContainer: {
    width: '85%',
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
    marginBottom: 20,
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
  promoterCard: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
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
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    width: 150,
  },
  detailValue: {
    flex: 1,
  },
  actionButton: {
    marginTop: 16,
    alignItems: 'flex-start',
  },
});

export default BusinessDetails;
