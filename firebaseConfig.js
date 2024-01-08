import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDUY-5cWzeZzSuMSlPCAwdOlUO0Q-1xk4",
  authDomain: "tutorial-signin-a5e1b.firebaseapp.com",
  projectId: "tutorial-signin-a5e1b",
  storageBucket: "tutorial-signin-a5e1b.appspot.com",
  messagingSenderId: "771108990528",
  appId: "1:771108990528:web:ca6f11d88c4267fe59b9a5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ios: 275749154152-h8o0m1i3e3lvbihh13n9qg5otfp0g7n2.apps.googleusercontent.com
// android: 275749154152-rtfsem9p0hn2t3ei5t5805shogubkdr7.apps.googleusercontent.com
