import {
  Box,
  Button,
  Divider,
  Heading,
  useColorMode,
  useMediaQuery,
  VStack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { memo, SetStateAction, useState, VFC } from "react";

export const Contact: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  const [value, setValue] = useState("");

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setValue(e.target.value);

  return (
    <VStack as="section" bg={isDark ? "gray.700" : "#f5f5f5"} px={5} w="100%" pb={14}>
      <Box mt={8}>
        <Heading textAlign="center" mb={4} color={isDark ? "gray.200" : "gray.600"}>
          Contact
        </Heading>
        <Divider mb={8} />
        <Stack spacing={8}>
          <FormControl id="text" isRequired>
            <FormLabel color={isDark ? "gray.200" : "gray.600"}>Name</FormLabel>
            <Input type="text" w={notSmall ? "400px" : "300px"} />
            <FormHelperText>お名前を入力してください</FormHelperText>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel color={isDark ? "gray.200" : "gray.600"}>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>メールアドレスを入力してください</FormHelperText>
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel color={isDark ? "gray.200" : "gray.600"}>Message</FormLabel>
            <Textarea
              id="message"
              value={value}
              onChange={handleInputChange}
              h="200px"
            ></Textarea>
            <FormHelperText>メッセージを入力してください</FormHelperText>
          </FormControl>
        </Stack>
        <Flex>
          <Button
            bgGradient="linear(to-r, gray.600, gray.400)"
            _hover={{
              bgGradient: "linear(to-r, gray.400, gray.600)",
            }}
            color="white"
            w="30vw"
            maxW="200px"
            fontSize={{ base: "md", sm: "xl" }}
            borderRadius="10px"
            shadow="lg"
            mt={10}
            mx="auto"
          >
            Send
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
});
