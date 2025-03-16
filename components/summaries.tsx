import { View, Text, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import CardSummary from "./cardSummary";
import { Image } from "react-native";
import * as Progress from 'react-native-progress';
import Carousel from "./summaryCarousel";


const StarFallImage = require("@/assets/images/Starfall.png")
const HappyEmojiImage = require("@/assets/images/happy-emoji.png")

export default function Summaries() {
  const barData = [
    { value: 9, label: "Sun" },
    { value: 7, label: "Mon" },
    { value: 6, label: "Tue" },
    { value: 8, label: "Wed" },
    { value: 6, label: "Thu" },
    { value: 10, label: "Fri" },
    { value: 7, label: "Sat" }
  ].map((item) => ({
    ...item,
    frontColor: item.value > 8 ? "#FEFFDD" : "#3D1C59"
  }));

  return (
    <>
      {/* Chart */}
      <View style={[styles.container, {paddingBottom: 40}]}>
        <BarChart
          width={350}
          barStyle={{
            width: 30
          }}
          barBorderRadius={4}
          data={barData}
          noOfSections={3}
          hideRules
          hideYAxisText
          xAxisLabelTextStyle={{ color: "white" }}
          isAnimated
          showReferenceLine1
          referenceLine1Position={8}
          referenceLine1Config={{
            color: "#FFE59B",
            width: 345,
            labelText: "8",
            labelTextStyle: {
              color: "#FFE59B",
              fontWeight: "bold"
            }
          }}
          maxValue={15}
          yAxisColor="#7E4AB7"
          xAxisColor="#7E4AB7"
        />
      </View>

      {/* Carousel */}
      <View style={{ paddingBottom: 10 }}>
        <Carousel />
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        <CardSummary style={styles.card1}>
          <Text style={{
            color: "#DEBFFF",
            fontSize: 12
          }}>Sleep Quality Score</Text>

          <Image source={StarFallImage}
            style={{
              width: 50,
              height: 50,
            }}
          />

          <Text style={[styles.cardText, {
            fontSize: 30,
            textShadowColor: "#FFE59B",
            textShadowRadius: 3,
            textShadowOffset: { width: 0, height: 0 }
          }]}>70</Text>

          <Text style={{
            color: "#DEBFFF",
            fontSize: 12,
            paddingBottom: 10
          }}>out of 100</Text>

          <Progress.Bar
            progress={0.7}
            color="#FFE59B"
            height={10}
          />

        </CardSummary>
        <View style={styles.grid_container_2}>
          <CardSummary style={styles.card2}>
            <Image source={HappyEmojiImage}
              style={{
                width: 55,
                height: 50
              }}
              resizeMode="contain"
            />
            <Text style={{ color: "#fff", flex: 1 }}>You've been waking up {<Text style={{
              color: "#fff",
              textShadowColor: "#FFE59B",
              textShadowRadius: 3,
              textShadowOffset: { width: 0, height: 0 }
            }}>happy</Text>} lately.</Text>
          </CardSummary>

          <CardSummary style={styles.card3}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}> 10th Day Streak! </Text>
          </CardSummary>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
    marginTop: 20
  },
  grid_container_2: {
    flex: 1,
    gap: 10
  },
  card1: {
    width: "48%",
    height: 200,
    alignItems: "center",
    gap: 2,
    backgroundColor: "#3D1C59",
    padding: 10
  },
  card2: {
    height: 120,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#3D1C59",
    padding: 10
  },
  card3: {
    height: 70,
    backgroundColor: "#3D1C59",
    padding: 10

  },
  cardText: {
    color: "#fff"
  }
});
