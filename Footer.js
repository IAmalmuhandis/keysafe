import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image, Button
  } from 'react-native';
const Footer = () => {
    return (
        <View style={styles.footer}>
  <Text style={styles.footerText}>© 2023 KeySafe</Text>
  <Text style={styles.footerText}>Privacy Policy</Text>
  <Text style={styles.footerText}>Terms of Use</Text>
</View>
    )
}

const styles = StyleSheet.create({
footer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    backgroundColor: '#333652',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: .5,
    borderTopColor: '#CCCCCC',
    alignItems: 'center',
  
  },
  footerText : {
    color: 'white'
  }

});
export default Footer;