import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar:
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("El Nombre debe ser mayor a 5 caracteres");
      return;
    }
    const incluye =
      userData.email.includes("@") && userData.email.includes(".com");
    if (!incluye) {
      setError(true);
      setErrorMessage("El Correo debe incluir @ y .com");
      return;
    }

    const passwordStr = userData.password.trim();
    const passwordIsValid = userData.password === passwordStr;

    if (!passwordIsValid || userData.password.length < 4) {
      setError(true);
      setErrorMessage("Contraseña debe tener 4 o más caracteres");
      return;
    }

    // Instruccion
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ingrese su correo electrónico"
          name="email"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ingrese su contraseña"
          name="password"
        />
        <button type="submit">Enviar</button>
      </form>

      <div>{error && <h1>{errorMessage}</h1>}</div>
    </div>
  );
};

export default Form;
