//relaxation page
import { View, Text, Dimensions } from "react-native"; 
import { StyleSheet } from "react-native";
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const BreathWorkImage = require("@/assets/images/Breathwork.png")
const FrequenciesImage = require("@/assets/images/Frequencies.png")
const JournalImage = require("@/assets/images/Journal.png")

console.log(typeof(BreathWorkImage))

import Card from "./card";


export default function relaxation (){
    return(
        <>
        <View style={styles.cardContentColumn}>
            <Card 
            label="Breathwork"
            image={BreathWorkImage}
            />
            <Card 
            label="Sleep Frequencies"
            image={FrequenciesImage}
            />
            <Card 
            label="Journaling"
            image={JournalImage}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContentColumn:{
        flex:1,
        alignItems: "center",
        flexDirection: "column",
        gap:10

    },
    text:{
        color: "white"
    }
})