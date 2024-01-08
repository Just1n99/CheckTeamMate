import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialPage from "./screens/InitialPage";
import SignInPage from "./screens/SignInPage";
import LoadingScreen from "./screens/LoadingScreen";
import TeamScreen from "./screens/TeamScreen";
import ClassAddPage from "./screens/ClassAddPage";
//구글 로그인 관련 import
import SigninScreen from "./screens/SignInScreen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBroswer from "expo-web-browser";
import * as React from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorabe from "@react-native-async-storage/async-storage";
WebBroswer.maybeCompleteAuthSession();

//<Stack.Screen name="LoadingScreen" component={LoadingScreen} ></Stack.Screen>
const Stack = createNativeStackNavigator();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "275749154152-h8o0m1i3e3lvbihh13n9qg5otfp0g7n2.apps.googleusercontent.com",
    androidClientId:
      "275749154152-rtfsem9p0hn2t3ei5t5805shogubkdr7.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "sucess") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
    0;
  }, [response]);
  return <SigninScreen promptAsync={promptAsync} />;
  /*<return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialPage" component={InitialPage} ></Stack.Screen>
        <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
        <Stack.Screen name="TeamScreen" component={TeamScreen} ></Stack.Screen>
        <Stack.Screen name="ClassAddPage" component={ClassAddPage} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );*/
}
