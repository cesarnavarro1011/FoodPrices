import { HStack, Heading, Spinner } from "native-base";

export function Loading() {
  return <HStack space={12} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>;
};