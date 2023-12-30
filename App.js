import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import FoodPrices from "./FoodPrices";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <FoodPrices/>
      </View>
    </NativeBaseProvider>
    
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
