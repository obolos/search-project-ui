import React from 'react';
import './card.styles.component.css';

export const Card = props => (
    <div className="card-container">
        <h1>{props.book.name}</h1>
        <img src="https://via.placeholder.com/150" />        
        <h4>{props.book.author}</h4>
        <p>{props.book.published}</p>
    </div>
)