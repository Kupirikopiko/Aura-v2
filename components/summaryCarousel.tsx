import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import Card from "./cardSummary";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";


const StarFallImage = require("@/assets/images/Starfall.png")
const CardBG = require("@/assets/images/card-background.png")


const SummaryCarousel = () => {
    const width = Dimensions.get("window").width;
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    const WeeklyLog = ({ logs }: any) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, padding: 10 }}>
                {logs.map((logged: any, index: number) => (
                    <View
                        key={index}
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: logged ? "#FFF8C6" : "#5A1B8A"
                        }}
                    />
                ))}
            </View>
        );
    };
    const userLogs = [true, false, true, false, false, true, false];


    // Card component
    const Card1 = () => {
        return (
            <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <ImageBackground 
                    source={CardBG} 
                    style={styles.imageBackground} 
                    imageStyle={{ borderRadius: 10 }} // Ensures image follows card shape
                    resizeMode="cover"
                >
                    <View style={styles.content}>
                        <Ionicons name="star" color={"#FFE59B"} size={24} />
                        <Text style={styles.text}>
                            You've been feeling more well-rested than last week
                        </Text>
                    </View>
                </ImageBackground>
            </Card>
        </View>
        );
    };

    const Card2 = () => {
        return (
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Text style={{ color: "#fff" }}>You logged feeling...</Text>
                    <Text style={{ color: "#fff" }}>Well-rested</Text>
                    <WeeklyLog logs={userLogs} />
                    <Text style={{ color: "#fff" }}>on 5/7 days</Text>
                </Card>
            </View>
        );
    };

    const Card3 = () => {
        return (
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Image source={StarFallImage} style={styles.image} />
                    <Text style={{ color: "#fff" }}>Good Job! Let's keep it up!</Text>
                </Card>
            </View>
        );
    };

    const Card4 = () => {
        return (
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Text style={{ color: "#fff" }}>We've updated your features to better support your sleep goals!</Text>
                    <Text style={{ color: "#fff" }}>Features can always be customized through the settings</Text>
                </Card>
            </View>
        );
    };


    const cards = [
        { id: 1, component: <Card1 /> },
        { id: 2, component: <Card2 /> },
        { id: 3, component: <Card3 /> },
        { id: 4, component: <Card4 /> },
    ];

    return (
        <View>
            <Carousel
                ref={ref}
                width={370}
                height={width / 2}
                data={cards}
                onProgressChange={(_, absoluteProgress) => {
                    progress.value = absoluteProgress;
                }}
                renderItem={({ item }) => item.component}
            />

            <Pagination.Basic
                progress={progress}
                data={cards}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
};

export default SummaryCarousel;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: "100%",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 10
    },
    card: {
        flex: 1,
        borderRadius: 10,
        overflow: "hidden", 
        backgroundColor: "#7034A3",
    },
    imageBackground: {
        flex: 1, // Makes it take full space
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%", // Ensures it covers the entire card
    },
    content: {
        flex: 1,
        padding: 20,
    },
    text: {
        color: "#fff",
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
});