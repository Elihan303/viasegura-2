import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { saveAccident, updateAccident } from "../../firebase/db";
import { useLocation, useNavigate } from "react-router";
import { MainLayout } from "../../layouts/MainLayout.tsx";

export const Accident = () => {
  const location = useLocation();
  const accidente = location.state?.accidente;
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      Fecha: new Date(),
      Lugar: accidente ? accidente.Lugar : "",
      PlacaVehiculo1: accidente ? accidente.PlacaVehiculo1 : "",
      PlacaVehiculo2: accidente ? accidente.PlacaVehiculo2 : "",
      TipoAccidente: accidente ? accidente.TipoAccidente : "",
      Descripcion: accidente ? accidente.Descripcion : "",
    },
    onSubmit: async (values) => {
      if (values) {
        if (accidente) {
          await updateAccident(accidente.Id, values);
          formik.resetForm();
          navigation("/inicio");
          return;
        }
        await saveAccident(values);
        formik.resetForm();
        navigation("/inicio");
      }
    },
  });
  return (
    <>
      <MainLayout>
        <Flex
          w={["100%", "100%", "60%", "60%", "100%"]}
          p="3%"
          justifyContent={"center"}
          alignItems={"center"}
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          <Box
            borderWidth={1}
            px={4}
            width="full"
            maxWidth="500px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
            padding={4}
          >
            <Heading marginBottom={3}>
              {accidente ? "Edita un accidente " : "Registra un accidente"}
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              {/* Lugar */}
              <FormControl>
                <FormLabel>Lugar</FormLabel>
                <Input
                  id="Lugar"
                  name="Lugar"
                  value={formik.values.Lugar}
                  onChange={formik.handleChange}
                />
              </FormControl>
              {/* PlacaVehiculo1 */}
              <FormControl mt={4}>
                <FormLabel>Placa Vehiculo 1</FormLabel>
                <Input
                  id="PlacaVehiculo1"
                  name="PlacaVehiculo1"
                  value={formik.values.PlacaVehiculo1}
                  onChange={formik.handleChange}
                />
              </FormControl>
              {/* PlacaVehiculo2 */}
              <FormControl mt={4}>
                <FormLabel>Placa Vehiculo 2</FormLabel>
                <Input
                  id="PlacaVehiculo2"
                  name="PlacaVehiculo2"
                  value={formik.values.PlacaVehiculo2}
                  onChange={formik.handleChange}
                />
              </FormControl>
              {/* TipoAccidente */}
              <FormControl mt={4}>
                <FormLabel>Tipo de accidente</FormLabel>
                <Input
                  id="TipoAccidente"
                  name="TipoAccidente"
                  value={formik.values.TipoAccidente}
                  onChange={formik.handleChange}
                />
              </FormControl>
              {/* Descripcion*/}
              <FormControl mt={4}>
                <FormLabel>Descripcion</FormLabel>
                <Textarea
                  id="Descripcion"
                  name="Descripcion"
                  value={formik.values.Descripcion}
                  onChange={formik.handleChange}
                />
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" mt={4}>
                Registrar
              </Button>
            </form>
            <Button
              type="submit"
              colorScheme="red"
              width="full"
              mt={4}
              onClick={() => navigation("/inicio")}
            >
              Atras
            </Button>
          </Box>
        </Flex>
      </MainLayout>
    </>
  );
};
