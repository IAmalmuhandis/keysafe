import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Your Dashboard!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Credentials')}>
        <Text style={styles.buttonText}>View Credentials</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Data Backup')}>
        <Text style={styles.buttonText}>Data Backup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Logout')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333652',
  },
  welcome: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'white'
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default DashboardScreen;
