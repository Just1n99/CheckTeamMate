import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './screens/InitialPage';
import SignInPage from './screens/SignInPage';
import LoadingScreen from './screens/LoadingScreen';
import TeamScreen from './screens/TeamScreen';
import ClassAddPage from './screens/ClassAddPage';
//<Stack.Screen name="LoadingScreen" component={LoadingScreen} ></Stack.Screen>
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialPage" component={InitialPage} ></Stack.Screen>
        <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
        <Stack.Screen name="TeamScreen" component={TeamScreen} ></Stack.Screen>
        <Stack.Screen name="ClassAddPage" component={ClassAddPage} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}