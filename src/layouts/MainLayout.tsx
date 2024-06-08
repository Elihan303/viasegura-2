import { Flex } from "@chakra-ui/react";

import { Navbar } from "../components/Navbar";
import ToggleColorMode from "../components/ToggleTheme.tsx";

export const MainLayout = ({ children, isGenericTable = false }) => {
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

      {isGenericTable ? (
        <Flex
          w={["100%", "100%", "60%", "60%", "100%"]}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          {children}
        </Flex>
      ) : (
        <>{children}</>
      )}
    </Flex>
  );
};
