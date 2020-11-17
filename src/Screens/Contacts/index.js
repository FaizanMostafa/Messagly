import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  SearchBar,
  Header
} from "../../Components/Molecular";
import { Text } from "../../Components/Atomic";
import { theme } from "../../Constants";
import NewIcon from "../../assets/icons/new.svg"
import styles from "./styles";
import users from "./users";

export default function Chats({navigation , ...props}) {

  const [searchTerm, setSearchTerm] = useState("");

  const renderItem = ({item: user}) => (
    <>
      <TouchableOpacity style={styles.renderItemContainer}>
        <Image source={user.dp} />
        <Text type="semiBold" style={styles.userName}>{user.name}</Text>
      </TouchableOpacity>
      <View style={styles.hr} />
    </>
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header
          infoText={"Contacts"}
          rightIcon={<NewIcon height={wp(5)}/>}
        />
        <SearchBar
          value={searchTerm}
          onChangeText={(text)=>setSearchTerm(text)}
        />
        <FlatList
          style={styles.flatListContainer}
          data={users.filter((user)=>user.name.toLowerCase().includes(searchTerm.toLowerCase()))}
          renderItem={renderItem}
          keyExtractor={(item)=>(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}