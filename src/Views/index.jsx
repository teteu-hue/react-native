import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './Home/HomeStack';

import { SettingsStack } from './Settings/SettingsStack';

const Tab = createBottomTabNavigator();

export function RootNavigation() {
    return (

        <NavigationContainer>

            <Tab.Navigator
                initialRouteName="Home"

                screenOptions={


                    ({ route }) => ({

                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'Settings') {
                                iconName = focused 
                                    ? 'settings' 
                                    : 'settings-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: '#89CEFF',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false
                    })
                                       
                } 

            >

                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />

            </Tab.Navigator>

        </NavigationContainer>

    );
}
