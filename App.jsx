import { RootNavigation } from './src/Views/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Light': require('./assets/fonts/InterDisplay-ExtraLight.otf'),
    'Inter-Regular': require('./assets/fonts/InterDisplay-Regular.otf'),
    'Inter-Medium' : require('./assets/fonts/InterDisplay-Medium.otf')
  });
  return (
    

    <RootNavigation></RootNavigation>
    
  );
}

