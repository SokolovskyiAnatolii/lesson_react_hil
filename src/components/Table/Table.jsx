import React, { useState, useEffect } from "react";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableMUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Checkbox from "@mui/material/Checkbox";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import "./style.sass";

export default function Table({ color, listName }) {
  const [list, setList] = useState([]);

  const hendleItemDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/${listName}/${id}`, {
        method: `DELETE`,
      });
      setList(list.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      let request = await fetch(
          `https://jsonplaceholder.typicode.com/${listName}/${item.id}`,
          {
            method: `PATCH`,
            body: JSON.stringify({ completed: !item.completed }),
            headers: {
              "Content-type": "application/json",
            },
          }
        ),
        response = await request.json();

      setList(
        list.map((el) => {
          if (el.id === item.id) el = response;
          return el;
        })
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      let request = await fetch(
          `https://jsonplaceholder.typicode.com/${listName}`
        ),
        response = await request.json();
      setList(response.slice(0, 10));
    })();
  }, []);

  return Array.isArray(list) && list.length ? (
    <TableContainer component={Paper}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Checkbox
                  defaultChecked={item.completed}
                  onChange={() => handleItemCompleted(item)}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => hendleItemDelete(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  ) : null;
}
