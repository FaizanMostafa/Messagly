import {
  PermissionsAndroid
} from 'react-native';

function getFontFamily(fontWeight) {
  switch (fontWeight) {
    case "light":
      return "Montserrat-Light";

    case "medium":
      return "Montserrat-Medium";

    case "regular":
      return "Montserrat-Regular";

    case "semiBold":
      return "Montserrat-SemiBold";

    case "bold":
      return "Montserrat-Bold";

    default:
      return "Montserrat-Regular";
  }
}

const checkMediaPermissions = async () => {
  const hasCameraPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
  const hasReadPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  const hasWritePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  return (hasCameraPermission && hasReadPermission && hasWritePermission);
};

const requestMediaPermissions = async () => {
  try {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ]);
  } catch (err) {
    console.warn(err);
  }
};

export {
  getFontFamily,
  checkMediaPermissions,
  requestMediaPermissions
};