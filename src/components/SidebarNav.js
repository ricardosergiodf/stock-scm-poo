import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="8" bg="#3e3e42" h="100%">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff" my="8" ml="2">
          CADASTRO
        </Text>
        <Stack>
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
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "#3e3e42" : ""}
          >
            <Link href="/stocks">  {/* FAZER O STOCKS */}
              <Text fontSize="md" fontWeight="medium" color="#fff" ml="2">
                ESTOQUES
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff" ml="2">
          ESTOQUE
        </Text>
        <Stack>
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
          <ChakraLink
            _hover={{ bg: "gray" }}
            px="4"
            py="2"
            borderRadius={5}
          >
            <Link href="/stockTransfer"> {/* FAZER O TRANSFERIR */}
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

export default SidebarNav;
