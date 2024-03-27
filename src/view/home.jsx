import { Box, Center, Container, HStack, Heading, ScrollView, Stack, VStack } from 'native-base';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Card from '../components/card';
import { useFetch } from '../useFetch';
import { Loading } from '../components/loading';
import AlertDown from '../components/alertDown';


export default function Home({ navigation }) {

  const {data, loading, alert}  =  useFetch();
  const db = Object.values(data)[3];
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
        {/* <ScrollView pt={1} mb={110}> */}
          <Stack height="auto" overflow="hidden">
          {loading 
            ? (<Loading/>) 
            : (
              <View flexDirection="row" flexWrap="wrap">
                {db ? (
                  <FlatList
                      data={db}
                      renderItem={<Card
                          key={db.id}
                          photo={db.photo}
                          title={db.name}
                          description={db.description}
                          price={db.price}
                          onPress={() => {
                            navigation.navigate('CardDetails')
                          }}  
                        />}
                      keyExtractor={item => item.id}
                    />
                ) : ( 
                  <AlertDown alert={alert}/>
                )}
              </View>
        )}</Stack>  
        {/* </ScrollView> */}
    </SafeAreaView>
  )
}

                  // db.map((data) => (
                  //   <Card
                  //     key={db.id}
                  //     photo={db.photo}
                  //     title={db.name}
                  //     description={db.description}
                  //     price={db.price}
                  //     onPress={() => {
                  //       navigation.navigate('CardDetails')
                  //     }}  
                  //   />)) 

                    //   <FlatList
                    //   data={db}
                    //   renderItem={<Card 
                    //       onPress={() => {
                    //         navigation.navigate('CardDetails')
                    //       }}  
                    //     />}
                    //   keyExtractor={item => item.id}
                    //   extraData={selectedId}
                    // />
  