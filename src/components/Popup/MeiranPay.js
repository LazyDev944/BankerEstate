import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../Button/PrimaryButton';
import { COLORS } from '../../constants/colors';

const MeiranPay = ({ visible, onClose, onPay }) => {
  const [cardNumber, setCardNumber] = useState('**** **** **** 1234');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [password, setPassword] = useState('');
  const [isEditingCard, setIsEditingCard] = useState(false);

  const handlePay = () => {
    onPay({ cardNumber, cvv, expiryDate, password });
    setCvv('');
    setExpiryDate('');
    setPassword('');
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          {/* Top Section */}
          <View style={styles.topSection}>
            {/* <Image source={require('../../../assets/logo.png')} style={styles.logo} /> */}
            <Text style={styles.title}>
              <Text style={styles.boldText}>Meiran</Text> Pay
            </Text>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <Text style={styles.closeIconText}>X</Text>
            </TouchableOpacity>
          </View>

          {/* Center Section */}
          <View style={styles.centerSection}>
          <Text style={styles.timer}>10:03</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Card Number</Text>
              <View style={styles.cardRow}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={cardNumber}
                  editable={isEditingCard}
                  onChangeText={setCardNumber}
                />
                <TouchableOpacity onPress={() => setIsEditingCard(!isEditingCard)}>
                  <Text style={styles.editText}>{isEditingCard ? 'Save' : 'Edit'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CVV Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter CVV"
                keyboardType="numeric"
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                keyboardType="numeric"
                value={expiryDate}
                onChangeText={setExpiryDate}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <PrimaryButton title="Pay Now" backgroundColor='blue' onPress={handlePay} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray,
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  timer: {
    color: COLORS.darkGray,
    fontSize: 16,
    textAlign: 'right',
  },
  centerSection: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    marginLeft: 10,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  bottomSection: {
    padding: 20,
  },
  closeIcon: {
    padding: 5,
  },
  closeIconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MeiranPay;
