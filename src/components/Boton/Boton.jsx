import estilos from "./Boton.module.css";

export default function Boton({children, variante = "primario", activo = false, type = "button", className = "", ...props}) {
    const clases = [ estilos.boton, estilos[variante], activo ? estilos.activo : "", className ]
    .filter(Boolean)
    .join(" ");

    return (
        <button type={type} className={clases} {...props}>
        {children}
        </button>
    );
}