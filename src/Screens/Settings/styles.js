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
  rowsContainer: {
    paddingLeft: wp(6)
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: wp(6),
    paddingVertical: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dimGray
  },
  heading: {
    marginTop: wp(4),
    paddingBottom: wp(3),
    color: theme.colors.primary,
  },
  subHeading: {
    color: theme.colors.lightBlack,
    paddingRight: wp(6)
  },
  touchableItem: {
    paddingVertical: wp(4)
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dimGray
  }
});


export default styles;