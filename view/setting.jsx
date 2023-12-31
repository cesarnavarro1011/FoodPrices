import { Avatar, Center, Stack, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native";

export default function Setting() {
  return (
    <SafeAreaView>
      <Stack>
        <Text>Settings</Text>
        <Center>
          <VStack>
            <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
              uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            }}>
            RB
          </Avatar>
          </VStack>
        </Center>
      </Stack>
    </SafeAreaView>
  )
}
