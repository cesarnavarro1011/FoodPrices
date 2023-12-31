import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Home from './view/home';
import { NativeBaseProvider } from "native-base";
import Maps from "./view/maps";
import Setting from "./view/setting";

const  headerShown = () => ({
  headerShown: false
})

const TabHome = createBottomTabNavigator();
function MyTabs() {
  return (
    <TabHome.Navigator>
      <TabHome.Screen 
        name="Home" 
        component={Home}
        options = {{ 
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name='home' color={color} size={size}/>
          ),
          tabBarBadge: 3,
        }}
      />
      <TabHome.Screen 
        name="maps" 
        component={Maps}
        options = {{ 
          tabBarLabel: "Maps",
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='google-maps' color={color} size={size}/> 
          ),
          tabBarBadge: 3,
        }}
      />
      <TabHome.Screen 
        name="Settings" 
        component={Setting}
        options = {{ 
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings-outline"color={color} size={size}/> 
          ),
          tabBarBadge: 3,
        }}
      />
    </TabHome.Navigator>
  );
}

const StackHome = createNativeStackNavigator();
function MyStack() {
  return (
    <StackHome.Navigator>
      {/* <StackHome.Screen 
        name="FoodDetails" 
        component={FoodDetails}  
        options={headerShown}
      />
      <StackHome.Screen 
        name="Maps" 
        component={Maps} 
        options={headerShown}
      />
      <StackHome.Screen 
        name="Settings" 
        component={Settings} 
        options={headerShown}
      /> */}
    </StackHome.Navigator>
  );
}

const StackApp = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar style="auto" />
          <StackApp.Navigator>
          {/* <StackApp.Screen 
            name="Session" 
            component={Session}
            options = {headerShown}
          /> */}
          <StackApp.Screen 
            name = "MyTabs" 
            component = {MyTabs}
            options = {headerShown}
          />
        </StackApp.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
