import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import MenuIcon from "../../assets/icons/menu.svg";
import { theme } from '../../Constants';
import { Text } from "../Atomic";

const InfoHeader = ({ infoText, ...props }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {
        props.leftIcon
          ?
            props.leftIcon
          :
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <MenuIcon
                height={wp(5)}
              />
            </TouchableOpacity>
      }
      <Text
        type="semiBold"
        style={{
          ...styles.heading,
          marginLeft: props.rightIcon ? 0 : wp(-5),
          marginRight: props.rightIcon ? 0 : wp(35)
        }}
      >
        {infoText}
      </Text>
      { props.rightIcon }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5.5),
    paddingVertical: wp(4.5),
    borderBottomWidth: 1.5,
    borderBottomColor: theme.colors.dimGray
  },
  heading: {
    fontSize: wp(4.5),
    opacity: 0.8,
    color: "#232323",
    textAlign: "center"
  }
});

export default InfoHeader;