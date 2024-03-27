import { AspectRatio, Badge, Box, Center, Container, Flex, HStack, Heading, Image, Pressable, Stack, Text, VStack } from "native-base";
import { StyleSheet, Touchable, View } from "react-native";
import Ratings from "./ratings";

export default function Card(props) {
  const { onPress, photo, title, description, price } = props 
  
  return (
    <Pressable  onPress = { onPress }>
    <Container maxWidth={80} width={{ base: 178, lg: 250 }} m={1} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"  
    }}>
    <Box>
      <AspectRatio w="100%" ratio={12 / 9}>
        <Image source={{
        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
      }} alt="image" />
      </AspectRatio>
      <Center bg="violet.500" _dark={{
      bg: "violet.400"
    }} _text={{
      color: "warmGray.50",
      fontWeight: "700",
      fontSize: "xs"
    }} position="absolute" bottom="0" px="3" py="1.5">
        PHOTOS
      </Center>
    </Box>
    <Stack p="3" space={1}>
      <Stack space={2}>
        <Heading size="sm" ml="-1">
          The Garden City
        </Heading>
        <Text fontSize="xs" _light={{
        color: "violet.500"
      }} _dark={{
        color: "violet.400"
      }} fontWeight="500" ml="-0.5" mt="-1">
          Comida tipica de la costa
        </Text>
      </Stack>
      {/* <Ratings 
        isDisable = "flase"
        size={15} 
        b={6} 
        ml={-1} 
        mt={0}
      /> */}
      <HStack alignItems="center" space={4} justifyContent="space-between">
        <Badge variant="solid" bg="emerald.500" alignSelf="left" w={65} h={8} my={0} 
          _text={{ fontSize: 11, fontWeight: "bold" }}>
          19.000
        </Badge>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <Text color="coolGray.600" fontSize="xs" _dark={{
            color: "warmGray.200" }} fontWeight="400"
          >
            6 mins ago
          </Text>
        </HStack>
      </HStack>
    </Stack>
  </Container>
  </Pressable>
  )
}

