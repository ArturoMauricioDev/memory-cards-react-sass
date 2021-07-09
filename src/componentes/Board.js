import React from 'react'
import Card from './Card'

export default function Board(props) {
   
    return (
        <div className="Board">
            {
                props.baraja.map((card)=><Card icono={card.icono} /> )
            }
        </div>
    )
}
