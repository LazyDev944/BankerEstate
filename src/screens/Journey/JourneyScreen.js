import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import OnBoardPanCard from '../Form/OnBoardPanCard';
import UdyamFetchedDetailCard from '../Form/UdyamFetchedDetailCard';

const JourneyScreen = () => {
  const [fetchedUdyamDetails, setFetchedUdyamDetails] = React.useState(false);
  return (
    <View style={styles.container}>
      <Header title="Journey" />
      <OnBoardPanCard onContinue={()=>setFetchedUdyamDetails(true)}/>
      {fetchedUdyamDetails && <UdyamFetchedDetailCard />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JourneyScreen;
