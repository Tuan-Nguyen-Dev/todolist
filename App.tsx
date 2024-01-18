import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilies} from './src/constants/fontFamililes';

const App = () => {
  return (
    <View>
      <Text style={{fontFamily: fontFamilies.bold}}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
