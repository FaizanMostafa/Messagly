import React from 'react';
import {
  Text
} from 'react-native';
import {getFontFamily} from "../../Helpers";

export default function CustomText({ style, type, children, ...props }) {

  const customStyles = {
    fontFamily: getFontFamily(type),
    ...style
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