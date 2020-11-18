import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
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

export default function ChatScreen({navigation , ...props}) {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(dummyMessages);

  const renderItem = ({item}) => (
    <ChatStrip item={item}/>
  )

  const handleSendMessage = () => {
    if(message.length) {
      setMessages([...messages, { id: `${messages.length+2}`, message, mine: true, time: "12:00pm"}]);
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