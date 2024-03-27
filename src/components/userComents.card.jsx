import { Box, Divider, HStack, Image, Stack, Text, VStack } from 'native-base'
import React from 'react'
import Ratings from './ratings'

export default function UserComents() {
  return (
    <Stack h="auto" py={3} mt={3}>
      <Box flexDirection="row">
        <Image position="relative" top={2} borderRadius={100} source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg" }} 
            alt="Alternate Text" size="xs" 
          />
        <Box w="100%" h="auto" maxW={305} pl={2} >
          <Text fontWeight="bold" fontSize={17}>Name</Text>
          <Text w="100%" h="auto">jjfsdgsdhgshdsdhdsdhdshsfhfhdfsfsffsfsfsfshdhffhddhd</Text>
          <Ratings size={20} ml={-1} mt={2} b={7} />
        </Box>
      </Box>
      {/* <Divider my="1" bg="emerald.500" thickness={1} /> */}
  </Stack>
  )
}
