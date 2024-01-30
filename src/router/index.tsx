import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import appRoutes from './appRoutes';
import HomeScreen from '../screens/app/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={appRoutes.login}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        <Stack.Screen name={appRoutes.home} component={HomeScreen} />
        <Stack.Screen name={appRoutes.login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

type RootStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
  SignIn: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
