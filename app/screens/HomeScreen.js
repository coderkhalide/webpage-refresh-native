import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import Screen from '../components/Screen'
import colors from '../configs/colors' 

function HomeScreen({navigation}) {
    const [url, setUrl] = useState('')
    const [time, setTime] = useState('')

    const handlePress = () => {
        if(!url && !time) return Alert.alert('Worning', 'All fields are required!')
        if(time < 1) return Alert.alert('Worning', 'Time have to be greater than or equal to 1!') 
        navigation.navigate('Webpage', { url, time })
    }

    return (
        <Screen style={styles.container}>
            <View>
                <Text style={styles.title}>Auto Refresh Webpage</Text>
                <View>
                    <Image
                        source={require('../assets/cat.png')}
                        style={styles.image}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUrl}
                    value={url}
                    placeholder="Enter a URL..."
                    autoCompleteType="off"
                    autoFocus={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTime}
                    value={time}
                    placeholder="Auto reload at (second)..."
                    autoCompleteType="off"
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={handlePress} style={styles.button}>
                    <Text>GO</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 15,
        color: colors.primary
    },  
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        borderColor: 'orange',
        paddingHorizontal: 15,
        borderRadius: 10
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 160
    },
    button: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        paddingVertical: 14,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 15
    }
})

export default HomeScreen