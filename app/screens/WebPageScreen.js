import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import { Ionicons } from '@expo/vector-icons'

function WebPageScreen({ route, navigation }) {
    const data = route.params
    const webViewRef = useRef()
    const [reloaded, setReloaded] = useState(0)
    const [timer, setTimer] = useState(Number(data.time) - 1 )

    useEffect(() => {
        const time = Number(data.time) * 1000
        let iterval = setInterval(() => {
            webViewRef.current.reload()
            setReloaded(reloaded + 1)
        }, time)
        
        return () => clearInterval(iterval)
    }, [data, reloaded])

    useEffect(() => {
        let iterval = setInterval(() => {
            if(timer <= 0) setTimer(Number(data.time) - 1)
            else setTimer(timer - 1)
        }, 1000)

        return () => clearInterval(iterval)
    }, [timer])

    return (
        <Screen style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.topBar_icon}>
                    <Ionicons name="arrow-back-circle-outline" size={34} color="black" />
                </TouchableOpacity>
                <View style={styles.topBar_center}>
                    <Text style={styles.text}>Reload time {data.time}s</Text>
                    <Text style={styles.subText}>Next reload in {timer}s</Text>
                    <Text style={styles.subText}>Total Reloaded {reloaded}x</Text>
                </View>
            </View>
            <WebView 
                ref={(ref) => webViewRef.current = ref}
                source={{ uri: data.url }}
                style={styles.webview}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    topBar: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'relative'
    },
    topBar_icon: {
        top:  0,
        left: 10,
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    topBar_center: {
        flex: 1,
    },
    text: {
        color: colors.primary,
        textAlign: 'center',
        fontSize: 14
    },
    subText: {
        fontSize: 12,
        color: colors.primary,
        textAlign: 'center',
    }
})

export default WebPageScreen