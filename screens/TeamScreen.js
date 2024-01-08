//팀 화면
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Button, Alert } from "react-native";
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function TeamScreen({ navigation }) {

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
            <StatusBar style={"dark"}></StatusBar>
            <View style={styles.addBtnContainter}>
                <TouchableOpacity style={styles.addBtnContainter} onPress={handlePress}>
                    <Image style={styles.addBtn} source={require("./Images/ClassAddBtn.png")}></Image>
                    <Modal style={styles.modalView} animationType="fade" transparent={true} visible={showModal}>
                        <TouchableWithoutFeedback onPress={handlePress}>
                            <View style={styles.modalView}>
                                <View style={styles.addBtnContainter}>
                                    <TouchableOpacity style={styles.addBtnContainter} onPress={handlePress}>
                                        <Image style={styles.addBtn} source={require("./Images/CloseClassAddBtn.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.TwoBtnContainer} onPress={handlePress}>
                                    <TouchableOpacity onPress={() => {navigation.navigate("ClassAddPage"), setShowModal(false)}}>
                                        <View style={styles.AddClassBtn}>
                                            <Text>수업 등록</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.JoinClassBtn}>
                                            <Text>팀 참여하기</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View flex={1}>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </TouchableOpacity>
            </View>
            <View>
            <Button
  title="Sign Out"
  onPress={() => {
    // code to show message to confirm user sign out
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Call the sign-out function here
            signOut(auth);
          },
        },
      ],
      { cancelable: false }
    );
  }}
/>
             </View>
            <View style={styles.classContainer}>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        backgroundColor: "white",
    },
    addBtnContainter: {
        flex: 0.3,
        //backgroundColor: "teal",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: "2%"
        ,
    },
    addBtn: {
        width: 40,
        height: 40,
        marginRight: "2%",
    },
    classContainer: {
        flex: 2,
        //backgroundColor: "grey",
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: "5%",
    },
    TwoBtnContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    AddClassBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginBottom: "2%",
    },
    AddBtnText: {
        fontSize: 14,
    },
    JoinClassBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
    },
});