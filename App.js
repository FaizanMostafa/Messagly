/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import RNBootSplash from "react-native-bootsplash";
import {Text} from "react-native";

function App() {

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <>
      <Text>Hello</Text>
    </>
  );
};


export default App;