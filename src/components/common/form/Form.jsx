import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { fetchData } from "../../../services/fetchData";
import { urlData } from "../../../services/urlData";
import { cotizador } from "../../../utils/cotizador.util";
import validateForm from "../../../validations/validateForm";
import { GrSchedules } from "react-icons/gr";
import Swal from "sweetalert2";

const INITIAL_STATE = {
  tipo: "",
  ubicacion: "",
  metros: "20",
};

let history = JSON.parse(localStorage.getItem("history")) || [];

const Form = () => {
  const [data, setData] = useState([]);
  const [precio, setPrecio] = useState(0);
  const [historial, setHistorial] = useState(history);
  const [hidde, setHidde] = useState(false);

  const { values, error, handleChange, handleSubmit } = useForm(
    INITIAL_STATE,
    validateForm,
    submitForm
  );

  const { tipo, ubicacion, metros } = values;

  function submitForm() {
    setPrecio(cotizador(metros, tipo, ubicacion));
    setHidde(true);
  }

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historial));
  }, [historial]);

  useEffect(() => {
    const result = async () => {
      const data = await fetchData(urlData());
      setData(data);
    };
    result();
  }, []);

  const propiedad = data.filter((item) => item.categoria === "propiedad");
  const filter = data.filter((item) => item.categoria === "ubicacion");

  const handleHistory = () => {
    const newData = {
      ...values,
      precio: precio,
      fecha: Date.now(),
    };

    setHistorial((prev) => [...prev, newData]);

    Swal.fire({
      title: "Agregado al historial exitosamente!",
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <form
      className="w-50 d-flex flex-column justify-content-center align-items-center"
      onSubmit={handleSubmit}
    >
      <div className="w-50 mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Selecciona el tipo de propiedad
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="tipo"
          value={tipo}
          onChange={handleChange}
        >
          {propiedad.map((option) => (
            <option key={option.tipo} value={option.factor}>
              {option.tipo}
            </option>
          ))}
          )
        </select>
      </div>
      {error.tipo && <p className="alert alert-danger">{error.tipo}</p>}
      <div className="w-50 mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Selecciona su ubicacion
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="ubicacion"
          value={ubicacion}
          defaultChecked=""
          onChange={handleChange}
        >
          {filter.map((option) => (
            <option key={option.tipo} value={option.factor}>
              {option.tipo}
            </option>
          ))}
        </select>
      </div>
      {error.ubicacion && (
        <p className="alert alert-danger">{error.ubicacion}</p>
      )}
      <div className="w-50 mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Ingresa los metros cuadrados
        </label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
          value={metros}
          name="metros"
          onChange={handleChange}
        />
      </div>
      {error.metros && <p className="alert alert-danger">{error.metros}</p>}
      <button className="btn btn-outline-primary px-4 py-2">Cotizar</button>

      <h1 className="d-inline-block text-uppercase text-nowrap mt-5 text-primary">
        Precio estimado: ${precio}
      </h1>
      {hidde && (
        <button
          type="submit"
          style={{ fontSize: "30px" }}
          className="btn btn-primary waves-effect px-3 m-2"
          onClick={handleHistory}
        >
          <GrSchedules />
        </button>
      )}
    </form>
  );
};

export default Form;
