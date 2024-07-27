import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8af',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
