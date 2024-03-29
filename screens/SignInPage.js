//회원가입 화면
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import UniversityTextInput from "./Properties/SignInPage/UniversityTextInput";
import StudentNumberTextInput from "./Properties/SignInPage/StudentNumberTextInput";
import PhoneNumberTextInput from "./Properties/SignInPage/PhoneNumberTextInput";

export default function SignInPage() {
  const navigation = useNavigation()

  const [signInBtnColor, setSignInBtnColor] = useState("#D9D9D9");    //가입하기 버튼 색상 (초기값: 회색)
  const [buttonDisabled, setButtonDisabled] = useState(true);     //가입하기 버튼 비활성화/활성화 (초기값: 비활성화)

  const [universityValid, setUniversityValid] = useState(false);    //학교 이름 입력값이 valid한지 판별
  const [studentNumberValid, setStudentNumberValid] = useState(false);    //학번 판별
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);      //전화번호 판별

  //입력값 (대학이름, 학번, 전화번호)이 valid input인지 판별
  const handleUniversityValid = (valid) => {
    setUniversityValid(valid);
    if ((valid && studentNumberValid && phoneNumberValid)) {
      setButtonDisabled(false);
      setSignInBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setSignInBtnColor("#D9D9D9");
    }
  };

  const handleStudentNumberValid = (valid) => {
    setStudentNumberValid(valid);
    if ((valid && universityValid && phoneNumberValid)) {
      setButtonDisabled(false);
      setSignInBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setSignInBtnColor("#D9D9D9");
    }
  };

  const handlePhoneNumberValid = (valid) => {
    setPhoneNumberValid(valid);
    if ((valid && universityValid && studentNumberValid)) {
      //console.log("yeahh");
      setButtonDisabled(false);
      setSignInBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setSignInBtnColor("#D9D9D9");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style={"dark"}></StatusBar>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("InitialPage")}>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainter}>
          <Image style={styles.logoImage} source={require("/Users/dowon/Documents/CheckTeamMate2/screens/Images/logo.png")}></Image>
        </View>
        <View style={styles.inputContainer}>
          <UniversityTextInput onValidInput={handleUniversityValid} />
          <StudentNumberTextInput onValidInput={handleStudentNumberValid} />
          <PhoneNumberTextInput onValidInput={handlePhoneNumberValid} />
        </View>
        <View style={styles.BtnContainter}>
          <TouchableOpacity disabled={buttonDisabled}  onPress={() => navigation.navigate("TeamScreen")}>
            <View style={{ ...styles.logInBtn, backgroundColor: signInBtnColor }}>
              <Text style={styles.logInText}>가입하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    flex: 2.5,
    justifyContent: "flex-start",
  },
});