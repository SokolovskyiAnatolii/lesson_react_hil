import React from "react";

import Container from "@mui/material/Container";

import Table from "./components/Table/Table";

export default function App() {
  return (
    <Container>
      <Table color="white" listName="todos" />
    </Container>
  );
}
