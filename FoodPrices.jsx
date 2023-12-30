import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const  headerShown = () => ({
  headerShown: false
})

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={headerShown}
      />
      <Stack.Screen 
        name="FoodDetails" 
        component={FoodDetails}  
        options={headerShown}
      />
      <Stack.Screen 
        name="Maps" 
        component={Maps} 
        options={headerShown}
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={headerShown}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={headerShown}
      />
      <Tab.Screen 
        name="maps" 
        component={Maps}
        options={headerShown}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={headerShown}
      />
    </Tab.Navigator>
  );
}

export default function FoodPrices() {
  return (
    <div>
      <NavigationContainer 
        initialRouteName='Session'
      >
        <StatusBar style="auto"/>
        <StackApp.Navigator>
          <StackApp.Screen 
            name="Session" 
            component={Session}
            options = {headerShown}
          />
          <StackApp.Screen 
            name="AppAcess" 
            component={MyTabs}
            options = {headerShown}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </div>
  )
}
