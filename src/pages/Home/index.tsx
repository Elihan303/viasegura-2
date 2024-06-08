import { Flex, Heading } from "@chakra-ui/react";
import ToggleColorMode from "../../components/ToggleTheme.tsx";
import { Navbar } from "../../components/Navbar/index.tsx";

const Home = () => {
  return (
    <>
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        <ToggleColorMode />
        {/* Menu lateral */}
        <Navbar />
        {/* Contenido principal */}
        <Flex
          w={["100%", "100%", "60%", "60%", "100%"]}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          <Heading>Bienvenido</Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
