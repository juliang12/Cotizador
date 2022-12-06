import React from "react";
import { Container } from "../../components/common/container";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-1 bg-info">
      <div className="d-flex align-items-center justify-content-around">
        <h1 className="text-secondary m-5">Seguros del hogar</h1>
        <Link to={"/history"}>
          <div style={{ fontSize: "40px" }} className="btn btn-primary">
            <AiOutlineSchedule />
          </div>
        </Link>
      </div>

      <Container />
    </div>
  );
};

export default HomePage;
