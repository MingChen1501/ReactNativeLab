import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ip = '192.168.0.102'
const port = '3000'
const url = 'http://' + ip + ':' + port
const PostManageScreen = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts();
  }, [])
  const fetchPosts = async () => {
    try {
      const response = await fetch(url + '/posts');
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

}

const handleUpdate = (id) => {
  // Xử lý logic khi bấm nút Update với id của item
  console.log('Update item with ID:', id);
};

const handleDelete = (id) => {
  // Xử lý logic khi bấm nút Delete với id của item
  console.log('Delete item with ID:', id);
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
          style={styles.thumbnail}
          source={{ uri: item.thumbnailUrl }}
        />
      <View style={styles.itemContent}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => handleUpdate(item.id)}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 80,
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },itemContent: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    width: '70%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '30%',
    flexDirection: 'column',
  },
  updateButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    padding: 8,
    marginRight: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  deleteButton: {
    width: '100%',
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PostManageScreen;

