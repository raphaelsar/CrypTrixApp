import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Canal from './src/views/Canal';
import mock_channel from './src/mocks/canal';
const App = () => (
    <SafeAreaView style={styles.container}>
      <Canal {...mock_channel} />
    </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: "100%"
  }
});
export default App;