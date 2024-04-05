import { Badge, Box, Center, Container, Divider, HStack, Heading, Image, ScrollView, Stack, Text, VStack, View } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Rating, AirbnbRating } from 'react-native-ratings';
import UserComents from '../components/userComents.card';
import Ratings from '../components/ratings';
import CardUserVerified from '../components/cardUserVerified';

// const WATER_IMAGE = require('./water.png')

export default function CardDetails({ route, navigation }) {
  const { data } = route.params;
  const usercoments = [1,2,3,4,5];
  const account = [1];
  return (
    <SafeAreaView>
    <ScrollView>
      <Stack  h="auto">
        <Center w="100%" h={200} overflow="hidden" bg="primary.700">
          <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" size="2xl" />
        </Center>
        <View h="auto" p={2} overflow="hidden">
          <Box pl={1}>
            <Heading w="100%" fontSize={29}>{data.name}</Heading>
              <Badge colorScheme="info" alignSelf="left" variant="outline"  my={2}>
                Food
              </Badge>
              <Text fontSize={14} w="100%">
                {data.description}
              </Text>
              <HStack>
                <Box display="flex" flexDirection="row" mt={2} justifyContent="center" alignItems="center">
                <Text pr={2} fontSize={20} fontWeight="bold" >COP</Text>
                  <Badge variant="solid" bg="emerald.500" alignSelf="left" w={77} h={9} my={2} 
                    _text={{ fontSize: 13, fontWeight: "bold" }}>
                    19.000
                  </Badge>
                </Box>
              </HStack>
                <Box>{
                  account.map((a) => (
                    <CardUserVerified
                      key={a}
                      onPress={() => { navigation.navigate('ProfileSettings')}}
                />))
                }</Box>
              <Divider mb={4} bg="emerald.500"/>
              <Text w="100%" h="auto" fontWeight="500" fontSize={19} py={1} pl={1}>Calificación:</Text>
                <Ratings size={24} b={7}/>
              <View mt={5} w="100%" h="auto">
                <Heading fontSize={22} fontWeight="bold" >Comments:</Heading>{
                  usercoments.map((user) =>(
                    <UserComents 
                      key = {user}
                    />
                  ))
              }</View>
          </Box>
        </View>
      </Stack>
    </ScrollView>
    </SafeAreaView>
  )
}
