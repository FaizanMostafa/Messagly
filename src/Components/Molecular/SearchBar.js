import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import SearchIcon from "../../assets/icons/search.svg";
import { theme } from '../../Constants';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Search..."
        placeholderTextColor={theme.colors.lightGray}
        onChangeText={props.onChangeText}
        value={props.value}
      />
      <SearchIcon />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.dimGray,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    marginHorizontal: wp(3),
    marginTop: wp(3),
    marginBottom: wp(2),
    borderRadius: 3
  },
  inputStyle: {
    backgroundColor: theme.colors.dimGray,
    color: theme.colors.lightGray,
    fontFamily: "Montserrat-SemiBold",
    fontSize: wp(3.2),
    width: wp(85),
    padding: 0
  }
});