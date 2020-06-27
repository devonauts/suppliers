import React from 'react';
import './card.styles.scss';


const Card = (props) => (

    <div className= 'card-container'>
        <img src="https://www.kartyy.com/img/my-shop-logo-1571887939.jpg" height='50' width='100' alt="supplier"/>
        <h2>{props.supplier.name}</h2>
        <h3>Comisión: {props.supplier.comision}</h3>
        <h3>Membresía: {props.supplier.contractType}</h3>
        <h4>Agente asignado: {props.supplier.responsible}</h4>
        <h5>Teléfono: {props.supplier.telefono}</h5>
        <h5>Crédito:{props.supplier.credito}</h5>
    </div>

)
export default Card ;