import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton, BackIcon} from '../../components';
import theme from '../../theme';
import {
  CommonText,
  LightText,
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  TextH5,
  TextH6,
  TextM1,
  TextM2,
  TextS1,
} from '../../helper/Common';

const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <BackIcon />
      <LightText>Login</LightText>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
