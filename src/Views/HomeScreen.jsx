import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
                }}
                style={styles.logo}
            />
            <Text> 
                A FoundCare pretende revolucionar o mercado de HomeCare {"\n"}
                Buscamos tornar a busca por profissionais da saúde, algo acessível
            </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        width: 200,
        height: 200
    }
});

export { HomeScreen };
