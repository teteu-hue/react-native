import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ButtonNavigate } from "../components/Screen/botao-navigate";

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <ButtonNavigate page="Home" textButton="Home"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: 150,
        height: 40,
        backgroundColor: '#89CEFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        color: '#FFF'
    }
});

export { AboutScreen };
