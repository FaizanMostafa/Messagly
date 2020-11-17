import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header
} from "../../Components/Molecular";
import { Text } from "../../Components/Atomic";
import { theme } from "../../Constants";
import styles from "./styles";

export default function AboutUs({navigation , ...props}) {

  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header infoText={"About Us"}/>
        <View style={styles.rowsContainer}>
          <View style={styles.rowContainer}>
            <Text
              type="bold"
              style={styles.heading}
            >
              About the app
            </Text>
            <Text
              type="medium"
              style={styles.subHeading}
            >
              Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci.
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text
              type="bold"
              style={styles.heading}
            >
              Version
            </Text>
            <Text
              type="medium"
              style={styles.subHeading}
            >
              3.2.17 installed on 24-7-17.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}