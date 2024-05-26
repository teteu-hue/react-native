import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const ButtonNavigate = ({page, textButton}) => {

    const navigation = useNavigation();

    const navigateToScreen = () => {
        navigation.navigate(page);
    };

    return (
        <Pressable
            style={styles.botao}
            onPress={navigateToScreen}>
            <Text style={styles.botaoText}>
                Go to {textButton}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create(
    {
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
    }
)

export { ButtonNavigate };
