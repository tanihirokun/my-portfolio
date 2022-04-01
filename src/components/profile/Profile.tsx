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
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer";

import { Header } from "../Header";
import { ProfileAppeal } from "./ProfileAppeal";
import { ProfileList } from "./ProfileList";
import { ProfileSkill } from "./ProfileSkill";

export const Profile: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickAbout = useCallback(() => navigate("/profile"), [navigate]);

  // プロフィール画面の画像とリスト
  return (
    <>
      <Header />
      <Box p={8} as='section'>
        <Heading color={isDark ? "gray.200" : "gray.600"} pl={notSmall ? '8vw' : 0}  pt={notSmall ? '15px' : 0}>About Me</Heading>
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
          {/* 箇条書きリスト　ProfileListから */}
          <VStack maxW='500px'>
            <List spacing={5}>
              {ProfileList.map((list) => {
                return (
                <ListItem fontSize='lg' fontWeight='semibold' color={isDark ? "gray.200" : "gray.600"} key={list.key}>
                  <ListIcon as={list.icon} color="gray.400"/>
                  {list.text}
                </ListItem>
                )
              })}
            </List>
          </VStack>
        </Flex>
      </Box>
      {/* その下の読みこみ */}
      <ProfileAppeal/>
      <ProfileSkill/>
      <Footer onClickHome={onClickHome} text={'Home'} hrefWork={'/#work'} hrefProfile={'#'}/>
    </>
  );
});
