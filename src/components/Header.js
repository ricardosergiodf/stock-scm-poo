import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="#fff"
      fontWeight="bold"
      bg="#3e3e42"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Image
        src="/imgs/SCM_logo_abrev.png"
        alt="SCM"
        width={202} // ajuste conforme necessário
        height={50} // ajuste conforme necessário
      />
      <Flex ml="auto">
        <HStack>
          <Text color="#fff">Usuário teste</Text>
          <Avatar size="md" name="Usuário teste" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
