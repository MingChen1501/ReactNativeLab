import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const students = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',	
    name: 'Jane Doe',
    address: 'Cầu Giấy, Hà Nội, Việt Nam',
    phone: '0988776633',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Mickey Mouse',
    address: 'Cầu Giấy, Hà Nội, Việt Nam',
    phone: '0988776644',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Nguyễn Thị Nở',    
    address: 'Cầu Giấy, Hà Nội, Việt Nam',
    phone: '0988776655',
  }
]

const StudentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Students Screen</Text>
      <FlatList
        data={students}
        renderItem={({item}) => {
          return (
          <View style={{flexDirection:'row'}}>
            <Image
              source={{uri: item.image}}
              style={styles.StyleImage}
              />
            <View style={styles.layoutItem}>
              <Text>{item.name}</Text>
              <Text>{item.address}</Text>
              <Text>{item.phone}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
              <Button title='Delete'/>
              <Button title='Edit'/>
            </View>
          </View>
          )
        }}
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  )
}


export default StudentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 20,
    color: 'red'
  },
  layoutItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    maxWidth: 200,
    maxHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  StyleImage: {
    width: 80,
    height: 80,
  }
})