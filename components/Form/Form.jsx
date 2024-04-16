import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Form.css";
import MessageAlert from "../MessageAlert/MessageAlert.jsx";

const Form = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSending, setIsSending] = useState(false); // New state for sending

    //Validamos si el correo ingresado ya está en nuestra base de datos
    const validation_mail = async (email) => {
        try {
            console.log(JSON.stringify({ email }))
            const response = await fetch('https://hook.us1.make.com/qbhml93pvt0byr1gia22qg9jo7ke2sfp', {
                method: 'POST',
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                console.log(response);
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
    }

    //Enviamos la información del formulario a la API
    const handleClickEnviar = async (event) => {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        setIsSending(true);

        try {
            console.log(formData);
            const response = await fetch('https://hook.us1.make.com/usuarwm0x64aayvpfr4ueom9swyjn79s', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log(response);
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
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="mail" name="email" required placeholder="Ingrese su correo electrónico" onChange={(event) => validation_mail(event.target.value)}/>
                        <label htmlFor="nombre">Nombre:</label>
                        <input className="waitingResponse" type="text" id="firstname" name="firstname" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su nombre"/>
                        <label htmlFor="apellido">Apellido:</label>
                        <input className="waitingResponse" type="text" id="lastname" name="lastname" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su apellido"/>
                        <label htmlFor="telefono">Teléfono:</label>
                        <input className="waitingResponse" type="number" id="phone" name="phone" pattern="[0-9]+" required placeholder="Ingrese su teléfono"/>
                        <label htmlFor="mensaje">Detalle del Mensaje:</label>
                        <textarea className="waitingResponse" id="message" name="message" rows="4" required placeholder="Ej: quiero saber más sobre Villa Carlos Paz"></textarea>
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
