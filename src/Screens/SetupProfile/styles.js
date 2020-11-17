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
  dpContainer: {
    width: wp(40),
    backgroundColor: "#f0f0f0",
    padding: wp(2),
    borderRadius: wp(1),
    alignItems: "center"
  },
  dpInfoText: {
    textAlign: "center",
    color: theme.colors.darkGray,
    padding: wp(2.5),
    fontSize: wp(2.5)
  },
  dpImage: {
    height: wp(30),
    width: wp(35)
  }
});


export default styles;