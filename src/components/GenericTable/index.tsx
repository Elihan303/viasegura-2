import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Button,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IGenericTableProps } from "./types";

export const GenericTable = <T extends { id: string }>({
  title,
  headers,
  fetchData,
  deleteItem,
  navigateToEdit,
  createButtonPath,
}: IGenericTableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const navigation = useNavigate();

  const getData = async () => {
    const result = await fetchData();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Heading>{title}</Heading>
      <Button
        colorScheme="whatsapp"
        marginY={3}
        onClick={() => navigation(createButtonPath)}
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
            {data.map((item) => {
              const { id, ...rest } = item;
              return (
                <Tr key={id}>
                  {Object.values(rest).map((value, idx) => (
                    <Td key={idx}>{value}</Td>
                  ))}
                  <Td>
                    <Button
                      colorScheme="yellow"
                      marginRight={3}
                      onClick={() => navigateToEdit(item)}
                    >
                      Editar
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={async () => {
                        await deleteItem(id);
                        getData();
                      }}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
