import { Heading, useColorMode, useMediaQuery, VStack } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ProfileSkillList } from "./ProfileSkillList";

export const ProfileSkill: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack as="section" w="100%" maxW="700px" mx="auto" mt="28" px={5}>
      <Heading fontWeight="semibold" color={isDark ? "gray.200" : "gray.600"}>
        Skill
      </Heading>
      <Table variant="simple">
        <TableCaption>PHPの学習も進めています</TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="lg">できる技術</Th>
            <Th isNumeric fontSize="lg">
              Level
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {ProfileSkillList.map((list) => {
            return (
              <Tr key={list.key}>
                <Td fontSize="lg" color={isDark ? "gray.200" : "gray.600"}>{list.title}</Td>
                <Td isNumeric fontSize="xl" color={isDark ? "gray.200" : "gray.600"}>
                  {list.level}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </VStack>
  );
});
