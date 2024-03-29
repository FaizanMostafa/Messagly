import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { theme } from "../../Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(10),
    justifyContent: "space-between",
    backgroundColor: theme.colors.white
  },
  input: {
    fontSize: wp(3.5),
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.black,
    paddingBottom: wp(1.5)
  },
  forgotPassword: {
    color: theme.colors.darkGray,
    textAlign: "right",
    fontSize: wp(3),
    marginTop: hp(1.5)
  },
  signupInfoContainer: {
    flexDirection: "row",
    marginTop: hp(2.5),
    justifyContent: "center"
  },
  noAccount: {
    color: theme.colors.darkGray,
    fontSize: wp(3)
  },
  signupHere: {
    color: theme.colors.primary,
    fontSize: wp(3)
  }
});


export default styles;