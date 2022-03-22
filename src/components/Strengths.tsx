import {
  Box,
  Heading,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

export const Strengths = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  return (
    <VStack
      position="relative"
      bg={isDark ? "gray.700" : "gray.200"}
      height="800px"
      mt={10}
    >
      <Box position="absolute" top="-5" right="10" mr={{ base: 0, md: "15vw" }}>
        <Heading>Strengths</Heading>
        <Text
          textAlign="center"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.600"}
        >
          自分の強み
        </Text>
      </Box>
      <Heading as="h3" paddingTop="80px" size="lg">
        モダンな技術を活かして
      </Heading>
      <Heading as='h3' size='lg'>様々な開発をおこなえます。</Heading>
    </VStack>
  );
};
