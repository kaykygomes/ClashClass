import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Button({ title }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        width: "50%",
        margin: 15,
    },
    title: {
        textAlign: "center",
        color: "#03DC33",
        fontSize: 25,
    },
});
