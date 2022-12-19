import React, { useState } from "react";

const HistoryTableRow = () => {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );

  return (
    <>
      {history?.map((item) => (
        <tr key={item.ubicacion}>
          <td>{new Date(item.fecha).toLocaleString()}</td>
          <td>{item.propiedad}</td>
          <td>{item.ubicacion}</td>
          <td>{item.metros}</td>
          <td>{item.precio}</td>
        </tr>
      ))}
    </>
  );
};

export default HistoryTableRow;
