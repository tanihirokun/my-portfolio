import { Heading, useColorMode, VStack } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ProfileSkillList } from "./ProfileSkillList";

export const ProfileSkill: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack as="section" w="100%" maxW="700px" mx="auto" mt="20" mb="20" px={5}>
      <Heading fontWeight="semibold" color={isDark ? "gray.200" : "gray.600"} mb={5}>
        Skill
      </Heading>
      <Table variant="simple">
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
