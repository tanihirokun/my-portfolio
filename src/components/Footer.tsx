import {
  Heading,
  useColorMode,
  Flex,
  HStack,
  Link,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onClickHome?: () => void;
  onClickAbout?: () => void;
  hrefWork?: string;
  hrefTop?: string;
  hrefProfile?: string
  text?: string;
};

export const Footer: VFC<Props> = memo((props) => {
  const { onClickAbout, hrefWork, onClickHome, hrefTop, text, hrefProfile} = props;
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  return (
    <HStack
      as="footer"
      h="60px"
      w="100%"
      py="20px"
      px={notSmall ? "50px" : "20px"}
      bg={isDark ? "gray.600" : "gray.50"}
    >
      <Flex as="a" _hover={{ cursor: "pointer" }} onClick={onClickHome}>
        <Heading
          size="xs"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.400"}
        >
          &copy; Tanigawa's Portfolio Site
        </Heading>
      </Flex>
      <Spacer />
      <HStack spacing={5}>
        <Link
          href={hrefTop}
          onClick={onClickHome}
          size="xs"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.500"}
        >
          {text}
        </Link>
        <Link
          onClick={onClickAbout}
          href={hrefProfile}
          size="xs"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.500"}
        >
          Profile
        </Link>
        <Link
          href={hrefWork}
          size="xs"
          fontWeight="semibold"
          color={isDark ? "gray.200" : "gray.500"}
        >
          Work
        </Link>
      </HStack>
    </HStack>
  );
});
