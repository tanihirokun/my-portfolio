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
  useColorModeValue,
} from "@chakra-ui/react";
import { memo, SetStateAction, useState, VFC } from "react";
import emailjs from "@emailjs/browser";

type Param = {
  to_name: string;
  from_email: string;
  message: string;
};

export const Contact: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  const color = useColorModeValue("gray.600", "gray.200");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const textAreaChange = (e: { target: { value: SetStateAction<string> } }) =>
    setMessage(e.target.value);
  const nameChange = (e: { target: { value: SetStateAction<string> } }) =>
    setName(e.target.value);
  const emailChange = (e: { target: { value: SetStateAction<string> } }) =>
    setEmail(e.target.value);

  const sendMail = () => {
    // ID取得
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      emailjs.init(userID);

      const template_param: Param = {
        to_name: name,
        from_email: email,
        message: message,
      };
      emailjs
        .send(serviceID, templateID, template_param)
        .then(() => {
          alert("お問い合わせを送信致しました。");

          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          alert("送信送信できませんでした。");
        });
    }
  };
  // 空の時にdisabled
  const disableSend = name === "" || email === "" || message === "";

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendMail();
  };

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
        <Stack spacing={8} as="form">
          <FormControl isRequired>
            <FormLabel htmlFor="text" color={isDark ? "gray.200" : "gray.600"}>Name</FormLabel>
            <Input
              id="text"
              type="text"
              w={notSmall ? "400px" : "300px"}
              value={name}
              onChange={nameChange}
              color={color}
            />
            <FormHelperText>お名前を入力してください</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" color={isDark ? "gray.200" : "gray.600"}>
              Email address
            </FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={emailChange}
              color={color}
            />
            <FormHelperText>メールアドレスを入力してください</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="message" color={isDark ? "gray.200" : "gray.600"}>
              Message
            </FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={textAreaChange}
              h="200px"
              color={color}
            ></Textarea>
            <FormHelperText>メッセージを入力してください</FormHelperText>
          </FormControl>
        </Stack>
        <Flex>
          <Button
            type="submit"
            onClick={handleClick}
            disabled={disableSend}
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
