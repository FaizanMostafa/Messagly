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
  userName: {
    marginLeft: wp(3),
    color: theme.colors.lightBlack
  }
});


export default styles;