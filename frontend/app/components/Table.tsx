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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { EmployeeModel, SortConfig } from "../types/types";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import TableHead from "./TableHead";

interface TableProps {
  employees: EmployeeModel[];
  deleteEmployee: (id: string) => Promise<void>;
  loadingDelete: boolean;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;

  handleSort: (key: keyof EmployeeModel) => void;
  sortConfig: SortConfig;
}

export default function TableComponent({
  employees,
  deleteEmployee,
  loadingDelete,
  searchText,
  setSearchText,
  handleSort,
  sortConfig,
}: TableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const handleOpenModal = (id: string | undefined) => {
    setSelectedId(id);
    onOpen();
  };

  const removeEmployee = useCallback(async () => {
    if (selectedId) await deleteEmployee(selectedId);

    onClose();
  }, [deleteEmployee, onClose, selectedId]);

  return (
    <>
      <Box>
        <Input
          placeholder="Busque por nome, departamento, or cargo"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          mb={4}
        />
        <Table size="md">
          <Thead>
            <Tr>
              <TableHead
                label="Nome"
                sortKey="name"
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
              <TableHead
                label="Cargo"
                sortKey="title"
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
              <TableHead
                label="Departamento"
                sortKey="department"
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
              <TableHead
                label="Data de Admissão"
                sortKey="startDate"
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
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
                    <Button
                      colorScheme="blue"
                      type="submit"
                      as={Link}
                      href={`/editar/${employee._id}`}
                    >
                      Editar
                    </Button>
                    <Spacer />
                    <Button
                      isLoading={isOpen || loadingDelete}
                      colorScheme="red"
                      type="button"
                      onClick={() => handleOpenModal(employee._id)}
                    >
                      Apagar
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnEsc>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Confirmação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem certeza que deseja remover este funcionario? (Isto não pode ser
            desfeito)
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loadingDelete}
              colorScheme="red"
              mr={3}
              onClick={removeEmployee}
            >
              Sim
            </Button>
            <Button
              isDisabled={loadingDelete}
              variant="ghost"
              onClick={onClose}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
