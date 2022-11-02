import {React, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Quote from '../components/Quote';
import Button from '../components/Button';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Colors from '../utilities/Colors';

const HomePage = ({route}) => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const {tagName} = route.params;

  const refreshQuote = () => {
    setRefresh(true);
    updateQuote().then(() => setRefresh(false));
  };

  async function updateQuote() {
    try {
      const response = await fetch(
        `https://api.quotable.io/random?tags=${tagName}`,
      );
      const {statusCode, statusMessage, ...data} = await response.json();
      if (!response.ok) {
        throw new Error(`${statusCode} ${statusMessage}`);
      }
      setData(data);
    } catch (error) {
      console.error(error);
      setData({content: 'Opps... Something went wrong'});
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  if (!data) {
    return null;
  } else {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => refreshQuote()}
          />
        }>
        <View style={styles.panel}>
          <Title title="Quote of Day" />
          <Button title="Refresh Quote" onPress={updateQuote} />
        </View>
        <View style={styles.quote}>
          <Quote content={data.content} author={data.author} />
          <Footer text="Thank you for using Quote of Day app." />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 5,
    width: '100%',
    flex: 1,
  },
  container: {
    backgroundColor: Colors.BG_COLOR,
  },
  panel: {
    justifyContent: 'space-around',
    flex: 1,
  },
  quote: {
    flex: 2,
    justifyContent: 'space-between',
  },
});

export default HomePage;
