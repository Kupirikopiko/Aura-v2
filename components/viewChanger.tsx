import Relaxation from "./relaxation";
import Summaries from "./summaries";

import { View, Pressable, Text } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function ViewChanger() {
    const [showRelaxation, setShowRelaxation] = useState(true);

    return (
        <View>
            <View style={styles.tabViewChanger}>
                <Pressable onPress={() =>
                    setShowRelaxation(!showRelaxation)}>
                    <Text style={[styles.text, showRelaxation ? styles.activeView : styles.inactiveView]}>Relaxation</Text>
                </Pressable>
                <Pressable onPress={() => setShowRelaxation(!showRelaxation)}>
                    <Text style={[styles.text, !showRelaxation ? styles.activeView : styles.inactiveView]}>Summaries</Text>
                </Pressable>
            </View>

            <View style={{ paddingTop: 25 }}>{showRelaxation ? <Relaxation /> : <Summaries />}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabViewChanger: {
        flexDirection: "row", // Arrange items horizontally
        justifyContent: "space-around", // Space buttons evenly
        alignItems: "center", // Align vertically
        paddingVertical: 10
    },

    text: {
        color: "white"
    },
    activeView: {
        fontWeight: "bold"
    },
    inactiveView: {
        fontWeight: "regular"
    }
})