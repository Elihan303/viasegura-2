import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { VARIANT_COLOR } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { signUser } from "../../../firebase/auth/auth";

export const LoginForm = () => {
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    onSubmit: async (values) => {
      if (!values.email && !values.pass) {
        console.log("Campos vacios");
        return;
      }
      const user = await signUser({
        email: values.email,
        password: values.pass,
      });
      formik.resetForm();
      if (user) {
        navigation("/home", { state: { email: user.email } });
      }
    },
  });
  return (
    <Box my={8} textAlign="left">
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <FormErrorMessage>Correo electronico es requerido</FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            id="pass"
            type="password"
            value={formik.values.pass}
            onChange={formik.handleChange}
          />
          {formik.initialValues.pass === "" && (
            <FormErrorMessage>Contraseña es requerido</FormErrorMessage>
          )}
        </FormControl>

        <Stack justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Recuerdame</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Olvidaste tu contraseña?</Link>
          </Box>
        </Stack>

        <Button type="submit" width="full" mt={4}>
          Inicia sesion
        </Button>
        <Button
          colorScheme="purple"
          width="full"
          mt={4}
          onClick={() => navigation("/register")}
        >
          Registrate
        </Button>
      </form>
    </Box>
  );
};
