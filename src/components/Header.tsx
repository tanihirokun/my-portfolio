import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export const Header:VFC = memo(() => {
  // カラーモードの設定
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex as="header" w="100%" align={'center'}>
        <Heading
          as="h1"
          ml={{base: 0, md: 2}}
          size="md"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.600"}
        >
          Tanigawa's Portfolio
        </Heading>
        <Spacer/>
        <IconButton
          icon={<FaInstagram />}
          aria-label="インスタグラム"
          isRound
          onClick={toggleColorMode}
        />
        <IconButton
          icon={<FaTwitter />}
          ml={2}
          aria-label="ツイッター"
          isRound
          onClick={toggleColorMode}
        />
        <IconButton
          icon={<FaGithub />}
          ml={2}
          aria-label="ギットハブ"
          isRound
          onClick={toggleColorMode}
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
