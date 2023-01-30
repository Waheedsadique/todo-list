"use client";
import React, { useState } from "react";

import {
  Button,
  List,
  ListItem,
  CloseButton,
  Flex,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  HStack,
  Grid,
  Checkbox,
  Heading,
  Divider,
  Stack,
  Box,
  
} from "@chakra-ui/react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Namaz", "Quran",]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box
      h={{ base: "auto", md: "auto" }}
      py={[0, 10, 20]}
      alignItems="center"
      maxW={"100vh"}
      margin='auto'
      bgGradient="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,7,144,1) 58%)"
      boxShadow="dark-lg"
    >

      <VStack
        w="auto"
        h="auto"
        p={2}
        spacing={10}

      >
        <Heading as="i" bgGradient="linear-gradient(90deg, rgba(136,168,206,1) 16%, rgba(96,58,75,1) 66%)"> <marquee >Hey! Enter Your Todo_List </marquee></Heading>
        
        <SimpleGrid columns={1} rowGap={10}>
          <form onSubmit={handleSubmit}>
            <HStack spacing={"24px"}>
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                focusBorderColor="white"
                placeholder="Add Todo_List"
                color={"white"}
                _placeholder={{ color: "white" }}
              />

              <Button
                type="submit"
                _hover={{
                  bg: "linear(to-r, red.500, yellow.500)",
                }}
              >
                Add
              </Button>
            </HStack>
          </form>

          <GridItem colSpan={1}>
            <List>
              {todos.map((todo, index) => (
                <Stack key={index}>
                  <HStack spacing={"auto"}>
                    <Checkbox spacing={"24px"} colorScheme="orange">
                      <ListItem textColor={"white"} fontSize="large">{todo}</ListItem>
                    </Checkbox>
                    <CloseButton onClick={() => handleDelete(index)} />
                  </HStack>
                  <Divider orientation="horizontal" />
                </Stack>
              ))}
            </List>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default TodoList;