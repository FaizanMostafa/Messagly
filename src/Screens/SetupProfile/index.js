import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import {
  GradientButton,
  InfoHeader,
  Input
} from "../../Components/Molecular";
import { Text } from "../../Components/Atomic";
import { theme } from "../../Constants";
import {
  checkMediaPermissions,
  requestMediaPermissions
} from "../../Helpers";
import styles from "./styles";

export default function SetupProfile({navigation , ...props}) {

  const [avatarSource, setAvatarSource] = useState(null);

  const options = {
    title: 'Select Profile Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const checkForPermissionsAndPromptOptions = async() => {
    const hasMediaPermissions = await checkMediaPermissions();
    if(!hasMediaPermissions) {
      await requestMediaPermissions();
    }
    onImageUploadHandler();
  }

  const onImageUploadHandler = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        setAvatarSource(response);
      }
    });
  }

  const onGetStarted = () => {
    const data = {
      dp: avatarSource.uri
    };
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Welcome to Messagly!"}
        />
        <View>
          <TouchableOpacity onPress={checkForPermissionsAndPromptOptions} style={styles.dpContainer}>
            <Image
              style={styles.dpImage}
              height={wp(30)}
              width={wp(35)}
              source={{uri: avatarSource ? `data:image/jpeg;base64,${avatarSource.data}` : "dummy_dp"}}
            />
            <Text
              type="semiBold"
            style={styles.dpInfoText}>
              Setup Profile Photo
            </Text>
          </TouchableOpacity>
          <Input
            label="New Password"
            placeholder="***************"
            inputStyle={styles.input}
            containerStyle={{marginTop: hp(5)}}
            fontWeight="semiBold"
            keyboardType="default"
            secureTextEntry
          />
          <Input
            label="Confirm Password"
            placeholder="***************"
            inputStyle={styles.input}
            containerStyle={{marginTop: hp(5)}}
            fontWeight="semiBold"
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>{}}
            elevation={10}
          >
            Get Started
          </GradientButton>
        </View>
      </View>
    </SafeAreaView>
  );
}