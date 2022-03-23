import { Heading, useColorMode, Flex, VStack } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

export const Footer: VFC = memo(() => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/'),[navigate])

  return(
   <VStack as='footer' h='60px' w='100%' p='18px'>
     <Flex as="a" _hover={{cursor: 'pointer'}} onClick={onClickHome} >
          <Heading
            as="h1"
            ml={{base: 0, md: 2}}
            size="sm"
            fontWeight="semibold"
            color={isDark ? "gray.200" : "gray.500"}

          >
            &copy; Tanigawa's Portfolio Site
          </Heading>
        </Flex>
   </VStack>
  )
});
