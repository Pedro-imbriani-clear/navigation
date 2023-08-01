import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FontAwesome
        name='user'
        size={35}
        color='#54a300'
      />
      <FontAwesome
        name='home'
        size={35}
        color='#11118c'
      />
      <Feather
      name='gift'
      size={35}
      color='#7665ff'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
