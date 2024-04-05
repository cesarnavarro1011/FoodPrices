import { Box, Center, Container, HStack, Heading, ScrollView, Stack, VStack } from 'native-base';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Card from '../components/card';
import { useFetch } from '../useFetch';
import { Loading } from '../components/loading';
import AlertDown from '../components/alertDown';


export default function Home({ navigation }) {

  const {data, loading, alert}  =  useFetch();
  console.log(data);

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
         <ScrollView pt={1} mb={110}> 
          <Stack height="auto" overflow="hidden">
          {loading 
            ? (<Loading/>) 
            : (
              <View flexDirection="row" flexWrap="wrap">
                {data ? (
                  data.map((data) => (
                    <Card
                      key={data.id}
                      photo={data.photo}
                      ratings={data.rating}
                      title={data.name}
                      description={data.description}
                      price={data.price}
                      onPress={() => {
                        navigation.navigate('CardDetails',{
                          data
                        })
                      }}  
                    />)) 
                ) : ( 
                  <AlertDown alert={alert}/>
                )}
              </View>
        )}</Stack>  
         </ScrollView>
    </SafeAreaView>
  )
}

