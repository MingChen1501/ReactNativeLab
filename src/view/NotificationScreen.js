import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, RefreshControl, Modal, TextInput, Pressable } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
  {
    "id": 3,
    "message": "publish new post",
    "read": true,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 4,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 5,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 6,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 7,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 8,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 9,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
  {
    "id": 10,
    "message": "publish new post",
    "read": false,
    "from": {
      "id": 1,
      "name": "Nguyen Van A",
      "avatar": "https://picsum.photos/200/200"
    },
    published_at: "2021-05-20T07:00:00.000Z"
  },
]

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(data)
  const renderItem = ({item}) => {
    return (
      <View style={[styles.notification, {
        backgroundColor: item.read ? '#FFFFFF' : '#F5F5F5'
      }]}>
        <View style={styles.notificationLeft}>
          <Image
            style={styles.avatar}
            source={{uri: item.from.avatar || 'https://picsum.photos/200/300'}}
          />
        </View>
        <View style={styles.notificationRight}>
          <Text style={styles.message}>{item.from.name} {item.message}</Text>
          <Text style={styles.published_at}>{item.published_at}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      data={notifications}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  notification: {
    flexDirection: 'row',
    marginHorizontal: 4,
    padding: 16,
    borderBottomWidth: 0.5,
    backgroundColor: '#FFFFFF',
  },
  notificationLeft: {
    width: '20%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notificationRight: {
    width: '80%',
  },
  message: {
    marginTop: 8,
    fontSize: 16,
  },
  published_at: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: 12,
    color: '#9E9E9E',
  }
})

export default NotificationScreen;

