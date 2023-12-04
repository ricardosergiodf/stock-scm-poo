// Importa os módulos necessários do Chakra UI e do React
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

// Importa o contexto SidebarContext e o ícone FiMenu do react-icons
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';

// Define o componente Header
const Header = () => {
  // Usa o hook useBreakpointValue para determinar se o layout deve ser ajustado para visualização em dispositivos móveis
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  // Obtém a função onOpen do contexto SidebarContext
  const { onOpen } = useSidebarContext();

  // Retorna o JSX que representa o cabeçalho
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
      {/* Ícone de menu para dispositivos móveis */}
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}

      {/* Logo da aplicação */}
      <Image
        src="/imgs/SCM_logo_abrev.png"
        alt="SCM"
        width={202} // ajuste conforme necessário
        height={50} // ajuste conforme necessário
      />

      {/* Seção do usuário à direita do cabeçalho */}
      <Flex ml="auto">
        <HStack>
          {/* Nome do usuário */}
          <Text color="#fff">Usuário teste</Text>

          {/* Avatar do usuário */}
          <Avatar size="md" name="Usuário teste" mr="2" />
        </HStack>
      </Flex>
    </Flex>
  );
};

// Exporta o componente Header como padrão
export default Header;
