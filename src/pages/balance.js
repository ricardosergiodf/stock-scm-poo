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

// Define o componente Balance
const Balance = () => {
  // Estado para armazenar a lista de produtos
  const [listProducts, setListProducts] = useState([]);
  
  // Estado para armazenar o produto filtrado
  const [productFiltered, setProductFiltered] = useState("");
  
  // Estado para armazenar a lista de produtos para o filtro
  const [cmbProducts, setCmbProducts] = useState([]);

  // Função para construir a lista de balanço a partir dos dados de entradas e saídas
  const BuildBalanceArray = () => {
    // Recupera os dados de saídas do localStorage
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    // Recupera os dados de entradas do localStorage
    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    // Recupera os dados dos produtos do localStorage
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    // Array para armazenar o novo balanço
    const newArray = [];

    // Para cada produto, calcula o total de entradas e saídas
    db_products.map((prod) => {
      const entries = db_stock_entries
        .filter((item) => item.product_id === prod.id)
        .map((entry) => Number(entry.amount))
        .reduce((acc, cur) => acc + cur, 0);

      const outputs = db_stock_outputs
        .filter((item) => item.product_id === prod.id)
        .map((entry) => Number(entry.amount))
        .reduce((acc, cur) => acc + cur, 0);

      // Calcula o saldo total
      const total = Number(entries) - Number(outputs);

      // Adiciona o produto ao novo array de balanço
      newArray.push({
        product_id: prod.id,
        product_name: prod.name,
        amount: total,
      });

      // Atualiza os estados com os novos dados
      setListProducts(newArray);
      setCmbProducts(newArray);
    });
  };

  // Efeito para construir a lista de balanço ao montar o componente
  useEffect(() => {
    BuildBalanceArray();
  }, []);

  // Função para lidar com o filtro de produtos
  const handleFilterProducts = () => {
    if (!productFiltered) {
      // Se nenhum produto for selecionado, exibe a lista completa
      setListProducts(cmbProducts);
      return;
    }

    // Filtra a lista de produtos com base no produto selecionado
    const newArray = cmbProducts.filter(
      (item) => item.product_id === productFiltered
    );

    // Atualiza o estado da lista de produtos
    setListProducts(newArray);
  };

  // Retorna o JSX que representa a página de saldo
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
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6" my="6">
            {/* Dropdown para selecionar um produto */}
            <Select
              bg="#fff"
              value={productFiltered}
              onChange={(e) => setProductFiltered(e.target.value)}
            >
              <option value="">Selecione um item</option>
              {cmbProducts &&
                cmbProducts.length > 0 &&
                cmbProducts.map((item, i) => (
                  <option key={i} value={item.product_id}>
                    {item.product_name}
                  </option>
                ))}
            </Select>

            {/* Botão para acionar o filtro de produtos */}
            <Button w="40" onClick={handleFilterProducts}>
              FILTRAR
            </Button>
          </SimpleGrid>

          {/* Tabela para exibir o balanço dos produtos */}
          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                    Qtd.
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.500">{item.product_name}</Td>
                    <Td color="gray.500">{item.amount}</Td>
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

// Exporta o componente Balance como padrão
export default Balance;
