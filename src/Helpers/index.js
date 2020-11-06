function getFontFamily(fontWeight) {
  switch (fontWeight) {
    case "light":
      return "Montserrat-Light";

    case "medium":
      return "Montserrat-Medium";

    case "regular":
      return "Montserrat-Regular";

    case "semi-bold":
      return "Montserrat-SemiBold";

    case "bold":
      return "Montserrat-Bold";

    default:
      return "Montserrat-Regular";
  }
}

export {
  getFontFamily
};