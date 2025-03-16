import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

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
    const [oversleepTime, setOversleepTime] = useState<number>(0);
    const [isOversleeping, setIsOversleeping] = useState<boolean>(false);

    const handlePause = () => {
        setIsRunning((previous) => !previous);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isOversleeping) {
            interval = setInterval(() => {
                setOversleepTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOversleeping]);

    return (
        <View style={styles.body}>
            <Link style={styles.backButton} href="/">
                <Ionicons name="chevron-back-outline" color={"#fff"} size={24} />
            </Link>

            <View style={styles.timerContainer}>
                <View style={styles.innerCircle} /> 
                <CountdownCircleTimer
                    isPlaying={isRunning}
                    duration={10} 
                    colors={"#FFE59B"}
                    size={300}
                    strokeWidth={15}
                    trailColor={"#261A33"}
                    onComplete={() => {
                        setIsOversleeping(true);
                        return { shouldRepeat: false };
                    }}
                >
                    {({ remainingTime }) =>
                        remainingTime > 0 ? (
                            <>
                                <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
                                <Pressable onPress={handlePause}>
                                    {isRunning ? (
                                        <Ionicons
                                            name="pause-outline"
                                            color={"#fff"}
                                            size={24}
                                            style={{ paddingTop: 24 }}
                                        />
                                    ) : (
                                        <Ionicons
                                            name="play"
                                            size={24}
                                            color={"#fff"}
                                            style={{ paddingTop: 24 }}
                                        />
                                    )}
                                </Pressable>
                            </>
                        ) : (
                            <View style={{ alignItems:"center", }}>
                                <Text style={{  color:"#ECCAFF" }}>Oversleep Time</Text>
                                <Text style={styles.timerText}>{formatTime(oversleepTime)}</Text>
                            </View>
                        )
                    }
                </CountdownCircleTimer>
            </View>

            <Ionicons name="musical-note" size={24} color={"#fff"} style={{ paddingTop: 30 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#261A33",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
    timerText: {
        alignItems:"center",
        color:"#fff",
        fontWeight:"bold",
        fontSize: 25
    },
    timerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        position: "absolute",
        width: 270,
        height: 280,
        borderRadius: 115,
        backgroundColor: "#7A35B4",
    },
    backButton: {
        position: "absolute",
        top: 65,
        left: 40,
    },
});

export default Timer;
