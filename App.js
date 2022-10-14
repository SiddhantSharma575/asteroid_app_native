

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Asteroid from './screens/Asteroid';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerStyle: {
            backgroundColor: "#4400aa",
          },
          headerTitleStyle: {
            color: "#ffffff"
          }
        }} />
        <Stack.Screen name='Asteroid' component={Asteroid} options={{
          headerStyle: {
            backgroundColor: "#4400aa",
          },
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerTintColor: "#ffffff"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
