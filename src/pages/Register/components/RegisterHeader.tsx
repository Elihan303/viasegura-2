import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
  Heading,
  Text,
} from "@chakra-ui/react";
import { VARIANT_COLOR } from "../../../constants";

interface IRegisterHeader {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterHeader = ({ isOpen, onClose }: IRegisterHeader) => {
  return (
    <>
      {" "}
      <Box textAlign="center">
        <Heading>Registro</Heading>
        <Text color={`${VARIANT_COLOR}.500`}>VIASEGURA</Text>
      </Box>
      <Box my={8} textAlign="left">
        {isOpen && (
          <Alert status="error">
            <AlertIcon />
            Las contraseñas no coinciden. Por favor, inténtalo de nuevo.
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        )}
      </Box>
    </>
  );
};
