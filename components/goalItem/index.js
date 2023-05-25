import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{ color: '#bfbfbf' }} style={({pressed}) => pressed && styles.pressedStyle}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#ccc",
        margin: 8,
        borderRadius: 6,
    },
    goalText: {
        color: "#333",
        padding: 10,
        borderRadius: 10,
    },
    pressedStyle: {
        backgroundColor: "#bfbfbf",
        borderRadius: 6,
    }
});
