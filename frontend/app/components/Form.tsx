import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export default function Form() {
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
        <FormControl isRequired mb={4}>
          <FormLabel>Nome</FormLabel>
          <Input type="text" placeholder="Digite o nome do funcionario" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Cargo</FormLabel>
          <Input type="text" placeholder="Digite o cargo do funcionario" />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Departamento</FormLabel>
          <Input type="text" placeholder="Digite o departamento do funcionario" />
        </FormControl>

        <Button colorScheme="teal" type="submit" width={"full"}>
          Criar
        </Button>
      </Box>
    </Flex>
  );
}
