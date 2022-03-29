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
import { memo, VFC } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';


type Param = {
  to_name: string;
  from_email: string;
  message: string;
};
type FormInputs = {
  text: string;
  email: string;
  message: string;
};

export const Contact: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

// ダークモードのカラー設定
  const color = useColorModeValue("gray.600", "gray.200");

  // formの中身設定
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // hook-formの初期化
  const {register, handleSubmit, formState: {errors, isValid}, reset, watch } = useForm<FormInputs>({
    mode: "all",
  })
  const onSubmit = (data: FormInputs) => {
     console.log(data);
     sendMail(data);
  }

  // const textAreaChange = (e: { target: { value: SetStateAction<string> } }) =>
  //   setMessage(e.target.value);
  // const nameChange = (e: { target: { value: SetStateAction<string> } }) =>
  //   setName(e.target.value);
  // const emailChange = (e: { target: { value: SetStateAction<string> } }) =>
  //   setEmail(e.target.value);

  const sendMail = (data: { text: any; email: any; message: any; }) => {
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
        to_name: data.text,
        from_email: data.email,
        message: data.message,
      };
      emailjs
        .send(serviceID, templateID, template_param)
        .then(() => {
          alert("お問い合わせを送信致しました。");
          reset();
          // setName('');
          // setEmail('');
          // setMessage('');
        })
        .catch(() => {
          alert("送信送信できませんでした。");
        });
    }
  };
  // 空の時にdisabled
  // const disableSend = name === "" || email === "" || message === "";

  // const handleClick = (e: any) => {
  //   e.preventDefault();

  // };

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
        <Stack spacing={8} as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired id="text" isInvalid={errors.text ? true : false}>
            <FormLabel htmlFor="text" color={isDark ? "gray.200" : "gray.600"}>Name</FormLabel>
            <Input
              type="text"
              w={notSmall ? "400px" : "300px"}
              {...register('text', {required: true})}
              color={color}
            />
            <FormHelperText>お名前を入力してください</FormHelperText>
          </FormControl>
          {/* メールアドレス */}
          <FormControl isRequired id="email" isInvalid={errors.email ? true : false}>
            <FormLabel color={isDark ? "gray.200" : "gray.600"}>
              Email address
            </FormLabel>
            <Input
              type="email"
              color={color}
              {...register('email', {
                required:true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <FormHelperText>メールアドレスを入力してください</FormHelperText>
          </FormControl>
          <FormControl isRequired id="message" isInvalid={errors.message ? true : false}>
            <FormLabel htmlFor="message" color={isDark ? "gray.200" : "gray.600"}>
              Message
            </FormLabel>
            <Textarea
              {...register('message', {required: true})}
              h="200px"
              color={color}
            ></Textarea>
            <FormHelperText>メッセージを入力してください</FormHelperText>
          </FormControl>
        <Flex>
          <Button
            type="submit"
            disabled={!isValid}
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
            </Stack>
      </Box>
    </VStack>
  );
});
