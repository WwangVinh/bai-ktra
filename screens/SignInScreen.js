import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ImageBackground
      source={require('../assets/signin-background.jpg')} // Đường dẫn ảnh nền
      style={styles.background}
      resizeMode="cover" // Đảm bảo ảnh nền bao phủ toàn bộ màn hình
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Get your groceries with nectar</Text>
          </View>

          {/* Phần nhập số điện thoại */}
          <View style={styles.phoneInputContainer}>
            <Text style={styles.countryCode}>(+880)</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter your phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Nút Continue with Google */}
          <TouchableOpacity style={styles.googleButton}>
            <Image 
              source={require('../assets/google-logo.png')} // Đường dẫn logo Google
              style={styles.googleLogo} // Sử dụng style riêng cho logo Google
            />
            <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Nút Continue with Facebook */}
          <TouchableOpacity style={styles.facebookButton}>
            <Image 
              source={require('../assets/facebook-logo.png')} // Đường dẫn logo Facebook
              style={styles.facebookLogo} // Sử dụng style riêng cho logo Facebook
            />
            <Text style={styles.buttonTextFacebook}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
  },
  overlay: {
    flex: 1,
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  titleContainer: {
    width: '100%', // Chiều rộng 100% để căn giữa
    alignItems: 'center', // Căn giữa nội dung bên trong
    marginBottom: 20,
  },
  title: {
    fontSize: 24, // Bạn có thể thay đổi kích thước này
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Đảm bảo chữ được căn giữa
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  countryCode: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    height: '100%', // Đảm bảo chiều cao đầy đủ
    fontSize: 16,
    paddingHorizontal: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    width: '100%', // Đặt chiều rộng nút thành 100%
    borderColor: '#357AE8',
    borderWidth: 2,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    width: '100%', // Đặt chiều rộng nút thành 100%
    borderColor: '#29487d',
    borderWidth: 2,
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  facebookLogo: {
    width: 14,
    height: 28,
    marginRight: 10,
  },
  buttonTextGoogle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextFacebook: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
