import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { theme } from "../../Constants";
import { Text } from "../Atomic";

export default function ChatStrip({item, ...props}) {
  return (
    <View style={{...styles.mainContainer, justifyContent: item.mine ? "flex-end" : "flex-start"}}>
      {
        !item.mine
          &&
            <Image
              style={styles.messanger}
              source={require("../../assets/users/messanger.png")}
            />
      }
      <View style={{
        ...styles.innerContainer,
        backgroundColor: item.mine ? theme.colors.white : theme.colors.primary,
        borderTopRightRadius: item.mine ? 0 : 7,
        borderTopLeftRadius: !item.mine ? 0 : 7,
        marginLeft: !item.mine ? wp(1.5) : wp(4)
      }}>
        <Text
          type="medium"
          style={{fontSize: wp(3.5), color: item.mine ? theme.colors.lightBlack : theme.colors.white}}
        >
          {item.message}
        </Text>
        <Text
          type="medium"
          style={styles.timeStamp}
        >
          {item.time}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row"
  },
  messanger: {
    marginTop: wp(3),
    marginLeft: wp(4)
  },
  innerContainer: {
    borderRadius: 7,
    marginTop: wp(3),
    marginBottom: wp(4.5),
    marginHorizontal: wp(4),
    paddingVertical: wp(2),
    paddingHorizontal: wp(2.5),
    elevation: 4,
    maxWidth: wp(70),
    minWidth: wp(20)
  },
  timeStamp: {
    color: theme.colors.lightGray,
    fontSize: wp(3),
    position: "absolute",
    alignSelf: "flex-end",
    bottom: wp(-5)
  }
});