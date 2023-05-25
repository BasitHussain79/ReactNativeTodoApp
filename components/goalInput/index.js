import React, { useState } from "react";
import {
    Button,
    ImageBackground,
    Modal,
    StyleSheet,
    TextInput,
    View
} from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function goalHandler() {
    enteredGoalText
      ? props.addGoalHandler(enteredGoalText)
      : Toast.show({
        type: 'error',
        text1: 'Add Goal',
    })

    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/img/goals.jpg")}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Add List Item"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
              required={true}
            />
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Button
                  title="Cancel"
                  color="#ff6961"
                  onPress={props.onCancel}
                />
              </View>
              <View style={styles.btn}>
                <Button title="Add Goal" color="#333" onPress={goalHandler} />
              </View>
            </View>
          </View>
          <Toast
            autoHide={true}
            visibilityTime={1000}
            onShow={() => console.log("Toast Visible")}
            onHide={() => console.log("Toast Hide")}
            onPress={() => console.log("Toast Pressed")}
          />
        </ImageBackground>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#ccc",
    color: "#333",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  btn: {
    width: "30%",
  },
});
