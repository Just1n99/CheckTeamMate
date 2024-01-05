import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from "react-native";
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/Main';
import InitialPage from './screens/InitialPage';
import SignInPage from './screens/SignInPage';
import AddScreen from './screens/main/Add'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, onAuthStateChanged, getReactNativePersistence} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { user } from './redux/reducers/user';
const store = configureStore( {
  reducer: {
    userState: user,
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBdd7tif_T8NBTp35w0EqGIfNhcswnuXc4",
  authDomain: "checkteammate-auth.firebaseapp.com",
  projectId: "checkteammate-auth",
  storageBucket: "checkteammate-auth.appspot.com",
  messagingSenderId: "585968325577",
  appId: "1:585968325577:web:947b381805205dbe7e8e18",
  measurementId: "G-K3EB4KJD8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);
const storage = getStorage(app);

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded) {
      return(
        <View style= {{flex: 1, justifyContent: "center"}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    if(!loggedIn) {
      return (
          <NavigationContainer>
          <Stack.Navigator initialRouteName="InitialPage">
            <Stack.Screen 
            name="InitialPage" component={InitialPage} options={{headerShown: false}} />
            <Stack.Screen name="SignInPage" component={SignInPage} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="InitialPage">
              <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
              <Stack.Screen name="Add" component={AddScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App