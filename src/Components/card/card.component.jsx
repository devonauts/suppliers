import React from 'react';
import './card.styles.scss';

const Card = (props) => (

    <div className= 'card-container' >
        
        <h1>{props.supplier.name}</h1>
        <p>Comisión: {props.supplier.comision}</p>
        <p>Membresía: {props.supplier.contractType}</p>
        <p>Agente asignado: {props.supplier.responsible}</p>
        <p>Teléfono: {props.supplier.telefono}</p>
        <p>Crédito:{props.supplier.credito}</p>
    </div>

)
export default Card ;