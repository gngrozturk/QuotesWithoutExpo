import {React, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../utilities/Colors';
import Spacing from '../utilities/Spacing';
import Fonts from '../utilities/Fonts';

const SelectionPage = ({navigation}) => {
  const [tags, setTags] = useState([]);

  async function getTags() {
    fetch('https://api.quotable.io/tags')
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json();
        }
      })
      .then(data => setTags(data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tags}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HomePage', {tagName: item.name})
                }>
                <Text style={styles.item}>
                  {item.name.toUpperCase()} - {item.quoteCount}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  list: {
    margin: Spacing.medium,
    padding: Spacing.medium,
  },
  item: {
    padding: Spacing.medium,
    marginTop: Spacing.small,
    fontSize: Fonts.medium,
    backgroundColor: Colors.DARK_BLUE,
    color: Colors.TEXT_LIGHT,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default SelectionPage;
