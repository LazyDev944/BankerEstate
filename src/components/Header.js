import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants/colors';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.leftSection}>
      <Image 
        source={require('../assets/group.jpg')}
        style={styles.logoImage} 
      />
      <Text style={styles.title}>ScoreMe</Text>
    </View>
    <Image 
      source={require('../assets/user-icon.png')}
      style={styles.profileImage} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: COLORS.black,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 8,
  },
  logoImage: {
    width: 25,
    height: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
