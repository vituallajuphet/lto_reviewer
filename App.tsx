import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/Routes';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store'
import { Provider as StoreProvider } from 'react-redux'

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.safeStyle}>
          <Routes />
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  safeStyle: {
    height: '100%',
  },
});

export default App;
