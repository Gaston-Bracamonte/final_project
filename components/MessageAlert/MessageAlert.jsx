import React, { useState } from 'react';
import ReactDOM from 'react-dom'


const Modal = ({ title, message }) => {
  return (
    <div className="modal-container">
      <div className="modal-titulo">
        <p>{title}</p>
      </div>
      <div className="modal-contenido">
        {message}
      </div>
      <div className="modal-pie">
        <button className="boton-aceptar">Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;