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
  linearGradient: {
    alignItems: "center",
    paddingVertical: wp(6)
  },
  dp: {
    borderRadius: 5,
    marginBottom: wp(3)
  },
  userName:{
    color: theme.colors.white,
    fontSize: wp(4.5),
    marginVertical: wp(2)
  },
  contactNo: {
    color: theme.colors.white,
    opacity: 0.7
  },
  rowsContainer: {
    paddingLeft: wp(6)
  },
  rowContainer: {
    paddingVertical: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dimGray
  },
  heading: {
    paddingBottom: wp(3),
    color: theme.colors.primary
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lightButton: {
    color: theme.colors.lightGray,
    marginRight: wp(6)
  }
});


export default styles;