import React from "react";
import "./Form.css";

const Form = () => {
    return(
        <div className="form">
            <div>
                <h2>Formulario de Contacto</h2>
                <form action="procesar_formulario.php" method="post">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required />
                    <br /><br />
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required />
                    <br /><br />
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" pattern="[0-9]+" required />
                    <br /><br />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                    <br /><br />
                    <label htmlFor="mensaje">Detalle del Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                    <br /><br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
};
        
export default Form