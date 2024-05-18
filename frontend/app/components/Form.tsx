"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { EmployeeModel } from "../types/types";
import { FormEvent, useState } from "react";

interface FormProps {
  onSubmit: (formData: EmployeeModel) => Promise<void>;
  initialState?: {
    name?: string;
    title?: string;
    department?: string;
  };
  loadingSubmit: boolean;
}

const INITIAL_STATE = {
  name: "",
  title: "",
  department: "",
};

export default function Form({
  onSubmit,
  initialState = INITIAL_STATE,
  loadingSubmit,
}: FormProps) {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = (formValues: FormEvent<HTMLElement>) => {
    formValues.preventDefault();

    const { name, title, department } = formState;

    if (name && title && department) {
      onSubmit({
        department,
        name,
        title,
        startDate: new Date().toString(),
      });
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center" mt={8}>
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center" mb={4}>
          <Heading>
            {initialState.name ? "Editar funcionario" : "Criar funcionario"}
          </Heading>
        </Box>
        <form onSubmit={submitForm}>
          <FormControl isRequired mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              placeholder="Digite o nome do funcionario"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Cargo</FormLabel>
            <Input
              type="text"
              placeholder="Digite o cargo do funcionario"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Departamento</FormLabel>
            <Input
              type="text"
              placeholder="Digite o departamento do funcionario"
              name="department"
              value={formState.department}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button
            disabled={loadingSubmit}
            colorScheme="teal"
            type="submit"
            width={"full"}
          >
            {loadingSubmit ? "Salvando..." : "Salvar"}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
