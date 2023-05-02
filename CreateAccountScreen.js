import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image,  TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const CreateAccountScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFullNameChange = (text) => setFullName(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePhoneNumberChange = (text) => setPhoneNumber(text);
  const handlePasswordChange = (text) => setPassword(text);
  const handleConfirmPasswordChange = (text) => setConfirmPassword(text);


  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Get Started')}>
        <Image source={require('./logo.png')} onClick={() => navigation.navigate('Get Started')}
       style={styles.logo}     
      />
        </TouchableWithoutFeedback>
    
      <Text style={styles.text}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={handleFullNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="phone-pad"
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Login')} style={styles.alreadyHave}>Already have an Account ? Login</Text>
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

export default CreateAccountScreen;
