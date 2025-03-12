import React from 'react';
import { Text, View, Dimensions, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const Timer = () => {
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const handlePause = () => {
        setIsRunning((previous)=> !previous)
    }

    return (
        <>
            <View style={styles.body}>
                <Link style={styles.backButton} href="/">
                    <Ionicons name='chevron-back-outline' color={"#fff"} size={24} />
                </Link>
                <View style={styles.timerContainer}>
                    <View style={styles.innerCircle} />  {/* Inner background */}
                    <CountdownCircleTimer
                        isPlaying = {isRunning}
                        duration={28800}
                        colors={'#FFE59B'}
                        size={300}
                        strokeWidth={15}
                        trailColor={'#261A33'}
                    >
                        {({ remainingTime }) => (
                            <>
                                <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
                                <Pressable onPress={handlePause}>
                                    { isRunning ?
                                        (<Ionicons name='pause-outline' color={'#fff'} size={24} style={{
                                        paddingTop: 24
                                    }} />)
                                :(
                                    <Ionicons name='play' size={24} color={'#fff'} style={{
                                        paddingTop: 24}} />
                                )
                                }
                                </Pressable>
                            </>
                        )}
                    </CountdownCircleTimer>
                </View>
                <Ionicons name='musical-note' size={24} color={"#fff"} style={{paddingTop: 30}}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#261A33',
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        paddingTop: 30,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        position: 'absolute',
        width: 270,
        height: 280,
        borderRadius: 115,
        backgroundColor: '#7A35B4',
    },
    backButton: {
        position: "absolute",
        top: 65,
        left: 40
    }
});

export default Timer;
