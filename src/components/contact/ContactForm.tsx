import {
  Button,
  useColorMode,
  useMediaQuery,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Stack,
  Flex,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

// emailjsの型指定
type Param = {
  to_name: string;
  from_email: string;
  message: string;
};
// hook-formの型指定
type FormInputs = {
  text: string;
  email: string;
  message: string;
};

export const ContactForm: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [notSmall] = useMediaQuery("(min-width: 800px)");

  // ダークモードのカラー設定
  const color = useColorModeValue("gray.600", "gray.200");

  // hook-formの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>({
    mode: "all",
  });
  const onSubmit = (data: FormInputs) => {
    sendMail(data);
  };

  const sendMail = (data: { text: string; email: string; message: string }) => {
    // ID取得
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    // ユーザーIDの初期化
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      emailjs.init(userID);

      // 入力されたデータをemailjsに紐付け
      const template_param: Param = {
        to_name: data.text,
        from_email: data.email,
        message: data.message,
      };
      // emailjsに送る
      emailjs
        .send(serviceID, templateID, template_param)
        .then(() => {
          alert("お問い合わせを送信致しました。");
          reset();
        })
        .catch(() => {
          alert("送信送信できませんでした。");
        });
    }
  };
  return (
    <Stack spacing={8} as="form" onSubmit={handleSubmit(onSubmit)}>
      {/* 名前の入力ホーム */}
      <FormControl isRequired id="text" isInvalid={errors.text ? true : false}>
        <FormLabel htmlFor="text" color={isDark ? "gray.200" : "gray.600"}>
          Name
        </FormLabel>
        <Input
          type="text"
          w={notSmall ? "400px" : "300px"}
          {...register("text", { required: true })}
          color={color}
        />
        {errors.text && errors.text.type === "required" && (
          <FormErrorMessage>お名前を入力して下さい。</FormErrorMessage>
        )}
        <FormHelperText>お名前を入力してください</FormHelperText>
      </FormControl>
      {/* メールアドレス */}
      <FormControl
        isRequired
        id="email"
        isInvalid={errors.email ? true : false}
      >
        <FormLabel color={isDark ? "gray.200" : "gray.600"}>
          Email address
        </FormLabel>
        <Input
          type="email"
          color={color}
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && errors.email.type === "pattern" && (
          <FormErrorMessage>メールアドレスを入力して下さい。</FormErrorMessage>
        )}
        <FormHelperText>メールアドレスを入力してください</FormHelperText>
      </FormControl>
      {/* メッセージ */}
      <FormControl
        isRequired
        id="message"
        isInvalid={errors.message ? true : false}
      >
        <FormLabel htmlFor="message" color={isDark ? "gray.200" : "gray.600"}>
          Message
        </FormLabel>
        <Textarea
          {...register("message", { required: true })}
          h="200px"
          color={color}
        ></Textarea>
        {errors.message && errors.message.type === "required" && (
          <FormErrorMessage>メッセージを入力して下さい。</FormErrorMessage>
        )}
        <FormHelperText>メッセージを入力してください</FormHelperText>
      </FormControl>
      {/* 送信ボタン */}
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
  );
});
