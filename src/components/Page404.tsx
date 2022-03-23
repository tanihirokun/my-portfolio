import { Button, Heading, VStack } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

export const Page404: VFC = memo(() => {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/'),[navigate])

  return (
    <VStack p={10}>
      <Heading fontSize={{base: 'lg', md: '3xl' }} mb={8} >
        お探しのページは見つかりません。
      </Heading>
      <Button colorScheme='teal' onClick={onClickHome}>TOPに戻る</Button>
    </VStack>
  );
});
