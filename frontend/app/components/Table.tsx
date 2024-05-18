import {
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Box,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { EmployeeModel } from "../types/types";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface TableProps {
  employees: EmployeeModel[];
}

export default function TableComponent({ employees }: TableProps) {
  return (
    <Box>
      <Table size="md">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Cargo</Th>
            <Th>Departamento</Th>
            <Th>Data de Admissão</Th>
            <Th>Modificar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee._id}>
              <Td>{employee.name}</Td>
              <Td>{employee.title}</Td>
              <Td>{employee.department}</Td>
              <Td>
                {format(employee.startDate, "dd/MM/yyyy", {
                  locale: ptBR,
                })}
              </Td>
              <Td>
                <Flex width={"60%"}>
                  <Button colorScheme="blue" type="submit" as={Link} href={"/editar"}>
                    Editar
                  </Button>
                  <Spacer />
                  <Button colorScheme="red" type="submit">
                    Apagar
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
