import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BTN_PRIMARY,
    borderRadius: 90,
    width: 290,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn: {
    width: '97%',
    height: 60,
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: Spacing.normal,
    borderWidth: 1.5,
    borderColor: Colors.TEXT_LIGHT,
  },
  title: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
