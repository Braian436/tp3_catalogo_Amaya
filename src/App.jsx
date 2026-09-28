import { useState, useEffect } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import Boton from "./components/Boton/Boton";

export default function App() {
  const [tema, setTema] = useState("claro");
  const [vista, setVista] = useState("grilla");
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {document.documentElement.setAttribute("data-tema", tema);}, [tema]);

  // Bootstrap condicional según la vista
  const claseColumna =
    vista === "grilla" ? "col-12 col-md-6 col-lg-4" : "col-12";

  return (
    <main className={`container ${ compacto ? "py-2" : "py-5"}`}>
      <header className={`d-flex flex-wrap justify-content-between align-items-center gap-3 ${ compacto ? "mb-3" : "mb-5" }`}>
        <h1 className="m-0">Catálogo de Talleres</h1>

        <div className="d-flex flex-wrap gap-2">
          <Boton variante="secundario" activo={vista === "grilla"} onClick={() => setVista("grilla")}>
            Grilla
          </Boton>

          <Boton variante="secundario" activo={vista === "lista"} onClick={() => setVista("lista")}>
            Lista
          </Boton>

          <Boton variante="secundario" activo={compacto} onClick={() => setCompacto((v) => !v)}>
            {compacto ? "Modo normal" : "Modo compacto"}
          </Boton>

          <Boton
            onClick={() =>
              setTema((t) => (t === "claro" ? "oscuro" : "claro"))
            }
          >
            {tema === "claro" ? "Tema oscuro" : "Tema claro"}
          </Boton>
        </div>
      </header>

      {/* Bootstrap condicional en el espaciado de la grilla */}
      <div className={`row ${compacto ? "g-2" : "g-4"}`}>
        {talleres.map((taller) => (
          <div key={taller.id} className={claseColumna}>
            <TarjetaTaller taller={taller} enLista={vista === "lista"} />
          </div>
        ))}
      </div>
    </main>
  );
}