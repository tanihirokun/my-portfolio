import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Header:VFC = memo(() => {
  // カラーモードの設定
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/'),[navigate])
  const onClickInstagram = () => {
    window.open('https://www.instagram.com/tani.herb/?hl=ja', '_blank')}
  const onClickTwitter = () => {
    window.open('https://twitter.com/tani_web', '_blank')}
  const onClickGithub = () => {
    window.open('https://github.com/tanihirokun', '_blank')}

  return (
    <VStack p={5} as="header">
      <Flex  w="100%" align={'center'}>
        <Box as="a" _hover={{cursor: 'pointer'}} onClick={onClickHome}>
          <Heading
            as="h1"
            ml={{base: 0, md: 2}}
            size="md"
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.600"}
          >
            Tanigawa's Portfolio
          </Heading>
        </Box>
        <Spacer/>
        <IconButton
          icon={<FaInstagram />}
          aria-label="インスタグラム"
          isRound
          onClick={onClickInstagram}
        />
        <IconButton
          icon={<FaTwitter />}
          ml={2}
          aria-label="ツイッター"
          isRound
          onClick={onClickTwitter}
        />
        <IconButton
          icon={<FaGithub />}
          ml={2}
          aria-label="ギットハブ"
          isRound
          onClick={onClickGithub}
        />
        <IconButton
          ml={{base: 6, md: 8}}
          aria-label="ダークモードボタン"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound
          onClick={toggleColorMode}
        />
      </Flex>
    </VStack>
  );
});
