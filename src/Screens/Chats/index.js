import React, {useState} from 'react';
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
import MaterialTabs from 'react-native-material-tabs';
import {
  Header
} from "../../Components/Molecular";
import { Text } from "../../Components/Atomic";
import { theme } from "../../Constants";
import NewIcon from "../../assets/icons/new.svg"
import {getFontFamily} from "../../Helpers";
import styles from "./styles";
import messages from "./messages";

export default function Chats({navigation , ...props}) {

  const [selectedTab, setSelectedTab] = useState(0);

  const getDotColor = (user) => {
    return parseInt(user.id)>4 ? theme.colors.away : (user.seen ? theme.colors.active : theme.colors.inactive);
  }

  const renderStatusItem = ({item: user}) => (
    <TouchableOpacity style={styles.statusContainer}>
      <Image source={user.dp} />
      <View style={{...styles.statusDot, backgroundColor: getDotColor(user)}} />
    </TouchableOpacity>
  )

  const renderItem = ({item: user}) => (
    <TouchableOpacity style={styles.renderItemContainer}>
      <Image source={user.dp} />
      <View style={styles.rightContainer}>
        <Text type="semiBold" style={styles.userName}>{user.name}</Text>
        <View style={styles.messageContainer}>
          <Text
            numberOfLines={1}
            type="medium"
            style={{
              ...styles.message,
              color: user.seen ? theme.colors.lightGray : theme.colors.lightBlack
            }}
          >
            {user.message}
          </Text>
          <Text type="medium" style={styles.timestamp}>{user.timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  const divider = () => (
    <View style={styles.hr} />
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header
          infoText={"Chats"}
          rightIcon={<NewIcon height={wp(5)}/>}
        />
        <Text
          type="semiBold"
          style={styles.sectionHeading}
        >
          Favourites
        </Text>
        <View style={styles.statusFlatListContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatListContainer}
            contentContainerStyle={{paddingRight: wp(6)}}
            data={messages}
            renderItem={renderStatusItem}
            keyExtractor={(item)=>(item.id)}
          />
        </View>
        <MaterialTabs
          items={['All Chats', 'Unread']}
          selectedIndex={selectedTab}
          textStyle={{fontFamily: getFontFamily("semiBold"), fontSize: wp(3.8)}}
          activeTextColor={theme.colors.lightBlack}
          inactiveTextColor={theme.colors.lightGray}
          barColor={theme.colors.white}
          indicatorColor={theme.colors.primary}
          scrollable={true}
          uppercase={false}
          onChange={(index)=>setSelectedTab(index)}
        />
        {
          selectedTab === 0
            ?
              <FlatList
                style={styles.flatListContainer}
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item)=>(item.id)}
                ItemSeparatorComponent={divider}
              />
            :
              <FlatList
                style={styles.flatListContainer}
                data={messages.filter((message)=>message.seen===false)}
                renderItem={renderItem}
                keyExtractor={(item)=>(item.id)}
                ItemSeparatorComponent={divider}
              />
        }
      </View>
    </SafeAreaView>
  );
}