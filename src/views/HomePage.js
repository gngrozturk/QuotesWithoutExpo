import {React, useState, useEffect} from 'react';
import {StyleSheet, View, RefreshControl, ScrollView} from 'react-native';
import Quote from '../components/Quote';
import Button from '../components/Button';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshQuote = () => {
    setRefresh(true);
    updateQuote().then(() => setRefresh(false));
  };

  async function updateQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
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
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => refreshQuote()}
          />
        }>
        <View style={styles.quote}>
          <Quote content={data.content} author={data.author} />
        </View>
        <View style={styles.btn}>
          <Button title="Change The Quote" onPress={updateQuote} />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  quote: {
    height: '75%',
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    height: '25%',
  },
});

export default HomePage;
