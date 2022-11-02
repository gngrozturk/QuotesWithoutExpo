import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DARK_BLUE,
    borderRadius: Spacing.large,
    width: 320,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: Colors.LIGHT_BLUE,
  },
  title: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.xlarge,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Title;
