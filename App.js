/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomePage from './src/views/HomePage';
import Colors from './src/utilities/Colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
