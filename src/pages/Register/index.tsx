import CenterLayout from "../../layouts/CenterLayout";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RegisterHeader } from "./components/RegisterHeader";
import { createUser } from "../../firebase/auth/auth";

const Register = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
      pass2: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  const onSubmit = async (values) => {
    if (values.pass !== values.pass2) {
      onOpen();
    }
    await createUser({ email: values.email, password: values.pass2 });
    formik.resetForm();
    navigate("/");
  };

  return (
    <CenterLayout>
      <RegisterHeader isOpen={isOpen} onClose={onClose} />
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input
            id="email"
            name="email"
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
            name="pass"
            type="password"
            value={formik.values.pass}
            onChange={formik.handleChange}
          />
          {formik.initialValues.pass === "" && (
            <FormErrorMessage>Contraseña es requerido</FormErrorMessage>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Confirma tu contraseña</FormLabel>
          <Input
            id="pass2"
            name="pass2"
            type="password"
            value={formik.values.pass2}
            onChange={formik.handleChange}
          />
          {formik.initialValues.pass2 === "" && (
            <FormErrorMessage>Contraseña es requerido</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" width="full" mt={4}>
          Crear
        </Button>
        <Button
          colorScheme="purple"
          width="full"
          mt={4}
          onClick={() => navigate("/")}
        >
          Regresar
        </Button>
      </form>
    </CenterLayout>
  );
};

export default Register;
