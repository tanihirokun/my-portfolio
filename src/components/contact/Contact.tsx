import {
  Box,
  Divider,
  Heading,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

import { ContactForm } from "./ContactForm";

export const Contact: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack
      as="section"
      bg={isDark ? "gray.700" : "#f5f5f5"}
      px={5}
      w="100%"
      pb={14}
    >
      <Box mt={8}>
        <Heading
          textAlign="center"
          mb={4}
          color={isDark ? "gray.200" : "gray.600"}
        >
          Contact
        </Heading>
        <Divider mb={8} />
        <ContactForm/>
      </Box>
    </VStack>
  );
});
