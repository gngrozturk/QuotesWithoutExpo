import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 190,
    height: 65,
    backgroundColor: Colors.BTN_PRIMARY,
    borderRadius: Spacing.small,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: Spacing.normal,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2.8,
  },
  title: {
    color: Colors.TEXT_COLOR,
    fontSize: Fonts.medium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
