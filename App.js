import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home';
import { RegisterLoginData } from './src/screens/RegisterLoginData';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppRoutes />
      </NavigationContainer>
  );
}

