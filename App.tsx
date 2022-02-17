import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/Routes';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeStyle}>
        <Routes />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeStyle: {
    height: '100%',
  },
});

export default App;
