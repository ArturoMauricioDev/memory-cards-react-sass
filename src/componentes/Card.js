import React from 'react';


export default function Card(props) {
    return (
        <div className="Card">
            <div className="Card-inner">
                <div className="Card-front"></div>
                <div className="Card-back">
                    <i className={`fa ${props.icono} fa-5x`} ></i>
                </div>
            </div>
        </div>
    )
}
