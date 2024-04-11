import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Form.css";
import MessageAlert from "../MessageAlert/MessageAlert.jsx";

const Form = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSending, setIsSending] = useState(false); // New state for sending

    const handleClickEnviar = async (event) => {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        setIsSending(true);

        try {
            console.log(formData);
            const response = await fetch('https://44.202.48.180:8000/api/person/leandro@perez.com', {
                method: 'GET'
                // body: formData,
            });

            if (response.ok) {
                console.log(response);
                console.log('we r hapy');
                setShowModal(true);
            } else {
                // Handle errors
                console.error('Error sending form:', response.statusText);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error sending form:', error);
        } finally {
            setIsSending(false);
        }
    };

    const elementoModal = document.getElementById('modal-root');

    return (
        <div>
            <div className="form-container">
                <div className="form-wrapper">
                <form id="contactForm">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="name" name="nombre" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su nombre" value="dsada" />
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="lastname" name="apellido" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su apellido" value="dtsadasdw" />
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="number" id="phone" name="telefono" pattern="[0-9]+" required placeholder="Ingrese su teléfono" value="123456" />
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="mail" name="email" required placeholder="Ingrese su correo electrónico" value="gaston@deam" />
                        <label htmlFor="mensaje">Detalle del Mensaje:</label>
                        <textarea id="message" name="mensaje" rows="4" required placeholder="Ej: quiero saber más sobre Villa Carlos Paz" value="dsadsa"></textarea>
                        <button onClick={handleClickEnviar} disabled={isSending}>
                            {isSending ? 'Enviando...' : 'Enviar'}
                        </button>
                        {showModal && ReactDOM.createPortal(<MessageAlert title="Mensaje" message="Su mensaje ha sido enviado" />, elementoModal)}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
