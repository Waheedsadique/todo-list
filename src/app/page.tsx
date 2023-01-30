
"use client";

import TodoList from "./todo/page";



import {
  Center,
  Container
} from "@chakra-ui/react";

export default function Home() {
  return (
  <Container maxW="container.xl" p ="10" alignItems={"center"}>
    <TodoList/>
    

  </Container>
  );
}