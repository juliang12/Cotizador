import { HistoryTableRow } from "../historyTableRow";

const History = () => {
  return (
    <div className="container-md  d-flex flex-column justify-content-center align-items-center bg-secondary rounded py-40 h-90">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Fecha de cotizacion</th>
            <th>Propiedad</th>
            <th>Ubicacion</th>
            <th>Metros cuadrados</th>
            <th>Poliza mensual</th>
          </tr>
        </thead>
        <tbody className="animate__animated animate__bounce animate__faster">
          <HistoryTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default History;
