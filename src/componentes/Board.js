import React from 'react'
import Card from './Card'

export default function Board(props) {
   
    return (
        <div className="Board">
            {
                props.baraja.map((card,index)=>{
                    const estaSiendoComparada = props.parejaSeleccionada.indexOf(card)>=-1;
                    return <Card key={index} icono={card.icono} estaSiendoComparada={estaSiendoComparada} selecionarCarta={()=>props.selecionarCarta(card)} fueAdivinada={card.fueAdivinada} />
                }
                )
            }
        </div>
    )
}
