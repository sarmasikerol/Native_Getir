import {View, Text, StyleSheet, Linking} from 'react-native';
import React from 'react';
import RootNavigators from '../Getir_Clone/src/navigators/RootNavigators';
import 'react-native-gesture-handler';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigators />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:'15%',
  },
});
