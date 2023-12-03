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

// Define o componente StockEntries
const StockEntries = () => {
  // Estados para armazenar a quantidade, o ID do produto e as entradas de estoque
  const [amount, setAmount] = useState("");
  const [product_id, setProduct_id] = useState("0");
  const [listStockEntries, setStockEntries] = useState([]);
  
  // Estado para armazenar a lista de produtos disponíveis
  const [listProducts, setListProducts] = useState([]);

  // Efeito para carregar as entradas de estoque e a lista de produtos ao montar o componente
  useEffect(() => {
    // Carrega as entradas de estoque do localStorage
    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    // Atualiza o estado com as entradas de estoque
    setStockEntries(db_stock_entries);

    // Carrega a lista de produtos do localStorage
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    // Atualiza o estado com a lista de produtos
    setListProducts(db_products);
  }, []);

  // Função para cadastrar uma nova entrada de estoque
  const handleNewEntry = () => {
    // Verifica se a quantidade ou o produto não foram selecionados
    if (!amount || product_id === "0") {
      return alert("Selecione o produto e a quantidade!");
    }

    // Gera um ID único para a nova entrada
    const id = Math.random().toString(36).substring(2);

    // Adiciona a nova entrada à lista de entradas e atualiza o estado
    if (listStockEntries && listStockEntries.length) {
      localStorage.setItem(
        "db_stock_entries",
        JSON.stringify([...listStockEntries, { id, amount, product_id }])
      );

      setStockEntries([...listStockEntries, { id, amount, product_id }]);
    } else {
      localStorage.setItem(
        "db_stock_entries",
        JSON.stringify([{ id, amount, product_id }])
      );

      setStockEntries([{ id, amount, product_id }]);
    }

    // Limpa os campos de quantidade e produto
    setAmount("");
    setProduct_id("0");
  };

  // Função para remover uma entrada de estoque da lista
  const removeEntries = (id) => {
    // Filtra a lista de entradas para remover a entrada com o ID específico
    const newArray = listStockEntries.filter((item) => item.id !== id);

    // Atualiza o localStorage e o estado com a nova lista de entradas
    localStorage.setItem("db_stock_entries", JSON.stringify(newArray));
    setStockEntries(newArray);
  };

  // Função para obter o nome do produto com base no ID
  const getProductById = (id) => {
    return listProducts.filter((item) => item.id === id)[0]?.name;
  };

  // Retorna o JSX que representa a página de entradas de estoque
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

            {/* Botão para cadastrar a nova entrada de estoque */}
            <Button w="40" onClick={handleNewEntry}>
              SALVAR
            </Button>
          </SimpleGrid>

          {/* Box para exibir a lista de entradas de estoque */}
          <Box overflowY="auto" height="80vh">
            {/* Tabela para exibir as entradas de estoque */}
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
                {listStockEntries.map((item, i) => (
                  <Tr key={i}>
                    {/* Coluna com o nome do produto da entrada de estoque */}
                    <Td color="gray.500">{getProductById(item.product_id)}</Td>
                    
                    {/* Coluna com a quantidade da entrada de estoque */}
                    <Td color="gray.500">{item.amount}</Td>
                    
                    {/* Coluna com o botão para deletar a entrada de estoque */}
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeEntries(item.id)}
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

// Exporta o componente StockEntries como padrão
export default StockEntries;
