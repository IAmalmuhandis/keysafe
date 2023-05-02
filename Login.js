import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

 
  const handleEmailChange = (text) => setEmail(text);

  const handlePasswordChange = (text) => setPassword(text);


  return (
    <View style={styles.container}>
           <TouchableWithoutFeedback onPress={() => navigation.navigate('Get Started')}>
        <Image source={require('./logo.png')} onClick={() => navigation.navigate('Get Started')}
       style={styles.logo}     
      />
        </TouchableWithoutFeedback>
      <Text style={styles.text}>Log In To Your Dashboard</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

       <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={ handlePasswordChange}
        />
        <TouchableOpacity
          style={styles.passwordIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text  onPress={() => navigation.navigate('Dashboard')}  style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Create Account')} style={styles.alreadyHave}>Don't have an Account ? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333652',
    marginTop : -70,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#333652',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    width : '80%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333652',
    backgroundColor: 'white',
    margin: 12,
    width: '80%',
    height: 40,
    borderRadius: 4,
    padding: 10,

   
  },
  passwordInput: {
    flex: 1,
  },
  passwordIconContainer: {
    marginTop : -4
  },
  alreadyHave : {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
    marginTop: 20
  },
});

export default Login;
