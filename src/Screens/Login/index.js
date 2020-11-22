import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Text } from "../../Components/Atomic";
import {
  GradientButton,
  InfoHeader,
  Input
} from "../../Components/Molecular";
import { theme } from "../../Constants";
import styles from "./styles";

export default function Login(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Welcome back,\nPlease login to continue."}
        />
        <View>
          <Input
            label="Mobile Number"
            placeholder="+91 944 584 63 53"
            inputStyle={styles.input}
            fontWeight="semiBold"
            keyboardType="phone-pad"
          />
          <Input
            label="Password"
            placeholder="***************"
            inputStyle={styles.input}
            containerStyle={{marginTop: hp(5)}}
            fontWeight="semiBold"
            keyboardType="default"
            secureTextEntry
          />
          <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")}>
            <Text type="semiBold" style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>props.handleLogin()}
            elevation={10}
          >
            Login
          </GradientButton>
          <View style={styles.signupInfoContainer}>
            <Text type="semiBold" style={styles.noAccount}>Do not have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
              <Text type="semiBold" style={styles.signupHere}>Sign up here.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}