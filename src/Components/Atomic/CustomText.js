import React from 'react';
import {
  Text
} from 'react-native';
import {getFontFamily} from "../../Helpers";

export default function CustomText({ styles, children, ...props }) {

  const {fontWeight, ...rStyles} = styles;
  const customStyles = {
    fontFamily: getFontFamily(fontWeight),
    ...rStyles
  }

  return (
    <Text
      {...props}
      style={customStyles}
    >
      {children}
    </Text>
  );
}