import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../components/Header';
import { COLORS } from '../../constants/colors';
import Dashboard from './Dashboard';
import Applications from './Applications';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'dashboard', title: 'Dashboard' },
    { key: 'applications', title: 'Applications' },
  ]);

  const renderScene = SceneMap({
    dashboard: Dashboard,
    applications: Applications,
  });

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: COLORS.black }}
            style={[
              styles.tabBar,
              Platform.OS === 'ios' && styles.tabBarIOS,
            ]}
            activeColor={COLORS.black}
            inactiveColor={COLORS.gray}
            labelStyle={{ color: COLORS.primary, fontSize: 16 }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: COLORS.white,
  },
  tabBarIOS: {
    paddingTop: 20,
  },
});

export default HomeScreen;
