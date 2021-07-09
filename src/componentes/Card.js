import React from 'react';
import FlipCard from 'react-flipcard';

export default function Card(props) {
    return (
        <div className="Card">
            <FlipCard>
                <div className="portada"></div>
                <div className="contenido">
                    <i className={`fa ${props.icono} fa-5x`} ></i>
                </div>
            </FlipCard>
     
        </div>
    )
}
