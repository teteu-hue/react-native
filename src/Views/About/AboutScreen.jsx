import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonNavigate } from "../../components/Screen/buttonNavigate";

const AboutScreen = () => {
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
