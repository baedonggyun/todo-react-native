import React from 'react';
import {Image, View} from 'react-native';
import {Styles} from './Styles';

export function Header() {
  return (
    <View style={Styles.header}>
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
}
