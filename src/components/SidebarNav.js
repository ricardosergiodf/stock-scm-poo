// Importa os módulos necessários do React e do Chakra UI
import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

// Define o componente SidebarNav
const SidebarNav = () => {
  // Obtém a instância do router do Next.js para monitorar a rota atual
  const { asPath } = useRouter();

  // Retorna o JSX que representa a barra de navegação lateral
  return (
    <Stack spacing="8" bg="#3e3e42" h="100%">
      {/* Seção de CADASTRO */}
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff" my="8" ml="2">
          CADASTRO
        </Text>
        <Stack>
          {/* Link para a página de Produtos */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "#3e3e42" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
          {/* Link para a página de Estoque */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "#3e3e42" : "#3e3e42"}
          >
            <Link href="/stocks">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                ESTOQUES
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>

      {/* Seção de ESTOQUE */}
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff" ml="2">
          ESTOQUE
        </Text>
        <Stack>
          {/* Link para a página de Saldo */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                SALDO
              </Text>
            </Link>
          </ChakraLink>
          {/* Link para a página de Entradas */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                ENTRADAS
              </Text>
            </Link>
          </ChakraLink>
          {/* Link para a página de Saídas */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
          {/* Link para a página de Transferência */}
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/stockTransfer">
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                TRANSFERIR
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

// Exporta o componente SidebarNav como padrão
export default SidebarNav;
