import React, { useState } from "react";
import "./style.sass";

export default function Table(props) {
  const [list, setList] = useState(props.list);

  console.log(list);

  const hendleItemDelete = (id) => {
    list = list.filter((item) => item.id !== id);
    console.log(list);
  };

  return Array.isArray(props.list) ? (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{String(item.completed)}</td>
            <td>
              <button onClick={() => hendleItemDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}
