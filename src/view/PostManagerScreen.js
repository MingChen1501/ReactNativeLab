import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, RefreshControl, Modal, TextInput, Pressable } from 'react-native';

const ip = '172.20.10.5'
const port = '3000'
const url = 'http://' + ip + ':' + port
const endpointPosts = url + '/posts'

const PostManageScreen = () => {
  
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false)
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState({});
  const [createTitle, setCreateTitle] = useState('')
  const [createContent, setCreateContent] = useState('')
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${endpointPosts}`);
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsRefreshing(false);
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchPosts();
  };

  const handleCreateButton = () => {
    setIsModalCreateVisible(true);
  }

  const handleCreate = async () => {
    try {
      const response = await fetch(`${endpointPosts}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: createTitle,
          content: createContent,
          url: 'https://picsum.photos/200/300',
          thumbnailUrl: 'https://picsum.photos/200/300',
        }),
      });
      const json = await response.json();
      setPosts([...posts, json]);
      setIsModalCreateVisible(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  const handleUpdateButton = (post) => {
    console.log('post updating is:', post);
    setSelectedPost(post)
    setUpdatedTitle(post.title)
    setUpdatedContent(post.content)
    setIsModalUpdateVisible(true);
  };
  const handleUpdate = async () => {
    try {
      await fetch(`${endpointPosts}/${selectedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedTitle,
          content: updatedContent,
          url: selectedPost.url,
          thumbnailUrl: selectedPost.thumbnailUrl,
        }),
      });
      const updatedPost = {
        ...selectedPost,
        title: updatedTitle,
        content: updatedContent,
      };
      const updatedPosts = posts.map((item) =>
        item.id === selectedPost.id ? updatedPost : item
      );
      setPosts(updatedPosts);
      setIsModalUpdateVisible(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }

  }
  
  const handleDelete = async (id) => {
    try {
      await fetch(`${endpointPosts}/${id}`, {
        method: 'DELETE',
      });
      setPosts(posts.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
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
                onPress={() => handleUpdateButton(item)}
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateButton}>
        <Text 
          style={{
            color: 'white',
            fontSize: 20,
        }}>create</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalUpdateVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{
              alignItems:'center',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginBottom: 20,
              }}>
              <Text style={{
                fontSize: 25,
              }}>update</Text>
            </View>
            <TextInput
              defaultValue={selectedPost.title}
              editable={true}
              style={styles.inputTextUpdate}
              onChangeText={(text) => setUpdatedTitle(text)}
              />
            <TextInput 
              defaultValue={selectedPost.content}
              editable={true} 
              style={styles.inputTextUpdate}
              onChangeText={(text) => setUpdatedContent(text)}
              />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              }}>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => {
                  handleUpdate()
                  setIsModalUpdateVisible(!isModalUpdateVisible)
                }}>
                <Text style={{fontSize:25}}>Update</Text>
              </Pressable>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => setIsModalUpdateVisible(!isModalUpdateVisible)}>
                <Text style={{fontSize:25}}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalCreateVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{
              alignItems:'center',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginBottom: 20,
              }}>
              <Text style={{
                fontSize: 25,
              }}>create</Text>
            </View>
            <TextInput
              placeholder='title'
              placeholderTextColor="#A9A9A9"
              editable={true}
              style={styles.inputTextUpdate}
              onChangeText={(text) => setCreateTitle(text)}
              />
            <TextInput 
              editable={true}
              placeholder='content'
              placeholderTextColor="#A9A9A9"
              style={styles.inputTextUpdate}
              onChangeText={(text) => setCreateContent(text)}
              />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              }}>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => {
                  handleCreate()
                  setIsModalCreateVisible(!isModalCreateVisible)
                }}>
                <Text style={{fontSize:25}}>Update</Text>
              </Pressable>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => setIsModalCreateVisible(!isModalCreateVisible)}>
                <Text style={{fontSize:25}}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );

}



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
  createButton: {
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
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
  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    height: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  inputTextUpdate: {
    borderBottomColor: 'black',
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  buttonUpdateModal: {
    fontSize:25,
    backgroundColor:'blue',
    width: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default PostManageScreen;

