import {React} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const Quote = ({content, author}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.author}>- {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: Spacing.normal,
    padding: Spacing.normal,
    borderTopEndRadius: Spacing.large,
    borderBottomStartRadius: Spacing.large,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2.8,
  },
  content: {
    fontSize: Fonts.large,
    marginVertical: Spacing.small,
    padding: Spacing.small,
    color: Colors.TEXT_COLOR,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  author: {
    margin: Spacing.medium,
    fontSize: Fonts.normal,
    textAlign: 'right',
  },
});

export default Quote;
