import { Avatar, Box, Center, Container, HStack, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Setting() {
  return (
    <SafeAreaView>
      <Stack>
        <Text pl={5}>Settings</Text>
        <Center>
          <VStack>
            <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
              uri: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
            }}>
            AM
            </Avatar>
            <Center mt={5} justifyContent="center" alignItems="center">
              <Text fontSize={20} fontWeight="bold"> Andres Camilo Montero</Text>
            </Center>
              <Stack w="350" h="auto" mt={2} justifyContent="center" alignItems="center">
                <HStack p={3} mt={3} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="account" size={29} color="black" />
                  <Text fontSize={19} w={270} pl={3}>Contact Details</Text>
                  <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                </HStack>
                <HStack p={3} mt={3} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="cards-heart" size={29} color="black" />
                  <Text fontSize={19} w={270} pl={4}>My Favorites</Text>
                  <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                </HStack>
                <HStack p={3} mt={3} justifyContent="center" alignItems="center">
                  <Ionicons name="md-settings-sharp" size={29} color="black" />
                  <Text fontSize={19} w={270} pl={4}>Settings</Text>
                  <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                </HStack>
                <HStack p={3} mt={3} justifyContent="center" alignItems="center">
                  <MaterialCommunityIcons name="contacts" size={29} color="black" />
                  <Text fontSize={19} w={270} pl={4}>Contact Us</Text>
                  <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                </HStack>
              </Stack>
          </VStack>
        </Center>
      </Stack>
    </SafeAreaView>
  )
}
