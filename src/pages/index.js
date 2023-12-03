// Importa os módulos necessários do Chakra UI e do React
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Importa os componentes Header e Sidebar
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Define o componente Produtos
const Produtos = () => {
  // Estado para armazenar o nome do produto
  const [name, setName] = useState("");

  // Estado para armazenar a lista de produtos
  const [listProducts, setListProducts] = useState([]);

  // Efeito para carregar os produtos do localStorage ao montar o componente
  useEffect(() => {
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    setListProducts(db_products);
  }, []);

  // Função para cadastrar um novo produto
  const handleNewProduct = () => {
    // Verifica se o campo de nome está vazio
    if (!name) return;

    // Verifica se o nome do produto já existe na lista
    if (verifyProductName()) {
      alert("Produto já cadastrado!");
      return;
    }

    // Gera um ID único para o novo produto
    const id = Math.random().toString(36).substring(2);

    // Adiciona o novo produto à lista de produtos e atualiza o estado
    if (listProducts && listProducts.length) {
      localStorage.setItem(
        "db_products",
        JSON.stringify([...listProducts, { id, name }])
      );

      setListProducts([...listProducts, { id, name }]);
    } else {
      localStorage.setItem("db_products", JSON.stringify([{ id, name }]));

      setListProducts([{ id, name }]);
    }

    // Limpa o campo de nome
    setName("");
  };

  // Função para verificar se o nome do produto já existe na lista
  const verifyProductName = () => {
    return !!listProducts.find((prod) => prod.name === name);
  };

  // Função para remover um produto da lista
  const removeProduct = (id) => {
    // Recupera os dados de saídas e entradas do localStorage
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    // Verifica se o produto possui movimentações
    const hasOutputs = db_stock_outputs.filter(
      (item) => item.product_id === id
    ).length;
    const hasEntries = db_stock_entries.filter(
      (item) => item.product_id === id
    ).length;

    // Se o produto possui movimentações, exibe um alerta e retorna
    if (hasEntries || hasOutputs) {
      alert("Esse produto possui movimentações!");
      return;
    }

    // Filtra a lista de produtos para remover o produto com o ID específico
    const newArray = listProducts.filter((prod) => prod.id !== id);

    // Atualiza o localStorage e o estado com a nova lista de produtos
    localStorage.setItem("db_products", JSON.stringify(newArray));
    setListProducts(newArray);
  };

  // Retorna o JSX que representa a página de produtos
  return (
    <Flex h="100vh" flexDirection="column">
      {/* Componente Header */}
      <Header />

      {/* Layout da página */}
      <Flex w="100%" maxW={1120} h="100vh">
        {/* Componente Sidebar */}
        <Sidebar />

        {/* Conteúdo da página */}
        <Box w="100%">
          {/* Grid para entrada de dados e botão de cadastro */}
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6" my="6">
            {/* Campo para inserir o nome do produto */}
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto"
            />

            {/* Botão para cadastrar o novo produto */}
            <Button w="40" onClick={handleNewProduct}>
              CADASTRAR
            </Button>
          </SimpleGrid>

          {/* Box para exibir a lista de produtos */}
          <Box overflowY="auto" height="80vh">
            {/* Tabela para exibir os produtos */}
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    {/* Coluna com o nome do produto */}
                    <Td color="gray.500">{item.name}</Td>

                    {/* Coluna com o botão para deletar o produto */}
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red"
                        fontWeight="bold"
                        onClick={() => removeProduct(item.id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

// Exporta o componente Produtos como padrão
export default Produtos;
