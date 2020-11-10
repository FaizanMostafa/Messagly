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
  }
});


export default styles;