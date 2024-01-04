import { Box, Center, Container, HStack, Heading, ScrollView, Stack, VStack } from 'native-base';
import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Card from '../components/card';


export default function Home({ navigation }) {
  const cards = [1,2,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <SafeAreaView>
      <VStack space={2} justifyContent="center">
        <Container w="100%" maxW={90} minW={10}>
          <Heading pl={4}>Logo</Heading>
        </Container>
        <HStack space={1} pb={3} justifyContent="center">
          <Center 
            h={{ base: 12, lg: 25 }} 
            w="140" _text={{ color: "white", fontWeight: "bold", fontSize: "xs" }} 
            bg="primary.300" 
            rounded="md" 
            shadow={10} 
          >This is the Center</Center>
          <Center 
            h={{ base: 12, lg: 25 }} 
            w="140" _text={{ color: "white", fontWeight: "bold", fontSize: "xs" }} 
            bg="primary.500" 
            rounded="md" 
            shadow={10} 
          >This is the Center</Center>
          <Center 
            h={{ base: 12, lg: 25 }} 
            w="140" _text={{ color: "white", fontWeight: "bold", fontSize: "xs" }} 
            bg="primary.700" 
            rounded="md" 
            shadow={10} 
          >This is the Center</Center>
        </HStack>
      </VStack>
      <ScrollView pt={1} mb={110} >
        <Stack height="auto" overflow="hidden" flexWrap="wrap" flexDirection="row" >{
          cards.map((cardCount) => (
            <Card 
              key = {cardCount}
              onPress={() => {
                navigation.navigate('CardDetails')
              }}  
            />
          ))}
          </Stack>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
