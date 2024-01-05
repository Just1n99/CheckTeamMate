import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import UniversityTextInput from "./Properties/UniversityTextInput";
import StudentNumberTextInput from "./Properties/StudentNumberTextInput";
import PhoneNumberTextInput from "./Properties/PhoneNumberTextInput";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

const WINDOW_WIDHT = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation()

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [signInBtnColor, setSignInBtnColor] = useState("#D9D9D9");

  const [universityDone, setUniversityDone] = useState(false);
  const [studentNumberDone, setStudentNumberDone] = useState(false);
  const [phoneNumberDone, setPhoneNumberDone] = useState(false);

  const handleUniversityDone = () => {
    setUniversityDone(true);
    if (studentNumberDone && phoneNumberDone) {
      setButtonDisabled(false)
      setSignInBtnColor("#050026");
    }
  };

  const handleStudentNumberDone = () => {
    setStudentNumberDone(true);
    if (universityDone && phoneNumberDone) {
      setButtonDisabled(false);
      setSignInBtnColor("#050026");
    }
  };

  const handlePhoneNumberDone = () => {
    setPhoneNumberDone(true);
    if (universityDone && studentNumberDone) {
      setButtonDisabled(false);
      setSignInBtnColor("#050026");
    }
  };

  const onSignUp = async () => {
    const auth = getAuth();
    const firestore = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = auth.currentUser;
      const usersCollection = collection(firestore, 'users');
      const userDoc = doc(usersCollection, user.uid); 
      setDoc(userDoc, {
        email
      })
      console.log(result)
    })
    .catch((error) => {
        Alert.alert("Sign Up Error", "Email already in use");
    })
};

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"}></StatusBar>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("InitialPage")}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainter}>
        <Image style={styles.logoImage} source={require("./logo.png")}></Image>
      </View>
      <View style={styles.inputContainer}>
        <UniversityTextInput onDone={handleUniversityDone} />
        <StudentNumberTextInput onDone = {handleStudentNumberDone}/>
        <PhoneNumberTextInput onDone={handlePhoneNumberDone} />
      </View>
      <View>
      <TextInput 
            autoCapitalize="none"
            placeholder="email"
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
            autoCapitalize="none"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
      </View>
      <View style={styles.BtnContainter}>
        <TouchableOpacity disabled={buttonDisabled}>
          <View style={{...styles.logInBtn, backgroundColor: signInBtnColor}}>
            <Text style={styles.logInText} onPress={onSignUp}>가입하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  backBtn: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  logoContainter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 107,
    width: 115,
  },
  BtnContainter: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    marginBottom: "10%",
  },
  logInBtn: {
    borderRadius: 9,
    alignItems: "center",
    paddingVertical: "6%",
    marginBottom: "3%",
  },
  logInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
  inputContainer: {
    flex:2.5,
    justifyContent: "flex-start",
  },
  universityInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1.5,
    padding: 10,
  },
  studentNumberInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1.5,
    padding: 10,
  },
  phoneNumberInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1.5,
    padding: 10,
  },
});