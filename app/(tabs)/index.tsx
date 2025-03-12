import { View, Text, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import ViewChanger from "@/components/viewChanger";
import { useAnimatedRef, useSharedValue, useAnimatedStyle, interpolate, Extrapolate, useAnimatedScrollHandler, withTiming } from "react-native-reanimated"
import Animated from "react-native-reanimated";

const Ground = require("@/assets/images/ground.png")
const MoonCloud = require("@/assets/images/moon-cloud.png")
const Cloud = require("@/assets/images/cloud.png")

export default function HomeScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()

  //getting the current time
  const currentTime = {
    currentHour: new Date().getHours(),
    currentMinute: new Date().getMinutes().toString().padStart(2, "0"),
    currentSecond: new Date().getSeconds()
  }
  const { currentHour, currentMinute, currentSecond } = currentTime;
  const parsedCurrentMinute = parseInt(currentMinute)

  const sleepTime = {
    //22 being 10PM
    sleepHours: Math.abs(currentHour - 22)
  }
  const { sleepHours } = sleepTime;

  const scrollY = useSharedValue(0); //initial scroll position

  //opacity
  const opacity = useSharedValue(1); //initial

  const animatedOpacity = useAnimatedStyle(()=>{
    return{
      opacity: interpolate (scrollY.value, [0,120],[1,0], "clamp")
    }
  })

  return (
    <>
      <View style={styles.body}>
        {/* section 1 */}
        <View>
          <Image source={MoonCloud} style={{ position:"absolute", top:50, left: -50}}/>
          <Image source={Cloud} style={{ position:"absolute", top:130, right: -50}}/>
          <View style={styles.headerContainer}>
            {sleepHours > 1 ? (
              <Text style={[styles.text]}> Time for bed in{'\n'}{sleepHours} hours</Text>
            ) : (
              <Text style={[styles.text]}> Time for bed in{'\n'}{sleepHours} hour</Text>
            )}
          </View>
        </View>

        {/* section 2 */}
        <Animated.ScrollView  //reanimated ver of scrollview
          ref={scrollRef} //reference point for the animated scroll view
          scrollEventThrottle={16}
          onScroll={useAnimatedScrollHandler(e => {
            scrollY.value = e.contentOffset.y //gives current vertical scroll position and updaes initial position
          })} //basically watches the scroll
          style={{
            flexDirection: "column",
            zIndex: 2,
            position: "absolute",
            height: height,
          }}
        >
          <Animated.View style={[{
            height: 700,
            justifyContent: "center",
            alignItems: "center"
          }, animatedOpacity]}>
            <Link href="/timer" style={{
              textAlign: "center",
              width: 100,
              color: "white",
              backgroundColor: "#7E4AB7",
              padding: 10,
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.3,
              shadowRadius: 4
            }}>Sleep</Link>
          </Animated.View>

          <View style={{
            flexDirection: "column",
          }}>
            <View style={{
              height: 5,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "baseline",
              marginBottom: -40

            }}>
              <Image source={Ground} />
            </View>
            <View style={{
              backgroundColor: "#7E4AB7",
              width: width,
              height: 850,
              padding: 10,
              zIndex: 5
            }}>
              <ViewChanger />
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#261A33",
    width: width,
    height: height,
  },

  text: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 40
  },

  headerContainer: {
    height: height - 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
})

