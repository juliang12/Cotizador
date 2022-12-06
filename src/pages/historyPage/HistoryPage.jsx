import React from "react";
import { useNavigate } from "react-router-dom";
import History from "../../components/common/history/History";

const HistoryPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-1 bg-info">
      <h1 className="text-secondary m-5">Historial</h1>
      <button className="btn btn-dark m-2" onClick={goBack}>
        Volver
      </button>
      <History />
    </div>
  );
};

export default HistoryPage;
