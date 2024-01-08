//수업 등록 화면
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import TeamNameTextInput from './Properties/TeamAddPage/TeamNameTextInput';
import ClassNameTextInput from './Properties/TeamAddPage/ClassNameTextInput';
import ClassNumberTextInput from './Properties/TeamAddPage/ClassNumberTextInput';
import LocationTextInput from './Properties/TeamAddPage/LocationTextInput';
import TimeTextInput from './Properties/TeamAddPage/TimeTextInput';

export default function ClassAddPage() {
  const navigation = useNavigation()

  const [confirmBtnColor, setConfirmBtnColor] = useState("#D9D9D9");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [teamNameValid, setTeamNameValid] = useState(false);
  const [classNameValid, setClassNameValid] = useState(false);
  const [classNumberValid, setClassNumberValid] = useState(false);
  const [locationValid, setLocationValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);

  const [visible, setVisible] = useState(true);

  //입력값 (팀이름, 수업이름, 분반, 장소, 시간)이 valid input인지 판별
  const handleTeamNameValid = (valid) => {
    setTeamNameValid(valid);
    if ((valid && classNameValid && classNumberValid && locationValid && timeValid)) {
      setButtonDisabled(false);
      setConfirmBtnColor("#050026");
    }
    if (valid || classNameValid){
      setVisible(false)
    }
    if (!(valid || classNameValid)){
      setVisible(true)
    }
    else{
      setButtonDisabled(true);
      setConfirmBtnColor("#D9D9D9");
    }
  };
  const handleClassNameValid = (valid) => {
    setClassNameValid(valid);
    if ((valid && teamNameValid && classNumberValid && locationValid && timeValid)) {
      setButtonDisabled(false);
      setConfirmBtnColor("#050026");
    }
    if (valid || teamNameValid){
      setVisible(false)
    }
    if (!(valid || teamNameValid)){
      setVisible(true)
    }
    else{
      setButtonDisabled(true);
      setConfirmBtnColor("#D9D9D9");
    }
  };
  const handleClassNumberValid = (valid) => {
    setClassNumberValid(valid);
    if ((valid && teamNameValid && classNameValid && locationValid && timeValid)) {
      setButtonDisabled(false);
      setConfirmBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setConfirmBtnColor("#D9D9D9");
    }
  };
  const handleLocationValid = (valid) => {
    setLocationValid(valid);
    if ((valid && teamNameValid && classNameValid && classNumberValid && timeValid)) {
      setButtonDisabled(false);
      setConfirmBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setConfirmBtnColor("#D9D9D9");
    }
  };
  const handleTimeValid = (valid) => {
    setTimeValid(valid);
    if ((valid && teamNameValid && classNameValid && classNumberValid && locationValid)) {
      setButtonDisabled(false);
      setConfirmBtnColor("#050026");
    }
    else{
      setButtonDisabled(true);
      setConfirmBtnColor("#D9D9D9");
    }
  };
  const onPress = () => console.log("hi");
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View behavior='padding' style={styles.container}>
        <StatusBar style={"dark"}></StatusBar>
        <View style={styles.headerContainer}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => { navigation.navigate("TeamScreen") }}>
              <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerText}>수업 등록</Text>
          </View>
          <View style={styles.confirmBtn}>
            <TouchableOpacity disabled={buttonDisabled}>
              <Text style={{...styles.headerText, color:confirmBtnColor}}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.colorSelectContainer}>
            <View style={styles.colorTextContainer}>
              <Text style={styles.colorText}>색상</Text>
            </View>
            <View style={styles.circleContainer}>
              <View style={styles.circle}></View>
              <Image style={styles.triangle} source={require("/Users/dowon/Documents/CheckTeamMate2/screens/Images/ColorSelectionTriangleBtn.png")}></Image>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.descriptionContainter}>
          {visible && <Text style={styles.description}>팀 이름 혹은 수업 이름을 반드시 입력해주세요!</Text>}
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TeamNameTextInput onValidInput={handleTeamNameValid} />
            <ClassNameTextInput onValidInput={handleClassNameValid} />
            <ClassNumberTextInput onValidInput={handleClassNumberValid} />
            <LocationTextInput onValidInput={handleLocationValid} />
            <TimeTextInput onValidInput={handleTimeValid} />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  descriptionContainter: {
    alignItems: "flex-end",
    paddingVertical: "3%",
  },
  description: {
    color: "#FF2868",
  },
  circle: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 15,
    //backgroundColor: 'black',
  },
  triangle: {
    width: 10,
    height: 10,
    marginLeft: "3%",
    marginRight: "5%"
  },
  circleContainer: {
    flex: 1,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  colorTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "3%"
  },
  colorText: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerContainer: {
    marginTop: "5%",
    flex: 0.13,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    //backgroundColor: "red",
  },
  backBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: "3%"
  },
  confirmBtn: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "3%",
  },
  headerText: {
    fontSize: 19,
    fontWeight: '500',
  },
  inputContainer: {
    flex: 0.6,
    //backgroundColor: "yellow",
  },
  colorSelectContainer: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "teal",
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
    paddingBottom: "3%",
    //paddingTop: "7%",
  },
});