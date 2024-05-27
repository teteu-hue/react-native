import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { HomeText } from './HomeText';
import { ButtonNavigate } from '../../components/Screen/ButtonNavigate';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
                }}
                style={styles.logo}
            />
            <HomeText/>
            <ButtonNavigate page="SingIn" textButton="SingIn"/>
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

export { HomeScreen };
