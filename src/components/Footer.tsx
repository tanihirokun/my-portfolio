import { Heading, useColorMode, Flex, VStack } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

export const Footer: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/'),[navigate])

  return(
   <VStack as='footer' h='60px' w='100%' p='20px' bg={isDark ? "gray.600" : "gray.50"}>
     <Flex as="a" _hover={{cursor: 'pointer'}} onClick={onClickHome} >
          <Heading
            size="xs"
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.400"}
          >
            &copy; Tanigawa's Portfolio Site
          </Heading>
        </Flex>
   </VStack>
  )
});
