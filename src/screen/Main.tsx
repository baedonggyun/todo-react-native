import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Header} from '../components/Header/Header';
import {Styles} from './Styles';

export const Main = () => {
  return (
    <SafeAreaView style={Styles.main}>
      <Header />
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};
