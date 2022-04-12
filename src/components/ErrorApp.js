import { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");

  return (
    <div>
      <h2>Error App</h2>
      <button onClick={() => setError("Error al traer con la API")}>
        Error
      </button>
      <button onClick={() => setError("Credenciales incorrectas")}>
        Another Error
      </button>
      <button onClick={() => setError("")}>Proceso exitoso</button>
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ErrorApp;
