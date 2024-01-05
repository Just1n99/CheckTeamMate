import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './screens/InitialPage';
import SignInPage from './screens/SignInPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialPage" component={InitialPage} ></Stack.Screen>
        <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}