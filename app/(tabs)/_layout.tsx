import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";


export default function TabNavigator() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#3D1C59',
          borderColor: '#3D1C59',
          paddingTop: 10
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7E56A0',
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "You",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          )
        }}
      />

    </Tabs >
  );
}
