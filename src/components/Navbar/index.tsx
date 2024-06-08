import { Avatar, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { FiLogOut, FiUser, FiTruck, FiStopCircle } from "react-icons/fi";
import { signOutUser } from "../../firebase/auth/auth";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigation = useNavigate();
  const SignOutHome = () => {
    signOutUser();
    navigation("/");
  };
  return (
    <Flex
      w={["100%", "100%", "10%", "15%", "15%"]}
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex
        flexDir="column"
        h={[null, null, "100vh"]}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
          >
            Viasegura
          </Heading>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} marginTop={5}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
              >
                <Icon as={FiUser} fontSize="xl" className="active-icon" />
              </Flex>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text onClick={() => navigation("/usuarios")}>Usuarios</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} marginTop={5}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
              >
                <Icon as={FiTruck} fontSize="xl" className="active-icon" />
              </Flex>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text onClick={() => navigation("/autobuses")}>Autobuses</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} marginTop={5}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
              >
                <Icon as={FiLogOut} fontSize="xl" className="active-icon" />
              </Flex>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text onClick={() => navigation("/rutas")}>Rutas</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} marginTop={5}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
              >
                <Icon as={FiStopCircle} fontSize="xl" className="active-icon" />
              </Flex>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text onClick={() => navigation("/paradas")}>Paradas</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} marginTop={5}>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                marginRight={2}
              >
                <Icon as={FiLogOut} fontSize="xl" className="active-icon" />
              </Flex>
              <Link
                _hover={{ textDecor: "none" }}
                display={["flex", "flex", "none", "flex", "flex"]}
              >
                <Text onClick={() => SignOutHome()}>Cerrar sesion</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Avatar my={2} src="avatar-1.jpg" />
          <Text textAlign="center">User</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
