import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { HomeScreen } from './src/Views/Home/HomeScreen';
import { AboutScreen } from './src/Views/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
