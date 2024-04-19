import React, { useState } from 'react';
import "./Form.css";


const Form = () => {

    const [isSending, setIsSending] = useState(false);

    function clearField(field) {
        //Obtenemos el elemento por ID
        var setField = document.getElementById(field);
        console.log(setField);
        if (setField) {
            setField.classList.remove('waitingResponse');
            setField.classList.remove('responseOk');
            setField.disabled = false;
            if (field !== 'mail') {
                setField.classList.add('waitingResponse');
            }
            else 
            {
                setField.classList.add('responseOk');
            }
            if (field !== 'submit-button') {
                setField.value = "";
            }
        }
    }

    //Validamos si el correo ingresado ya está en nuestra base de datos
    const validation_mail = async (email) => {
        try {
            console.log(JSON.stringify({ email }))
            const response = await fetch('https://hook.us1.make.com/qbhml93pvt0byr1gia22qg9jo7ke2sfp', {
                method: 'POST',
                body: JSON.stringify({ email })
            });
            //Si recibimos respuesta, procedemos a la lógica dentro del formulario
            if (response.ok) {

                const responseData = await response.json(); // Parse response JSON

                //Validamos si recibimos un id en la respuesta
                if (responseData.id) {

                    // Seteamos los input con la información obtenida desde la base de datos
                    document.getElementById('firstname').value = responseData.firstname;
                    document.getElementById('lastname').value = responseData.lastname;
                    document.getElementById('phone').value = responseData.phone;
                    document.getElementById('userId').value = responseData.id;

                    //Evitamos que se pueda ingresar por tabulaciones
                    const form = document.getElementById('contactForm');
                    const elementosFormulario = form.querySelectorAll("input");
                    elementosFormulario.forEach(elemento => {
                        elemento.tabIndex = -1;
                        elemento.classList.add('waitingResponse');

                    });

                    // Habilitamos el elemento message y el botón para enviar el formulario
                    var waitingElements = document.querySelectorAll('.responseValidate');
                    waitingElements.forEach(function (element) {
                        element.classList.add('responseOk');
                        element.classList.remove('waitingResponse');
                    });

                }
                // Al no tener el mail en la base datos, habilitamos para completar todos los campos y el botón de enviar.
                else {
                    var waitingElements = document.querySelectorAll('.waitingResponse');
                    waitingElements.forEach(function (element) {
                        element.classList.add('responseOk');
                    });
                    //Volvemos los campos a su valor predeterminado por si hubo un mail antes
                    document.getElementById('firstname').value = "";
                    document.getElementById('lastname').value = "";
                    document.getElementById('phone').value = "";
                    document.getElementById('userId').value = "";

                    // Habilitamos nuevamente la tabulación en los elementos del formulario
                    const form = document.getElementById('contactForm');
                    const elementosFormulario = form.querySelectorAll("input, select, textarea, button");
                    elementosFormulario.forEach(elemento => {
                        elemento.tabIndex = 0;
                    });
                }

            } else {
                // Manejo de errores en el formulario
                console.error('Error sending form:', response.statusText);
            }
        } catch (error) {
            // Manejo de errores de conexión
            console.error('Error sending form:', error);
        } finally {
            setIsSending(false);
        }
    }

    //Enviamos la información del formulario a la API encargada de registrar el mensaje y la persona, si correspondiera
    const handleClickEnviar = async (event) => {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        form.style.pointerEvents = "none";
        const elementosFormulario = form.querySelectorAll("input, select, textarea, button");
        // Iterar sobre cada elemento y deshabilitarlo
        elementosFormulario.forEach(elemento => {
            elemento.disabled = true;
        });
        setIsSending(true);

        // Validamos si todos los campos requeridos están completos
        const email = formData.get('email');
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const phone = formData.get('phone');
        const message = formData.get('message');

        if (!email || !firstname || !lastname || !phone || !message) {
            //Mostramos la leyenda de que el mensaje ha sido enviado
            var labelMessage = document.getElementById('returnMessage');
            labelMessage.classList.add('sendMessage');
            labelMessage.classList.add('red');
            labelMessage.textContent = '¡No eres tú! ¡Somos nosotros que necesitamos que completes todos los datos para poderte ofrecer la mejor atención!';
            setIsSending(false); // Detener el estado de envío
            form.style.pointerEvents = "auto";
            elementosFormulario.forEach(elemento => {
                elemento.disabled = false;
            });
            return; // Salir de la función si falta algún campo
        }

        try {
            console.log(formData);
            const response = await fetch('https://hook.us1.make.com/usuarwm0x64aayvpfr4ueom9swyjn79s', {
                method: 'POST',
                body: formData
            });
            //Validamos que hayamos obtenido respuesta de la llamada de la API
            if (response.ok) {
                console.log(response);
                //Seteamos nuevamente los campos para que quede visible el placeholder
                clearField("mail");
                clearField("firstname");
                clearField("lastname");
                clearField("phone");
                clearField("message");
                clearField("submit-button");
                document.getElementById("userId").value = "";

                //Mostramos la leyenda de que el mensaje ha sido enviado
                var labelMessage = document.getElementById('returnMessage');
                labelMessage.classList.add('sendMessage');
                labelMessage.classList.add('green');
                labelMessage.textContent = '¡Mensaje enviado con éxito!';
                form.style.pointerEvents = "auto";
                elementosFormulario.forEach(elemento => {
                    elemento.disabled = false;
                });

                  // Habilitamos nuevamente la tabulación en los elementos del formulario
                  const form = document.getElementById('contactForm');
                  const elementosFormulario = form.querySelectorAll("input, select, textarea, button");
                  elementosFormulario.forEach(elemento => {
                      elemento.tabIndex = 0;
                  });


            } else {
                // Manejo de errores en el formulario
                console.error('Error sending form:', response.statusText);
            }
        } catch (error) {
            // Manejo de errores de conexión
            console.error('Error sending form:', error);
        } finally {
            setIsSending(false);
        }
    };

    // const elementoModal = document.getElementById('modal-root');

    return (
        <div>
            <label className="validationLabel" htmlFor="validation" id="returnMessage"></label>
            <div className="form-container">
                <div className="form-wrapper">
                    <form id="contactForm">
                        <input type="hidden" id="userId" value="" name="user_id" />
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="mail" name="email" required placeholder="Ingrese su correo electrónico" onBlur={(event) => validation_mail(event.target.value)} />
                        <label htmlFor="nombre">Nombre:</label>
                        <input className="waitingResponse" type="text" id="firstname" name="firstname" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su nombre" />
                        <label htmlFor="apellido">Apellido:</label>
                        <input className="waitingResponse" type="text" id="lastname" name="lastname" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required placeholder="Ingrese su apellido" />
                        <label htmlFor="telefono">Teléfono:</label>
                        <input className="waitingResponse" type="number" id="phone" name="phone" pattern="[0-9]+" required placeholder="Ingrese su teléfono" />
                        <label htmlFor="mensaje">Detalle del Mensaje:</label>
                        <textarea className="waitingResponse responseValidate" id="message" name="message" rows="4" required placeholder="Ej: quiero saber más sobre Villa Carlos Paz"></textarea>
                        <button onClick={handleClickEnviar} className="waitingResponse responseValidate" id="submit-button" disabled={isSending}>
                            {isSending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
