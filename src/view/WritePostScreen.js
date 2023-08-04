
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import ImageStack from "../component/ImageStack";
import Feather from 'react-native-vector-icons/Feather';

const imagesUpload = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/200"
]
const WritePostScreen = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder={'Title'}
        returnKeyType={'next'}
      />
      <TextInput
        style={styles.content}
        multiline={true}
        placeholder={'Content...'}
        returnKeyType={'go'}
        onBlur={Keyboard.dismiss}
      />
      <View style={styles.mediaContainer}>
        <ImageStack
          images={imagesUpload}/>
        <TouchableOpacity style={styles.addMedia}>
        <Feather name={'image'} size={60} />
        
        </TouchableOpacity>
      </View>
      <View style={styles.operation}>
        <TouchableOpacity style={styles.publish}
          onPress={() => {}}>
          <Text style={styles.publishText}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel}
          onPress={() => {}}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default WritePostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FCFF',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    width: '95%',
    height: '9%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    color: 'rgba(0,0,0,0.83)',
    borderRadius: 20,
    fontSize: 20
  },
  content: {
    width: '95%',
    height: '59%',
    paddingTop: 15,
    padding: 15,
    color: 'rgba(0,0,0,0.83)',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    fontSize: 20
  },
  mediaContainer: {
    flexDirection: 'row',
    width: '95%',
    borderRadius: 20,
    height: '15%',
    padding: 15,
    backgroundColor: '#FFF'
  },
  addMedia: {
    justifyContent: 'center',
    width: '20%',
    height: '100%',
  },
  operation: {
    flexDirection: 'row',
    height: '9%',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  publish: {
    width: '48%',
    margin: 5,
    backgroundColor: '#03A9F4',
    borderRadius: 20,
  },
  publishText: {
    textAlign: 'center',
    padding: 10,
    color: '#FFF',
    fontSize: 20
  },
  cancel: {
    width: '48%',
    margin: 5,
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 20,
  },
  cancelText: {
    textAlign: 'center',
    padding: 10,
    color: '#000',
    fontSize: 20
  },
})