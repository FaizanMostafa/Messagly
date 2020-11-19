import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {
  Header,
  ChatStrip,
  ChatInput
} from "../../Components/Molecular";
import { theme } from "../../Constants";
import BackIcon from "../../assets/icons/back.svg";
import OptionsIcon from "../../assets/icons/options.svg";
import styles from "./styles";
import dummyMessages from './messages';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function ChatScreen({navigation , ...props}) {

  const flatListRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dummyMessages);

  useEffect(() => {
    SoundPlayer.loadUrl("https://www.soundjay.com/button/sounds/button-16.mp3");
    SoundPlayer.setVolume(0.1);
  }, []);

  const renderItem = ({item}) => (
    <ChatStrip item={item}/>
  )

  const getCurrentTimestamp = () => {
    const timestamp = new Date();
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    return `${hours <= 12 ? hours : hours%12}:${minutes}${hours < 12 ? 'am' : 'pm'}`
  }

  const playMessageTone = () => {
    try {
      SoundPlayer.play();
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }

  const handleSendMessage = () => {
    if(message.length) {
      playMessageTone();
      setMessages([{ id: `${messages.length+2}`, message, mine: true, time: getCurrentTimestamp()}, ...messages]);
      setMessage("");
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header
          leftIcon={<TouchableOpacity><BackIcon /></TouchableOpacity>}
          infoText={"Denise Clark"}
          rightIcon={<TouchableOpacity><OptionsIcon /></TouchableOpacity>}
        />
        <FlatList
          inverted
          style={{paddingBottom: wp(3)}}
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item)=>(item.id)}
        />
        <ChatInput
          onPressSend={handleSendMessage}
          onChangeText={setMessage}
          value={message}
        />
      </View>
    </SafeAreaView>
  );
}