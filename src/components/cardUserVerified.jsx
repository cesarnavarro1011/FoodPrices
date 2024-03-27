import { Box, HStack, Image, Stack, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export default function CardUserVerified(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress = { onPress }>
      <Stack h="auto" py={3} mt={1}>
        <Box flexDirection="row">
          <Image position="relative" top={2} borderRadius={100} source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg" }} 
              alt="Alternate Text" size="xs" 
            />
          <Box justifyContent="center" w="100%" h="auto" maxW={305} pl={2}>
            <HStack alignItems="center">
              <Text fontWeight="bold" fontSize={14}>Account Verified</Text>
              <MaterialIcons name="verified" size={20} color="black"/>
            </HStack>
            <Text fontWeight="400" fontSize={12}>Restaurant</Text>
          </Box>
        </Box>
      </Stack>
    </TouchableOpacity>
  )
}