import { View, Text, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

type Props = {
    label: string,
    image: object
}

const card = ({ label, image }: Props) => {
    return (
        <>
            <ImageBackground
                source={image}
                style={styles.cardContainer}
                resizeMode="cover"
                imageStyle={{
                    borderRadius: 10,
                    width: "100%"
                }}
            >
                <Text style={styles.cardText}>{label}</Text>
            </ImageBackground>
        </>
    )
}

export default card;

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 150,
        backgroundColor: "gray",
        borderRadius: 10,
        justifyContent: "center",
    },
    cardText: {
        fontWeight: "bold",
        color: "white",
        paddingLeft: 20 
    }
})