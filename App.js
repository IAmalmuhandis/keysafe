import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image, Button
} from 'react-native';
import { useFonts } from 'expo-font';


const App = () => {
  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/static/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/static/Montserrat-Regular.ttf'),
  });

    if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')}
       style={styles.logo}     
      />
      <Text style={styles.text}>KeySafe App</Text>
      <Text style={styles.subtext}>Your Key to Peace of Mind</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333652',
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: 'white',
    marginTop: -60
  },
  subtext: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '400',
    // textAlign: 'center',
    color: '#999999',
    marginTop: 10
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 10,
    marginTop: 200,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default App;