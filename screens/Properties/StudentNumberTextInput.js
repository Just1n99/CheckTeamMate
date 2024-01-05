import React, {useState, useRef} from 'react';
import {Animated, Easing, TextInput, StyleSheet} from 'react-native';

export let StudentNumTextInputActivated = false;

const StudentNumberTextInput = ({
  label = '학번',
  titleActiveSize = 12,
  titleInActiveSize = 16,
  titleActiveColor = '#444444',
  titleInactiveColor = '#c2c2c2',
  onDone }) => {

  const [studentNumber, setStudentNumber] = useState("");
  const [activated, setActivated] = useState(false); // add this state

  const animatedValue = useRef(new Animated.Value(0));

  const handleInputChange = (text) => {
    setStudentNumber(text);
    if (text.length == 0){
      setActivated(false); // set activated to false when input is empty
    } else{
      setActivated(true); // set activated to true when input is not empty
    }
  };

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [22, -4],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
  };

  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    borderBottomWidth: 1.5,
  }
  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!studentNumber) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    if (activated) { // call onDone when input is done
      onDone();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
      <TextInput
        onChangeText={handleInputChange}
        value={studentNumber}
        style={styles.textStyle}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingTop: 15,
  },
  textStyle: {
    paddingBottom: 10,
    fontSize: 18,
  },
});

export default StudentNumberTextInput;