import React from 'react';
import { View, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Text } from "../Atomic";

const InfoHeader = ({ infoText, ...props }) => {
  return (
    <View>
      <Image
        width={70}
        height={70}
        source={{uri: "gradient_logo"}}
        style={{width: 70, height: 70}}
      />
      <Text
        type="semiBold"
        style={{
          fontSize: wp(4.5),
          marginTop: hp(1.5),
          opacity: 0.8,
          color: "#232323"
        }}
        // numberOfLines={2}
      >
        {infoText}
      </Text>
    </View>
  )
}


export default InfoHeader;