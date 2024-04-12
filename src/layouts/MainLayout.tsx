import { Flex } from "@chakra-ui/react";

import { Navbar } from "../components/Navbar";
import ToggleColorMode from "../components/ToggleTheme.tsx";

export const MainLayout = ({ children }) => {
  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      <ToggleColorMode />
      {/* Menu lateral */}
      <Navbar />

      {children}
    </Flex>
  );
};
