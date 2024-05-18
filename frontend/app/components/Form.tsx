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
}

export default function Form({ onSubmit }: FormProps) {
  const [formState, setFormState] = useState({
    name: "",
    title: "",
    department: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = (formValues: FormEvent<HTMLElement>) => {
    formValues.preventDefault();

    console.log('form data: ', formState);

    onSubmit({
      department: formState.department,
      name: formState.name,
      title: formState.title,
      startDate: new Date().toString()
    })
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
          <Heading>Criar funcionario</Heading>
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

          <Button colorScheme="teal" type="submit" width={"full"}>
            Criar
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
