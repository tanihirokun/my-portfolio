import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ProfileAppealMessage } from "./ProfileAppealMessage";

export const ProfileAppeal: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack as="section"  w="100%" p={5}>
      {/* アコーディオン */}
      <Accordion allowToggle w="90%" maxW='800px' bg={isDark ? "gray.600" : "white"}>
        {/* 複製元　 ProfileAppealMessage*/}
        {ProfileAppealMessage.map((message) => {
          return(
            <AccordionItem key={message.key}>
              <AccordionButton>
                <Box
                  w="100%"
                  textAlign="left"
                  padding={3}
                  fontSize="md"
                  fontWeight="semibold"
                  color={isDark ? "gray.200" : "gray.600"}
                >
                  {message.title}
                </Box>
                <AccordionIcon color={isDark ? "gray.200" : "gray.600"} />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {message.text}
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </VStack>
  );
});
