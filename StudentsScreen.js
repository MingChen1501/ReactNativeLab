import {TextInput, Pressable, FlatList, StyleSheet, Text, View, Image, Button, Modal, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListStudents = [
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
  const [students, setStudents] = useState(ListStudents)
  const [modalUpdateStudent, setModalUpdateStudent] = useState(false)
  const [modalDeleteStudent, setModalDeleteStudent] = useState(false)
  const [index, setIndex] = useState(null)
  const [studentUpdate, setStudentUpdate] = useState(students.at(index))
  const handleDelete = (id) => {
    const updatedList = students.filter(item => item.id !== id);
    setStudents(updatedList);
  }
  const handleUpdate = () => {
    const updatedList = students.map(item => {
      if (item.id === studentUpdate.id) {
        return {
          ...studentUpdate,
        };
      }
      return item;
    });
    setStudents(updatedList);

    // console.log(updatedList)
    // console.log(students)
    // asynchronous tại updatedList và students vẫn chưa được cập nhật
    // tại sao vậy?
    // cần phải tìm hiểu thêm về cơ chế hoạt động của useState
    // cơ chế hoạt động của useState là gì?
    // useState là một function trả về một mảng gồm 2 phần tử là state và setState 
    // state là giá trị hiện tại của state
    // setState là một function có thể thay đổi giá trị của state
    // khi gọi setState thì React sẽ re-render lại component
    // khi re-render lại component thì state sẽ được cập nhật
    // nhưng ở đây thì sao?
    // khi console.log(students) sau khi setStudents() thì students chưa được cập nhật
    // vậy làm sao để biết được khi nào state đã được cập nhật?
    // khi nào state đã được cập nhật thì React sẽ re-render lại component
    // khi re-render lại component thì useEffect sẽ được gọi
    // useEffect sẽ được gọi khi nào?
    // useEffect sẽ được gọi khi component được render lần đầu tiên
    // useEffect sẽ được gọi khi state thay đổi
    // useEffect sẽ được gọi khi props thay đổi
    // useEffect sẽ được gọi khi context thay đổi
    // useEffect sẽ được gọi khi ref thay đổi
    // useEffect sẽ được gọi khi component unmount
    // useEffect sẽ được gọi khi nào thì phụ thuộc vào tham số thứ 2 của nó
    // tham số thứ 2 của useEffect là một mảng
    // mảng này chứa các giá trị phụ thuộc
    // nếu mảng này rỗng thì useEffect sẽ được gọi khi component được render lần đầu tiên
  }
  useEffect(() => {
  }, [students]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Students Screen</Text>
      <FlatList
        data={students}
        renderItem={({item, index}) => {
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
            <Pressable
              onPress={() => handleDelete(item.id)} >
              <Image
                source={{uri: 'https://img.icons8.com/ios/50/000000/delete-forever.png'}}
                style={styles.StyleIcon}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setIndex(index)
                setStudentUpdate(students.at(index))
                setModalUpdateStudent(true)
                }}>
              <Image
                source={{uri: 'https://img.icons8.com/ios/50/000000/edit--v1.png'}}
                style={styles.StyleIcon}
              />
            </Pressable>
            </View>
          </View>
          )
        }}
        keyExtractor={item => item.id}>
      </FlatList>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalUpdateStudent}>
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
              }}>Update Student</Text>
            </View>
            <TextInput 
              defaultValue={students.at(index).name} 
              editable={true}
              style={styles.inputTextUpdate}
              onChangeText={(text) => setStudentUpdate({ ...studentUpdate , name: text})}
              />
            <TextInput 
              defaultValue={students.at(index).address}
              editable={true} 
              style={styles.inputTextUpdate}
              onChangeText={(text) => setStudentUpdate({ ...studentUpdate , address: text})}
              />
            <TextInput 
              defaultValue={students.at(index).phone} 
              editable={true}
              style={styles.inputTextUpdate}
              onChangeText={(text) => setStudentUpdate({ ...studentUpdate ,phone: text})}
              />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              }}>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => {
                  handleUpdate();
                  setModalUpdateStudent(!modalUpdateStudent)
                }}>
                <Text style={{fontSize:25}}>Update</Text>
              </Pressable>
              <Pressable 
                style={styles.buttonUpdateModal}
                onPress={() => setModalUpdateStudent(!modalUpdateStudent)}>
                <Text style={{fontSize:25}}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 300,
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
  },
  StyleIcon: {
    width: 40,
    height: 40,
  }
})