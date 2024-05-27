import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { HeaderButton } from './components/HeaderButton';
import { AboutScreen } from '../About/AboutScreen';
import { SingInScreen } from '../SingIn/SingInScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <HeaderButton page="About" text="Sobre nós"></HeaderButton>
                    )
                }}
             />
            <Stack.Screen name="SingIn" component={SingInScreen}/>
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        
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

export { HomeStack };
