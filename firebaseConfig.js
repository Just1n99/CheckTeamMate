import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBdd7tif_T8NBTp35w0EqGIfNhcswnuXc4",
    authDomain: "checkteammate-auth.firebaseapp.com",
    projectId: "checkteammate-auth",
    storageBucket: "checkteammate-auth.appspot.com",
    messagingSenderId: "585968325577",
    appId: "1:585968325577:web:947b381805205dbe7e8e18",
    measurementId: "G-K3EB4KJD8P"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

// IOS: 585968325577-g4f1p2528ek1ogvc1nagde5ejsvthd9n.apps.googleusercontent.com
// Android: 585968325577-p5a1gs2a6vsi0fp6h9dim8lpk4m2jlp8.apps.googleusercontent.com