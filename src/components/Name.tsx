import {
  Box,
  VStack,
  useColorMode,
  useMediaQuery,
  Text,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Name: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  // 文字列を入れる左右に注意
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  return (
    <VStack p={5}>
      <Flex
        direction={notSmall ? "row" : "column"}
        p={notSmall ? 24 : 0}
        w="100%"
        justifyContent={"center"}
      >
        <Box mt={notSmall ? 0 : 8} mx={notSmall ? 0 : 'auto'} alignSelf='center' w={notSmall ? "40%" : "100%"}>
          <Text
            fontSize="4xl"
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.600"}
          >
            Tanigawa Hiroaki
          </Text>
          <Text
            fontSize={{ base: "md", sm: "xl" }}
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.600"}
          >
            Front-end engineer
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.600"}
            mt={2}
          >
            HTML / CSS / JavaScript /React / Firebase /chakra ui / photoshop / illustrator
          </Text>
        </Box>
        <Image
          src="profile.jpg"
          boxSize="300px"
          objectFit="cover"
          borderRadius="full"
          objectPosition={"50% 60%"}
          alignSelf="center"
          shadow="lg"
          mt={notSmall ? 0 : 8}
          mb={notSmall ? 0 : 12}
          ml={notSmall ? 10 : 0}
        />
      </Flex>
    </VStack>
  );
});
