import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Footer = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DARK_BLUE,
    paddingVertical: Spacing.small,
  },
  text: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.normal,
    textAlign: 'center',
  },
});
export default Footer;
