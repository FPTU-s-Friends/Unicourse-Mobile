import React, { useContext, useState } from "react";
import { 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ActivityIndicator,
  View, 
  StatusBar,
  Dimensions,
  Alert} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LOGO } from "../../../assets";
import { textColor } from "../../../constants/appColors";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";
import { User } from "../../../models";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStackParamList } from "../../../types/navigation.types";

// IMPORT COMPONENTS
import AuthButton from "./components/Button/AuthButton";
import CustomInput from "../../Common/CustomInput/CustomInput";
import LoadingOverlay from "../../Common/LoadingOverlay/LoadingOverlay";
import { jwtDecode } from "jwt-decode";

// IMPORT API SERVICES
import { useAuthService } from "../../../core/services";
import { RootContext } from "../../../context/providers/AppProvider";
import { AUTH_ACTION } from "../../../context/types/auth.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface DecodedToken {
  [key: string]: any;
}

// Type for the navigation prop
type AuthNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "AuthStack">,
  StackNavigationProp<RootStackParamList>
>;

const SignUp = () => {
  const { state, dispatch } = useContext(RootContext);
  const navigation = useNavigation<AuthNavigationProp>();
  const navigationAuth = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  // State for the input text
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // API variables
  const { signUp } = useAuthService();
  
  // Behavior state
  const [isLoading, setIsLoading] = useState(false);

  const handleBasicSignUp = () => {
    // Validate the username
    if (!username) {
      setUsernameError('Tên đăng nhập không được để trống');
      return;
    }

    // Validate the password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt');
      return;
    }

    // Validate the confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Mật khẩu không khớp');
      return;
    }
    
    handleSignUp();
  };

  // Interaction with the server
  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const signUpResponse = await signUp(username, password);
      if (signUpResponse.status === 200) {
        saveUserInfo(signUpResponse.data.access_token);
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      Alert.alert('Đăng ký', 'Lỗi đăng ký, vui lòng thử lại sau', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        }
      ]);
    }
  }

  const saveUserInfo = (data: string) => {
    if (!data) {
      return Promise.reject(new Error('No token data provided'));
    }
  
    const tokenParts = data.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return Promise.reject(new Error('Invalid token format'));
    }
  
    const token = tokenParts[1];
    let decodedToken: DecodedToken;
    try {
      decodedToken = jwtDecode(token);
    } catch (e) {
      return Promise.reject(new Error('Token decoding failed'));
    }
  
    AsyncStorage.clear()
      .then(() => AsyncStorage.setItem('@user_info', JSON.stringify(decodedToken)))
      .then(() => AsyncStorage.setItem('@access_token', token))
      .then(() => {
        const userData = JSON.stringify(decodedToken) as any;
        dispatch({ type: AUTH_ACTION.SET_IS_AUTH, payload: true });
        dispatch({ type: AUTH_ACTION.SET_ACCESS_TOKEN, payload: token });
        dispatch({ type: AUTH_ACTION.SET_USER, payload: decodedToken as User });
        navigation.navigate('MainStack', { screen: 'HomePageScreen' });
      })
      .catch(e => {
        console.log(e);
        Alert.alert('Đăng ký', 'Lỗi đăng ký, vui lòng thử lại sau', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          }
        ]);
      });
  };

  return (
    <LinearGradient style={styles.container} colors={["#5EDFF5", "#9F80F8"]}>
      <View style={styles.content}>
        <Image resizeMode={"contain"} style={styles.logo} source={require('../../../assets/logo/Logo_Unicourse.png')} />
        <Text style={styles.title}>Unicourse</Text>
        {/* GROUP BTN */}
        {isLoading && <LoadingOverlay visible={isLoading} />}
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={'Username or Email'}
          error={usernameError}
          onChangeText={setUsername}
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={'Password'}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry
        />
        <CustomInput
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={'Nhập lại password'}
          onChangeText={setConfirmPassword}
          error={confirmPasswordError}
          secureTextEntry
        />
        <AuthButton onPress={() => handleBasicSignUp()} text="Đăng ký" />
        <AuthButton onPress={() => navigationAuth.navigate("LoginScreen")} text="Đăng nhập" />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: "50%",
    backgroundColor: "#fff",
    height: "80%",
    borderRadius: 36,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "20%",
    height: "20%",
  },
  title: {
    color: textColor.normalText,
    paddingTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: "10%",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    width: "60%",
    fontWeight: 400,
    marginTop: 10,
    color: textColor.subTitleColor,
  },
  loadingIcon: {
    position: 'absolute',
    zIndex: 1,
    top: Dimensions.get("screen").height / 50,
  }
});

export default SignUp;
