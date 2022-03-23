import { Flex, Icon, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { memo, VFC } from "react";
import {FaHeart, FaThumbsUp,FaPray} from "react-icons/fa"

export const Skill: VFC = memo(() => {
  const [notSmall] = useMediaQuery("(min-width: 800px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex direction={notSmall ? 'row' : 'column'} w='100%' maxWidth='1000px' justifyContent= {notSmall ? 'space-between' : 'center'}  paddingTop={notSmall ? '20' : '14'} px='40px' paddingBottom={notSmall ? '20' : '14'}>
      {/* 粘り強さ */}
      <Flex direction='column' alignSelf='center' w='35vh' >
        <Flex bgGradient="linear(to-l, #dee6ed,#c3cfe2)" h='35vh' w='35vh' borderRadius='xl' shadow='lg' direction='column' justify='flex-end'
        >
          <Icon color='white' as={FaHeart} fontSize='4xl' bg='transparent' ml={4}/>
          <Text color="white" fontSize="md" fontWeight="semibold" m={4}>粘り強さ</Text>
        </Flex>
        <Text mt={5} mb={10} fontSize='md' fontWeight='600' lineHeight={6} color={isDark ? "gray.200" : "gray.600"}>美容師として長年過酷な環境で仕事をしてきました。どんなことがあっても前向きに目標に向かって進む力があります。</Text>
      </Flex>
      {/* 新しい技術への挑戦 */}
      <Flex direction='column' alignSelf='center' w='35vh' >
        <Flex bgGradient="linear(to-l, #dee6ed,#c3cfe2)" h='35vh' w='35vh' borderRadius='xl' shadow='lg' direction='column' justify='flex-end'
        >
          <Icon color='white' as={FaThumbsUp} fontSize='4xl' bg='transparent' ml={4}/>
          <Text color="white" fontSize="md" fontWeight="semibold" m={4}>新しい技術への挑戦</Text>
        </Flex>
        <Text mt={5} mb={10} fontSize='md' fontWeight='600' lineHeight={6} color={isDark ? "gray.200" : "gray.600"}>より良いサービスの提供のために沢山の勉強をしています。モダンな技術には目がありません！Reactを極めたいです。</Text>
      </Flex>

      <Flex direction='column' alignSelf='center' w='35vh' >
        <Flex bgGradient="linear(to-l, #dee6ed,#c3cfe2)" h='35vh' w='35vh' borderRadius='xl' shadow='lg' direction='column' justify='flex-end'
        >
          <Icon color='white' as={FaPray} fontSize='4xl' bg='transparent' ml={4}/>
          <Text color="white" fontSize="md" fontWeight="semibold" m={4}>誰からでも学ぶ姿勢</Text>
        </Flex>
        <Text mt={5} mb={10} fontSize='md' fontWeight='600' lineHeight={6} color={isDark ? "gray.200" : "gray.600"}>世の中の、全ての人から沢山のことを吸収していきたいです。沢山の知識を得て人間的に成長し、開発に活かしていきます。</Text>
      </Flex>
    </Flex>
  )
});
