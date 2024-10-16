import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/onboarding-background.jpg')}  // Đường dẫn ảnh nền
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          {/* Thêm hình ảnh vào giữa màn hình */}
          <Image 
            source={require('../assets/icon.png')} // Đường dẫn hình ảnh icon
            style={styles.icon} // Sử dụng style riêng cho icon
            resizeMode="contain" // Đảm bảo icon luôn hiển thị đầy đủ
          />

          <Text style={styles.title}>Welcome to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

          {/* Nút Get Started */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',  // Đẩy nội dung xuống dưới
    paddingBottom: 140,  // Khoảng cách từ nội dung tới đáy màn hình
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,  // Điều chỉnh khoảng cách nội dung với nút
  },
  icon: {
    width: '20%', // Chiều rộng của icon là 80% chiều rộng màn hình
    height: undefined, // Chiều cao không xác định để giữ tỷ lệ
    aspectRatio: 1, // Giữ tỷ lệ 1:1 cho icon
    marginBottom: 20, // Khoảng cách giữa icon và tiêu đề
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',  // Đảm bảo chữ được căn giữa
  },
  subtitle: {
    textAlign: 'center',  // Đảm bảo chữ được căn giữa
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',  // Màu nền xanh lá cây
    paddingVertical: 25,
    paddingHorizontal: 100,
    borderRadius: 25,  // Bo tròn góc
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',  // Màu chữ trắng
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
