import { Flex, Heading, useColorMode, useMediaQuery, VStack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import { memo, VFC } from "react";
import {FaStar} from 'react-icons/fa'

export const ProfileSkill: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack as="section" w="100%" maxW='700px' mx='auto' mt='28'>
      <Heading fontWeight="semibold" color={isDark ? "gray.200" : "gray.600"}>
        Skill
      </Heading>
      <Table variant="simple">
  <TableCaption>PHPの学習も進めています</TableCaption>
  <Thead>
    <Tr>
      <Th fontSize='lg'>できる技術</Th>
      <Th isNumeric fontSize='lg'>Level</Th>
    </Tr>
  </Thead>
  <Tbody >
    <Tr>
      <Td fontSize='lg'>HTML</Td>
      <Td isNumeric fontSize='lg'>☆☆☆☆☆</Td>
    </Tr>
    <Tr>
      <Td>CSS</Td>
      <Td isNumeric>☆☆☆☆</Td>
    </Tr>
    <Tr>
      <Td>JavaScript</Td>
      <Td isNumeric>☆☆☆</Td>
    </Tr>
    <Tr>
      <Td>React</Td>
      <Td isNumeric>☆☆☆☆</Td>
    </Tr>
    <Tr>
      <Td>chakra ui</Td>
      <Td isNumeric>☆☆☆☆</Td>
    </Tr>
    <Tr>
      <Td>Photoshop</Td>
      <Td isNumeric>☆☆</Td>
    </Tr>
    <Tr>
      <Td>Illustrator</Td>
      <Td isNumeric>☆</Td>
    </Tr>
  </Tbody>
</Table>
</VStack>
  );
});
