import React from "react";
import "./Form.css";

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="name" name="nombre" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su nombre" />
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="lastname" name="apellido" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su apellido" />
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="number" id="phone" name="telefono" pattern="[0-9]+" required placeholder="Ingrese su teléfono" />
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" id="mail" name="email" required placeholder="Ingrese su correo electrónico" />
                    <label htmlFor="mensaje">Detalle del Mensaje:</label>
                    <textarea id="message" name="mensaje" rows="4" required placeholder="Ej: quiero saber más sobre Villa Carlos Paz"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
};

export default Form