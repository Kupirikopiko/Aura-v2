import { PropsWithChildren } from "react";
import { View, Text, Dimensions } from "react-native";
import { StyleSheet } from "react-native";


type Props = PropsWithChildren<{
  label?: string,
  style?: object,
}>
export default function CardSummary({ label, style, children }: Props) {
  return (
    <>
      <View style={[styles.cardContainer, style]}>
        {children}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset:{width: 0, height: 3},
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  cardText: {
    fontWeight: "bold",
    color: "white"
  }
})