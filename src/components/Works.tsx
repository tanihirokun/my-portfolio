import {
  Box,
  Heading,
  useColorMode,
  VStack,
  Text,
  Image,
  useMediaQuery,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { WorkCard } from "./WorksCard";

export const Works: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const navigate = useNavigate();

  const onClickTolistico = useCallback(
    () => navigate("/works-tolistico"),
    [navigate]
  );

  return (
    <VStack as="section" position="relative" w="100%" pt={24} pb={16}>
      <Box position="absolute" top="-5" left="10" ml={{ base: 0, md: "10vw" }}>
        <Heading color={isDark ? "gray.200" : "gray.600"}>Works</Heading>
        <Text
          textAlign="center"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.600"}
        >
          制作したもの
        </Text>
      </Box>
      <Wrap spacing={8} justify='center' w='88%'>
        {WorkCard.map((card) => {
          return (
            <WrapItem key={card.key}>
              <Flex direction="column" key={card.key}>
                <Box
                  w={notSmall ? "45vh" : "40vh"}
                  h={notSmall ? "45vh" : "45vh"}
                  objectFit="cover"
                  overflow="hidden"
                  shadow="lg"
                  borderRadius="lg"
                  _hover={{ cursor: "pointer" }}
                  onClick={onClickTolistico}
                >
                  <Image src={card.image} />
                </Box>
                <Text
                  textAlign="center"
                  fontWeight="semibold"
                  color={isDark ? "gray.200" : "gray.600"}
                  mt={4}
                >
                  {card.text}
                </Text>
              </Flex>
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
});
