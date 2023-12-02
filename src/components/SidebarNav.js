import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6" bg="#3e3e42" h="100%">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff" my="6">
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
              <Text fontSize="md" fontWeight="medium" color="#fff">
                PRODUTOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="#fff">
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
              <Text fontSize="md" fontWeight="medium" color="#fff">
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
              <Text fontSize="md" fontWeight="medium" color="#fff">
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
              <Text fontSize="md" fontWeight="medium" color="#fff">
                SAÍDAS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
