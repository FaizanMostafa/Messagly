import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import {getFontFamily} from "../../Helpers";
import { theme } from '../../Constants';
import SendButton from "../../assets/icons/send.svg";

export default function CustomInput(props) {

  return (
    <View style={{borderTopColor: theme.colors.dimGray, borderTopWidth: 1,flexDirection: "row", alignItems: "center"}}>
      <TextInput
        style={{fontFamily: getFontFamily("medium"), paddingHorizontal: wp(3), paddingVertical: wp(4), fontSize: wp(3.8), width: wp(87)}}
        onChangeText={(text)=>props.onChangeText(text)}
        value={props.value}
      />
      <TouchableOpacity onPress={props.onPressSend}>
        <SendButton height={wp(9.5)} width={wp(9.5)} />
      </TouchableOpacity>
    </View>
  );
}