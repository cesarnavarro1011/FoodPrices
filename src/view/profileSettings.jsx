import { Avatar, Center, Stack, Text, VStack } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";

export default function ProfileSettings(props) {
  
  return (
    <SafeAreaView>
      <Stack>
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

          </VStack>
        </Center>
      </Stack>
    </SafeAreaView>
  )
}

