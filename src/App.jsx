import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";

export default function App() {
  const [tema, setTema] = useState("claro");

  useEffect(() => { document.documentElement.setAttribute("data-tema", tema);}, [tema]);

  return (
    <main className="container py-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="m-0">Catálogo de Talleres</h1>

        <button className="btn btn-primary" onClick={() => setTema((t) => (t === "claro" ? "oscuro" : "claro"))}>
          {tema === "claro" ? "Tema oscuro" : "Tema claro"}
        </button>
      </header>

      <div className="row g-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <h2 className="h5">{taller.titulo}</h2>
              <p className="mb-0">{taller.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}