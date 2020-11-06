import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  CustomText
} from "../../Components/Atomic";
import {
  GradientButton
} from "../../Components/Molecular";
import styles from "./styles";

export default function Login(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View>
            <Image width={50} height={27} source={{uri: "gradient_logo"}} />
            <CustomText
              styles={{
                fontWeight: "semi-bold",
                fontSize: hp(3),
                opacity: 0.8,
                color: "#232323"
              }}
              numberOfLines={2}
            >
              Welcome back,
              Please login to continue.
            </CustomText>
          </View>
          <View>
            <GradientButton
              onBtnPressHandler={()=>props.navigation.navigate("Login")}
            >
              Login
            </GradientButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}