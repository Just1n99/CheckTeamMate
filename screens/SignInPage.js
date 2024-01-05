import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import UniversityTextInput from "./Properties/UniversityTextInput";
import StudentNumberTextInput from "./Properties/StudentNumberTextInput";
import PhoneNumberTextInput from "./Properties/PhoneNumberTextInput";

const WINDOW_WIDHT = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function SignInPage() {
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
      <View style={styles.BtnContainter}>
        <TouchableOpacity disabled={buttonDisabled}>
          <View style={{...styles.logInBtn, backgroundColor: signInBtnColor}}>
            <Text style={styles.logInText}>가입하기</Text>
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