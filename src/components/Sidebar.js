// Importa os módulos necessários do Chakra UI e do React
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

// Importa o contexto SidebarContext e o componente SidebarNav
import { useSidebarContext } from "../contexts/SidebarContext";
import SidebarNav from "./SidebarNav";

// Define o componente Sidebar
const Sidebar = () => {
  // Obtém as propriedades isOpen (indicando se a barra lateral está aberta) e onClose (função para fechar a barra lateral) do contexto SidebarContext
  const { isOpen, onClose } = useSidebarContext();

  // Usa o hook useBreakpointValue para determinar se a barra lateral deve ser exibida como um Drawer (gaveta) com base no tamanho da tela
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  // Se a barra lateral deve ser um Drawer
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        {/* <DrawerOverlay> */}
        <DrawerContent onClick={() => onClose()}>
          <DrawerCloseButton />
          {/* <DrawerHeader /> */}
          {/* <DrawerBody> */}
          <SidebarNav />
          {/* </DrawerBody> */}
        </DrawerContent>
        {/* </DrawerOverlay> */}
      </Drawer>
    );
  }

  // Se a barra lateral não deve ser um Drawer
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};

// Exporta o componente Sidebar como padrão
export default Sidebar;
