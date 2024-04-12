import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { deleteAccident, getAccidents } from "../../../firebase/db";
import { IAccidentes } from "../../../firebase/db/types";
import { useNavigate } from "react-router";

export const GenericTable = () => {
  const [accidentes, setAccidentes] = useState<IAccidentes[]>([]);
  const navigation = useNavigate();
  const headers = [
    "Fecha",
    "Lugar",
    "Placa vehiculo 1",
    "Placa vehiculo 2",
    "Tipo de accidentes",
    "Descripcion",
    "Acciones",
  ];

  const getData = async () => {
    const result = await getAccidents();
    setAccidentes(result);
  };
  const deleteDoc = (Id: string) => {
    deleteAccident(Id);
    getData();
  };

  const makeDate = (date) => {
    const milisegundos =
      date.seconds * 1000 + Math.round(date.nanoseconds / 1000000);
    const fecha = new Date(milisegundos);
    return fecha.toLocaleDateString();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Heading>Accidentes</Heading>
      <Button
        colorScheme="whatsapp"
        marginY={3}
        onClick={() => navigation("/accidente")}
      >
        Crear
      </Button>
      <TableContainer>
        <Table variant="striped" colorScheme="teal.200">
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {accidentes.map((accidente) => (
              <Tr key={accidente.Id}>
                <Td>{makeDate(accidente.Fecha)}</Td>
                <Td>{accidente.Lugar}</Td>
                <Td>{accidente.PlacaVehiculo1}</Td>
                <Td>{accidente.PlacaVehiculo2}</Td>
                <Td>{accidente.TipoAccidente}</Td>
                <Td>{accidente.Descripcion}</Td>
                <Td>
                  <Button
                    colorScheme="yellow"
                    marginRight={3}
                    onClick={() => {
                      navigation("/accidente", {
                        state: { accidente: accidente },
                      });
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => deleteDoc(accidente.Id)}
                  >
                    Eliminar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
