import {
  Flex,
  Icon,
  Text,
  useColorMode,
  useMediaQuery,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { SkillCards } from "./SkillCards";

export const Skill: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      w="100%"
      paddingTop={notSmall ? "20" : "14"}
      px="40px"
      paddingBottom={notSmall ? "20" : "20"}
    >
      {/* 強みの紹介 */}
      <Wrap spacing={12} justify='center' w="100%">
      {SkillCards.map((card) => {
        return (
          <WrapItem key={card.key}>
          <Flex direction="column" alignSelf="center" w={notSmall ? "40vh" : "35vh"}>
            <Flex
              bgGradient="linear(to-l, #dee6ed,#c3cfe2)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
              w={notSmall ? "40vh" : "35vh"}
              h={notSmall ? "40vh" : "35vh"}
              borderRadius="xl"
              shadow="lg"
              direction="column"
              justify="flex-end"
            >
              <Icon
                color="white"
                as={card.icon}
                fontSize="4xl"
                bg="transparent"
                ml={4}
              />
              <Text color="white" fontSize="md" fontWeight="semibold" m={4}>
                {card.title}
              </Text>
            </Flex>
            <Text
              mt={5}
              fontSize="md"
              fontWeight="600"
              lineHeight={6}
              color={isDark ? "gray.200" : "gray.600"}
            >
              {card.text}
            </Text>
          </Flex>
          </WrapItem>
        );
      })}
      </Wrap>
   </Flex>
  );
});
