import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home';
import { RegisterLoginData } from './src/screens/RegisterLoginData';

export default function App() {
  return (
    <SafeAreaView>

    <NavigationContainer>
      <StatusBar style="auto" />
      <RegisterLoginData />
    </NavigationContainer>
    </SafeAreaView>
  );
}

