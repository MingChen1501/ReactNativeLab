
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 30,
                color: "yellow"
            }}>
                MainScreen
            </Text>
            <View style={styles.viewImg}>
                <Image style={styles.img}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                }}>
                </Image>
                {/* <Image style={styles.img}
                source={require('../public/images/login-register.png')}>
                </Image> */}
            </View>
            <Pressable style={{
                margin: 10,
                backgroundColor: "green",
                width: 100,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: "center"
            }}
            onPress={() => {props.navigation.navigate("Login")}}
            >
            <Text>Next</Text>
            </Pressable>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        fontSize: 30,
    },
    img: {
        marginHorizontal: 5,
        width: 100,
        height: 100,
        marginTop: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white"
    },
    viewImg: {
        flexDirection: "row",
    }
})