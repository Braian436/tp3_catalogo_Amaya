import { useState } from "react";
import Boton from "../Boton/Boton";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller, enLista = false }) {
    const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
    const [abierta, setAbierta] = useState(false);

    const libres = cupo - inscriptos;
    const porcentaje = Math.round((inscriptos / cupo) * 100);

    let claseCupo = estilos.disponible;
    if (libres === 0) claseCupo = estilos.completo;
    else if (libres <= 3) claseCupo = estilos.pocos;

    const clases = [
        estilos.tarjeta,
        claseCupo,
        abierta ? estilos.expandida : "",
        enLista ? estilos.horizontal : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <article className={clases}>
        {nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}

        <h2 className={estilos.titulo}>{titulo}</h2>
        <p className={estilos.categoria}>{categoria}</p>

        <p className={estilos.cupos}>
            Cupos libres: {libres} de {cupo}
            {libres === 0 && " — Completo"}
        </p>

        {/* Único style en línea del proyecto */}
        <div className={estilos.barra}>
            <div
            className={estilos.relleno}
            style={{ width: `${porcentaje}%` }}
            />
        </div>
        <small className={estilos.porcentaje}>{porcentaje}% ocupado</small>

        {abierta && <p className={estilos.descripcion}>{descripcion}</p>}

        <Boton
            variante="secundario"
            activo={abierta}
            className={estilos.botonDetalles}
            onClick={() => setAbierta((v) => !v)}
        >
            {abierta ? "Ocultar detalles" : "Ver detalles"}
        </Boton>
        </article>
    );
}