import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Home from './src/view/home';
import { NativeBaseProvider } from "native-base";
import Maps from "./src/view/maps";
import Setting from "./src/view/setting";
import CardDetails from "./src/view/cardDetails";

const  headerShown = () => ({
  headerShown: false
})

const StackHome = createNativeStackNavigator();
function MyStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen 
        name="Home" 
        component={Home}  
        options={headerShown}
      />
      <StackHome.Screen 
        name="CardDetails" 
        component={CardDetails}  
        options={headerShown}
      />
    </StackHome.Navigator>
  );
}


const TabHome = createBottomTabNavigator();
function MyTabs() {
  return (
    <TabHome.Navigator>
      <TabHome.Screen 
        name="MyStack" 
        component={MyStack}
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


const StackApp = createStackNavigator();
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
