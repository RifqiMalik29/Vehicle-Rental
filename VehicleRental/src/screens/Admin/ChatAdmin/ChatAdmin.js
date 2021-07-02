import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AdminChatBox from '../../../components/AdminChatBox';
import BottomNavigation from '../../../components/Navigation';

const ChatAdmin = ({navigation}) => {
  const {vehicleData} = useSelector(state => state.adminVehicle);
  console.log(
    vehicleData.map(item => {
      return item.name;
    }),
  );

  const TopNavigation = () => (
    <View style={{paddingHorizontal: 20}}>
      <TouchableOpacity style={styles.topNavigationContainer}>
        <Image source={require('../../../images/left-arrow.png')} />
        <Text style={styles.screenTitle}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const SearchChat = () => (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarItem}>
        <Image source={require('../../../images/search.png')} />
        <TextInput
          placeholder="Search Chat"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.searchText}
          placeholderTextColor="#868585"
        />
      </View>
    </View>
  );

  const ChatBox = () => (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {vehicleData.map((item, index) => {
          return (
            <TouchableOpacity>
              <AdminChatBox
                username={item.name}
                time="Just Now"
                message={item.description}
                messageLength={index + 1}
              />
            </TouchableOpacity>
          );
        })}
        <Text style={styles.conversation}>You have no conversation left</Text>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      {TopNavigation()}
      {SearchChat()}
      {ChatBox()}
      <View>
        <BottomNavigation active={3} />
      </View>
    </SafeAreaView>
  );
};

export default ChatAdmin;
