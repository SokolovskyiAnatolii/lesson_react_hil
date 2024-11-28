import React from "react";

import Table from "./components/Table/Table";

import { todos } from "./data/mockData";

export default function App() {
  return (
    <div className="App">
      <Table color="white" list={todos} />
    </div>
  );
}
