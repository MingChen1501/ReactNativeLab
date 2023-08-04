
import { TouchableOpacity, StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, {useState} from "react";

const data = [
  {
    "id": 1,
    "author": {
      "id": 101,
      "avatar": "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
      "name": "Tác giả A"
    },
    "title": "Bài viết 1",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... sdfsdffffdffffffffffff Để căn chỉnh vị trí của 2 view text chứa tên tác giả và thời gian post bài trong view headerRight có direction là column, bạn có thể sử dụng thuộc tính alignItems. Thuộc tính alignItems có thể nhận một số giá trị khác nhau, trong đó giá trị flex-start sẽ căn chỉnh các thành phần con ở phía bên trái của trục phụ.",
    "images": [
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F658ccb8c-bd4f-4803-b5f0-05920d1554a0_1280x1810.jpeg",
      "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"
    ],
    "published_at": "2023-07-31T12:30:00Z"
  },
  {
    "id": 2,
    "author": {
      "id": 102,
      "avatar": "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
      "name": "Tác giả B"
    },
    "title": "Bài viết 2",
    "content": "Suspendisse non eros facilisis, laoreet odio in, volutpat arcu. ...",
    "images": [
      ],
    "published_at": "2023-07-30T18:45:00Z"
  },
  {
    "id": 3,
    "author": {
      "id": 103,
      "avatar": "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
      "name": "Tác giả C"
    },
    "title": "Bài viết 3",
    "content": "Vestibulum in ipsum vitae nunc pharetra interdum. Sed porttitor purus ...",
    "images": [
      "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
      "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg",
      "https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"
    ],
    "published_at": "2023-07-29T09:15:00Z"
  }
]

//input 2023-07-30T18:45:00Z
//output 23 hours ago
const getTimePublish = (published_at) => {

}
const HomeScreen = (props) => {
  const [posts, setPosts] = useState(data)
  const renderItem = ({item}) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image
              source={{uri: item.author.avatar}}
              style={styles.authorAvatar}
            />
          </View>
          <View style={styles.postHeaderRight}>
            <Text style={styles.AuthorName}>
              {item.author.name}
            </Text>
            <Text style={styles.postPublishedAt}>
              {item.published_at}
            </Text>
          </View>
        </View>
        <View styles={styles.postBody}>
          <View>
            <Text style={styles.postTitle}>
              {item.title}
            </Text>
          </View>
          <View>
            <Text style={styles.postContent}>
              {item.content}
            </Text>
          </View>
          <View styles={styles.postImage}>
            {/* toán tử 3 ngôi để render JSX */}
            {item.images[0] ? (
              <Image
                source={{uri: item.images[0]}}
                resizeMode="contain"
                style={{width: '100%', height: 300}}/>
               
            ) : null}
          </View>
        </View>
        <View style={styles.postOperation}>
          <TouchableOpacity style={styles.buttonOperation}>
            <Ionicons name="star-outline" size={30} color="black"/>
            <Text>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation}>
            <MaterialCommunityIcons name="comment-text-outline" size={30} color="black"/>
            <Text>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation}>
            <AntDesign name="sharealt" size={30} color="black"/>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 4
    },
    postContainer: {
      flex: 1,
      flexDirection: 'column',
      borderRadius: 10,
      marginBottom: 4,
    },
    postHeader: {
      flex: 1,
      width: '100%',
      backgroundColor: '#B3E5FCFF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
    },
    postHeaderLeft: {
      padding: 15,
      width: '20%',
    },
    authorAvatar: {
      width: 45,
      height: 45,
      borderRadius: 50,
    },
    postHeaderRight: {
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    AuthorName: {
      fontSize: 20,
      marginTop: 25,
      fontWeight: 'bold',
    },
    postPublishedAt: {
      marginTop: 5,
      paddingLeft: 10,
    },
    postBody: {
      justifyContent: 'flex-start',
      padding: 15,
      width: '100%',
      flexDirection: 'column',
    },
    postTitle: {
      fontSize: 16,
      backgroundColor: 'rgba(179,229,252,0.6)',
      fontWeight: 'bold',
      padding: 5,
      color: '#6B5E5E'
    },
    postContent: {
      backgroundColor: 'rgba(179,229,252,0.6)',
      paddingLeft: 10,
      color: '#6B5E5E',
      fontSize: 15,
      paddingBottom: 10,
    },
    postImage: {
      width: '100%',
    },
    postOperation: {
      backgroundColor: '#B3E5FCFF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      height: 42,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttonOperation: {
      flexDirection: 'row',
      alignItems: 'center',
    }
  
})