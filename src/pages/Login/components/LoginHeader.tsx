import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { VARIANT_COLOR } from "../../../constants";

export const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Viasegura</Heading>
      <Text>
        <Link color={`${VARIANT_COLOR}.500`}>
          Comienza tu prueba de 14 días!
        </Link>
      </Text>
    </Box>
  );
};
