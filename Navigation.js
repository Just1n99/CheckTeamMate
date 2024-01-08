import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialPage from './screens/InitialPage';
import SignInPage from './screens/SignInPage';
import TeamScreen from './screens/TeamScreen';
import ClassAddPage from './screens/ClassAddPage';


const Stack = createStackNavigator();

const Navigation = ({ promptAsync }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="InitialPage">
        <Stack.Screen name="InitialPage" component={InitialPage} ></Stack.Screen>
        <Stack.Screen name="SignInPage">
          {(props) => <SignInPage {...props} promptAsync={promptAsync} />}
        </Stack.Screen>
        <Stack.Screen name="TeamScreen" component={TeamScreen} ></Stack.Screen>
        <Stack.Screen name="ClassAddPage" component={ClassAddPage} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;