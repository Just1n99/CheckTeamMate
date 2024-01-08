import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './screens/InitialPage';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from 'react';
import Navigation from './Navigation';
import SignInPage from './screens/SignInPage';
import TeamScreen from './screens/TeamScreen';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [loading, setLoad] = React.useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "585968325577-g4f1p2528ek1ogvc1nagde5ejsvthd9n.apps.googleusercontent.com",
    androidClientId: "585968325577-p5a1gs2a6vsi0fp6h9dim8lpk4m2jlp8.apps.googleusercontent.com",
  })
  // const checkLocalUser = async () => {
  //   try {
  //     setLoad(true);
  //     const userJSON = await AsyncStorage.getItem("@user");
  //     const userData = userJSON ? JSON.parse(userJSON) : null;
  //     console.log("local storage: ", userData);
  //     setUserInfo(userData);
  //   } catch(e) {
  //     alert.apply(e.message);
  //   } finally {
  //     setLoad(false);
  //   }
  // }

  React.useEffect(() => {
    if(response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])

  React.useEffect(() => {
    //checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if(user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user)); // log in if logged in before
      } else {
        console.log("User is not authenticated");
        setUserInfo(user);
      }
    })

    return () => unsub();
  }, []);
  
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  
  return userInfo ? <TeamScreen /> : <Navigation promptAsync={promptAsync} />;
}