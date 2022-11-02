import {React} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Quote = ({content, author}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>"{content}"</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: Spacing.large,
    padding: Spacing.xlarge,
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: 40,
    borderWidth: 5,
    borderStyle: 'dotted',
    borderColor: Colors.DARK_BLUE,
  },
  content: {
    fontSize: Fonts.medium,
    margin: Spacing.small,
    padding: Spacing.small,
    color: Colors.TEXT_DARK,
    fontStyle: 'italic',
  },
  author: {
    fontSize: Fonts.normal,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default Quote;
