import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
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
      {
        item.mine
          ?
            <View style={styles.innerContainer}>
              <Text
                type="medium"
                style={styles.simpleMessage}
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
          :
            <LinearGradient
              useAngle={true}
              angle={136}
              angleCenter={{ x: 0.5, y: 0.5 }}
              locations={[0, 1]}
              elevation={4}
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={styles.linearGradient}
            >
              <Text
                type="medium"
                style={styles.gradientMessage}
              >
                {item.message}
              </Text>
              <Text
                type="medium"
                style={styles.timeStamp}
              >
                {item.time}
              </Text>
            </LinearGradient>
      }
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
    minWidth: wp(20),
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 0,
    marginLeft: wp(4)
  },
  simpleMessage: {
    fontSize: wp(3.5),
    color: theme.colors.lightBlack
  },
  linearGradient: {
    borderRadius: 7,
    marginTop: wp(3),
    marginBottom: wp(4.5),
    marginHorizontal: wp(4),
    paddingVertical: wp(2),
    paddingHorizontal: wp(2.5),
    borderTopLeftRadius: 0,
    elevation: 4,
    maxWidth: wp(70),
    minWidth: wp(20),
    marginLeft: wp(1.5)
  },
  gradientMessage: {
    fontSize: wp(3.5),
    color: theme.colors.white
  },
  timeStamp: {
    color: theme.colors.lightGray,
    fontSize: wp(3),
    position: "absolute",
    alignSelf: "flex-end",
    bottom: wp(-5)
  }
});