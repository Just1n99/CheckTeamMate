//팀 화면
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function TeamScreen() {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>

        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>

        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>

        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>

        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>

        <View style={styles.house}>
          <Image source={require("./Images/물리사랑해.png")}></Image>
          <Text style={styles.title}>물리 사랑해</Text>
          <Text style={styles.class}>1분반</Text>
          <Text style={styles.classroom}>강의실: NTH 319</Text>
          <Text style={styles.contents}>수업시간: 화, 금 10:00 ~ 11:15</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "white",
  },
  house: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 30,
    fontSize: 20,
  },
  class: {
    position: "absolute",
    top: 75,
    left: 20,
  },
  classroom: {
    position: "absolute",
    top: 95,
    left: 20,
  },
  contents: {
    position: "absolute",
    top: 115,
    left: 20,
  },
});
