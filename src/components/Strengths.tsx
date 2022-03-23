import {
  Box,
  Heading,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Skill } from "./Skill";

export const Strengths = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  return (
    <VStack
      as='section'
      position="relative"
      bg={isDark ? "gray.700" : "#f5f5f5"}
      mt={{base: 10, md: 14}}
    >
      <Box position="absolute" top="-5" right="10" mr={{ base: 0, md: "10vw" }}>
        <Heading color={isDark ? "gray.200" : "gray.600"}>Strengths</Heading>
        <Text
          textAlign="center"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.600"}
        >
          自分の強み
        </Text>
      </Box>
      <Box paddingTop="80px">
        <Heading
          as="h3"
          size="lg"
          display="inline-block"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          mr='4px'
        >
          モダンな技術
        </Heading>
        <Heading as="h3" size={notSmall ? 'lg': 'md'} display="inline-block" color={isDark ? "gray.200" : "gray.600"}>
          を活かして
        </Heading>
        <Heading as="h3" size={notSmall ? 'lg': 'md'} mt={{base: '5px', md: '10px'}} color={isDark ? "gray.200" : "gray.600"}>
          様々な開発をおこなえます。
        </Heading>
      </Box>
      <Skill />
    </VStack>
  );
};
