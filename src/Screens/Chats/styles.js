import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { theme } from "../../Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  flatListContainer: {
    paddingLeft: wp(6)
  },
  renderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp(2)
  },
  hr: {
    borderBottomColor: theme.colors.dimGray,
    borderBottomWidth: 1
  },
  statusContainer: {
    marginRight: wp(4)
  },
  statusFlatListContainer: {
    marginTop: wp(3),
    marginBottom: wp(5)
  },
  statusDot: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 14,
    width: 14,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  rightContainer: {
    flex: 1,
  },
  userName: {
    marginLeft: wp(3),
    fontSize: wp(3.5),
    color: theme.colors.primary
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: wp(6)
  },
  message: {
    marginLeft: wp(3),
    fontSize: wp(3.2),
    maxWidth: wp(56)
  },
  timestamp: {
    fontSize: wp(3),
    color: theme.colors.lightGray
  },
  sectionHeading: {
    marginTop: wp(3),
    marginLeft: wp(6),
    fontSize: wp(4),
    color: theme.colors.lightBlack
  }
});


export default styles;