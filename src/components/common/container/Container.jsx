import React from "react";
import Form from "../form/Form";

const Container = () => {
  return (
    <div className="bg-secondary container-md d-flex flex-column align-items-center py-40 h-90 border-primary rounded">
      <h1 className="m-5">Completa los datos solicitados</h1>
      <Form />
    </div>
  );
};

export default Container;
