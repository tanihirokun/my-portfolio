import {
  Heading,
  VStack,
  useColorMode,
  Image,
  Box,
  useMediaQuery,
  HStack,
  Text,
  Flex,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { WorksTolisticoList } from "./WorksTolisticoList";

export const WorksTolistico: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  // ダークモードのカラー設定
  const color = useColorModeValue("gray.600", "gray.200");
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickAbout = useCallback(() => navigate("/profile"), [navigate]);

  return (
    <>
      <Header />
      <VStack as="section" px={5} pt={5} pb={notSmall ? 16 :10} w="100%" >
        <Heading color={color} fontSize={{ base: "lg", sm: "2xl" }} mt={8}>仮想ヘッドスパサロン</Heading>
        <Heading color={color} fontSize={{ base: "lg", sm: "2xl" }}>Tolistico</Heading>
        <HStack flexDirection={notSmall ? "row" : "column"} maxWidth="1000px" pt={notSmall ? 10 : 8}>
          <Flex w={notSmall ? "50%" : "100%"} justifyContent="center">
            {/* トップ画像 */}
            <Box
              w={notSmall ? "undifind" : "75vw"}
              h="100%"
              objectFit="cover"
              overflow="hidden"
              shadow="lg"
              borderRadius="lg"
            >
              <Image src="works1.png" />
            </Box>
            {/* アバウト画像 */}
            <Box
              display={notSmall ? "block" : "none"}
              // w={notSmall ? "45vh" : "40vh"}
              h="100%"
              objectFit="cover"
              overflow="hidden"
              shadow="lg"
              borderRadius="lg"
              ml={4}
            >
              <Image src="works2.png" />
            </Box>
          </Flex>
          {/* 概要 */}
          <VStack
            w={notSmall ? "50%" : "100%"}
            p={notSmall ? 8 : 0}
            style={{ margin: 0 }}
          >
            <Heading as='h3' color={color} fontSize={{ base: "lg", sm: "xl" }} mt={notSmall ? 0 : 16}>概要</Heading>
            <Text color={color} fontSize={{ base: "md", sm: "lg" }} pb={8}>
              デジタルハリウッド by LIGの卒業制作として作成。
            </Text>
            <Box w="100%" shadow="lg" borderRadius="lg">
              <Accordion
                allowToggle
                maxW="800px"
                bg={isDark ? "gray.600" : "white"}
              >
                {/* 複製元　 ProfileAppealMessage */}
                {WorksTolisticoList.map((list) => {
                  return (
                    <AccordionItem key={list.key}>
                      <AccordionButton>
                        <Box
                          w="100%"
                          textAlign="left"
                          padding={3}
                          fontSize="md"
                          fontWeight="semibold"
                          color={color}
                        >
                        {list.title}
                        </Box>
                        <AccordionIcon
                          color={color}
                        />
                      </AccordionButton>
                      <AccordionPanel p={5} color={color} >
                        {list.text}
                      </AccordionPanel>
                    </AccordionItem>
                )})}
              </Accordion>
            </Box>
          </VStack>
        </HStack>{/* 3枚の外枠 */}
      </VStack>{/* section*/}
      <Footer hrefWork={'/#work'} onClickAbout={onClickAbout} onClickHome={onClickHome} text={'Home'}/>
    </>
  );
});
