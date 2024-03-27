import { Alert, CloseIcon, HStack, IconButton, Stack, Text, VStack } from "native-base";

export default function AlertDown(props) {

  const { alert } = props;

  const alertMessagea = (alerht) => {
      
    if (alert == "success") {

        "no ha ingresado una edad"
    }
    if (formData.edad.length > 2 || formData.edad < 1 ) {
      setErrors({ ...errors,  
        edad: 'esta edad no es valida'
      });
      return false;
    } 
    if (formData.edad < 18 && formData.edad > 1 ) {
      setErrors({ ...errors,  
        edad: 'Eres menor de edad'
      });
      return false;
    } 
    return true;
};

  const statusAlert = [{
    id: '1',
    status: "success",
    title: "conexion successfully!"
  }, {
    id: '2',
    status: "error",
    title: "Error conexion,please try again later!"
  }, {
    id: '3',
    status: "info",
    title: "We are going live in July!"
  }, {
    id: '4',
    status: "warning",
    title: "Poor internet connection."
  }];

  const alertMessage = statusAlert.filter(statusArray => statusArray.status == alert);
console.log(alert);
  return (
  <Stack space={3} w="100%" maxW="400">
      {alertMessage.map(alert => {
      return <Alert w="100%" key={alert.id} status={alert.status}>
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {alert.title}
                  </Text>
                </HStack>
                <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" />} _icon={{
              color: "coolGray.600"
            }} />
              </HStack> 
            </VStack>
          </Alert>;
    })}
    </Stack>);
}