import {TextInput, Pressable, FlatList, StyleSheet, Text, View, Image, Button, Modal, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListStudents = [
  {
    id: 1,
    name: 'Nguyen Van A',
    avatar: 'https://picsum.photos/200/200',
    posts: 10,
    following: 10,
    followers: 20,
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    avatar: 'https://picsum.photos/200/200',
    posts: 10,
    following: 10,
    followers: 20,
  },
  {
    id: 3,
    name: 'Nguyen Van C',
    avatar: 'https://picsum.photos/200/200',
    posts: 10,
    following: 10,
    followers: 20,
  },
  {
    id: 4,
    name: 'Nguyen Van D',
    avatar: 'https://picsum.photos/200/200',
    posts: 10,
    following: 10,
    followers: 20,
  },
  {
    id: 5,
    name: 'Nguyen Van E',
    avatar: 'https://picsum.photos/200/200',
    posts: 10,
    following: 10,
    followers: 20,
  }
]
const SearchScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.searchResultItemContainer}>
        <View style={styles.notificationLeft}>
          <Image
            style={styles.avatar}
            source={{uri: item.avatar || 'https://picsum.photos/200/300'}}
          />
        </View>
        <View style={styles.notificationRight}>
          <Text style={styles.message}>{item.name} {item.message}</Text>
          <Text style={styles.published_at}>{item.posts} posts . {item.following} following . {item.followers} follower</Text>
        </View>
      </View>
    )
  }
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(ListStudents)
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={() => {
            setSearchResults(ListStudents.filter((student) => student.name.includes(search)))
          }}
        />
      </View>
      <View style={styles.resultContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}


export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B3E5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    padding: 10,
    width: '100%',
    height: '10%'
  },
  searchInput: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    fontSize: 20
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    height: '90%',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  flatListContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#FFF'
  },
  searchResultItemContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    borderBottomWidth:0.5
  },
  notificationLeft: {
    width: '20%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }
})