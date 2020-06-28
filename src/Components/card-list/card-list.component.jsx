import React from 'react';
import './card-list.styles.scss';

import Card from '../card/card.component.jsx';

const CardList = (props) => {
return (

<div className= "card-list">
{
    props.filtered.map( supplier => (
        <Card  key={supplier.key} supplier= {supplier}/>) )}
</div>
)
}
export default CardList;