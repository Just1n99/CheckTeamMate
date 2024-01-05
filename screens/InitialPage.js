import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from "react-native";


const WINDOW_WIDHT = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function InitialPage() {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <StatusBar style={"dark"}></StatusBar>
        <View style={styles.logoContainter}>
          <Image style={styles.logoImage} source={require("./logo.png")}></Image>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.checklistImage} source={require("./loginImages.gif")}></Image>
          <Text style={styles.description}>무임승차를 방지하기 위한 최적의 방법</Text>
        </View>
        <View style={styles.BtnContainter}>
          <TouchableOpacity>
            <View style={styles.logInBtn}>
              <Text style={styles.logInText}>로그인</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
            <View style={styles.signInBtn}>
              <Text style={styles.signInText}>가입하기</Text>
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
    logoContainter: {
      flex: 1.5,
      //backgroundColor: "teal",
      alignItems: "center",
      justifyContent: "center",
    },
    imgContainer: {
      flex: 2,
      //backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "space-between",
    },
    checklistImage:{
      //height: WINDOW_HEIGHT /4,
      //width: WINDOW_WIDHT /2.5,
      height: 215,
      width: 242,
    }, 
    logoImage: {
      height: 107,
      width: 115,
    },
    description:{
      color: "#050026",
      fontSize: 16,
      fontWeight: 400,
      alignSelf: "center",
      marginBottom: "12%",
    },
    BtnContainter: { 
      flex: 1,
      //backgroundColor: "red",
      alignContent: "center",
      justifyContent: "flex-end",
      marginBottom: "10%",
    },
    logInBtn: {
      backgroundColor: "#050026",
      borderRadius: 9,
      alignItems: "center",
      paddingVertical: "6%",
      marginBottom: "3%",
    },
    logInText: {
      color: "white",
      fontSize: 18,
      fontWeight: 400,
    },
    signInBtn: {
      backgroundColor: "white",
      borderRadius: 9,
      alignItems: "center",
      paddingVertical: "5.5%",
      borderColor: "#050026",
      borderWidth: 1,
    },
    signInText: { 
      color: "black",
      fontSize: 18,
      fontWeight: 400,
    },
  });
  