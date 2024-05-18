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
} from "@chakra-ui/react";
import { EmployeeModel } from "../types/types";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import useDeleteEmployee from "../hooks/useDeleteEmployee";
import { useCallback, useState } from "react";

interface TableProps {
  employees: EmployeeModel[];
  deleteEmployee: (id: string) => Promise<void>;
  loadingDelete: boolean;
}

export default function TableComponent({ employees, deleteEmployee, loadingDelete }: TableProps) {
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
            <Button isDisabled={loadingDelete} variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
