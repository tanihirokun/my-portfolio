import {
  Box,
  VStack,
  useColorMode,
  useMediaQuery,
  Text,
  Image,
  Heading,
  Flex,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

export const Name: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  // 文字列を入れる左右に注意
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const navigate = useNavigate();

  const onClickProfile = useCallback(() => navigate("/profile"), [navigate]);

  return (
    <VStack p={5} as="section">
      <Flex
        direction={notSmall ? "row" : "column"}
        p={notSmall ? 24 : 0}
        w="100%"
        justifyContent={"center"}
      >
        <Box
          mt={notSmall ? 0 : 8}
          mx={notSmall ? 0 : "auto"}
          alignSelf="center"
          w={notSmall ? "40%" : "100%"}
        >
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.600"}
          >
            Tanigawa Hiroaki
          </Heading>
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
            HTML / CSS / JavaScript /React / Firebase /chakra ui / photoshop /
            illustrator
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
          mb={notSmall ? 0 : 10}
          ml={notSmall ? 10 : 0}
        />
      </Flex>
      <Box>
        <Tooltip label="谷川を詳しく知りたい方はこちらから" bg="gray.500" fontSize='md' padding={2}>
          <Button
            bgGradient="linear(to-r, gray.600, gray.400)"
            _hover={{
              bgGradient: "linear(to-r, gray.400, gray.600)",
            }}
            color="white"
            h='50px'
            w="30vw"
            maxW="200px"
            fontSize={{ base: "lg", sm: "xl" }}
            borderRadius="10px"
            shadow="lg"
            onClick={onClickProfile}
          >
            More
          </Button>
        </Tooltip>
      </Box>
    </VStack>
  );
});
