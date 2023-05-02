import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViewProfileScreen = ({ route }) => {
  const navigation = useNavigation();

  // Get user's data from the route params
//   const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your profile, {"Almuhandis"}!</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{"Abubakar Muhammad Umar"}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{"abubakaralmuhandis@gmail.com"}</Text>
      </View>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.navigate('UpdateInfo')}
      >
        <Text style={styles.updateButtonText}>Update Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
    color: '#000',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#6b6b6b',
  },
  updateButton: {
    backgroundColor: '#ff914d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ViewProfileScreen;
