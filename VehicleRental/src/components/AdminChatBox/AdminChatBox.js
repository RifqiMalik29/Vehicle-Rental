import React from 'react';
import {View, Text} from 'react-native';
import styles from './AdminChatBox.style';

const AdminChatBox = ({username, time, message, messageLength}) => {
  return (
    <View style={{paddingHorizontal: '7%'}}>
      <View style={styles.chatBoxContainer}>
        <View style={styles.chatDetail}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.timestamp}>{time}</Text>
        </View>
        <View style={styles.chatDetail}>
          <Text style={styles.lastChat}>{message}</Text>
          <View style={styles.chatLengthContainer}>
            <Text style={styles.chatLength}>{messageLength}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdminChatBox;
