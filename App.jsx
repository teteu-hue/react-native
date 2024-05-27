import { RootNavigation } from './src/Views/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Light': require('./assets/fonts/InterDisplay-ExtraLight.otf'),
    'Inter-Regular': require('./assets/fonts/InterDisplay-Regular.otf')
  });
  return (
    

    <RootNavigation></RootNavigation>
    
  );
}

