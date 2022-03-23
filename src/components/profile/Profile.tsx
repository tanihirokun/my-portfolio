import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

import { Header } from "../Header";
import { ProfileAppeal } from "./ProfileAppeal";
import { ProfileList } from "./ProfileList";
import { ProfileSkill } from "./ProfileSkill";

export const Profile: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // プロフィール画面の画像とリスト
  return (
    <div>
      {console.log('プロフィール読み込み')}
      <Header />
      <Box p={8} as='section'>
        <Heading color={isDark ? "gray.200" : "gray.600"}>About Me</Heading>
        <Flex direction={notSmall ? "row" : "column"} justify="center" alignItems='center' mt={notSmall ? '60px' : '10'}>
          <Flex justify="center">
            <Image
              src="profile.jpg"
              boxSize="300px"
              objectFit="cover"
              borderRadius="full"
              objectPosition={"50% 60%"}
              alignSelf="center"
              shadow="lg"
              mr={notSmall ? '40px' : '0'}
              mb={notSmall ? '0' : '10'}
            />
          </Flex>
          <VStack maxW='500px'>
            <List spacing={5}>
              {ProfileList.map((list) => {
                return (
                <ListItem fontSize='lg' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"} key={list.key}>
                  <ListIcon as={list.icon} color="green.500"/>
                  {list.text}
                </ListItem>
                )
              })}
            </List>
          </VStack>
        </Flex>
      </Box>
      <ProfileAppeal/>
      <ProfileSkill/>
    </div>
  );
});
