// Importa os módulos necessários do Chakra UI e do React
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// Importa os componentes Header e Sidebar
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Define o componente StockOutputs
const StockOutputs = () => {
  // Estados para armazenar a quantidade, o ID do produto e as saídas de estoque
  const [amount, setAmount] = useState("");
  const [product_id, setProduct_id] = useState("0");
  const [listStockOutputs, setStockOutputs] = useState([]);
  
  // Estado para armazenar a lista de produtos disponíveis
  const [listProducts, setListProducts] = useState([]);

  // Efeito para carregar as saídas de estoque e a lista de produtos ao montar o componente
  useEffect(() => {
    // Carrega as saídas de estoque do localStorage
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    // Atualiza o estado com as saídas de estoque
    setStockOutputs(db_stock_outputs);

    // Carrega a lista de produtos do localStorage
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    // Atualiza o estado com a lista de produtos
    setListProducts(db_products);
  }, []);

  // Função para cadastrar uma nova saída de estoque
  const handleNewOutput = () => {
    // Verifica se a quantidade ou o produto não foram selecionados
    if (!amount || product_id === "0") {
      return alert("Selecione o produto e a quantidade!");
    }

    // Gera um ID único para a nova saída
    const id = Math.random().toString(36).substring(2);

    // Adiciona a nova saída à lista de saídas e atualiza o estado
    if (listStockOutputs && listStockOutputs.length) {
      localStorage.setItem(
        "db_stock_outputs",
        JSON.stringify([...listStockOutputs, { id, amount, product_id }])
      );

      setStockOutputs([...listStockOutputs, { id, amount, product_id }]);
    } else {
      localStorage.setItem(
        "db_stock_outputs",
        JSON.stringify([{ id, amount, product_id }])
      );

      setStockOutputs([{ id, amount, product_id }]);
    }

    // Limpa os campos de quantidade e produto
    setAmount("");
    setProduct_id("0");
  };

  // Função para remover uma saída de estoque da lista
  const removeOutput = (id) => {
    // Filtra a lista de saídas para remover a saída com o ID específico
    const newArray = listStockOutputs.filter((item) => item.id !== id);

    // Atualiza o localStorage e o estado com a nova lista de saídas
    localStorage.setItem("db_stock_outputs", JSON.stringify(newArray));
    setStockOutputs(newArray);
  };

  // Função para obter o nome do produto com base no ID
  const getProductById = (id) => {
    return listProducts.filter((item) => item.id === id)[0]?.name;
  };

  // Retorna o JSX que representa a página de saídas de estoque
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
            {/* Dropdown para selecionar um produto */}
            <Select
              value={product_id}
              onChange={(e) => setProduct_id(e.target.value)}
            >
              <option value="0">Selecione um item</option>
              {listProducts &&
                listProducts.length > 0 &&
                listProducts.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Select>

            {/* Campo para inserir a quantidade */}
            <Input
              placeholder="Quantidade"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            {/* Botão para cadastrar a nova saída de estoque */}
            <Button w="40" onClick={handleNewOutput}>
              SALVAR
            </Button>
          </SimpleGrid>

          {/* Box para exibir a lista de saídas de estoque */}
          <Box overflowY="auto" height="80vh">
            {/* Tabela para exibir as saídas de estoque */}
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                    Qtd.
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listStockOutputs.map((item, i) => (
                  <Tr key={i}>
                    {/* Coluna com o nome do produto da saída de estoque */}
                    <Td color="gray.500">{getProductById(item.product_id)}</Td>
                    
                    {/* Coluna com a quantidade da saída de estoque */}
                    <Td color="gray.500">{item.amount}</Td>
                    
                    {/* Coluna com o botão para deletar a saída de estoque */}
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeOutput(item.id)}
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

// Exporta o componente StockOutputs como padrão
export default StockOutputs;
