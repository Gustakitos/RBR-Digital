import { Table, Thead, Th, Tr, Td, Tbody, Tfoot, Box } from "@chakra-ui/react";
import { EmployeeModel } from "../types/types";

interface TableProps {
  employees: EmployeeModel[];
}

export default function TableComponent({ employees }: TableProps) {
  return (
    <Box overflowX="auto">
      <Table size="md">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Titulo</Th>
            <Th>Departamento</Th>
            <Th>Data de Inicio</Th>
            <Th>Modificar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee._id}>
              <Td>{employee.name}</Td>
              <Td>{employee.title}</Td>
              <Td>{employee.department}</Td>
              <Td>{employee.startDate}</Td>
              <Td>Editar | Apagar</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
