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
  Image,
} from "@chakra-ui/react";

const TodoList = () => {
  const [todos, setTodos] = useState(["Namaz", "Quran"]);
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
      margin="auto"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      boxShadow="dark-lg"
    >
      <VStack w="auto" h="auto" p={2} spacing={10}>
        <Heading as="i"> Hey! Enter Your Todo_List </Heading>

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
                      <ListItem textColor={"white"} fontSize="large">
                        {todo}
                      </ListItem>
                    </Checkbox>
                    {/* <CloseButton onClick={() => handleDelete(index)} /> */}
                    <Stack>
                      <Image
                        onClick={() => handleDelete(index)}
                        
                        w={"80%"}
                        h={"80%"}
                        src="delete.png"
                      />
                    </Stack>
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
