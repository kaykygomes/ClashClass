import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../componentes/button";
import Input from "../componentes/input"; // Note que usei 'Input' em vez de '{ Input }'

export function Login() {
    return (
        <View style={styles.container}>
            <Input title="Nome de usuário" />
            <Input title="Senha" secureTextEntry />
            <Button title="Criar Conta" />
            <Button title="Já tenho conta" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});

export default Login;
