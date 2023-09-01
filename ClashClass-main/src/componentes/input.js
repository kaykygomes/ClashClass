import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export function Input({ title, ...props }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 5,
        fontSize: 16,
        color: "#333",
    },
    input: {
        backgroundColor: "#F2F2F2",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
});

export default Input;
